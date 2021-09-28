const Rout        = ReactRouterDOM.Route;
const link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext();

function Card(props){

    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor: ' ';
        const txt = props.txtcolor ? ' text' + props.txtcolor: ' text-white';
        return 'card mb-3 ' + bg + txt;
    }
    const [show, setShow] = (props.show ? props.show : [false, null]);

    return (
        <div className={classes()} style={{maxwidth: "18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}<br/>
                {props.showImage && (<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
                {show ? <CreateForm
                    name = {props.name}
                    email={props.email}
                    password={props.password}
                    deposit={props.deposit}
                    withdrawal={props.withdrawal}
                    transfer={props.transfer}
                    showBalance={props.showBalance}
                    showSubmit={props.showSubmit}
                    buttonText={props.buttonText}
                    handle={props.handle}
                ></CreateForm> :
                <CreateMsg
                    autoFire={props.autoFire}
                    setShow={setShow}
                    successText={props.successText}
                    showBalance={props.showBalance}
                    successMessage={props.successMessage}
                    successButton={props.successButton}
                ></CreateMsg>}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    );
}

function CreateMsg(props) {
    const context = React.useContext(UserContext);
    const ctx = context.myUser.user;


    if(props.successMessage === 'Signing Out...') props.autoFire();

    return(<>
            <h5>{props.successMessage}</h5>

            {props.showBalance &&
                <div>
                    Your balance is: ${ctx.balance}<br/><br/>
                </div>}
            
            {props.successButton &&
            <button type="submit" 
                className="btn btn-light" 
                onClick={() => props.setShow(true)}>{props.successButton}</button>}
        </>)
}

function CreateForm(props) {
    const [name,       setName,       showName]       = (props.name       ? props.name       : [null, null, false]);
    const [email,      setEmail,      showEmail]      = (props.email      ? props.email      : [null, null, false]);
    const [password,   setPassword,   showPassword]   = (props.password   ? props.password   : [null, null, false]);
    const [deposit,    setDeposit,    showDeposit]    = (props.deposit    ? props.deposit    : [null, null, false]);
    const [withdrawal, setWithdrawal, showWithdrawal] = (props.withdrawal ? props.withdrawal : [null, null, false]);
    const [transfer,   setTransfer,   showTransfer]   = (props.transfer   ? props.transfer   : [null, null, false]);
    const showBalance = props.showBalance;
    const showSubmit = props.showSubmit;
    const buttonText = props.buttonText;
    const context = React.useContext(UserContext);
    const ctx = context.myUser.user;

    return (<>
        {showName &&
        <div>
            Name<br/>
            <input type="input"
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={e => setName(e.currentTarget.value)} /><br/>
        </div>}

        {showBalance &&
        <div>
            Your balance is: ${ctx.balance}<br/><br/>
        </div>}

        {showTransfer &&
            <div>Enter the email of the receiver: <br/><br/></div>}
        
        {showEmail &&
        <div>
            Email address<br/>
            <input type="input"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)} /><br/>
        </div>}
        
        {showPassword &&
        <div>
            Password<br/>
            <input type="input"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.currentTarget.value)} /><br/>
        </div>}

        {showDeposit &&
        <div>
            Deposit<br/>
            <input type="input"
                className="form-control"
                placeholder="Enter deposit Amount"
                value={deposit}
                onChange={e => setDeposit(e.currentTarget.value)} /><br/>
        </div>}

        {showWithdrawal &&
        <div>
            Withdrawal<br/>
            <input type="input"
                className="form-control"
                placeholder="Enter withdrawal Amount"
                value={withdrawal}
                onChange={e => setWithdrawal(e.currentTarget.value)} /><br/>
        </div>}

        {showTransfer &&
        <div>
            Transfer<br/>
            <input type="input"
                className="form-control"
                placeholder="Enter transfer Amount"
                value={transfer}
                onChange={e => setTransfer(e.currentTarget.value)} /><br/>
        </div>}

        {showSubmit &&
        <div>
            <button type="submit"
                className="btn btn-light"
                onClick={props.handle}>{buttonText}</button>
        </div>}
    </>);
}

function clearForm() {
    let inputs = document.getElementsByClassName('form-control');
    for (let input of inputs) {
        input.value = "";
    }
}