import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import AddCustomer from '../Customer/AddCustomer'


const CustomerList = () => {

    const [members, setMembers] = useState([])
    const [displaymemberList, setDisplaymemberList] = useState(true)
    const addressAPI = 'https://app.tacbox.fr/api/customers'
    const [displayFromAddCustomer, setDisplayFromAddCustomer] = useState(false)

    useEffect(() => {
        fetch(addressAPI).then(response => response.json()).then(data => setMembers(data['hydra:member']))
        console.log(members)
        window.location.pathname.includes("customer") ? setDisplaymemberList(false) : setDisplaymemberList(true)
    },[])

    const addCustomer = () => {
        displayFromAddCustomer === true ? setDisplayFromAddCustomer(false) : setDisplayFromAddCustomer(true)
        console.log('click')
    }

    const customerDisplayDetail = () => {
        setDisplaymemberList(false)
    }

    return (

        <>
            { displaymemberList && (
                <>
                {displayFromAddCustomer && (<AddCustomer />)}
                <button onClick={() => addCustomer()}> + </button>
                    <div className="ligne">
                        <div className='field'>ID</div>
                        <div className='field'>Nom</div>
                        <div className='field'>Prénom</div>
                        <div className='field'>email</div>
                        <div className='field'>téléphone</div>
                        <div className='field'>Nom de l'entreprise</div>
                    </div>

                    {members.map(member =>
                        <div key={member.id} className="ligne">
                            <div className='field'>{member.id}</div>
                            <div className='field'>{member.firstName}</div>
                            <div className='field'>{member.lastName}</div>
                            <div className='field'>{member.email}</div>
                            <div className='field'>{member.tel}</div>
                            <div className='field'>{member.company}</div>
                            <Link to={"/customer/" + member.id}><button onClick={customerDisplayDetail}>voir</button></Link>
                        </div>
                    )}
                </>
            )}
        </>

    )
}

export default CustomerList