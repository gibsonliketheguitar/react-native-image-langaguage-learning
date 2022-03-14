import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from './src/screens/Auth';
import Home from './src/screens/Home';
import Logout from './src/screens/Logout';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Logout" component={Logout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;