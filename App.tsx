import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {ThemeProvider} from 'react-native-elements';
import store from './src/context/store';
import AppContent from './AppContent';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <PaperProvider>
          <NavigationContainer>
            <GestureHandlerRootView style={{flex: 1}}>
              <AppContent />
            </GestureHandlerRootView>
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
}
