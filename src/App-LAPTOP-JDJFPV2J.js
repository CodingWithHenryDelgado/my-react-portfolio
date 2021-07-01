import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer';
import AboutCard from './components/aboutCard/aboutCard';
import PortfolioListing from './components/portfolioListings/portfolioListings'
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';
import Confetti from 'react-confetti';
import React from 'react';
import './App.css';

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
    );
  }
}

export default App;
