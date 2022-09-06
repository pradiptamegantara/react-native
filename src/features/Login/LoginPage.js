import { useState } from "react"
import { Keyboard, StyleSheet, View } from "react-native"
import MainContainer from "../../shared/components/MainContainer"
import AppBackground from "../../shared/components/AppBackground";
// import TextLabel from "../../shared/components/TextLabel"
import FormInput from "../../shared/components/FormInput";
import FormPassword from "../../shared/components/FormPassword";
import FormButton from "../../shared/components/FormButton"
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../../shared/constants";
// import useViewState from "../../shared/hook/useViewState"
// import useDeps from "../../shared/hook/useDeps"
import Spinner from "../../shared/components/Spinner"
import SnackBar from "../../shared/components/SnackBar";
import useViewState from "../../shared/hook/UseViewState";
import { useDependency } from "../../shared/hook/UseDependency";
import TitleLabel from "../../shared/components/TitleLabel";
import { useAuth } from "../../shared/hook/UseAuth";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation()

    const { viewState, setLoading, setError } = useViewState();
    const { loginService } = useDependency();
    const { onLogin } = useAuth();

    const onAuthenticate = async () => {
        Keyboard.dismiss();
        setLoading();
        try {
            const resp = await onLogin({ userName: username, password: password });
            if (resp) {
                navigation.replace(ROUTE.MAIN)
            } else {
                setError(new Error('Unauthorized'))
            }
        } catch (error) {
            setError(error)
        }
    }

    return (
        <MainContainer>
            {viewState.isLoading && <Spinner />}
            <AppBackground>
                <View style={styles.header}>
                    <TitleLabel text="Welcome !" label="h2" />
                </View>

                <View style={styles.form}>
                    <FormInput value={username} onChangeValue={setUsername} placeholder="Input your Username" />
                    <FormPassword value={password} onChangeValue={setPassword} placeholder="Input your Password" />
                    <FormButton label="Login" onClick={onAuthenticate} />
                </View>
            </AppBackground>
            {viewState.error !== null && <SnackBar message="Unauthorized" />}
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1, // ini berarti header 1/3 dari screen (karena appbackground flex nya 1 dan form flex nya 2)
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginLeft: 16,
        marginBottom: 16
    },
    form: {
        alignItems: 'stretch',
        flex: 2 // ini berarti form 2/3 dari screen (karena appbackground flex nya 1 dan header flex nya 2)
    },
})

export default LoginPage;