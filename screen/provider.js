import { signInWithEmailAndPassword } from "firebase/auth";



signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // User signed in successfully
    const user = userCredential.user;
    console.log(`User ${user.uid} signed in`);
  })
  .catch((error) => {
    // Handle sign-in error
    console.error(error);
  }); 


