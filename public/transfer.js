function Transfer() {
    const [transfer, setTransfer]             = React.useState('');
    const [receiverEmail, setReceiverEmail]   = React.useState('');
    const [show, setShow]                     = React.useState(true);
    const [successMessage, setSuccessMessage] = React.useState(''); 
    const [successButton, setSuccessButton]   = React.useState('Make another transfer');
    const showBalance = true;
    const header = "Transfer"
    const buttonText = "Transfer";
    const context = React.useContext(UserContext);
    const senderEmail = context.myUser.user.email;
    const setCtx = context.setMyUser;

    const handle = function() {
        var allData = null;

        // first get all the data
        const url = '/account/all';
        (async () => {
            var res = await fetch(url);
            var allData = await res.json();

            // if the receiver account is present
            if(allData.filter( item => (item.email === receiverEmail) ).length !== 0) {

                //deposit money to receiver account
                const urlDeposit = `/account/deposit/${receiverEmail}/${transfer}`;
                (async () => {
                    var res = await fetch(urlDeposit);
                    var receiverData = await res.json();
                    console.log(receiverData);
                })();

                // withdraw from the sender account
                const urlWithdrawal = `/account/withdrawal/${senderEmail}/${transfer}`;
                (async () => {
                    var res = await fetch(urlWithdrawal);
                    var data = await res.json();
                    console.log(data);
                    setCtx({user:data});
                })();

                // set the success message
                setSuccessMessage(`You have successfully transfered money to member with email: ${receiverEmail}.`);
            
            // if the receiver account is not present
            } else {
                // set meassage to indicate somehting went wrong             
                setSuccessMessage('Something went Wrong');
                setSuccessButton('Try Again');
            }

            clearForm();
            setShow(false);
        })();
    }

    return (
        <Card
            bgcolor="primary"
            header={header}
            showBalance = {showBalance}
            transfer={[transfer, setTransfer, true]}
            email={[receiverEmail, setReceiverEmail, true]}
            show={[show, setShow]}
            showSubmit={true}
            buttonText={buttonText}
            handle={handle}
            successMessage={successMessage}
            successButton={successButton}
        />
    )
}