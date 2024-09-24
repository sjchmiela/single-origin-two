import { RouteProp } from '@react-navigation/core';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

import Recipe from './Recipe';
import recipes from './recipes';
import { RootStackParamList } from '../../navigation';

type Props = {
  route: RouteProp<RootStackParamList, 'Brew'>;
};

function Brew(props: Props) {
  const { route } = props;
  const tw = useTailwind();
  const { id } = route.params;
  const recipe = recipes[id];

  return (
    <View style={tw('flex-1 bg-screen dark:bg-screen-dark')}>
      <ScrollView contentContainerStyle={tw('p-3 items-center pt-8')}>
        <View style={tw('w-full')}>
          <Recipe recipe={recipe} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Brew;
