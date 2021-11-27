import { RouteProp, useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTailwind, useTheme } from '../../common/theme';
import Button from '../../components/Button';
import Log from '../../components/Log';
import { isMaxWidth, height } from '../../constants/layout';
import { styleguide } from '../../constants/themes';
import { RootStackParamList } from '../../navigation';
import styles from './styles';

type Props = {
  route: RouteProp<RootStackParamList, 'BrewSummary'>;
};

function BrewSummary(props: Props) {
  const { route } = props;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const tw = useTailwind();
  const { dark } = useTheme();

  //@ts-ignore poptotop does exist on navigation
  const onBack = () => navigation.popToTop();

  return (
    <View style={{ flex: 1 }}>
      <Log timestamp={route.params.timestamp} withReminder style={{ paddingBottom: 120 }} />
      <View
        style={[
          tw(
            `${dark ? 'theme.background.secondary' : 'theme.background.quaternary'} -m-4 px-8 py-4`
          ),
          { paddingBottom: insets.bottom + 16 },
        ]}>
        <Button title="Done" onPress={onBack} type="tertiary" />
      </View>
    </View>
  );
}

export default BrewSummary;
