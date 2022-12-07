import React, { useContext, useEffect, useLayoutEffect} from "react";
import { enableScreens } from "react-native-screens"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feeds from '../screens/Feeds'
import FeedsDetails from '../screens/FeedsDetails'

enableScreens();
const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
          <Stack.Navigator mode="modal" screenOptions={{ headerShown: true}} >
               <Stack.Screen name="Feeds" component={Feeds} />
               <Stack.Screen name="FeedsDetails" component={FeedsDetails} />
            </Stack.Navigator>
        ) 
  }

  export default RootStack;