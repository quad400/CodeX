/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigations/MainNavigation';

const App = () => {
  return (
    <NavigationContainer onReady={() => BootSplash.hide()}>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
