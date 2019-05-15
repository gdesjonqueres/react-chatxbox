import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyChNSbjbCgL098IJ36Y0u8AvEUa3KvfVEU",
  authDomain: "chatbox-app-ff7ee.firebaseapp.com",
  databaseURL: "https://chatbox-app-ff7ee.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base