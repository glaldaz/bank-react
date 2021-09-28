function Login() {
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow]         = React.useState(true);
    const header = "Login";
    const buttonText = "Login";
    const successMessage = "You have successfully logged in.";
    const context = React.useContext(UserContext);
    const setCtx = context.setMyUser;

    const handle = function() {
        const firebaseConfig = {
            apiKey: "AIzaSyDJSTyduBDbfLu0aciBQjSQWnvZb8Q78RM",
            authDomain: "bank-firbase-project.firebaseapp.com",
            projectId: "bank-firbase-project",
            storageBucket: "bank-firbase-project.appspot.com",
            messagingSenderId: "32299882540",
            appId: "1:32299882540:web:e92e65a2a66c9af63d9989"
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const url = `/account/one/${email}`;
                (async () => {
                    var res = await fetch(url);
                    var data = await res.json();
                    console.log(data);
                    setCtx({user:data});
                })();
                setShow(false);
                clearForm();
            })
            .catch((error) => {
                console.log('User is not logged in');
            })
    }

    return (
        <Card
            bgcolor="primary"
            header={header}
            email={[email, setEmail, true]}
            password={[password, setPassword, true]}
            show={[show, setShow]}
            showSubmit={true}
            buttonText={buttonText}
            handle={handle}
            successMessage={successMessage}
        />
    )
}