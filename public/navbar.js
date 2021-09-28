
const UserContext = React.createContext('');

function NavBar(){
  const context = React.useContext(UserContext);
  const ctx = context.myUser;
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {ctx.user && <li className="nav-item">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>}
            {ctx.user && <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>}
            {ctx.user && <li className="nav-item">
              <a className="nav-link" href="#/balance/">Balance</a>
            </li>}
            {ctx.user && <li className="nav-item">
              <a className="nav-link" href="#/transfer/">Transfer</a>
            </li> }
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </li>          
          </ul>

          <ul className="navbar-nav ml-auto">
            {ctx.user && <li className="nav-item">
              <a className="nav-link" href="#/balance/">{ctx.user.name}</a>
            </li>}
            {ctx.user &&<li className="nav-item">
              <a className="nav-link" href="#/signout">Sign Out</a>
            </li>}
            {!(ctx.user) && <li className="nav-item">
              <a className="nav-link" href="#/login/">Login</a>
            </li>}
            {!(ctx.user) && <li className="nav-item">
              <a className="nav-link" href="#/createaccount/">Create Account</a>
            </li>}
          </ul>
        </div>
      </nav>
  
    );
  }