function Spa(){
    return(
        <HashRouter>
            <div>
                <NavBar/>
                <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
                    <div className="container" style={{padding: "20px"}}>
                        <Rout path="/"         exact component={Home}/>
                        <Rout path="/createaccount/" component={CreateAccount}/>
                        <Rout path="/login/"         component={Login}/>
                        <Rout path="/deposit/"       component={Deposit}/>
                        <Rout path="/withdraw/"      component={Withdraw}/>
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