import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { WebView  } from 'react-native-webview';
interface MyParams {
  params: { github_username: string };
  key: string;
  name: string;
}

const Profile: React.FC = () => {

  const { params } = useRoute<MyParams>();

  console.log('aqui', params.github_username);
  return (

    <WebView style={{ flex: 1}} source={{ uri: `https://github.com/${params.github_username}` }} />

  );
};

export default Profile;
