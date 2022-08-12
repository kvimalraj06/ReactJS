import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './Components/SeasonDisplay';
import LoadDisplay from './Components/LoadDisplay';


class App extends React.Component {
    state = {lat:null, err: null}

    componentDidMount = () => {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err => this.setState({err:err.message}),
        )
    }

    renderContent(){
        if(this.state.lat){
            return (
                <SeasonDisplay lat={this.state.lat}/>
            )
        }
        else if(this.state.err){
            return <h1>Error Message:{this.state.err}</h1>
        }
        else{
            return <LoadDisplay />
        }
    }

    render(){
        return <div>{this.renderContent()}</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)