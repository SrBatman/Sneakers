import React from 'react';
import { View, Text, Button } from 'react-native';

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login vista</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default Login;