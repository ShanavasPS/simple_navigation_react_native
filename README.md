# Navigation
A simple application to learn the how to navigate using the react_native_navigation_library

# Install the below modules and dependencies

```
yarn add react-native-navigation
```

# Link the dependencies by installing the pods

```
cd ios
pod install
```

# Modify the AppDelegate.m file

Replace the didFinishLaunchingWithOptions method with the below code

```
#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <ReactNativeNavigation/ReactNativeNavigation.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  [ReactNativeNavigation bootstrap:jsCodeLocation launchOptions:launchOptions];
  
  return YES;
}
```