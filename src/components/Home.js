import React from 'react'
import Header from './Header'
import Introduction from './Introduction'
import LatestMovies from './LatestMovies'
import PopularSeries from './PopularSeries'

class Home extends React.Component {
    render(){
        return(
            <>
                <Header />
                <Introduction />
                <LatestMovies />
                <PopularSeries />
            </>
        )
    }
}

export default Home