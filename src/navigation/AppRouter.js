import LoginPage from "../features/Login/LoginPage";
import { ROUTE } from "../shared/constants";
import WelcomePage from "../features/Welcome/WelcomePage";
import HomePage from "../features/Home/HomePage";
import PinPage from "../features/Pin/PinPage";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "../shared/context/ThemeContext";
import Menu1 from "../features/Home/Menu1";
import { useAuth } from "../shared/hook/UseAuth";
import { useEffect, useState } from "react";
import { View } from "react-native";

const Stack = createStackNavigator();
const AppRouter = () => {
    const theme = useTheme();
    const { isTokenExist } = useAuth();
    const [initialRoute, setInitialRoute] = useState(null);

    useEffect(() => {
        const onValidToken = async () => {
            try {
                const resp = await isTokenExist();
                console.log('token', resp);
                if (resp) {
                    setInitialRoute(ROUTE.MAIN);
                } else {
                    setInitialRoute(ROUTE.WELCOME);
                }
            } catch (e) {
                setInitialRoute(ROUTE.WELCOME);
            }
        }
        onValidToken();
    }, [])
    return initialRoute !== null ? (
        <Stack.Navigator initialRouteName={ROUTE.WELCOME}>
            <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name={ROUTE.LOGIN} component={LoginPage} />
                <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage} />
                <Stack.Screen name={ROUTE.MAIN} component={HomePage} />
                <Stack.Screen name={'Menu1'} component={Menu1} />
            </Stack.Group>
            <Stack.Group screenOptions={{
                headerStyle: {
                    backgroundColor: 'white'
                },
                headerShadowVisible: false,
                presentation: 'modal',

            }}>
                <Stack.Screen name={ROUTE.PIN} component={PinPage} options={{
                    headerTitle: '',
                    headerBackImage: () => <FontAwesome size={24} name={'chevron-left'} color={theme.colors.foreground} />
                }} />
            </Stack.Group>
        </Stack.Navigator>
    ) : (
        <View></View>
    )
};

export default AppRouter;