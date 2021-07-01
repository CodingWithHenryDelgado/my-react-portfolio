import Confetti from 'react-confetti';
import React, {lazy, Suspense} from 'react';
import './App.css';
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Footer = lazy(() => import('./components/footer/Footer'));
const AboutCard = lazy(() => import('./components/aboutCard/aboutCard'));
const PortfolioListing = lazy(() => import('./components/portfolioListings/portfolioListings'));
const SideBar = lazy(() => import('./components/SideBar/SideBar'));
const Backdrop = lazy(() => import('./components/Backdrop/Backdrop'));
const renderLoader = () => <p>Loading</p>;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sideBarOpen: false
    }

    this.handleBackDropToggle = this.handleBackDropToggle.bind(this);
    this.handleSideBarToggle = this.handleSideBarToggle.bind(this);
  }

  handleSideBarToggle = () => {
    this.setState((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen}
    });
  };

  handleBackDropToggle = () => {
    this.setState({sideBarOpen: false})
  }

  render() {
    let backDrop;

    if(this.state.sideBarOpen){
      backDrop = <Backdrop click={this.handleBackDropToggle}/>
    }

    return (
      <Suspense fallback={renderLoader()}>
        <div className="App" style={{height: '100%'}}>
          <Navbar handleSideBarToggle={this.handleSideBarToggle}/>
          <SideBar show={this.state.sideBarOpen}/>
          {backDrop}
          <main style={{marginTop: '60px'}}>
            <Confetti tweenDuration={500} recycle={false} config={{ spread: 360 }} style={{marginTop: 60}}/>
            <AboutCard src={this.state.avatar_url}/>
            <PortfolioListing />
            <Footer />
          </main>
        </div>
      </Suspense>
    );
  }
}

export default App;
