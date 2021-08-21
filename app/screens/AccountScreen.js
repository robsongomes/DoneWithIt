import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors';
import Screen from './Screen';

const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
];

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Robson Gomes"
                    subTitle="robson@gmail.com"
                    image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                          title={item.title}                          
                          IconComponent={
                            <Icon
                              name={item.icon.name}
                              backgroundColor={item.icon.backgroundColor}
                            />
                          }
                        />
                      )}
                />
            </View>
            <View style={styles.container}>
                <ListItem 
                    title="Log Out"
                    IconComponent={
                        <Icon 
                            name="logout"
                            iconColor="#fff"
                            backgroundColor="#ffe66d"
                        />
                    }
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
      backgroundColor: colors.light,
    },
    container: {
      marginVertical: 20,
    },
  });

export default AccountScreen;