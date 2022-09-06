import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./src/shared/context/ThemeContext";
import useAppFont from "./src/shared/hook/UseAppFont";
import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "./src/navigation/AppRouter";
import { serviceFactory } from "./src/services/ServiceFactory";
import { DependencyProvider } from "./src/shared/context/DependencyContext";
// import { apiClientFactory } from "./src/shared/ApiCLientFactory";
import { clientInstance } from "./src/shared/AxiosClient";
import { apiClientFactory } from "./src/shared/ApiClientFactory";
import { AuthProvider } from "./src/shared/context/AuthContext";

export default function App() {
    const fonts = useAppFont();
    const apiClient = apiClientFactory(clientInstance);
    const services = serviceFactory(apiClient);
    if (!fonts) {
        return null;
    }
    return (
        <DependencyProvider services={services}>
            <SafeAreaProvider>
                <ThemeProvider>
                    <NavigationContainer>
                        <AuthProvider>
                            <AppRouter />
                        </AuthProvider>
                    </NavigationContainer>
                </ThemeProvider>
            </SafeAreaProvider>
        </DependencyProvider>
    );
}
