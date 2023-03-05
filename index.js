import React, {useState} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const MyWebView = ({uri, containerStyle}) => {
  const [sourceUrl] = useState(uri);
  return (
    <View style={[{flex: 1}, containerStyle]}>
      <WebView
        source={{uri: sourceUrl}}
        javaScriptEnabled={true}
        startInLoadingState={true}
      />
    </View>
  );
};
export default MyWebView;
