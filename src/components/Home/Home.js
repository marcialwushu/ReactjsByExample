import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    
    render() { 
        let heading = "Soaring to new heights";
        let subheading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra felis eget maximus tincidunt.";


        return ( 
            <div>
                <section className="hero">
                    <div className = "hero-body" >
                    <div className = "container" >
                        <h1 className="title"> { heading } </h1>
                        <div className="is-two-thirds column is-paddingless">
                        <h2 className="subtitle is-4">{ subheading }</h2>
                        </div>
                        <a className="button is-large is-primary" id="learn" href="/">Learn More</a>
                    </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                    <div className="columns pd is-desktop">
                        <div className="column is-1 has-text-centered">
                        <i className="fa fa-cog is-primary"></i>
                        </div>
                        <div className="column is-one-third-desktop">
                        <p className="title"><strong>We provide superiorlogistics so that your business can succeed in a crazy world.</strong></p>
                        </div>
                        <div className="column ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra felis eget maximus tincidunt.Phasellus vitae dolor nec neque vehicula luctus eu eu nisi.</p>
                        </div>
                    </div>
                    </div>

                    <div className="columns pd">
                    <div className="column">
                        <div className="card">
                        <div className="card-content">
                            <p className="title">I think it's an absolutely excellent tool for our business. I can't survive without this</p>
                            <p className="subtitle">- Gary Simon</p>
                        </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                        <div className="card-content">
                            <p className="title">I think it's an absolutely excellent tool for our business. I can't survive without this</p>
                            <p className="subtitle">- Gary Simon</p>
                        </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                        <div className="card-content">
                            <p className="title">I think it's an absolutely excellent tool for our business. I can't survive without this</p>
                            <p className="subtitle">- Gary Simon</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

            </div>
         );
    }
}
 
export default Home;