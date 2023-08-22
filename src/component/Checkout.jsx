import React from 'react';

const Checkout = ({order,user,addAddress}) => {

  return (
    <>
      <div className="container mb-5">
        <main>
          <div className="py-5 text-center">
            <h2>Checkout</h2>
          </div>

          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">{order.total_items}</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Total</h6>
                    <small className="text-muted">Cart Items</small>
                  </div>
                  <span className="text-muted">${order.total_cost}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <small className="text-muted">Shipping charge</small>
                  </div>
                  <span className="text-muted">${order.shipping_charge}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <small className="text-muted">Discount charge</small>
                  </div>
                  <span className="text-muted">${order.total_cost*order.discount_in_percent/100}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${order.total_cost - order.total_cost * order.discount_in_percent/100 + order.shipping_charge }</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Shipping address</h4>
            { user.address.map(address=>  <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{address.first_name} {address.last_name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{address.address1} {address.address2} {address.state} {address.country} {address.pin_code}</h6>
                  <p className="card-text">{address.phone}</p>
                  <input
                    type="radio"
                    name="address"
                    id=""
                  />
                  Use this Address
                </div>
              </div>)}
              <hr className="my-4" />
              <h5>OR</h5>
              <h4 className="mb-3">Add New Address</h4>
              <form
                className="needs-validation"
                novalidate=""
                onSubmit={()=>{addAddress(address)}}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label
                      for="firstName"
                      className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required=""
                    />
                    <div className="invalid-feedback">Valid first name is required.</div>
                  </div>

                  <div className="col-sm-6">
                    <label
                      for="lastName"
                      className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required=""
                    />
                    <div className="invalid-feedback">Valid last name is required.</div>
                  </div>
                  <div className="col-12">
                    <label
                      for="phone"
                      className="form-label">
                      Phone <span className="text-muted"></span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      required=""
                      placeholder="+91-999999999"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid Phone number for shipping updates.
                    </div>
                  </div>

                  <div className="col-12">
                    <label
                      for="address"
                      className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required=""
                    />
                    <div className="invalid-feedback">Please enter your shipping address.</div>
                  </div>

                  <div className="col-12">
                    <label
                      for="address2"
                      className="form-label">
                      Address 2 <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>

                  <div className="col-md-5">
                    <label
                      for="country"
                      className="form-label">
                      Country
                    </label>
                    <select
                      className="form-select"
                      id="country"
                      required="">
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">Please select a valid country.</div>
                  </div>

                  <div className="col-md-4">
                    <label
                      for="state"
                      className="form-label">
                      State
                    </label>
                    <select
                      className="form-select"
                      id="state"
                      required="">
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">Please provide a valid state.</div>
                  </div>

                  <div className="col-md-3">
                    <label
                      for="zip"
                      className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>


                <hr className="my-4" />

                <button className="w-100 btn btn-success my-4 btn-lg"
                  type="submit">
                  Add Address
                </button>
                <button className="w-100 btn btn-primary btn-lg"
                  type="submit">
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Checkout;
