import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Row,Col } from 'reactstrap';
import blog01 from "../../assets/images/electronic/blog/01.jpg";
import blog02 from "../../assets/images/electronic/blog/02.jpg";
import blog03 from "../../assets/images/electronic/blog/03.jpg";

class ElectronicBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Row>
            <Col lg={4} className="col-12">
              {/* Blog Card */}
              <div className="card border-0 bg-transparent">
                <div className="position-relative rounded overflow-hidden">
                  <div className="position-absolute z-index-1 bottom-0 bg-white text-primary shadow-primary text-center py-1 px-2 rounded ml-3 mb-3">20 Apr</div>
                  <img className="card-img-top hover-zoom" src={blog01} alt="Image" />
                </div>
                <div className="card-body px-0 pb-0">
                  <div> <Link className="d-inline-block link-title btn-link text-small mr-2" to="#">Electronic,</Link>
                    <Link className="d-inline-block link-title btn-link text-small" to="#">Accessories</Link>
                  </div>
                  <h2 className="h5 font-w-6 mt-2 mb-0">
                    <Link className="link-title" to="/blog-single">Spring summer fashion trends new high collection</Link>
                  </h2>
                </div>
                <div />
              </div>
              {/* End Blog Card */}
            </Col>
            <Col lg={4} className="col-12 mt-5 mt-lg-0">
              {/* Blog Card */}
              <div className="card border-0 bg-transparent">
                <div className="position-relative rounded overflow-hidden">
                  <div className="position-absolute z-index-1 bottom-0 bg-white text-primary shadow-primary text-center py-1 px-2 rounded ml-3 mb-3">15 Mar</div>
                  <img className="card-img-top hover-zoom" src={blog02} alt="Image" />
                </div>
                <div className="card-body px-0 pb-0">
                  <div> <Link className="d-inline-block link-title btn-link text-small mr-2" to="#">Electronic,</Link>
                    <Link className="d-inline-block link-title btn-link text-small" to="#">Accessories</Link>
                  </div>
                  <h2 className="h5 font-weight-medium mt-3">
                    <Link className="link-title" to="/blog-single">When it’s Winter outdoors gifts but you feel like ekocart</Link>
                  </h2>
                </div>
                <div />
              </div>
              {/* End Blog Card */}
            </Col>
            <Col lg={4} className="col-12 mt-5 mt-lg-0">
              {/* Blog Card */}
              <div className="card border-0 bg-transparent">
                <div className="position-relative rounded overflow-hidden">
                  <div className="position-absolute z-index-1 bottom-0 bg-white text-primary shadow-primary text-center py-1 px-2 rounded ml-3 mb-3">13 Apr</div>
                  <img className="card-img-top hover-zoom" src={blog03} alt="Image" />
                </div>
                <div className="card-body px-0 pb-0">
                  <div> <Link className="d-inline-block link-title btn-link text-small mr-2" to="#">Electronic,</Link>
                    <Link className="d-inline-block link-title btn-link text-small" to="#">Accessories</Link>
                  </div>
                  <h2 className="h5 font-weight-medium mt-3">
                    <Link className="link-title" to="/blog-single">Whatever the will make it special For You Every</Link>
                  </h2>
                </div>
                <div />
              </div>
              {/* End Blog Card */}
            </Col>
          </Row>
      
        );
    }
}

export default ElectronicBlog;