## TODO App

## React Native Environment Setup

Always refer [React Native public docs](https://reactnative.dev/docs/environment-setup) for most up-to-date information.

1. Install [Homebrew](https://brew.sh/)
<p>

2. Install [Xcode](https://developer.apple.com/xcode/)
<p>

3. Install `cocoapods`

   ```shell
   $ brew install cocoapods
   ```

<p>

4. Install `Node` & `Watchman`

   ```shell
   $ brew install node
   $ brew install watchman
   ```

<p>

5. Install `yarn`

   ```shell
   $ brew install yarn
   ```

## Running the App

1. Clone the App repository on your local machine

<p>

2. Install `JS` dependencies

   ```shell
   $ yarn install
   ```

<p>

3. Install `pods`

   ```shell
   # CD into the "ios" directory
   $ cd ios

   # Install pods
   $ pod install

   # CD back to the root directory
   $ cd ..
   ```

<p>

4. Run the `Todo` app

   ```shell

   # Running on iOS Simulator
   $ yarn ios
   ```