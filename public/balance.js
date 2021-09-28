function Balance() {
    const [show, setShow] = React.useState(true);
    const showBalance = true;
    const header = "Withdrawal"
    
    return (
        <Card
            bgcolor="primary"
            header={header}
            showBalance = {showBalance}
            show={[show, setShow]}
        />
    )
}