import React from 'react'
import ParamsTmdbApi from '../ParamsTmdbApi'
import Card from './Card'
import {FaSpinner} from 'react-icons/fa'

class LatestMovies extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        replyApi: []
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ParamsTmdbApi.apiKey}&language=${ParamsTmdbApi.language}&page=1&region=${ParamsTmdbApi.region}`)
            .then(res => res.json())
            .then(
            (result) => {
                    this.setState({
                    isLoaded: true,
                    replyApi: result
                })
            },
            (error) => {
                    this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    render() {
        const {error, isLoaded, replyApi} = this.state
        const cards = () => {
            let reply = []
            let i = 0

            for(let result of replyApi.results){
                if(i < 8){
                    reply.push(<Card key={i++} result={result} />)
                }
            }

            return reply
        }
        
        if (error) {
            return <div>Erreur : {error.message}</div>
        } else if (!isLoaded) {
            return (
                <section className="container">
                    <FaSpinner className="spinner" />
                </section>
            )
        } else {
            return (
                <section className="container">
                    <h4>Derniers films au cinéma</h4>
                    <hr />
                    <div className="row m-3 mt-6">
                        {cards()}
                    </div>
                </section>
            )
        }
    }
}

export default LatestMovies