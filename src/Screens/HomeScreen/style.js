import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    pageView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
});

export default styles;
