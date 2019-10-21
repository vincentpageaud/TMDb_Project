import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Accueil from './Accueil'

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={() => <Accueil />} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App