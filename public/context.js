const Rout        = ReactRouterDOM.Route;
const link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){

    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor: ' ';
        const txt = props.txtcolor ? ' text' + props.txtcolor: ' text-white';
        return 'card mb-3 ' + bg + txt;
    }
    const [show, setShow] = props.show;

    return (
        <div className={classes()} style={{maxwidth: "18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.txt}</p>)}
                {show ? <CreateForm
                    name = {props.name}
                    email={props.email}
                    password={props.password}
                    showSubmit={props.showSubmit}
                    handle={props.handle}
                ></CreateForm> :
                <CreateMsg
                    setShow={setShow}
                ></CreateMsg>}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    );
}

function CreateMsg(props) {
    return(<>
            <h5>Success</h5>
            <button type="submit" 
                className="btn btn-light" 
                onClick={() => props.setShow(true)}>Add another account</button>
        </>)
}

function CreateForm(props) {
    const [name, setName, showName] = props.name;//[name, setName]         = React.useState('');
    const [email, setEmail, showEmail]= props.email;//[email, setEmail]       = React.useState('');
    const [password, setPassword, showPassword] = props.password;//[password, setPassword] = React.useState('');
    const showSubmit = props.showSubmit;

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
        

        {showSubmit &&
        <div>
            <button type="submit"
                className="btn btn-light"
                onClick={props.handle}>Create Account</button>
        </div>}
    </>);
}