import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {TaskCard} from '../../Components/TaskCard';
import styles from './style';


const HomeScreen = ({ navigation }) => {
    return (
        <>

            <View style={styles.pageView}>
                <TaskCard text={'Atividade'} screen={'CollectSoilScreen'} />
                <TaskCard text={'Atividade 2'} screen={'CollectSoilScreen'} />
                <TaskCard text={'Atividade 3'} screen={'CollectSoilScreen'} />
                <TaskCard text={'Atividade 4'} screen={'CollectSoilScreen'} />
            </View>

            <Button
                onPress={() =>
                    navigation.navigate('LoginScreen', { name: 'LoginScreen' })
                }
            >LoginScreen</Button>

            <Button
                onPress={() =>
                    navigation.navigate('CollectSoilScreen', { name: 'CollectSoilScreen' })
                }
            >Botao</Button>
        </>
    );
};

HomeScreen.navigationOptions = {
    title: 'Home',
}

export default HomeScreen;
