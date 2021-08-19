import React from 'react';
import { View } from "react-native";

function ViewFlexBoxScreen() {
    return (
        <View style={{
            marginTop: 50,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'            
        }}>
            <View style={{ 
                width: 100, 
                height: 100, 
                marginHorizontal: 20,
                backgroundColor: 'dodgerblue',
                // ios
                shadowColor: 'gray',
                shadowOffset: {
                    width: 0,
                    height: 10
                },
                shadowOpacity: 1,
                shadoRadius: 10,
                //android
                elevation: 20,
            }}/>
            <View style={{ 
                width: 100, 
                height: 100, 
                backgroundColor: 'orange',
                top: 0,
                left: 20,
                position: 'absolute',
                borderRadius: 50,
                borderColor: 'tomato',
                borderWidth: 5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomWidth: 10,
                }}/>
            <View style={{ 
                width: 100, 
                height: 100, 
                backgroundColor: 'tomato' 
                }}/>  
        </View>
    )
}

export default ViewFlexBoxScreen;