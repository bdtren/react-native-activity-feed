# Native example

Make sure node version is >= v10.13.0

## 1. Setup the example app

```sh
  # Install expo cli, skip if already installed.
  yarn global add expo-cli

  # Clone the repository
  git clone https://github.com/bdtren/react-native-activity-feed.git

  # Go to native example directory
  cd react-native-activity-feed/examples/native

  # Install the npm and pod dependencies
  yarn && npx pod-install
```

## 2. Setup up Stream credentials

Get your Stream API credentials from the [user dashboard](https://getstream.io/dashboard/) and make sure your application has these feed groups:

- user (type Flat)
- timeline (type Flat)
- notification (type Notification)

_If you followed the [React Native tutorial](https://getstream.io/react-native-activity-feed/tutorial/), you already have a pre-configured app on your account that you can use for this project._

```sh
mv .env.example .env
```

Open the `.env` file in your favorite editor. And fill in the credentials.

## 3. Get your userToken and populate some app data

```sh
yarn run init-data
```

Copy the line this script outputs and put it in your `.env` file.

## 4. Start your app

```sh
yarn start
```
