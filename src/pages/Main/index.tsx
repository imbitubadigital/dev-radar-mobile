import React from 'react';
import { View, Text, Image } from 'react-native';
import { WebView } from 'react-native-webview';

const Main: React.FC = () => {
    return (
        <View style={{ flex: 1, padding: 20, marginTop: 40 }}>
            <Text style={{ color: 'red', fontSize: 25 }}>Titulo da Página 01</Text>
            <Image style={{ width: 150, height: 100}} source={{ uri: 'https://lirp-cdn.multiscreensite.com/79bbfd96/dms3rep/multi/opt/Sem-t%C3%ADtulo-1-373ce17d-640w.jpg'}}/>
          {/*   <WebView source={{ uri: 'https://www.fidelion.com.br' }} style={{ marginTop: 20, flex: 1 }} /> */}
            <Text style={{ color: 'red', fontSize: 25 }}>Rodapé</Text>
        </View>
    );
}

export default Main;