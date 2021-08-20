import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/AppText'
import colors from '../config/colors'


function Card({title, subTitle, image}) {
    return (
        <View style={styles.container}>            
            <Image style={styles.image} source={image} />
            <View style={styles.textContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'      
    },
    image: {
        width: '100%',
        height: 200,
    },
    textContainer: {
        backgroundColor: colors.white,
        padding: 20,
    },
    title: {
        marginBottom: 7,
        color: colors.black,
        fontWeight: '500'
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
})

export default Card