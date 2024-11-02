import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LotteryProvider } from './src/contexts/context';
import { StatusBar } from 'expo-status-bar';
import DrawerNavigator from './src/routes/route';
import { theme } from "./src/themes/theme";

const App: React.FC = () => {
  return (
    <LotteryProvider>
      <NavigationContainer>
      <StatusBar style="dark" backgroundColor={theme.colors.background}/>
        <DrawerNavigator />
      </NavigationContainer>
    </LotteryProvider>
  );
};

export default App;