function Deposit() {
    const [deposit, setDeposit]       = React.useState('');
    const [show, setShow]         = React.useState(true);
    const buttonText = "Deposit";
    const successMessage = "You have successfully made a deposit.";
    const successButton = "Make another deposit";

    const handle = function() {
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
            deposit={[deposit, setDeposit, true]}
            show={[show, setShow]}
            showSubmit={true}
            buttonText={buttonText}
            handle={handle}
            successMessage={successMessage}
            successButton={successButton}
        />
    )
}