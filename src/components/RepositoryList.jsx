import React from "react";
import { Text, FlatList} from 'react-native';
import repositories from './data/repositories.js';
import RepositoryItem from './RepositoryItem.jsx';

const RepositoryList = () =>{
    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={
                ({item : repo })=>(
                    <RepositoryItem {...repo}/>
                )
            }
        /> 
    );
};

export default RepositoryList;

// View por sí solo no tiene scroll. Para renderizar lsitas -> flatview. Scroll view, texto con scroll.
//padding, margging,tamaños en pixels reales(dependiendo del dispositivo)
