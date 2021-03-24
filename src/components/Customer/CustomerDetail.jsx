import { useEffect, useState } from "react"
import { useParams } from "react-router"

const CustomerDetail = () => {

    const customer = useParams('id')
    const [customerInfos, setCustomerInfos] = useState([])

    useEffect(() => {
        fetch('https://app.tacbox.fr/api/customers/' + customer.id).then(response => response.json()).then(data => setCustomerInfos([data]))
    }, [customer.id])

    console.log(customerInfos)

    return (
        <>
            {customerInfos.map(customerInfo =>
                <div key={customerInfo.id}>
                    <div>Numéro du client : {customerInfo.id}</div>
                    <div>Nom : {customerInfo.firstName}</div>
                    <div>Prénom : {customerInfo.lastName}</div>
                    <div>Email : {customerInfo.email}</div>
                    <div>Téléphone : {customerInfo.tel}</div>
                    <div>Nom de l'entreprise : {customerInfo.company}</div>
                </div>
            )}

        </>
    )
}

export default CustomerDetail