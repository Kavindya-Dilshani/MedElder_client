
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={styles.homeText}>Med Elder</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    homeText: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 440
    },
});
