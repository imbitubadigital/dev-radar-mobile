import React from 'react';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

interface MyParams {
  params: { github_username: string };
  key: string;
  name: string;
}

const Profile: React.FC = () => {
  const { params } = useRoute<MyParams>();

  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://github.com/${params.github_username}` }}
    />
  );
};

export default Profile;
