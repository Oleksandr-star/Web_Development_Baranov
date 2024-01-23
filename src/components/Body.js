import React from "react";
import Catalog from "../pages/Catalog";

class Body extends React.Component {
    render () {
        return (
            <body className="Body">
                <h2>Каталог</h2>
                <Catalog />
            </body>
        )
    }
}

export default Body