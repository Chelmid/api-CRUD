import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';

const CustomerDetailGeneral = () => {

    const customer = useParams('id');
    const [customerInfos, setCustomerInfos] = useState([]);
    const addressAPI = 'https://app.tacbox.fr/api/customers/';

    const [styles, setStyles] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(addressAPI + customer.id).then(response => response.json()).then(data => setCustomerInfos([data]));
    }, [customer.id])

    const putCustomer = (e) => {
        e.preventDefault();

        axios.put(addressAPI + customer.id,
            {
                "customerAddresses": [
                    "/api/customer_addresses/51",
                    "/api/customer_addresses/64",
                    "/api/customer_addresses/65"
                ],
                "purchases": [],
                "customerContacts": [
                    
                ],
                "customerType": "/api/customer_types/1",
                "company": e.target.company.value,
                "companyID": "123456789",
                "website": "website",
                "tel": "070707070707",
                "email": e.target.email.value,
                "mobile": "010101010101",
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
            setMessage('Le client est bien modifié')
            setStyles({
                color : 'green'
            })
        }).catch((error) => {
            setMessage('Une erreur est survenu')
            setStyles({
                color : 'red'
            })
        });
    }

    return (
        <>
            <div style={styles}>{message}</div>
            <div className="ligne">
                <div className='details-infos'>General</div>
                <form onSubmit={putCustomer}>
                    {customerInfos.map(customerInfo =>
                        <div key={customerInfo.id} >
                            <div className='details-infos'>Numéro du client : {customerInfo.id}</div>
                            <div className='details-infos'>Nom : </div> <input className='details-infos' defaultValue={customerInfo.firstName} name='firstName' />
                            <div className='details-infos'>Prénom : </div> <input className='details-infos' defaultValue={customerInfo.lastName} name='lastName' />
                            <div className='details-infos'>Email : </div> <input className='details-infos' defaultValue={customerInfo.email} name='email' />
                            <div className='details-infos'>Téléphone : </div> <input className='details-infos' defaultValue={customerInfo.tel} name='tel' />
                            <div className='details-infos'>Nom de l'entreprise : </div><input className='details-infos' defaultValue={customerInfo.company} name='company' />
                        </div>
                    )}

                    <button>modifier</button>
                </form>
            </div>
        </>
    )
}

export default CustomerDetailGeneral