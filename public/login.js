function Login() {
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow]         = React.useState(true);
    const buttonText = "Login";
    const successMessage = "You have successfully logged in.";
    const successButton = "Sign out";

    import { initializeApp } from "firebase/app";


    const handle = function() {
        const firebaseConfig = {
            apiKey: "AIzaSyDJSTyduBDbfLu0aciBQjSQWnvZb8Q78RM",
            authDomain: "bank-firbase-project.firebaseapp.com",
            projectId: "bank-firbase-project",
            storageBucket: "bank-firbase-project.appspot.com",
            messagingSenderId: "32299882540",
            appId: "1:32299882540:web:e92e65a2a66c9af63d9989"
        };
        
        const app = initializeApp(firebaseConfig);
        
        // const url = `/account/create/${name}/${email}/${password}`;
        // (async () => {
        //     var res = await fetch(url);
        //     var data = await res.json();
        //     console.log(data);
        // })();
        clearForm();
        setShow(false);
    }

    return (
        <Card
            bgcolor="primary"
            header="Login"
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