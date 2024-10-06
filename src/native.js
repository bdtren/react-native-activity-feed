export let pickImage = () => {
  throw Error(
    'Native handler was not registered, you should import @bdtren/expo-activity-feed or @bdtren/react-native-activity-feed',
  );
};

export let sdkPackageName = 'native-package'; //'native-package' or 'expo-package'

export const registerNativeHandlers = (handlers) => {
  if (handlers.pickImage) {
    pickImage = handlers.pickImage;
  }
  if (handlers.sdkPackageName) {
    sdkPackageName = handlers.sdkPackageName;
  }
};
