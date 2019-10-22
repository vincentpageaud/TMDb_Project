import React from 'react'
import Modal from './Modal'

class Card extends React.Component {
    state = {
        isToggleOn: false
    }

    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render(){
        const {poster_path, title, overview, item} = this.props
        
        const toggleModal = (handleClick) => {
            if(this.state.isToggleOn){
                return <Modal handleClick={handleClick.bind(this)} title={title} item={item} />
            }else{
                return ""
            }
        }

        return(
            <>
                <div className="col-sm-3 mb-4">
                    <div className="card">
                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} title={title} />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{overview}</p>
                            <button type="button" className="btn btn-block btn-primary btn-sm" 
                                onClick={this.handleClick.bind(this)}>See more</button>
                        </div>
                    </div>
                </div>
                {toggleModal(this.handleClick)}
            </>
        )
    }
}

export default Card