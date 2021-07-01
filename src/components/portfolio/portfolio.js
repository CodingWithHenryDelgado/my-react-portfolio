import React from 'react';
import './portfolio.css';

class Portfolio extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    
    render() { 
        return ( 
            <div className="git-repos">
                <h2 style={{textDecoration: 'underline'}}>{this.props.name.toUpperCase()}</h2>
                <div className="git-repos-details">
                    <p>{this.props.description}</p>
                    <p>{this.props.languages}</p>
                    <div className="button">
                        <a className="code" href={this.props.code} target="_blank" rel="noreferrer noopener">View Code</a>
                        <a className="visit" href={this.props.html} target="_blank" rel="noreferrer">View Website</a>
                    </div>
                </div>
        </div>
        );
    }
}
 
export default Portfolio;