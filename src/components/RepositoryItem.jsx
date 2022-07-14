import React from "react";
import {View} from 'react-native';
import RepositoryStats from "./RepositoryStats.jsx";
import {RepositorieItemHeader, styles} from "./RepositoryItemHeader.jsx"

const renderItem = (props) => ( //Repo Item
    <View key={props.id} style={styles.container}>
        <RepositorieItemHeader {...props}/>
        <RepositoryStats {...props}/>
    </View>
);

export default renderItem;