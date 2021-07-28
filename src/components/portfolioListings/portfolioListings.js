import React from 'react';
import Portfolio from '../portfolio/portfolio';
import './portfolioListings.css';

class PortfolioListing extends React.Component{
    render() { 
        return ( 
            <div className="portfolio-showcase" id="Portfolio">
                <p className="portfolio-header"><strong>Portfolio</strong></p>
                <div className="portfolio-listing">
                    <Portfolio 
                        name={'Inspirational Journal'}
                        description={'A journal that shows you the weather and an inspirational quote!'}
                        languages={'React, Redux, CSS'}
                        code={'https://github.com/HenryDelGlitch/weatherAppPortfolio'}
                        html={'http://inspirationalhomepage.website/'}/>
                    <Portfolio 
                        name={'Codecademy Shop'}
                        description={'A clothing website for Codecademy.'}
                        languages={'React, Redux ,CSS'}
                        html={'https://amazing-euler-314aef.netlify.app/'}
                        code={'https://github.com/HenryDelGlitch/codingcademyShop'}/>
                    <Portfolio 
                        name={'Passing Thoughts'}
                        description={'A place to write down your passing thoughts that disappear after 15 seconds'}
                        languages={'React'}
                        html={'https://peaceful-heisenberg-b97872.netlify.app/'}
                        code={'https://github.com/HenryDelGlitch/passingThoughts'}/>
                    <Portfolio 
                        name={'Appointment Planner'}
                        description={'Make contacts and set up appointments here!'}
                        languages={'React, CSS'}
                        html={'https://festive-leakey-d99d79.netlify.app/'}
                        code={'https://github.com/HenryDelGlitch/appointmentPlanner'}/>
                    <Portfolio
                        name={'GitHub Repo Gallery'}
                        description={'A gallery presenting my public repos!'}
                        languages={'HTML, CSS, Javascript, GitHub API'}
                        html={'https://henrydelglitch.github.io/github-repo-gallery/'}
                        code={'https://github.com/HenryDelGlitch/github-repo-gallery'}/>
                </div>
            </div>
        );
    }
}
 
export default PortfolioListing;