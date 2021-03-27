import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from 'axios';

const CustomerDetailGeneral = () => {

    const customer = useParams('id')
    const [customerInfos, setCustomerInfos] = useState([])
    const addressAPI = 'https://app.tacbox.fr/api/customers/'
    //const [customerInfoId, setCustomerInfoId] = useState()

    useEffect(() => {
        fetch(addressAPI + customer.id).then(response => response.json()).then(data => setCustomerInfos([data]))
        console.log(customerInfos)
    },[customer.id])

    const firstNameChange = (e) => {
        console.log(e.target.value)
    }

    const putCustomer = () => {
        
    }

    return (
        <>
            <div className="ligne">
                <div className='details-infos'>General</div>
                <form>
                    {customerInfos.map(customerInfo =>
                        <div key={customerInfo.id} >
                            <div className='details-infos'>Numéro du client : {customerInfo.id}</div>
                            <div className='details-infos'>Nom : </div> <input className='details-infos' defaultValue={customerInfo.firstName} onChange={firstNameChange} />
                            <div className='details-infos'>Prénom : </div> <input className='details-infos' defaultValue={customerInfo.lastName} />
                            <div className='details-infos'>Email : </div> <input className='details-infos' defaultValue={customerInfo.email} />
                            <div className='details-infos'>Téléphone : </div> <input className='details-infos' defaultValue={customerInfo.tel} />
                            <div className='details-infos'>Nom de l'entreprise : </div><input className='details-infos' defaultValue={customerInfo.company} />
                        </div>
                    )}

                    <button onClick={putCustomer}>modifier</button>
                </form>
            </div>
        </>
    )
}

export default CustomerDetailGeneral