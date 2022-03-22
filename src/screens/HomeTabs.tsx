import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Logout from './Logout';
import Create from './Create';


export default function HomeTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Create" component={Create} />
            <Tab.Screen name="Settings" component={Logout} />
        </Tab.Navigator>
    );
}
