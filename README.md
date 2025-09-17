# Drawer Challenge - React Native Navigation App

## Demo


https://github.com/user-attachments/assets/731aa35b-7c9a-431d-8bd1-dd12c2ce782c



## Project Description

This project is a React Native application that implements a navigation system using **React Navigation** with a **Drawer Navigator** as the parent component, containing a **Bottom Tab Navigator** and a nested **Stack Navigator**. The application demonstrates React Native navigation best practices.

### Navigation Structure

```
Drawer Navigator (Parent)
├── MainTabs (Bottom Tab Navigator)
│   ├── HomeStack (Stack Navigator)
│   │   ├── Screen1
│   │   └── Screen2
│   ├── Cart
│   └── Favorites
└── Orders (Direct Drawer Screen)
```

### Architecture Decision

**Why React Navigation Drawer?**

1. **Consistency**: React Navigation provides a consistent and well-documented API
2. **Development Time**: In a short period, it's more efficient to use proven native components
3. **Maintainability**: Less custom code = fewer bugs and easier maintenance
4. **Performance**: Native navigators are optimized for React Native
5. **Ecosystem**: Wide community support and regular updates

## Implemented Features

### Complete Navigation

- **Drawer Navigator** with custom side menu
- **Bottom Tab Navigator** with 3 main tabs
- **Nested Stack Navigator** for screen-to-screen navigation
- **Direct navigation** from drawer to Orders screen

### UI/UX

- **Responsive design** with thematic colors per screen
- **Informative empty states** on each screen
- **Functional navigation buttons** between screens

## 📁 Project Structure

```
src/
├── components/
│   └── DrawerSceneWrapper.tsx    # Drawer animations
├── navigations/
│   ├── AppNavigations.tsx        # Main navigator
│   ├── TabNavigator.tsx          # Bottom Tab Navigator
│   ├── HomeStack.tsx             # Stack Navigator for Home
│   ├── CustomDrawerContent.tsx   # Custom drawer content
│   ├── types.tsx                 # TypeScript types
│   └── styles/                   # Separate style files
├── screens/
│   ├── Screen1.tsx               # Main screen
│   ├── Screen2.tsx               # Second screen
│   ├── CartScreen.tsx            # Cart screen
│   ├── FavoritesScreen.tsx      # Favorites screen
│   └── OrdersScreen.tsx          # Orders screen
└── types/
    └── vector-icons.d.ts         # TypeScript declarations
```

## Technologies Used

### Core

- **React Native** 0.81+
- **TypeScript** for type safety
- **React Navigation** for navigation

### Additional Libraries

- **React Native Reanimated** for 3D animations
- **React Native Gesture Handler** for gestures
- **React Native Safe Area Context** for safe area handling

## Technical Decisions

### 1. **Custom 3D Animations with Reanimated**

**Decision**: Implement custom 3D drawer animations using React Native Reanimated

**Reasons**:

- ✅ **Enhanced UX**: 3D rotation creates immersive drawer experience
- ✅ **Visual appeal**: Scale and translate effects make navigation feel premium
- ✅ **Performance**: Reanimated runs on UI thread for smooth animations
- ✅ **Customization**: Full control over animation timing and easing

### 2. **File Architecture**

**Decision**: Separate navigators and styles into individual files

**Reasons**:

- ✅ **Scalability**: Easy to add new screens
- ✅ **Maintainability**: Organized and readable code
- ✅ **Reusability**: Reusable styles and components
- ✅ **Testing**: Easier to test individual components

## How to Run the Project

### Prerequisites

- Node.js 16+
- React Native CLI
- Android Studio / Xcode
- Yarn or npm

### Installation

```bash
# Install dependencies
yarn install

# iOS
cd ios && pod install && cd ..

# Android
# Make sure ANDROID_HOME is configured

# Run
yarn android
# or
yarn ios
```
