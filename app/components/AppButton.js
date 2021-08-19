import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from '../config/colors';

export function AppButton({title, onPress, color = 'primary'}) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} 
            onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 25,
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: colors.white,
    }
})