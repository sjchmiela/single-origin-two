import LogRocket from '@logrocket/react-native';
import * as Device from 'expo-device';
import * as Font from 'expo-font';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Animated } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { TailwindProvider } from 'tailwind-rn';

import Navigator from './src/navigation';
import configureStore from './src/store/configureStore';
import utilities from './tailwind.json';

const { store, persistor } = configureStore();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    async function prepare() {
      LogRocket.init('jon-samp/single-origin');

      try {
        const deviceType = await Device.getDeviceTypeAsync();
        if (deviceType === Device.DeviceType.TABLET) {
          await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
        }

        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Script: require('./assets/SignPainter-HouseScript.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 666,
        useNativeDriver: true,
      }).start();
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <TailwindProvider utilities={utilities}>
          <StatusBar style="auto" />
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaProvider
              style={{ backgroundColor: 'black' }}
              initialMetrics={initialWindowMetrics}>
              <Animated.View style={{ opacity: fadeAnim, flex: 1 }} onLayout={onLayoutRootView}>
                <Navigator />
              </Animated.View>
            </SafeAreaProvider>
          </PersistGate>
        </TailwindProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
