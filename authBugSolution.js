let unsubscribe;

const authListener = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("User signed in:", uid);
      // ...
    } else {
      // User is signed out
      // ...
      console.log("User signed out");
    }
  });
};

// Call the listener to set up
 authListener();

// ... later, when you no longer need the listener...

// unsubscribe from onAuthStateChanged to prevent memory leaks
unsubscribe();