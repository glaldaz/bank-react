function Deposit() {
    const [deposit, setDeposit] = React.useState('');
    const [show, setShow]       = React.useState(true);
    const showBalance = true;
    const header = "Deposit"
    const buttonText = "Deposit";
    const successMessage = "You have successfully made a deposit.";
    const successButton = "Make another deposit";
    const context = React.useContext(UserContext);
    const email = context.myUser.user.email;
    const setCtx = context.setMyUser;

    const handle = function() {
        const url = `/account/deposit/${email}/${deposit}`;
        (async () => {
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);
            setCtx({user:data});
        })();
        clearForm();
        setShow(false);
    }

    return (
        <Card
            bgcolor="primary"
            header={header}
            showBalance = {showBalance}
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