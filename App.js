/**
 * For android emulator works well set dns as 8.8.8.8
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import video_file from './video_file.mp4';

import Video from 'react-native-video';

const url = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

const App: () => React$Node = () => {
  // const localFile = video_file;
  const remoteFile = {uri: url};

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.videoContainer}>
        <Video source={remoteFile} style={styles.video} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default App;
