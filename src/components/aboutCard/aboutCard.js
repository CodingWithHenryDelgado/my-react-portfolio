import React from 'react';
import './aboutCard.css'

class AboutCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/HenryDelGlitch`)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    avatar_url: user.avatar_url,
                    name: user.name,
                    bio: user.bio,
                    location: user.location,
                    public_repos: user.public_repos
                });
            }
        );
    }

    render() {
        return ( 
            <div className="about-card" id="About">
                <div className="welcomeconfetti">
                    <p><strong>WELCOME</strong></p>
                </div>
                <div className="git-profile">
                    <figure className="git-avatar">
                        <img src={this.state.avatar_url} alt="Github Avatar"/>
                    </figure>
                    <div className="git-description">
                        <h1>{this.state.name}</h1>
                        <p>{this.state.bio}</p>
                        <p>Located in {this.state.location}</p>
                        <p>Public repos: {this.state.public_repos}</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutCard;