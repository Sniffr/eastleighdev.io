import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
window.fn = OwlCarousel;

class Testimonial1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                loop: true,
                nav: true,
                dots:false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 3,
                    },
                },
            },
        };
    }
    render() {
        return (
            <OwlCarousel
                className="owl-carousel owl-center owl-2"
                {...this.state.options}
                center="true"
                dotData="false"
                nav="true" >
                <div className="item">
                    <div className="card p-5 p-lg-8 bg-primary-soft border-0">
                        <div>
                            <img alt="Image" src={require(`../../assets/images/thumbnail/01.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                        </div>
                        <div className="card-body p-0 mt-5">
                            <p className="text-muted">asdfghjk</p>
                            <div>
                                <h5 className="text-primary d-inline mb-0">Ember Lana</h5>
                                <small className="text-muted font-italic">- Founder</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card p-5 p-lg-8 bg-primary-soft border-0">
                        <div>
                            <img alt="Image" src={require(`../../assets/images/thumbnail/02.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                        </div>
                        <div className="card-body p-0 mt-5">
                            <p className="text-muted">sdfghjkl</p>
                            <div>
                                <h5 className="text-primary d-inline mb-0">Scott Jones</h5>
                                <small className="text-muted font-italic">- Supervisor</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card p-5 p-lg-8 bg-primary-soft border-0">
                        <div>
                            <img alt="Image" src={require(`../../assets/images/thumbnail/03.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                        </div>
                        <div className="card-body p-0 mt-5">
                            <p className="text-muted">lkjhgfdsdfghjkl</p>
                            <div>
                                <h5 className="text-primary d-inline mb-0">Amber Holmes</h5>
                                <small className="text-muted font-italic">- Manager</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card p-5 p-lg-8 bg-primary-soft border-0">
                        <div>
                            <img alt="Image" src={require(`../../assets/images/thumbnail/02.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                        </div>
                        <div className="card-body p-0 mt-5">
                            <p className="text-muted">sdfghjkl;lkjhgfd</p>
                            <div>
                                <h5 className="text-primary d-inline mb-0">Scott Jones</h5>
                                <small className="text-muted font-italic">- Ceo</small>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>

        );
    }
}

export default Testimonial1;