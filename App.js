import React from 'react';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import * as firebase from 'firebase';

import LaunchScreen from './views/LaunchScreen'
import Login from './views/Login'
import Register from './views/Register'
import StudentDash from './views/StudentDash'
import TeacherDash from './views/TeacherDash'
import ListOfTeachers from './views/ListOfTeachers'

export default function App() {

  const firebase = require("firebase");
  const firebaseConfig = {
    apiKey: "AIzaSyBxNgaiPS_gdg_M-A7TMsFEwJjmqg88sRA",
    authDomain: "rehearse-c7c14.firebaseapp.com",
    databaseURL: "https://rehearse-c7c14.firebaseio.com",
    projectId: "rehearse-c7c14",
    storageBucket: "rehearse-c7c14.appspot.com",
    messagingSenderId: "506122331327",
    appId: "1:506122331327:web:b720a916641a314907120a",
    measurementId: "G-180GGXR061"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  return (
    <Router>
      <Scene key='root'>
        <Scene
          key = 'LaunchScreen'
          component = { LaunchScreen }
          hideNavBar = { true }
        />
        <Scene
          key = 'Login'
          component = { Login }
          hideNavBar = { true }
        />
        <Scene
          key = 'Register'
          component = { Register }
          hideNavBar = { true }
        />
        <Scene key= 'StudentMain' hideNavBar = { true } tabs={true} wrap={false}>
            <Scene 
              key = 'StudentDash'
              component = { StudentDash }
              tabBarLabel = 'Me'
              hideNavBar = { true }
              gesturesEnabled = { false }
            />
            <Scene 
              key = 'ListOfTeachers'
              component = { ListOfTeachers }
              tabBarLabel = 'teachers'
              hideNavBar = { true }
              gesturesEnabled = { false }
            />
        </Scene>
        <Scene key='TeacherMain' hideNavBar = { true } tabs={true} wrap={false}>
          <Scene
            key = 'TeacherDash'
            component = { TeacherDash }
            tabBarLabel = 'Me'
            hideNavBar = { true }
            gesturesEnabled = { false }
          />
        </Scene>
      </Scene>
    </Router>
  );
}
