import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import { ActivityIndicator, Keyboard } from 'react-native';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import api from '../../services/api';

import {
  Img,
  Content,
  Name,
  Bio,
  Techs,
  Form,
  Input,
  Btn,
  Box,
  Info,
} from './styles';

interface Coods {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface Dev {
  _id: string;
  avatar_url: string;
  bio?: string;
  github_username: string;
  location: {
    coordinates: [string, string];
  };
  name: string;
  techs: [string];
}

const Main: React.FC = () => {
  const natigation = useNavigation();
  const [currentRegion, setCurrentRegion] = useState<Coods>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04,
  });
  const [data, setData] = useState<Dev[]>([]);
  const [loading, setLoading] = useState(false);
  const [techs, setTechs] = useState('');

  useEffect(() => {
    async function LoadInitialPosition(): Promise<void> {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        const { latitude, longitude } = coords;
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }
    LoadInitialPosition();
  }, []);

  const hanldleReagionChanged = useCallback((region: Coods) => {
    setCurrentRegion(region);
  }, []);

  const loadDevs = useCallback(async () => {
    const { latitude, longitude } = currentRegion;
    setLoading(true);
    if (techs) {
      const response = await api.get('/search', {
        params: { latitude, longitude, techs },
      });
      setData(response.data);
      Keyboard.dismiss();
    }
    setLoading(false);
  }, [currentRegion, techs]);

  if (currentRegion.latitude === 0) return null;
  return (
    <>
      <MapView
        initialRegion={currentRegion}
        style={{ flex: 1 }}
        onRegionChangeComplete={hanldleReagionChanged}
      >
        {data.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{
              latitude: parseFloat(dev.location.coordinates[1]),
              longitude: parseFloat(dev.location.coordinates[0]),
            }}
          >
            <Img source={{ uri: dev.avatar_url }} />
            <Callout
              onPress={() =>
                natigation.navigate('Profile', {
                  github_username: dev.github_username,
                })
              }
            >
              <Content>
                <Name>{dev.name}</Name>
                {dev.bio && <Bio>dev.bio</Bio>}
                <Techs>{dev.techs.join(', ')}</Techs>
              </Content>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Form>
        <Box>
          <Input
            placeholder="Busca devs por techs..."
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            style={{
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowOffset: {
                width: 4,
                height: 4,
              },
              elevation: 6,
            }}
            value={techs}
            onChangeText={setTechs}
          />
          <Btn onPress={loadDevs}>
            {loading ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <MaterialIcons name="my-location" size={20} color="#fff" />
            )}
          </Btn>
        </Box>
        {data.length > 0 && (
          <Info>
            {`${data.length} dev${data.length > 1 ? 's' : ''} localizado${
              data.length > 1 ? 's' : ''
            }`}
          </Info>
        )}
      </Form>
    </>
  );
};

export default Main;
