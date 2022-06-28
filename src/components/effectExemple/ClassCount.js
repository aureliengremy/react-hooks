import React, { Component } from 'react';

class ClassCount extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name: ''
      }
    }

    // L'exemple nécessite d'enlever les commentaires dans CDM et CDU
    componentDidMount() { 
        // console.log('Je suis dans CDM')
        // document.title = `Vous avez cliqué ${this.state.count}`
    } 
    
    componentDidUpdate(prevProps, prevState) { 
        // console.log('Je suis dans CDU')
        // document.title = `Vous avez cliqué ${this.state.count} (CDU)`
        
    } 
    render() {
        return (
            <div className='my-3'>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Cliquer</button>
                <input type="text" value={this.state.name} onChange={(e) => {
                    this.setState(
                        {name: this.state.name}
                        )
                    }}/>
            </div>
        );
    }
}

export default ClassCount;