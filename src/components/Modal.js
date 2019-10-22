import React from 'react'

class Modal extends React.Component {
    render(){
        const onClick = () => {
            this.props.handleClick()
        }
        return (
            <div className="modal-cards">
                <div className="bg-light fixed-top fixed-bottom m-5 rounded">
                    <div className="card-header">
                        {this.props.title}
                        <button type="button" className="close" aria-label="Close" onClick={onClick.bind(this)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <img className="card-img-top mt-4 mb-2" 
                                    src={`https://image.tmdb.org/t/p/w500${this.props.item.poster_path}`} 
                                    alt={this.props.title} title={this.props.title} />
                            </div>
                            <div className="col-9">
                                <ul className="list-group list-group-flush mt-4 mb-2">
                                    <li className="list-group-item bg-dark text-light">Original language: <i>{this.props.item.original_language}</i></li>
                                    <li className="list-group-item bg-dark text-light">Rating: <i>{this.props.item.vote_average}/10</i></li>
                                    <li className="list-group-item bg-dark text-light">Nombre de votes: <i>{this.props.item.vote_count}</i></li>
                                </ul>
                            </div>
                        </div>
                        <p className="lead"><i>{this.props.title}</i></p>
                        <p>{this.props.item.overview}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;