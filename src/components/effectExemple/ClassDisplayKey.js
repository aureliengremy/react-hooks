import React, { Component } from 'react';

class ClassDisplayKey extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         keyCode: null
      }
    }

    handleKeyCode = e => {
        console.log(e)
        this.setState({ 
            keyCode: e.code })
    }

    componentDidMount() { 
        console.log('Je suis componentDidMount')
        document.addEventListener('keyup', this.handleKeyCode)
    }
    
    componentWillUnmount() {
        console.log('Je suis componentWillUnmount!!')
        document.removeEventListener('keyup', this.handleKeyCode)
     }

    render() {

        const { keyCode } = this.state;

        return (
            <div className="card">
                <div className="card-body">
                    <h3 className='text-center'>{keyCode}</h3>
                </div>
                
            </div>
        );
    }
}

export default ClassDisplayKey;