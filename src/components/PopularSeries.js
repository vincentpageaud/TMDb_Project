import React from 'react'
import SettingsTmdbApi from '../SettingsTmdbApi'
import Card from './Card'
import {FaSpinner} from 'react-icons/fa'

class PopularSeries extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        replyApi: []
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${SettingsTmdbApi.apiKey}&language=${SettingsTmdbApi.language}&page=1`)
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
                    title={item.name}
                    overview={item.overview.substr(0, 80) + "..."}
                    item={item} >
                </Card> ).slice(0, 8)
            return reply
        }
        
        if (error) {
            return <div>Error : {error.message}</div>
        } else if (!isLoaded) {
            return (
                <section className="container">
                    <h4>Popular TV shows</h4>
                    <hr />
                    <div className="d-flex justify-content-center">
                        <FaSpinner className="spinner" />
                    </div>
                </section>
            )
        } else {
            return (
                <section className="container">
                    <h4>Popular TV shows</h4>
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