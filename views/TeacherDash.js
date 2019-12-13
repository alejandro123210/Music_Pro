//Teacher Dash screen is the main screen on the teacher side of the app
//has to 3 link buttons but two of them link to the same screen for now
import React from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
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
        key: 0,
        instrument: 'euphonium'
      },
      {
        name: "V Cookson",
        time: "12 - 1  PM",
        key: 1,
        instrument: 'trombone'
      },
      {
        name: "B Jacobs",
        time: "2- 3 PM",
        key: 2,
        instrument: 'trumpet'
      },
      {
        name: "Grace W",
        time: "3:30 - 4:30 PM",
        key: 3,
        instrument: 'bass trombone'
      },
      {
        name: "Sa Jacobs",
        time: "5 - 6 PM",
        key: 4,
        instrument: 'bass'
      },
      {
        name: "Grace S",
        time: "7 - 7:30 PM",
        key: 5,
        instrument: 'piano'
      },
      {
        name: "D Jacobs",
        time: "8 - 9 PM",
        key: 6,
        instrument: 'guitar'
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
        <ProfileBar 
            name={JSON.stringify(this.props.userData['name']).replace(/['"]+/g, '')}
            image="https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-facebook-1.jpg?quality=85"
        />
        <View style={styles.dateBar}>
          <Text style={styles.dateText}>{this.state.date}</Text>
        </View>
        <ScrollView>
          {this.state.lessonsList.map(student => (
            <ScheduledEventCell 
                name = { student.name }
                time = { student.time }
                key = { student.key }
                instrument = { student.instrument }
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
