# Navigation
A simple application to learn the how to use the most common react native libraries


# Link the dependencies by installing the pods

```
cd ios
pod install
```

# Modify the AppDelegate.m file for React Native Navigation

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

# Modify the AppDelegate.m file for Firebase

Import firebase at the top

```
@import Firebase;
```

Add the below code to the top of didFinishLaunchingWithOptions method

```
if ([FIRApp defaultApp] == nil) {
    [FIRApp configure];
  }
```

Also follow the steps in https://firebase.google.com/docs/ios/setup#add_firebase_to_your_app to add the plist file to your project
