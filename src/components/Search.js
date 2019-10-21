import React from 'react'
import ParamsTmdbApi from '../ParamsTmdbApi'
import Card from './Card'

class Search extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        replyApi: []
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${ParamsTmdbApi.apiKey}&language=${ParamsTmdbApi.language}&query=Test&page=1&include_adult=false&region=${ParamsTmdbApi.region}`)
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
        if(this.props.keywords !== ""){
            const {error, isLoaded, replyApi} = this.state
            const cards = () => {
                let reply = []
                let i = 0

                for(let result of replyApi.results){
                    reply.push(<Card key={i++} result={result} />)
                }

                console.log(reply.title)
                return reply
            }
            
            if (error) {
                return <div>Erreur : {error.message}</div>
            } else if (!isLoaded) {
                return (
                    <p>Recherche...</p>
                )
            } else {
                return (
                    <div className="row m-3 mt-6  pt-3">
                        {cards()}
                    </div>
                )
            }
        }else{
            return null
        }
    }
}

export default Search