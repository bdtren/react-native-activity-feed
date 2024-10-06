import { registerNativeHandlers } from '@bdtren/react-native-activity-feed-core';
import * as ImagePicker from 'expo-image-picker';

registerNativeHandlers({
  pickImage: async ({ compressImageQuality = 0.2 }) => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        return {
          cancelled: true,
        };
      }

      const { cancelled, ...rest } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
        aspect: [4, 3],
        quality: compressImageQuality,
      });

      if (cancelled) {
        return {
          cancelled,
        };
      }
      return {
        cancelled: false,
        uri: rest?.assets?.[0]?.uri,
      };
    } catch (err) {
      return {
        cancelled: true,
      };
    }
  },
  sdkPackageName: 'expo-package',
});

export * from '@bdtren/react-native-activity-feed-core';
