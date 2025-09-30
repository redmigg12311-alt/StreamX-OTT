  // 1️⃣ Firebase Config
  const firebaseConfig = {
      apiKey: "AIzaSyC3gDinL_yG_oO9SRalk4uX5Inp9jn2ZEA",
      authDomain: "streamxlogin-5fddb.firebaseapp.com",
      projectId: "streamxlogin-5fddb",
      storageBucket: "streamxlogin-5fddb.appspot.com",
      messagingSenderId: "194874847275",
      appId: "1:194874847275:web:4d6bb0f280893edb8e7a6e",
      measurementId: "G-2QLZCB09ZC"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // 2️⃣ Set Firebase persistence
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => console.log("Firebase persistence set to LOCAL"))
      .catch(err => console.error(err));

  // 3️⃣ Protect page
  const currentPath = window.location.pathname.split("/").pop();

  firebase.auth().onAuthStateChanged(user => {
      if (user) {
          // ✅ User is logged in, allow access
          console.log("User logged in:", user.email);
          localStorage.setItem("streamxUser", "loggedIn");
      } else {
          // ❌ User not logged in, redirect to login
          localStorage.removeItem("streamxUser");
          if (currentPath !== "login.html") {
              window.location.replace("login.html");
          }
      }
  });