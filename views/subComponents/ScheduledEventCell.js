import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const scheduledEventCell = props => {
    return(
        <View key={props.name} style={styles.listContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{props.name}</Text>
                <Text style={styles.infoText}>{props.time}</Text>
            </View>
        </View>
    );
}

//required props: 
//name
//time

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: "row",
        width: deviceWidth - 5,
        height: deviceHeight / 8,
        backgroundColor: "#274156",
        borderRadius: 15,
        margin: 3,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderColor: "grey",
    },
    nameContainer: {
        width: (deviceWidth / 4) * 4,
        flexDirection: "column",
        marginLeft: 10,
        marginTop: 5
    },
    nameText: {
        fontSize: 18,
        color: "white",
        fontFamily: "HelveticaNeue-Medium",
        marginTop: 5
    },
    infoText: {
        fontSize: 16,
        color: "white",
        fontFamily: "HelveticaNeue-Light",
        marginTop: 2
    },
});

export default scheduledEventCell;