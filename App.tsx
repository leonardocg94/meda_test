/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {MainNavigator} from './src/navigators/MainNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {InternalDatabase} from './src/types/asyncStorageTypes';

function App(): JSX.Element {
  useEffect(() => {
    (async () => {
      const database = await AsyncStorage.getItem('@database');
      if (!database) {
        const newDatabase: InternalDatabase = {
          admin: {
            name: 'Leonardo',
            password: 'test',
          },
        };
        await AsyncStorage.setItem('@database', JSON.stringify(newDatabase));
      }
    })();
  }, []);

  return <MainNavigator />;
}

export default App;
