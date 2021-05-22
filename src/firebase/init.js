import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyBBlGECHZK3d_dF-pvVW9vbnMB7OL3uio0',
  authDomain: 'cafe-boba.firebaseapp.com',
  projectId: 'cafe-boba',
  storageBucket: 'cafe-boba.appspot.com',
  messagingSenderId: '365268196688',
  appId: '1:365268196688:web:88a92a59351109f7266055',
  measurementId: 'G-MQNSCP11F3'
}

firebase.initializeApp(config)
