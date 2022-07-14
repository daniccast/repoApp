import React from "react";
import {Text, View} from 'react-native';
//import Constants from 'expo-constants';
import RepositoryList from './RepositoryList.jsx';
import AppBar from "./AppBar.jsx";
import {Redirect, Route, Routes, Switch } from 'react-router-native';
import LogInPage from "../pages/LogIn.jsx";


const Main = () => {
    console.log('Change');
    return(
        <View style={{flex:1}}>
            <AppBar/>
            <Routes>
                <Route exact path='/' element={<RepositoryList/>} />
                <Route exact path='/signin' element={<LogInPage/>}/>
            </Routes>
        </View>
    );
}
export default Main;