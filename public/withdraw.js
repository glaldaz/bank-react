function Withdraw() {
    const [withdrawal, setWithdrawal] = React.useState('');
    const [show, setShow]             = React.useState(true);
    const showBalance = true;
    const header = "Withdrawal"
    const buttonText = "Withdraw";
    const successMessage = "You have successfully made a withdrawal.";
    const successButton = "Make another withdrawal";
    const context = React.useContext(UserContext);
    const email = context.myUser.user.email;
    const setCtx = context.setMyUser;

    const handle = function() {
        const url = `/account/withdrawal/${email}/${withdrawal}`;
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
            withdrawal={[withdrawal, setWithdrawal, true]}
            show={[show, setShow]}
            showSubmit={true}
            buttonText={buttonText}
            handle={handle}
            successMessage={successMessage}
            successButton={successButton}
        />
    )
}