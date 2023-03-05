import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

interface Props {
  uri?: string;
  containerStyle?: any;
}

export const MyWebView: FC<Props> = ({ uri, containerStyle }: Props) => {
  const [sourceUrl, setSourceUrl] = useState(uri);
  return (
    <View style={[{ flex: 1 }, containerStyle]}>
      <WebView source={{ uri: sourceUrl }} javaScriptEnabled={true} startInLoadingState={true} />
    </View>
  );
};