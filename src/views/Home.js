import React from 'react';
import { View, Text, Button } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla principal</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
          <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

export default Home;