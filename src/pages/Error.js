import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

class Error extends React.Component {
    render () {
        return (
            <div>
                <Header />
                    <h1>404 Error</h1>
                <Footer />
            </div>
        )
    }
}

export default Error