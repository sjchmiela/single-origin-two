import React from 'react';
import { Image as RNImage, ImageStyle } from 'react-native';

import { useTailwind } from '../../common/theme';
import { height } from '../../constants/layout';

type Props = {
  source: number;
  defaultSource?: number;
  style?: ImageStyle;
  isPlaying?: boolean;
};

export default function Image(props: Props) {
  const { source, style, defaultSource } = props;
  const tw = useTailwind();

  return (
    <RNImage
      source={source}
      defaultSource={defaultSource}
      style={[
        {
          resizeMode: 'cover',
          height: height / 5,
        },
        tw('theme.background.default'),
        style,
      ]}
    />
  );
}
