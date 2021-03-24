import React from 'react'
import axios from 'axios';

const AddCustomer = () => {

    const addressAPI = 'https://app.tacbox.fr/api/customers'

    const postCustomer = (e) => {

        console.log('post')
        e.preventDefault()

        axios.post(addressAPI, {
            "@context": "string",
            "@id": "string",
            "@type": "string",
            "id": 46,
            "affairs": [
              "string"
            ],
            "customerAddresses": [
              "string"
            ],
            "purchases": [
              "string"
            ],
            "customerContacts": [
              "string"
            ],
            "customerType": "string",
            "company": "string",
            "companyID": "string",
            "website": "string",
            "tel": "string",
            "email": "string",
            "mobile": "string",
            "password": "string",
            "firstName": "string",
            "lastName": "string",
            "hasAccount": true,
            "notes": "string",
            "billingType": "string",
            "bankAccounts": [
              "string"
            ],
            "fax": "string",
            "gender": "string",
            "birthDate": "2021-03-23T17:28:47.995Z",
            "etat": true
          }).then(response => console.log(response)).catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <form>
                <label htmlFor="">firstname</label>
                <input type="text" name="firstName" id="firstName" />
                <label htmlFor="">lastname</label>
                <input type="text" name="lastName" id="lastName" />
                <label htmlFor="">email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="">tel</label>
                <input type="tel" name="tel" id="tel" />
                <label htmlFor="">company</label>
                <input type="text" name="firstname" id="company" />
                <button onClick={postCustomer}>valider</button>
            </form>
        </div>
    )
}

export default AddCustomer