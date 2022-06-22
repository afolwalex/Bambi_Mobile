import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import NavContainer from './src/navigation/NavContainer';
import configureStore from './src/redux/store';
import persistStore from 'redux-persist/es/persistStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const store = configureStore();

const persistor = persistStore(store);

const App = () => {
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
