import React, {Component} from 'react'
import data from './data'

export default class Middle extends Component {
    constructor (){
        super ()
        this.state = {
            index: 0
            
                
                
            
        }
        
        this.nextFN = this.nextFN.bind(this)
        this.previousFN = this.previousFN.bind(this)
        
    }

    setID(index){
        this.setState.people[index].id = this.state.people[index].id
    }

    nextFN(){
        if(this.state.index < data.length-1){
        this.setState({index: this.state.index +1})
        } else {
            this.setState({index: this.state.index})
        }

    }

    previousFN(){
        if(this.state.index > 0){
        this.setState({index: this.state.index -1})
        } else {
            this.setState({index: this.state.index})
        }
    }


    render (){
        console.log(this.state.index)
        
        return(
            <div className="middleParent">

            <div className="middle">
                <div className="whiteBox">
                    <header className='whiteHeader'>{data[this.state.index].id}/{data.length}</header>
                    <h1>{data[this.state.index].name.first} {data[this.state.index].name.last}</h1>
                    <p className='info'>From: {data[this.state.index].city}, {data[this.state.index].country}<br/>Job Title: {data[this.state.index].title} <br/> Employer: {data[this.state.index].employer}</p>
                    <p className="movies">Favorite Movies: </p>  
                    <ol>
                        <li>{data[this.state.index].favoriteMovies[0]}</li>
                        <li>{data[this.state.index].favoriteMovies[1]}</li>
                        <li>{data[this.state.index].favoriteMovies[2]}</li>
                    </ol>

                    
                </div>
                <div className='buttons'>
                    <button onClick={this.previousFN}>{'< Previous'}</button>
                    <button onClick={this.nextFN}>{'Next >'}</button>
                </div>

                
      
            </div>
            </div>
        )
    }
        
}


