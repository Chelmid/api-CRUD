import React, { useState } from 'react';
import axios from 'axios';

const AddCustomer = () => {

  const addressAPI = 'https://app.tacbox.fr/api/customers';

  const [message, setMessage] = useState('');
  const [styles, setStyles] = useState({});

  const postCustomer = (e) => {
    //post cree un customer
    e.preventDefault();
    axios.post(addressAPI,
      {
        "customerAddresses": [
          "/api/customer_addresses/51",
          "/api/customer_addresses/64",
          "/api/customer_addresses/65"
        ],
        "purchases": [],
        "customerContacts": [],
        "customerType": "/api/customer_types/1",
        "company": e.target.company.value,
        "companyID": "123456789",
        "website": e.target.website.value,
        "tel": e.target.tel.value,
        "email": e.target.email.value,
        "mobile": e.target.mobile.value,
        "password": "blabla",
        "firstName": e.target.firstName.value,
        "lastName": e.target.lastName.value,
        "hasAccount": true,
        "billingType": "/api/billing_types/1",
        "gender": "/api/genders/2",
        "bankAccounts": [],
        "birthDate": "2021-03-26T23:32:12.782Z",
        "etat": true
      }
    ).then(() => {
      setMessage('Le nouveau client  est bien crée')
      setStyles({
        color: 'green'
      })
    }).catch((error) => {
      setMessage('Une erreur est survenu');
      setStyles({
        color: 'green'
      })
    });
  }

  return (
    <div>
      <p>ajouter nouveau client</p>
      <div style={styles}>{message}</div>
      <form className='form-add-customer' onSubmit={postCustomer}>
        <div className='taille-field'>
          <label htmlFor="">firstname</label>
          <input type="text" name="firstName" id="firstName" />
        </div>
        <div className='taille-field'>
          <label htmlFor="">lastname</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div className='taille-field'>
          <label htmlFor="">email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className='taille-field'>
          <label htmlFor="">tel</label>
          <input type="tel" name="tel" id="tel" />
        </div>
        <div className='taille-field'>
          <label htmlFor="">company</label>
          <input type="text" name="company" id="company" />
        </div>
        <div className='taille-field'>
          <label htmlFor="">mobile</label>
          <input type="text" name="mobile" id="company" />
        </div>
        <div className='taille-field'>
          <label htmlFor="">website</label>
          <input type="text" name="website" id="company" />
        </div>
        <div className='taille-btn'>
          <button>valider</button>
        </div>

      </form>
    </div>
  )
}

export default AddCustomer