import React from 'react';
import styles from './style';
import {Text} from 'react-native-paper';
import {Image} from 'react-native';



const ListTitle = ({text}) => {
    return (
        <>
            <Text>{text}</Text>
            <Image source={require("../../../res/img/logo.jpg")} style={styles.image}/>
        </>
    );
}

export default ListTitle;
