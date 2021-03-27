import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from 'axios';

const CustomerDetailContact = () => {

    const customer = useParams('id')
    const [contactCustomers, setContactCustomer] = useState([])

    const adresseAPI = "https://app.tacbox.fr/api/customers/" + customer.id + "/customer_contacts"

    useEffect(() => {
        fetch(adresseAPI).then(res => res.json()).then(data => setContactCustomer(data['hydra:member']))
    }, [adresseAPI])

    console.log(contactCustomers)

    return (
        <>
            <div className="ligne">
                <div className="block-contact">
                    <div className='details-infos'>Contacts</div>
                    {contactCustomers.map(contactCustomer =>
                        <div key={contactCustomer.id} className=''>
                            <div className='details-infos'>Numéro du contact : {contactCustomer.id}</div>
                            <div className='details-infos'>email : </div> <input className='details-infos' defaultValue={contactCustomer.email} />
                            <div className='details-infos'>firstName : </div> <input className='details-infos' defaultValue={contactCustomer.firstName} />
                            <div className='details-infos'>lastName : </div> <input className='details-infos' defaultValue={contactCustomer.lastName} />
                            <div className='details-infos'>mobile : </div> <input className='details-infos' defaultValue={contactCustomer.mobile} />
                            <div className='details-infos'>office : </div> <input className='details-infos' defaultValue={contactCustomer.office} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default CustomerDetailContact