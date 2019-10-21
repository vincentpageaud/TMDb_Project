import React from 'react'

class Card extends React.Component {
    render(){
        const {poster_path, title, overview} = this.props
        return(
            <div className="col-sm-3 mb-4">
                <div className="card">
                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} title={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{overview}</p>
                        <button type="button" className="btn btn-block btn-primary btn-sm">See more</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card