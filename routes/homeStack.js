import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from "../screens/home"
import Profile from "../screens/profile"
import About from "../screens/about"
import Notes from "../screens/notes"
import Notes from "../screens/awards"

const screens = {
Home: { 
        screen: Home
    }
,Profile :{
    screen: Profile
}
,About  :{
    screen: About
}
,Notes  :{
    screen: Notes
}
,Awards :{
    screen: Awards
}
}

const HomeStack =createStackNavigator({})

export default createAppContainer(HomeStack);