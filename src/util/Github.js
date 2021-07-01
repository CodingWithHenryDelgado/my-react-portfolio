const GitHub = {
    gitInfo(){
        return fetch(`https://api.github.com/users/HenryDelGlitch`,
        { 
            headers: {
                'Accept' : 'application/vnd.github.v3+json'
            }
        }
        )
        .then(response => {
            return response.json();
        })
        .then(
            user => {
                this.setState({
                    avatar_url: user.avatar_url,
                    name: user.name,
                    bio: user.bio,
                    location: user.location
                });
            } )
    },
    gitRepos(repo) {
        return fetch(`https://api.github.com/repos/HenryDelGlitch/${repo}`)
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            if(jsonResponse){
                return jsonResponse.repo.map(repo => ({
                    name: repo.name,
                    description: repo.description,
                    language: repo.language,
                    html_url: repo.html_url
                  }));
            }
        })
    },
    gitPages(repo) {
        return fetch(`https://henrydelglitch.github.io/${repo}`)
    }
}

export default GitHub;