const UserContext = React.createContext('');

function CreateAccount(){
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow]         = React.useState(true);
    const buttonText = "Create Account";
    const successMessage = "You have successfully created your Account.";
    const successButton = "Add another account";

    const context = React.useContext(UserContext);
    const setCtx = context.setMyUser;

    const handle = function() {

        //Add firebase user
        const firebaseConfig = {
            apiKey: "AIzaSyDJSTyduBDbfLu0aciBQjSQWnvZb8Q78RM",
            authDomain: "bank-firbase-project.firebaseapp.com",
            projectId: "bank-firbase-project",
            storageBucket: "bank-firbase-project.appspot.com",
            messagingSenderId: "32299882540",
            appId: "1:32299882540:web:e92e65a2a66c9af63d9989"
        };
        
        firebase.initializeApp(firebaseConfig);

        const auth = firebase.auth();
        auth.createUserWithEmailAndPassword(email, password);
        
        // login state
        let onAuthStatCalled = false;
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                if(!onAuthStatCalled) {
                    //console.log(name, email, password);
                    const url = `/account/create/${name}/${email}/${password}`;
                    (async () => {
                        var res = await fetch(url);
                        var data = await res.json();
                        setCtx({user:data});
                        console.log("ctx is: ");
                        console.log(context.myUser);
                    })();
                    setShow(false);
                }
                onAuthStatCalled = true;
            }
            else {
                console.log('User is not logged in');
            }
        })
    }

    return (
        <Card
            bgcolor="primary"
            header="Create Account"
            name = {[name, setName, true]}
            email={[email, setEmail, true]}
            password={[password, setPassword, true]}
            show={[show, setShow]}
            showSubmit={true}
            buttonText={buttonText}
            handle={handle}
            successMessage={successMessage}
            successButton={successButton}
        />
    )
}