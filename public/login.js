function Login() {
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow]         = React.useState(true);
    const buttonText = "Login";
    const successMessage = "You have successfully logged in.";
    const successButton = "Sign out";

    const handle = function() {
        console.log(email, password);
        // const url = `/account/create/${name}/${email}/${password}`;
        // (async () => {
        //     var res = await fetch(url);
        //     var data = await res.json();
        //     console.log(data);
        // })();
        // setShow(false);
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