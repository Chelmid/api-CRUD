import React, { useState } from 'react'
import axios from 'axios';

const AddCustomer = () => {

  const addressAPI = 'https://app.tacbox.fr/api/customers'

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [company, setCompany] = useState('')
  const [mobile, setMobile] = useState('')
  const [website, setWebsite] = useState('')

  const postCustomer = (e) => {

    console.log('post')
    e.preventDefault()

    axios.post(addressAPI,
      {
        "customerAddresses": [
          "/api/customer_addresses/51",
          "/api/customer_addresses/64",
          "/api/customer_addresses/65"
        ],
        "purchases": [],
        "customerType": "/api/customer_types/1",
        "company": company,
        "companyID": "123456789",
        "website": website,
        "tel": tel,
        "email": email,
        "mobile": mobile,
        "password": "blabla",
        "firstName": firstName,
        "lastName": lastName,
        "hasAccount": true,
        "billingType": "/api/billing_types/1",
        "gender": "/api/genders/2",
        "bankAccounts": [],
        "birthDate": "2021-03-26T23:32:12.782Z",
        "etat": true
      }
    ).then(response => console.log(response)).catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      <p>ajouter nouveau client</p>
      <form className='form-add-customer'>
        <div>
          <label htmlFor="">firstname</label>
          <input type="text" name="firstName" id="firstName" onChange={e => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">lastname</label>
          <input type="text" name="lastName" id="lastName" onChange={e => setLastName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">email</label>
          <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">tel</label>
          <input type="tel" name="tel" id="tel" onChange={e => setTel(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">company</label>
          <input type="text" name="company" id="company" onChange={e => setCompany(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">mobile</label>
          <input type="text" name="mobile" id="company" onChange={e => setMobile(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">website</label>
          <input type="text" name="website" id="company" onChange={e => setWebsite(e.target.value)} />
        </div>
        <div>
        <button onClick={postCustomer}>valider</button>
        </div>

      </form>
    </div>
  )
}

export default AddCustomer