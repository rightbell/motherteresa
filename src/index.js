import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './Components/AboutUs';
import AimsandObjective from './Components/AimsandObjective';
import Directormessage from './Components/Directormessage';
import Principaldesk from './Components/Principaldesk';
import Achievements from './Components/Achievements';
import Activities from './Components/Achievements';
import Admission from './Components/Admission';
import Career from './Components/Career';
import Contact from './Components/Contact';
import Download from './Components/Download';
import Faculty from './Components/Faculty';
import Holiday from './Components/Holiday';
import NCC from './Components/NCC';
import PrintMedia from './Components/PrintMedia';
import Snapshots from './Components/Snapshots';
import SocialMedia from './Components/SocialMedia';
import Syllabus from './Components/Syllabus';
import Updates from './Components/Updates';
import Alumini from './Components/Alumini';
import Videos from './Components/Videos';
import helpdesk from './Components/helpdesk';
import Infrastructure from './Components/Infrastructure';
import feedback from './Components/feedback';
import studenthelp from './Components/studenthelp';
import Adminlogin from './Components/Adminlogin';
import Academic from './Components/Academic';
import Mediaroom from './Components/Mediaroom';
import GeneralInformation from './Components/Adminaccess/GeneralInformation';
import Documents from './Components/Adminaccess/Documents';
import Results from './Components/Adminaccess/Results';
import StaffTeaching from './Components/Adminaccess/StaffTeaching';
import SchoolInfrastructure from './Components/Adminaccess/SchoolInfrastructure';
import Onlinefee from './Components/Onlinefee';
import reportWebVitals from './reportWebVitals';

import { getAuth, onAuthStateChanged } from "firebase/auth";

import AdminDashboard from './Components/adminDashboard';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD02SmBCQTjcnX9a9kiA_9O4fvD0hEq4gk",
  authDomain: "motherteresa-d7f08.firebaseapp.com",
  projectId: "motherteresa-d7f08",
  storageBucket: "motherteresa-d7f08.appspot.com",
  messagingSenderId: "339180107303",
  appId: "1:339180107303:web:c8678d3b1c25b463250002"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const ProtectedRoute = ({component, path}) => {
  console.log('Component', component)
  const auth = getAuth();
  const [userState, setUserState] = React.useState(1);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('user exist', user, uid)
        setUserState(true)
        // ...
      } else {
        console.log('user logout', user);
        // User is signed out
        // ...
      }
    });
  }, [])
  if(userState === 1 ) {
    return <div>Loading....</div>
  }
  return userState ? <Route path={path} component={component} />: <Redirect to="/" />
}
ReactDOM.render(
  <React.StrictMode>
  <Router>
      
      <Switch>
       
        <Route exact path="/" component={App} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/AimsandObjective" component={AimsandObjective} />
        <Route path="/Directormessage" component={Directormessage} />
        <Route path="/Principaldesk" component={Principaldesk} />
        <Route path="/Achievements"  component={Achievements}/>
        <Route path="/Activities"   component={Activities}/>
        <Route path="/Admission" component={Admission}/>
        <Route path="/Career" component={Career}/>
        <Route path="/Contact" component={Contact} />
        <Route path="/Download" component={Download} />
        <Route path= "/Faculty" component={Faculty} />
        <Route path="/Infrastructure"component={Infrastructure}/>
        <Route path="/Holiday" component={Holiday} />
        <Route path="/NCC" component={NCC} />
        <Route path="/PrintMedia" component={PrintMedia} />
        <Route path="/Snapshots" component={Snapshots}/>
        <Route path="/SocialMedia" component={SocialMedia}/>
        <Route path="/Syllabus" component={Syllabus}/>
        <Route path="/Updates" component={Updates}/>
        <Route path="/Alumini" component={Alumini}/>
        <Route path="/Helpdesk" component={helpdesk}/>
        <Route path="/Feedback" component={feedback}/>
        <Route path="/studenthelp" component={studenthelp}/>
        <Route path="/Adminlogin" component={Adminlogin}/>
        <Route path="/Videos" component={Videos}/>
        <Route path="/Academic" component={Academic}/>
        <Route path="/Mediaroom" component={Mediaroom}/>
        <Route path="/GeneralInformation" component={GeneralInformation}/>
        <Route path="/Documents" component={Documents}/>
        <Route path="/Results" component={Results}/>
        <Route path="/StaffTeaching" component={StaffTeaching}/>
        <Route path="/SchoolInfrastructure" component={SchoolInfrastructure}/>
        <Route path="/Onlinefee" component={Onlinefee}/>
        <ProtectedRoute 
          path="/Dashboard"
          component={AdminDashboard}
        />
        </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
