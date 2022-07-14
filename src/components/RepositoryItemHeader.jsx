import React from "react";
import {Image, View, StyleSheet, Platform} from 'react-native';
import StyledText from './StyledText.jsx';
import theme from "../theme.js";


export const RepositorieItemHeader = ({ownerAvatarUrl, fullName, description, language  }) => { //Tomar solo props que se ocupan
    return(
        <View style={{flexDirection: 'row', paddingBottom:2 }}>
            <View style={{ paddingRight:10 }}>
              <Image style={styles.image} source={{uri: ownerAvatarUrl}}/>
            </View>
            <View style={{flex:1, paddingLeft: 10}}> 
              <StyledText fontSize='subheading' fontWeight='bold'>{fullName}</StyledText>
              <StyledText color='secondary'>{description}</StyledText>
              <StyledText style={styles.language}> {language}</StyledText>
            </View>
        </View>
    );
  };
  // Flex:1 para ajustar texto, no desbordamiento


  
export const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingVertical: 5,
      paddingTop:5
    },
    language:{
      padding: 4,
      marginTop: 4,
      marginBottom:4,
      color: theme.colors.white,
      backgroundColor: theme.colors.primary,
      alignSelf: 'flex-start', //solo ocupa el espacio que requiere
      borderRadius: 4,
      overflow: 'hidden'
    },
    image:{
      width: 48,
      height: 48,
      borderRadius:4
    }
  });
