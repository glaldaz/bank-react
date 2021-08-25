function Spa(){
    return(
        <HashRouter>
            <div>
                <NavBar/>
                <div className="container" style={{padding: "20px"}}>
                    <Rout path="/"         exact component={Home}/>
                    <Rout path="/createaccount/" component={CreateAccount}/>
                    <Rout path="/login/"         component={Login}/>
                    <Rout path="/deposit/"       component={Deposit}/>
                    <Rout path="/withdraw/"      component={Withdraw}/>
                    <Rout path="/balance/"       component={Balance}/>
                    <Rout path="/alldata"        component={AllData}/>
                </div>
            </div>
        </HashRouter>
    )
}

ReactDOM.render(<Spa/>,
    document.getElementById('root')
);