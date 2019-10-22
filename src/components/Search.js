import React from 'react'
import SettingsTmdbApi from '../SettingsTmdbApi'
import Card from './Card'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            replyApi: [],
            changed: true,
            keywords: '',
        };
        this.refreshMovies();
    }

    componentDidUpdate(props) {
        if (props.keywords !== this.state.keywords) {
            this.setState({
                keywords: props.keywords,
                changed: true
            });
        }
    }

    refreshMovies() {
        if (this.props.keywords !== '') {
            if (this.state.changed) {
                this.getSearch();
                this.setState({
                    changed: false,
                })
            }
        }
        setTimeout(() => {
            this.refreshMovies();
        }, 100);
    }

    async getSearch() {
        let url = `https://api.themoviedb.org/3/search/multi?api_key=${SettingsTmdbApi.apiKey}&language=${SettingsTmdbApi.language}&query=${this.state.keywords}&page=1&include_adult=false&region=${SettingsTmdbApi.region}`;
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
                            overview={item.overview}
                            item={item} >
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