import {Dimensions, StyleSheet} from 'react-native';
import ThemeContext from '@react-navigation/native/src/theming/ThemeContext';

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    card: {
        width: width * 0.45,
        height: width * 0.45,
        backgroundColor: '#316845',
        alignItems: 'center',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
    },
    description: {
        color: 'white'

    }
});

export default styles;
