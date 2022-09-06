import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useTheme } from "../../shared/context/ThemeContext"

const PinItem = ({array, getPin}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return (
        <TouchableOpacity onPress={getPin}>
            <View style={styles.pinContainer}>
                <Text style={styles.textPin}>{array.number}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styling = (theme) => StyleSheet.create({
    pinContainer : {
        borderWidth : 1,
        borderColor : theme.colors.secondary,
        borderRadius : 50,
        width : 64,
        height : 64,
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf: 'stretch',
        margin : theme.spacing.m,
    },
    textPin : {
        color : theme.colors.primary,
        fontFamily : 'Poppins-Medium',
        marginTop : 3,
        fontSize: 24
    }
})

export default PinItem;