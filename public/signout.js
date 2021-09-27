function Signout() {
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow]         = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState('Signing Out...');
    const header = "Sign out";
    const successButton = "";
    const context = React.useContext(UserContext);
    const setCtx = context.setMyUser;

    const autoFire = function() {
        console.log("autofire signout");
        const auth = firebase.auth();
        auth.signOut()
            .then( () => {
                console.log("signed out");
                setSuccessMessage("You have successfully signed out.");
                setCtx({user:null});
            }).catch((error) => {
                console.log("an error happened");
                setSuccessMessage("an erro happened");
                console.log(error);
            });
    }

    return (
        <Card
            bgcolor="primary"
            header={header}
            email={[email, setEmail, true]}
            password={[password, setPassword, true]}
            show={[show, setShow]}
            showSubmit={true}
            autoFire={autoFire}
            successMessage={successMessage}
            successButton={successButton}
        />
    )
}