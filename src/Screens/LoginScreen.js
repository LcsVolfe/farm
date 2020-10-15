import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {View, Image} from 'react-native';


const LoginScreen = ({ navigation }) => {
    return (
        <>
            <View style={styles.view}>
                <Image source={require('../../assets/img/logo.png')} style={styles.logo}/>
                <TextInput
                    label="Email"
                    style={styles.textField}
                    mode={'outlined'}
                    //value={text}
                    //onChangeText={text => setText(text)}
                />
                <TextInput
                    label="Senha"
                    mode={'outlined'}
                    style={styles.textField}
                    //value={text}
                    //onChangeText={text => setText(text)}
                />

                <Button
                    style={styles.button}
                    mode="contained"
                    onPress={() =>
                        navigation.navigate('HomeScreen', { name: 'HomeScreen' })
                    }
                >Login</Button>
            </View>
        </>
    );
};

const styles = {
    view: { alignItems: 'center', justifyContent: 'center', height: '100%'  },
    textField: { width: '90%', marginBottom: 16 },
    logo: {marginBottom: 16},
    button: { width: '90%' }
}

LoginScreen.navigationOptions = {
    title: 'LoginScreen',
}

export default LoginScreen;
