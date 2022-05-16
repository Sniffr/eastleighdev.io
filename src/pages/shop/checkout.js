import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../widgets/pageheading';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

class checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputvalue: {
        "firstname": 'Pius',
        "lastname": 'Murithi'
      },
      payNow: false,

      errors: {}
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  handlePayment(){
      this.state.payNow = true;
    }
  GetCartItems() {
    var ItemCart = JSON.parse(localStorage.getItem("CartProduct"));
    if (ItemCart == null) {
      this.props.history.push(`/`)
    }
    return ItemCart;
  }
  FormSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      localStorage.removeItem("CartProduct");
      this.props.history.push(`/order-complate`)
    }
  }
  handleValidation() {
    let inputvalue = this.state.inputvalue;
    let errors = {};
    let formIsValid = true;

    //First Name Validation 
    if (!inputvalue["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "Please Enter First Name";
    }

    if (typeof inputvalue["firstname"] !== "undefined") {
      if (!inputvalue["firstname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstname"] = "Please Enter Only Letter";
      }
    }
    


    //Last Name Validation
    if (!inputvalue["lastname"]) {
      formIsValid = false;
      errors["lastname"] = "Please Enter Last Name";
    }

    if (typeof inputvalue["lastname"] !== "undefined") {
      if (!inputvalue["lastname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lastname"] = "Please Enter Only Letter";
      }
    }

    //Company Name Validation
    if (!inputvalue["companyname"]) {
      formIsValid = false;
      errors["companyname"] = "Please Enter Company Name";
    }

    //Street Address Validation
    if (!inputvalue["streetaddress"]) {
      formIsValid = false;
      errors["streetaddress"] = "Please Enter Street address";
    }

    //State Validation
    if (!inputvalue["state"]) {
      formIsValid = false;
      errors["state"] = "Please Enter State Name";
    }

    // City Validation
    if (!inputvalue["city"]) {
      formIsValid = false;
      errors["city"] = "Please Enter Town / City Name";
    }

    //Zip Code Validation
    if (!inputvalue["zipcode"]) {
      formIsValid = false;
      errors["zipcode"] = "Please Enter Postcode / ZIP";
    }

    if (typeof inputvalue["zipcode"] !== "undefined") {
      if (inputvalue["zipcode"].length < 6) {
        formIsValid = false;
        errors["zipcode"] = "Please Enter valid Postcode / ZIP";
      }
    }

    //Phone No Validation
    if (!inputvalue["phone"]) {
      formIsValid = false;
      errors["phone"] = "Please Enter Phone";
    }

    if (typeof inputvalue["phone"] !== "undefined") {
      if (!inputvalue["phone"].match(/^\d{10}$/)) {
        formIsValid = false;
        errors["phone"] = "Please Enter Valid Phone";
      }
    }

    //Email Validation
    if (!inputvalue["email"]) {
      formIsValid = false;
      errors["email"] = "Please Enter Email ID";
    }
    this.setState({ errors: errors });
    return formIsValid;

  }

  handleChange(field, e) {
    let inputvalue = this.state.inputvalue;
    inputvalue[field] = e.target.value;
    this.setState({ inputvalue });
  }
  //this.GetCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate * 0.0083).toFixed(2), 0)
  render() {
    return (
      <PayPalScriptProvider options={{ "client-id": "AZrewcCeMiNnyTpsGFfLbx6Bk2dYeBuzz2EUVWGYBCx-11L50IBBg5oPgpLDgNYGUN4aDMuvXMUe6Ase" }}>
        {/*hero section start*/}
        <section className="bg-light">
          <Pageheading foldername={"Shop"} title={"Product Checkout"} />
        </section>
        {/*hero section end*/}

        {/*body content start*/}
        <div className="page-content">
          <section>
            <Container>
              <form onSubmit={this.FormSubmit.bind(this)}>
                <Row>
                  <div className="col-lg-7 col-md-12">
                    <div className="checkout-form">
                      <h2 className="mb-4">Billing Details</h2>
                      <form className="row">
                        <Col md={6}>
                          <div className="form-group">
                            <label>First Name</label>
                            <input type="text" id="fname" className="form-control" placeholder="Your firstname" value={this.state.inputvalue.firstname} onChange={this.handleChange.bind(this, "firstname")} />
                            <span className="error">{this.state.errors["firstname"]}</span>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" id="lname" className="form-control" placeholder="Your lastname" value={this.state.inputvalue.lastname} onChange={this.handleChange.bind(this, "lastname")} />
                            <span className="error">{this.state.errors["lastname"]}</span>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label>E-mail Address</label>
                            <input type="text" id="email" className="form-control" placeholder="State Province" value={this.state.inputvalue.email} onChange={this.handleChange.bind(this, "email")} />
                            <span className="error">{this.state.errors["email"]}</span>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" id="phone" className="form-control" placeholder value={this.state.inputvalue.phone} onChange={this.handleChange.bind(this, "phone")} />
                            <span className="error">{this.state.errors["phone"]}</span>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label>Company Name</label>
                            <input type="text" id="companyname" className="form-control" placeholder="Company Name" value={this.state.inputvalue.companyname} onChange={this.handleChange.bind(this, "companyname")} />
                            <span className="error">{this.state.errors["companyname"]}</span>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label>Select County</label>
                            <div className="form-field"> <i className="icon icon-arrow-down3" />
                              <select name="people" id="people" className="form-control" onChange={this.handleChange.bind(this, "county")}>
                               
                               <option selected>Select country</option>
<option value="algeria">Algeria</option>
<option value="angola">Angola</option>
<option value="benin">Benin</option>
<option value="botswana">Botswana</option>
<option value="burkina Faso">Burkina Faso</option>
<option value="burundi">Burundi</option>
<option value="cameroon">Cameroon</option>
<option value="cape-verde">Cape Verde</option>
<option value="central-african-republic">Central African Republic</option>
<option value="chad">Chad</option>
<option value="comoros">Comoros</option>
<option value="congo-brazzaville">Congo - Brazzaville</option>
<option value="congo-kinshasa">Congo - Kinshasa</option>
<option value="ivory-coast">Côte d’Ivoire</option>
<option value="djibouti">Djibouti</option>
<option value="egypt">Egypt</option>
<option value="equatorial-guinea">Equatorial Guinea</option>
<option value="eritrea">Eritrea</option>
<option value="ethiopia">Ethiopia</option>
<option value="gabon">Gabon</option>
<option value="gambia">Gambia</option>
<option value="ghana">Ghana</option>
<option value="guinea">Guinea</option>
<option value="guinea-bissau">Guinea-Bissau</option>
<option value="kenya">Kenya</option>
<option value="lesotho">Lesotho</option>
<option value="liberia">Liberia</option>
<option value="libya">Libya</option>
<option value="madagascar">Madagascar</option>
<option value="malawi">Malawi</option>
<option value="mali">Mali</option>
<option value="mauritania">Mauritania</option>
<option value="mauritius">Mauritius</option>
<option value="mayotte">Mayotte</option>
<option value="morocco">Morocco</option>
<option value="mozambique">Mozambique</option>
<option value="namibia">Namibia</option>
<option value="niger">Niger</option>
<option value="nigeria">Nigeria</option>
<option value="rwanda">Rwanda</option>
<option value="reunion">Réunion</option>
<option value="saint-helena">Saint Helena</option>
<option value="senegal">Senegal</option>
<option value="seychelles">Seychelles</option>
<option value="sierra-leone">Sierra Leone</option>
<option value="somalia">Somalia</option>
<option value="south-africa">South Africa</option>
<option value="sudan">Sudan</option>
<option value="south-sudan">Sudan</option>
<option value="swaziland">Swaziland</option>
<option value="Sao-tome-príncipe">São Tomé and Príncipe</option>
<option value="tanzania">Tanzania</option>
<option value="togo">Togo</option>
<option value="tunisia">Tunisia</option>
<option value="uganda">Uganda</option>
<option value="western-sahara">Western Sahara</option>
<option value="zambia">Zambia</option>
<option value="zimbabwe">Zimbabwe</option>
                              </select>
                              <span className="error">{this.state.errors["county"]}</span>
                            </div>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            <label>Street Address</label>
                            <input type="text" id="address" className="form-control" placeholder="Enter Your Address" value={this.state.inputvalue.streetaddress} onChange={this.handleChange.bind(this, "streetaddress")} />
                            <span className="error">{this.state.errors["streetaddress"]}</span>
                          </div>
                          <div className="form-group">
                            <input type="text" id="address2" className="form-control" placeholder="Second Address" value={this.state.inputvalue.address} onChange={this.handleChange.bind(this, "address")} />
                            <span className="error">{this.state.errors["address"]}</span>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            <label>Town/City</label>
                            <input type="text" id="city" className="form-control" placeholder="Town or City" value={this.state.inputvalue.city} onChange={this.handleChange.bind(this, "city")} />
                            <span className="error">{this.state.errors["city"]}</span>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group mb-md-0">
                            <label>State/Province</label>
                            <input type="text" id="statename" className="form-control" placeholder="State Province" value={this.state.inputvalue.state} onChange={this.handleChange.bind(this, "state")} />
                            <span className="error">{this.state.errors["state"]}</span>
                          </div>
                        </Col>
                      </form>
                    </div>
                  </div>
                  <Col lg={5} md={12} className="mt-5 mt-lg-0">
                    <div className="shadow p-3 p-lg-5">
                      <div className="p-3 p-lg-5 shadow-sm mb-5">
                        <label className="text-black mb-3">Enter your coupon code if you have one</label>
                        <div className="input-group">
                          <input className="form-control" id="c-code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" type="text" />
                          <div className="input-group-append">
                            <button className="btn btn-primary btn-sm px-4" type="button" id="button-addon2">Apply</button>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 p-lg-5 shadow-sm mb-5">
                        <h3 className="mb-3">Your Order</h3>
                        {(this.GetCartItems() != null && this.GetCartItems().length > 0) ?
                          <ul className="list-unstyled">
                            {this.GetCartItems().map((CartItem, index) => (
                              <li className="mb-3 border-bottom pb-3"><span> {CartItem.Qty} x {CartItem.ProductName} </span> Kes {(CartItem.Rate * CartItem.Qty).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</li>
                            ))}
                            <li className="mb-3 border-bottom pb-3"><span> Shipping </span> Kes 0.00</li>
                            <li className="mb-3 border-bottom pb-3"><span> Subtotal </span> Kes {this.GetCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</li>
                            <li><span><strong className="cart-total"> Total :</strong></span>  <strong className="cart-total">Kes {this.GetCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </strong>
                            </li>
                          </ul>
                          : <div>No Items found</div>
                        }
                      </div>
                      {this.state.payNow ? <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: 1.0,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            /> : <div className="cart-detail my-5">
                        <h3 className="mb-3">Payment Method</h3>
                        <div className="form-group">
                          <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customRadio1">Direct Bank Tranfer</label>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customRadio2">Mpesa (Safaricom)</label>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customRadio3">Paypal Account</label>
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">I have read and accept the terms and conditions</label>
                          </div>
                        </div>
                      </div>}

                      <button className="btn btn-primary btn-animated btn-block" onClick={this.handlePayment()}>Proceed to Payment</button>
                    </div>
                  </Col>
                </Row>
              </form>
            </Container>
          </section>
        </div>
        {/*body content end*/}
      </PayPalScriptProvider>
    );
  }
}

export default checkout;