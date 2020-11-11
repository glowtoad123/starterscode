import React from "react"
import { Link } from "gatsby"
import firebase from 'firebase';
import * as firebaseui from 'firebaseui'
import Nav from '../components/nav'
import SEO from "../components/seo"

export default function IndexPage(){

  !firebase.apps.length && firebase.initializeApp({
    apiKey: 'AIzaSyCPVubMZ9UNNbLTHr8EED_rN9lwzb4Hx98',
    authDomain: 'https://console.firebase.google.com/project/starterscode/firestore',
    projectId: 'starterscode',
  });

  var db = firebase.firestore();

  var uiConfig = {
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: '/plates',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
      window.location.assign('/plates');
    }
  };

  // Initialize the FirebaseUI Widget using Firebase.
  !firebase.apps.length && firebaseui.auth.AuthUI(firebase.auth()).start('#firebaseui-auth-container', uiConfig);
  // The start method will wait until the DOM is loaded.
/*   ui.start('#firebaseui-auth-container', uiConfig); */

!firebase.apps.length && firebaseui.auth.AuthUI(firebase.auth()).isPendingRedirect() &&
    firebaseui.auth.AuthUI(firebase.auth()).start('#firebaseui-auth-container', uiConfig);

  return(
      <>
      <SEO title="Starterscode" />
      <Nav />
      <div id="editor">
      </div>
      <div id="firebaseui-auth-container"></div>
    </>
  )
}