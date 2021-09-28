function Spa(){
    const [myUser, setMyUser] = React.useState({user:null});
    return(
        <HashRouter>
            <div>
                <UserContext.Provider value={{myUser, setMyUser}}>
                    <NavBar/>
                    <div className="container" style={{padding: "20px"}}>
                        <Rout path="/"         exact component={Home}/>
                        <Rout path="/createaccount/" component={CreateAccount}/>
                        <Rout path="/signout"        component={Signout}/>
                        <Rout path="/login/"         component={Login}/>
                        <Rout path="/deposit/"       component={Deposit}/>
                        <Rout path="/withdraw/"      component={Withdraw}/>
                        <Rout path="/transfer/"      component={Transfer}/>
                        <Rout path="/balance/"       component={Balance}/>
                        <Rout path="/alldata"        component={AllData}/>
                    </div>
                </UserContext.Provider>
            </div>
        </HashRouter>
    )
}

ReactDOM.render(<Spa/>,
    document.getElementById('root')
);