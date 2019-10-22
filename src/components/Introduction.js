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

    handleSubmit(e) {
        e.preventDefault();
    }

    render(){
        return(
            <section className="jumbotron">
                <div className="container">
                    <h1 className="display-5">Welcome to TMDb_Project !</h1>
                    <p className="lead">Your reference on movies and series.</p>
                    <hr />
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <input id="input-movie" className="col-sm-12 form-control" 
                            type="search" placeholder="Search by movie, TV show or actor..." 
                            aria-label="Search" onChange={this.handleChange.bind(this)} />
                    </form>
                    <Search keywords={this.state.valueSearch} />
                </div>
            </section>
        )
    }
}

export default Introduction