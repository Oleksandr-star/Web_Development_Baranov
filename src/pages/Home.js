import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Catalog from '../components/Catalog';

class Home extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <h2>Каталог</h2>
                <Catalog />
                <Footer />
            </div>
        )
    }
}

export default Home