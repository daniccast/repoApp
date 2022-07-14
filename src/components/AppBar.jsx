import React from "react";
import {View, ViewPropTypes, StyleSheet, ScrollView,TouchableWithoutFeedback} from 'react-native';
import StyledText from './StyledText.jsx';
import theme from "../theme.js";
import Constants from 'expo-constants';
import {Link, useLocation} from 'react-router-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.appBar.primary,
        flexDirection: "row",
        paddingTop: Constants.statusBarHeight + 10
    },
    text:{
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10,
        color: theme.appBar.textSecondary
    },
    scroll:{
        paddingBottom: 15
    },
    active:{
        color: theme.appBar.textPrimary
    }
});

const AppBarTab = ({ children, to}) => {
    const {pathname} = useLocation();
    const active = pathname === to; 

    const textStles = [
        styles.text,
        active && styles.active
    ];
    
    return(
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStles}> 
                {children} 
            </StyledText>
        </Link>
    );
};


const AppBar = ()=>{
    const {pathname} = useLocation();
    return(
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign in</AppBarTab>
            </ScrollView>
        </View>
    );
}

export default AppBar;