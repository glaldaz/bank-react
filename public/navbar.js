
const UserContext = React.createContext('');

function NavBar(){
  const ctx = React.useContext(UserContext);
  console.log(ctx);
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {ctx && <li className="nav-item">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>}
            {ctx && <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>}
            {ctx && <li className="nav-item">
              <a className="nav-link" href="#/balance/">Balance</a>
            </li>}
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </li>          
          </ul>

          <ul className="navbar-nav ml-auto">
            {ctx && <li className="nav-item">
              <a className="nav-link" href="#/balance/">{ctx}</a>
            </li>}
            {ctx &&<li className="nav-item">
              <a className="nav-link" href="">Sign Out</a>
            </li>}
            {!(ctx) && <li className="nav-item">
              <a className="nav-link" href="#/login/">Login</a>
            </li>}
            {!(ctx) && <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>}
          </ul>
        </div>
      </nav>
  
    );
  }