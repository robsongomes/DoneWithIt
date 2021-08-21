import React from 'react';
import { StyleSheet, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';



const listItemDeleteAction = (progress, dragX, onDelete) => {
    return (
        <TouchableHighlight style={styles.container} onPress={onDelete}>
            <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default listItemDeleteAction;