import React from 'react';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import App from './App';
import { DarkTheme, Provider } from 'react-native-paper';

export default function Main() {
    return(
        <Provider theme={DarkTheme}>
            <App />
        </Provider>
    )
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
