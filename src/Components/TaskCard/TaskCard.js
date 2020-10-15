import React from 'react';
import styles from './style';
import {Text, IconButton, Colors} from 'react-native-paper';
import {Image, View, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../../RootNavigation';


const TaskCard = ({text, screen}) => {
    return (
        <TouchableOpacity onPress={()=> RootNavigation.navigate(screen, { userName: 'Lucy' })}>
        {/*<TouchableOpacity onPress={()=> {}}>*/}
            <View style={styles.card}>
                <Image source={require('../../../assets/img/pin.png')} />
                <Text style={styles.description}>{text}</Text>
            </View >
        </TouchableOpacity>

    );
}

export default TaskCard;
