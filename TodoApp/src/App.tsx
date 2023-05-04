import { StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer, ThemeProvider } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AppStack from './navigation/Stacks/AppStack'
import { CUSTOM_DARK_THEME, CUSTOM_LIGHT_THEME } from './constants/theme'
import useUserThemeStore, { UserTheme } from './store/theme'
import AddTodoBottomSheetProvider from './providers/AddTodoBottomSheet'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

const App = () => {

  const theme = useUserThemeStore(state => state.theme);

  return (
    <GestureHandlerRootView style={styles.rootView}>
      <StatusBar barStyle={theme === UserTheme.DARK ? 'light-content' : 'dark-content'} />
      <ThemeProvider value={theme === UserTheme.DARK ? CUSTOM_DARK_THEME : CUSTOM_LIGHT_THEME}>
        <SafeAreaProvider>
          <BottomSheetModalProvider>
            <NavigationContainer theme={theme === UserTheme.DARK ? CUSTOM_DARK_THEME : CUSTOM_LIGHT_THEME}>
              <AddTodoBottomSheetProvider>
                <AppStack />
              </AddTodoBottomSheetProvider>
            </NavigationContainer>
          </BottomSheetModalProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView >
  )
}

export default App

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  }
})