# Fantastec tech test

## How to run the project locally

This assumes you have followed the React Native CLI getting started [guide](https://reactnative.dev/docs/getting-started) and your machine is setup for React Native.

- Initial setup (from your terminal):

```
  git clone git@github.com:SMJ93/fantastec-tech-test.git

  cd fantastec-tech-test

  yarn install
```

- Run on iOS

```
  cd ios && pod install
  yarn ios
```

- Run on Android
  - You may need to load up an android emulator before running the app if you're using an older version of Android Studio

```
  yarn android
```

## Things I would do if I had more time

General

- Improve the appearance by using consistent colours, spacing, fonts etc
- Discuss with the product design team the possibility of adding icons / images to make it more interesting
- Add E2E tests with Detox to make sure the feed and key moments render as expected
- Add eslint and prettier to improve code quality

Key moments

- Animate key moments in and out
- Use appropriate icons for the button
