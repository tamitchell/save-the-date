import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';

export default Firebase;

export { FirebaseContext, withFirebase };

//Why an index.js file? 
//consumers (React components in our case) should be only allowed 
//to access the index.js file as the sole interface 
//to the entire Firebase module (src/firebase/), 
//and should not access the auth or firebase files directly.