import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import './styles.css';

class Merchant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            merchants: [
                {
                    merchantName: "Merchant Name",
                    merchantLocation: "Merchant Address",
                    merchantContact: {
                        phone: "254 722 000 000",
                        email: "merchant@merchant.co.ke"
                    }
                },
            ]
        };
    }
    render() {
        let { merchants } = this.state.merchants;
        return (
            <>
                <OwlCarousel
                    className="owl-carousel no-pb owl-2"
                    {...this.state.options}
                    dots={false}
                >
                    {merchants}?
                    <>
                        {merchants.map((merchant) => (
                            <>
                                <MerchantName name={merchant.merchantName} />
                                <MerchantLocation location={merchant.merchantLocation} />
                                <MerchantContact contact={merchant.merchantContact} />
                            </>
                        ))

                        }

                    </>
                    :
                    <></>
                </OwlCarousel>
            </>
        );
    }
}

export class MerchantName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            merchantName: props.name ? props.name : "Hassan Curtain Collections",
        }
    }
    render() {
        return (
            <div className="merchantName text-center text-secondary"> {this.state.merchantName}</div>
        );
    }
}

export class MerchantLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            merchantLocation: props.location ? props.location : "Room H14, ABC Building, xyz rd. Eastleigh West, Behind Guru Nanak Hospital",
        };
    }
    render() {
        return (
            <div> {this.state.merchantLocation}</div>
        );
    }
}

export class MerchantContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            merchantContact: {
                phone: props.phone ? props.phone : "254 722 000 000",
                email: props.email ? props.email : "merchant@merchant.co.ke",
            },
        };
    }
    render() {
        return (
            <div>
                <div>Contact Us:</div>
                <div>{this.state.merchantContact.phone}</div>
                <div>{this.state.merchantContact.email}</div>
            </div>
        );
    }
}

export default Merchant;