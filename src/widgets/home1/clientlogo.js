import React, { Component } from 'react';
import client01 from "../../assets/images/client/01.png";
import client02 from "../../assets/images/client/02.png";
import client03 from "../../assets/images/client/03.png";
import client04 from "../../assets/images/client/04.png";
import client05 from "../../assets/images/client/05.png";
import client06 from "../../assets/images/client/06.png";
import client07 from "../../assets/images/client/07.png";
import client08 from "../../assets/images/client/08.png";

class Clientlogo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="d-flex flex-wrap align-items-center text-center bg-white shadow">
                <div className="clients-logo">
                    <img className="img-fluid" src={client01} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={client02} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={client03} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={client04} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={client05} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={client06} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={client07} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={client08} alt="" />
                </div>
            </div>
        );
    }
}

export default Clientlogo;