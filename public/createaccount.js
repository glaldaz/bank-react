function CreateAccount(){
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow]         = React.useState(true);
    const buttonText = "Create Account";
    const successMessage = "You have successfully created your Account.";
    const successButton = "Add Another account";

    const handle = function() {
        console.log(name, email, password);
        const url = `/account/create/${name}/${email}/${password}`;
        (async () => {
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);
        })();
        setShow(false);
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