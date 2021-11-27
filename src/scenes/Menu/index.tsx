import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import { sortBy } from 'lodash';
import React, { useEffect } from 'react';
import { ImageBackground, View } from 'react-native';
import { interpolateColor } from 'react-native-reanimated';

import { useTailwind } from '../../common/theme';
import { useSettings } from '../../common/useSettings';
import { useTracking } from '../../common/useTracking';
import MenuItem from '../../components/MenuItem';
import ResponsiveScrollView from '../../components/ResponsiveScrollView';
import ScreenPlaceholder from '../../components/ScreenPlaceholder';
import { recipes, Recipe } from '../../constants/recipes';
import { RootStackParamList } from '../../navigation';
import Onboarding from './Onboarding';
import BackgroundImage from './images/background.png';

function Menu() {
  const { settings } = useSettings();
  const { track, events } = useTracking();
  const tw = useTailwind();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const selectedRecipes = Object.keys(settings.recipes).filter(
    (settingsRecipe) => settings.recipes[settingsRecipe] && recipes[settingsRecipe]
  );
  const menuRecipes = Object.values(selectedRecipes).map(
    (selectedRecipe) => recipes[selectedRecipe]
  );

  useEffect(function didMount() {
    Notifications.addNotificationResponseReceivedListener(handleNotification);

    interpolateColor(1, [0, 1], ['red', 'blue']);
  }, []);

  function handleNotification(event: Notifications.NotificationResponse) {
    if (event?.notification?.request?.content?.data?.timestamp) {
      const { timestamp } = event.notification.request.content.data;

      if (timestamp && typeof timestamp === 'number') {
        navigation.navigate('LogDetailEdit', { timestamp });
      }
    }
  }

  function sortByName(recipes: Recipe[]) {
    return sortBy(recipes, (recipe) => `${recipe.title} ${recipe.modifier ?? ''}`);
  }

  function onMenuItemPress(recipe: Recipe) {
    navigation.navigate('Brew', {
      id: recipe.id,
      title: `${recipe.title}${recipe.modifier ? ` ${recipe.modifier}` : ''}`,
    });
    track(events.RECIPE_TAPPED, {
      id: recipe.id,
    });
  }

  return (
    <View style={tw('flex-1 theme.background.screen')}>
      <ImageBackground source={BackgroundImage} style={{ flex: 1 }} imageStyle={{ opacity: 0.35 }}>
        <ResponsiveScrollView contentContainerStyle={{ padding: 12, paddingTop: 24 }}>
          {settings.onboardingVisible && <Onboarding />}
          {sortByName(menuRecipes).map((recipe) => (
            <MenuItem recipe={recipe} key={recipe.id} onPress={() => onMenuItemPress(recipe)} />
          ))}
          {menuRecipes.length === 0 && (
            <ScreenPlaceholder text="To start brewing, tap the settings icon, then Recipes, then select which brew methods you'd like to appear here." />
          )}
        </ResponsiveScrollView>
      </ImageBackground>
    </View>
  );
}

export default Menu;
