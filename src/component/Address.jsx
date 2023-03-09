import React, { useEffect, useState } from 'react'
import './styles/Producitem.css';
import { useSelector } from 'react-redux';
import axios from 'axios';


const initialAddress = {
  street: '',
  pin: '',
  city: '',
  country: '',
  state: ''
}
const Address = () => {
  const Order = useSelector((state) => state.handleOrder);
  const [address, setAddress] = useState(initialAddress);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all", {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',


      }
    })
      .then(function (response) {
        console.log(response.data);
        setCountries(response.data);
      });

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(address);

  }


  const handleChange = (e) => {

    console.log(e.target.value);
    let value = e.target.value;
    if (e.target.value == 'india' || e.target.value == 'India') {
      setStates([...states, { name: 'Jammu & Kashmir' }, { name: 'Delhi' }, { name: 'Maharastra' }, { name: 'Goa' }]);
    } else {
      setStates([{ name: 'Choose one' }]);
    }

    setAddress({...address,[e.target.name]: value });

  }
 


  return (

    <>

      <div className='container pr  '>
        <form onSubmit={handleSubmit}>
          <div className="well bg-light p-5 m-5">
            <h6 className='m-3'>Delivery Address:</h6>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="line1">Street Address</label>
                  <input type="text" name="street" onChange={handleChange} className="form-control" placeholder="E.g. 32 Job Street" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="line1">Address Line 2</label>
                  <input type="text" name="address" onChange={handleChange} className="form-control" placeholder="E.g. Second Floor" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="line1">City</label>
                  <input type="text" onChange={handleChange} name='city' className="form-control" placeholder="E.g. London" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="line1">Country</label>
                  <select name="country" onChange={handleChange} className="form-control" id="">
                    {countries.map((country, ind) => (

                      <option value={country.name.common}>{ind + 1}-{country.name.common}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="line1">State</label>
                  <select name="state" onChange={handleChange} className="form-control" id="">
                    {states.map((state) => (

                      <option value={state.name}>{state.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className="form-group">
                  <label for="line1">Post code</label>
                  <input type="text" onChange={handleChange} name='pin' className="form-control" placeholder="E.g. SW1 3NL" />
                </div>
              </div>

            </div>
            <button type="submit" className='btn btn-success mt-2 p-2'>Submit</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default Address