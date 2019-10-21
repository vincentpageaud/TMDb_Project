import React from 'react'
import ParamsTmdbApi from '../ParamsTmdbApi'
import Card from './Card'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            replyApi: []
        };
    }

    async componentWillReceiveProps(props) {
        this.getMovies(props.keywords)
    }

    async getMovies(keywords) {
        let url = `https://api.themoviedb.org/3/search/multi?api_key=${ParamsTmdbApi.apiKey}&language=${ParamsTmdbApi.language}&query=${keywords}&page=1&include_adult=false&region=${ParamsTmdbApi.region}`;
        let res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.status === 200) {
            let json = await res.json();
            this.setState({
                isLoaded: true,
                replyApi: json.results
            })
        } else {
            this.setState({
                isLoaded: true,
                error: "An error occured..."
            })
        }
    }
    render() {
        if(this.props.keywords !== ""){
            return (
            <div className="row m-3 mt-6">
                {
                    this.state.replyApi.map(item => <Card
                        key={item.id}
                        poster_path={item.poster_path}
                        title={item.title}
                        overview={item.overview} >
                    </Card>
                    )
                }
            </div>)
        }else{
            return ""
        }
    }
}

export default Search