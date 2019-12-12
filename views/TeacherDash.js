//Teacher Dash screen is the main screen on the teacher side of the app
//has to 3 link buttons but two of them link to the same screen for now
import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";
import * as firebase from 'firebase';
import ProfileBar from "./subComponents/ProfileBar";
import ScheduledEventCell from "./subComponents/ScheduledEventCell";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

class TeacherDash extends React.Component {

  state = {
    date: "",
    inputValue: "",
    teacherDashDisplay: "block",
    teacherProfileScrollDisplay: "none",

    lessonsList: [
      {
        name: "S Jacobs",
        time: "11 - 12 PM",
        key: 0
      },
      {
        name: "V Cookson",
        time: "12 - 1  PM",
        key: 1
      },
      {
        name: "B Jacobs",
        time: "2- 3 PM",
        key: 2
      },
      {
        name: "Grace W",
        time: "3:30 - 4:30 PM",
        key: 3
      },
      {
        name: "Sa Jacobs",
        time: "5 - 6 PM",
        key: 4
      },
      {
        name: "Grace S",
        time: "7 - 7:30 PM",
        key: 5
      },
      {
        name: "D Jacobs",
        time: "8 - 9 PM",
        key: 6
      }
    ]
  };
  
  componentDidMount() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    this.setState({
      //Setting the value of the date time
      date:
        "Today is: " + month + "/" + date + "/" + year
    });
  };

  handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      // this is just random filler for the template, but this is where what the user sees is rendered
      <View style={styles.container}>
        <ProfileBar name={JSON.stringify(this.props.userData['name']).replace(/['"]+/g, '')}/>
        <View style={styles.dateBar}>
          <Text style={styles.dateText}>{this.state.date}</Text>
        </View>
        <ScrollView>
          {this.state.lessonsList.map(student => (
            <ScheduledEventCell 
                name = { student.name }
                time = { student.time }
                key = { student.key }
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  dateBar: {
    height: deviceHeight / 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderColor: "#eeeced"
  },
  dateText: {
    fontSize: 18,
    color: "#838081",
    fontFamily: "HelveticaNeue-Medium",
    marginTop: 5
  },
});

//this lets the component get imported other places
export default TeacherDash;
