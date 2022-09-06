import { useState } from "react";
import { StyleSheet, TextInput, View, Pressable } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { Entypo } from '@expo/vector-icons';

const FormPassword = ({ value, onChangeValue, placeholder = '' }) => {
    const theme = useTheme();
    const styles = styling(theme);
    const [hidePass, setHidePass] = useState(true);

    return (
        <View style={[styles.input, styles.inputPassword]}>
            <TextInput
                secureTextEntry={hidePass}
                onChangeText={onChangeValue}
                value={value}
                placeholder={placeholder}
                style={{ width: '100%' }} />
            <Pressable onPress={() => setHidePass(!hidePass)} onLongPress={() => console.log('eye')}>
                <Entypo name={hidePass ? "eye-with-line" : "eye"} size={20} color={theme.colors.foreground} />
            </Pressable>
        </View>
    )
}

const styling = (theme) => StyleSheet.create({
    input: {
        height: 40,
        marginLeft: theme.spacing.m,
        marginRight: theme.spacing.m,
        marginTop: theme.spacing.s,
        borderWidth: 1,
        borderRadius: theme.radius.m,
        padding: theme.spacing.s,
        backgroundColor: theme.colors.secondary,
        borderColor: theme.colors.primary,
        alignItems: 'center'
    },
    inputPassword: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: theme.spacing.xl,
    }
})


export default FormPassword;