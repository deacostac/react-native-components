import React, { useContext } from 'react'
import { HomeScreen } from '../screens/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { View } from 'react-native';
//import { AlertScreen } from '../screens/AlertScreen';

const Stack = createStackNavigator();

export const Navigation = () => {

  const { theme } = useContext( ThemeContext );

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <NavigationContainer
          theme={ theme }
        >
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Animation101Screen" component={ Animation101Screen } />
          <Stack.Screen name="Animation102Screen" component={ Animation102Screen } />
          <Stack.Screen name="SwitchScreen" component={ SwitchScreen } />
          {/* <Stack.Screen name="AlertScreen" component={ AlertScreen } /> */}
          <Stack.Screen name="TextInputScreen" component={ TextInputScreen } />
          <Stack.Screen name="PullToRefreshScreen" component={ PullToRefreshScreen } />
          <Stack.Screen name="SectionListScreen" component={ SectionListScreen } />
          <Stack.Screen name="ModalScreen" component={ ModalScreen } />
          <Stack.Screen name="InfiniteScrollScreen" component={ InfiniteScrollScreen } />
          <Stack.Screen name="SlidesScreen" component={ SlidesScreen } />
          <Stack.Screen name="ChangeThemeScreen" component={ ChangeThemeScreen } />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}
