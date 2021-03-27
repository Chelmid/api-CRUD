import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from 'axios';

const CustomerDetailAdresse = () => {

    const customer = useParams('id')
    const [adresseCustomers, setadresseCustomer] = useState([])
    const [customerAdresseId, setCustomerAdresseId] = useState()

    const adresseAPI = "https://app.tacbox.fr/api/customers/" + customer.id + "/customer_addresses"

    useEffect(() => {
        fetch(adresseAPI).then(res => res.json()).then(data => setadresseCustomer(data['hydra:member']))
        adresseCustomers.map((adresseCustomer) => setCustomerAdresseId(adresseCustomer))
    }, [])

    const putadresse = (e) => {
        e.preventDefault()

        console.log(customerAdresseId)

        /*axios.put('https://app.tacbox.fr/api/customer_addresses/' + customerAdresseId, {

            customer: "string",
            addressType: "string",
            line1: "string",
            line2: "string",
            line3: "string",
            city: "string",
            postalCode: "string",
            state: "string",
            country: "string",
            label: "string",
            etat: true
    
        }).then(res => console.log(res))*/
    }

    return (
        <>
            <div className="ligne">
                <div className="block-adresse">
                    <form>
                        <div className='details-infos'>Addresses</div>
                        {adresseCustomers.map(adresseCustomer =>
                            <div key={adresseCustomer.id} className=''>
                                <div className='details-infos'>Numéro du Adresse : {adresseCustomer.id}</div>
                                <div className='details-infos'>City : </div> <input className='details-infos' defaultValue={adresseCustomer.city} />
                                <div className='details-infos'>Mountry : </div> <input className='details-infos' defaultValue={adresseCustomer.country} />
                                <div className='details-infos'>PostalCode : </div> <input className='details-infos' defaultValue={adresseCustomer.postalCode} />
                                <div className='details-infos'>State : </div> <input className='details-infos' defaultValue={adresseCustomer.state} />
                            </div>
                        )}
                        <button onClick={putadresse}>modifier</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CustomerDetailAdresse