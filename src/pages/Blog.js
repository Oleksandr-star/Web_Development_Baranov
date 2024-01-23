import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

class Blog extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <h2>Blog</h2>
                <Footer />
            </div>
        )
    }
}

export default Blog