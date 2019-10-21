import React from 'react'
import Search from './Search'

class Introduction extends React.Component{
    state = {
        valueSearch: ""
    }

    handleChange(e){
        this.setState({
            valueSearch: e.target.value
        })
    }

    render(){
        console.log(this.state.valueSearch)
        return(
            <section className="jumbotron">
                <div className="container">
                    <h1 className="display-5">Bienvenue sur TMDb_Project !</h1>
                    <p className="lead">Ton site référence sur les films et séries.</p>
                    <hr />
                    <form className="form-inline">
                        <input id="input-movie" className="col-sm-12 form-control" 
                            type="search" placeholder="Recherche par film, série ou acteur..." 
                            aria-label="Search" onChange={this.handleChange.bind(this)} />
                    </form>
                    <Search keywords={this.state.valueSearch} />
                </div>
            </section>
        )
    }
}

export default Introduction