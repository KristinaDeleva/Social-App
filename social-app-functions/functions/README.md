![logo](https://miro.medium.com/max/1024/1*vgy9tD1ixcaztpirUw0QCw.png)

# Installation

2.  NodeJs
    - [Download Nodejs](https://nodejs.org/en/download/)
3.  Package Manager - NPM / Yarn
4.  Activate Firebase Authentication Providers

    `Authentication -> Sign-in-method -> Enable Email provider`

5.  Update the Firebase Database Rules

    `Database -> Rules`

    ```
        allow read, write: if false
        
    ```

6.  Configure your firebase configuration `/util/config.js`

    ```
    export const FireBaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        databaseURL: "YOUR_DATABASE_URL",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_SENDER_ID"
    };
    ```
