import React from 'react';
import { SafeAreaView } from 'react-native';

const {
  EXPO_PUBLIC_STREAM_API_KEY,
  EXPO_PUBLIC_STREAM_API_SECRET,
  EXPO_PUBLIC_STREAM_APP_ID,
} = process.env;

import {
  StreamApp,
  FlatFeed,
  Activity,
  StatusUpdateForm,
  LikeButton,
} from '@bdtren/expo-activity-feed';

const App = () => {
  const apiKey = EXPO_PUBLIC_STREAM_API_KEY;
  const appId = EXPO_PUBLIC_STREAM_APP_ID;
  const token = EXPO_PUBLIC_STREAM_API_SECRET;

  if (!apiKey) {
    console.error('STREAM_API_KEY should be set');
    return null;
  }

  if (!appId) {
    console.error('STREAM_APP_ID should be set');
    return null;
  }

  if (!token) {
    console.error('STREAM_TOKEN should be set');
    return null;
  }

  const renderActivity = (props) => (
    <Activity {...props} Footer={<LikeButton {...props} />} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
      <StreamApp apiKey={apiKey} appId={appId} token={token}>
        <FlatFeed Activity={renderActivity} notify />
        <StatusUpdateForm feedGroup='timeline' />
      </StreamApp>
    </SafeAreaView>
  );
};

export default App;
