import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={() => <Home />} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App