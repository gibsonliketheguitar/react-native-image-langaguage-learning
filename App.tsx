import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SnackbarProvider } from 'notistack';

import { navigationRef } from './src/routes/RootNavigation';

import Auth from './src/screens/Auth';
import HomeTabs from './src/screens/HomeTabs';

import { listenToAuthAnd } from './firebase/userAuth';

const Stack = createNativeStackNavigator();


function App() {
  const [isSignedIn, setSignedIn] = useState<Boolean>(false)
  listenToAuthAnd(setSignedIn)

  return (
    <SnackbarProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          {!isSignedIn
            ? <Stack.Screen name="Auth" component={Auth} />
            : <Stack.Screen name="HomeTabs" component={HomeTabs} />
          }

        </Stack.Navigator>
      </NavigationContainer>
    </SnackbarProvider>
  );
}
//TODO https://reactnavigation.org/docs/auth-flow

export default App;