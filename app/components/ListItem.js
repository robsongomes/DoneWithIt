import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable'

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({
    title, 
    subTitle, 
    image,
    IconComponent, 
    onPress = () => {}, 
    onDelete = () => {}, 
    renderRightActions = ()=>{} }) {    
    return (
        <Swipeable 
            renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, onDelete)}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {image && <Image style={styles.image} source={image} />}
                    {IconComponent}
                    <View style={styles.details}>
                        <AppText style={styles.title} >{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,                
    },
    details: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        color: colors.medium
    }
})

export default ListItem;