import React from 'react'
import ParamsTmdbApi from '../ParamsTmdbApi'
import Card from './Card'
import {FaSpinner} from 'react-icons/fa'

class PopularSeries extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        replyApi: []
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${ParamsTmdbApi.apiKey}&language=${ParamsTmdbApi.language}&page=1`)
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
            
            reply = replyApi.results.map((item) => <Card
                    key={item.id}
                    poster_path={item.poster_path}
                    title={item.title}
                    overview={item.overview} >
                </Card> ).slice(0, 8)

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
                    <h4>Séries populaires</h4>
                    <hr />
                    <div className="row m-3 mt-6">
                        {cards()}
                    </div>
                </section>
            )
        }
    }
}

export default PopularSeries