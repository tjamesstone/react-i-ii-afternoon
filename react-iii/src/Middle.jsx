import React, {Component} from 'react'

export default class Middle extends Component {
    constructor (){
        super ()
        this.state = {
            people: [
                {name: 'Marion Santori',
                from: 'Liverpool, UK', 
                title: 'Research Associate', 
                employer: 'Skinix',
                favMovies: ['Fathom', 'Magic', 'Martian Child']
                }, 
                {name: 'Josh Peck',
                from: 'Los Angeles, California', 
                title: 'Actor', 
                employer: 'Nickelodeon',
                favMovies: ['Drake and Josh the Movie', '2012', 'Titanic']
                }, 
                {name: 'John Kennedy',
                from: 'Brookline, Massachusetts', 
                title: 'Former President', 
                employer: 'United States Government',
                favMovies: ['Citezen Kane', 'Sunset Boulevard', 'Born Yesterday']
                }, 
                
            ]
        }
        
        
    }


    render (){
        return(
            <div className="middle">
                <div className="whiteBox">

                </div>

                <div className='buttons'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
      
            </div>
        )
    }
        
}


