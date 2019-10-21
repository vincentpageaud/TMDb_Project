import React from 'react'
import Modal from './Modal'

class Card extends React.Component {
    state = {
        isToggleOn: false
    }

    handleClick(e) {
        e.preventDefault()

        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render(){
        const {poster_path, title, overview} = this.props
        
        const toggleModal = () => {
            if(this.state.isToggleOn){
                return <Modal />
            }else{
                return ""
            }
        }

        return(
            <div className="col-sm-3 mb-4">
                <div className="card">
                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} title={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{overview}</p>
                        <button type="button" className="btn btn-block btn-primary btn-sm" onClick={this.handleClick.bind(this)}>See more</button>
                    </div>
                </div>
                {toggleModal()}
            </div>
        )
    }
}

export default Card