import {StyleSheet, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import NavContainer from './src/navigation/NavContainer';
import configureStore from './src/redux/store';
import persistStore from 'redux-persist/es/persistStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

const store = configureStore();

const persistor = persistStore(store);

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NavContainer />
                <StatusBar backgroundColor={'#4E51BF'} translucent={true} />
            </PersistGate>
        </Provider>
    );
};

export default App;

const styles = StyleSheet.create({});
