import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import { Img, Content, Name, Bio, Techs, Form, Input, Btn, TxtBtn } from './styles';

interface Coods {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

const Main: React.FC = () => {
    const natigation = useNavigation();
    const [currentRegion, setCurrentRegion] = useState<Coods>({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
    });

    useEffect(() => {
        async function LoadInitialPosition(){
            const { granted } = await requestPermissionsAsync();
            if(granted){
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
                const {  latitude, longitude } = coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }
        }
        LoadInitialPosition();
    }, []);

    if(currentRegion.latitude === 0) return null;
    return (
        <>
        <MapView initialRegion={currentRegion} style={{ flex: 1}}>
            <Marker coordinate={{ latitude: -28.2375853, longitude: -48.6749087 }}>
                <Img source={{ uri: 'https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg' }} />
                <Callout onPress={() => natigation.navigate('Profile', { github_username: 'Diego3g'})}>
                    <Content>
                        <Name>Antonio Fernandes</Name>
                        <Bio>Aqui uma frase um pouco maior</Bio>
                        <Techs>Php, Javascript, ReactJS</Techs>
                    </Content>
                </Callout>
            </Marker>
        </MapView>
        <Form>
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
            />
            <Btn onPress={() => {}}>
                <MaterialIcons name="my-location" size={20} color="#fff" />
            </Btn>
       </Form>
    </>
    );
}

export default Main;