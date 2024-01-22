import React from "react";
import { Text, View, FlatList, Image } from "react-native";
import {styles} from './style';
const DATA = [
    {
        id: '1',
        title: 'Data Structures',
        imageSourch: require('../../assets/images/Lab4/Myles.png'),
    },
    {
        id: '2',
        title: 'STL',
        imageSourch: require('../../assets/images/Lab4/Adbullah.png'),
    },
    {
        id: '3',
        title: 'C++',
        imageSourch: require('../../assets/images/Lab4/lida.png'),
    },
    {
        id: '4',
        title: 'Java',
        imageSourch: require('../../assets/images/Lab4/Jonathan.png'),
    },
    {
        id: '5',
        title: 'JavaScript',
        imageSourch: require('../../assets/images/Lab4/JuneCha.png'),
    },
    {
        id: '6',
        title: 'Android',
        imageSourch: require('../../assets/images/Lab4/Renee.png'),
    },
    {
        id: '7',
        title: 'IOS',
        imageSourch: require('../../assets/images/Lab4/Sasha.png'),
    },
];
const Item = ({title, imageSourch}) => {
    return (
        <View style={styles.item}>
            <Image source={imageSourch} style={styles.avatar}></Image>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};
const renderItem = ({item}) => (
    <Item imageSourch={item.imageSourch} title={item.title}/>
)
const ListCourse = () =>{
    return (
        <View style={styles.container}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}/>
        </View>
    );
};

export default React.memo(ListCourse);