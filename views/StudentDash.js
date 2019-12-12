import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";
import ProfileBar from './subComponents/ProfileBar'
import * as firebase from 'firebase';

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

class StudentDash extends React.Component {

  state = {
    date: "",
    inputValue: "",
    teacherDashDisplay: "block",
    teacherProfileScrollDisplay: "none",    

    //this will have to be loaded in from props.userdata  
    lessonsList: [
      {
        name: "Grace Jacobs",
        time: "11 - 12 PM"
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

  handleCalendarPress = () => {
    Actions.TeacherCalendar({userData: this.props.userData});
  };
  handleCalendarStudentPress = () => {
    Actions.SudentCalendar({userData: this.props.userData});
  };
  handleProfilePress = () => {
    Actions.TeacherList({userData: this.props.userData});
  };

  render() {
    return (
      <View style={styles.container}>
        <ProfileBar name={JSON.stringify(this.props.userData['name']).replace(/['"]+/g, '')}/>
        <View style={styles.dateBar}>
          <Text style={styles.dateText}>{this.state.date}</Text>
        </View>
        <ScrollView>
          {this.state.lessonsList.map(student => (
            <View key={student.name} style={styles.listContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{student.name}</Text>
                <Text style={styles.infoText}>{student.time}</Text>
              </View>
            </View>
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
    height: deviceHeight / 10,
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

  icon: {
    width: deviceWidth / 12,
    height: deviceWidth / 12,
    margin: 5
  }
});

//this lets the component get imported other places
export default StudentDash;
