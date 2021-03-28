import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import AddCustomer from '../Customer/AddCustomer'
import { useHistory } from "react-router-dom";

const CustomerList = () => {

    const [members, setMembers] = useState([]);
    const [displaymemberList, setDisplaymemberList] = useState(true);
    const [customerTotal, setCustomerTotal] = useState('');
    const addressAPI = 'https://app.tacbox.fr/api/customers';
    const [displayFromAddCustomer, setDisplayFromAddCustomer] = useState(false);
    const history = useHistory();

    useEffect(() => {
        //appelle de l'api et de save dans des states
        fetch(addressAPI)
            .then(response => response.json())
            .then(data => {
                setMembers(data['hydra:member']);
                setCustomerTotal(data['hydra:totalItems']);
            })
        // verifié URL si customer est présent ou pas
        window.location.pathname.includes("customer") ? setDisplaymemberList(false) : setDisplaymemberList(true);
    }, [])

    const addCustomer = () => {
        //affichage du formulaire add customer
        displayFromAddCustomer === true ? setDisplayFromAddCustomer(false) : setDisplayFromAddCustomer(true);
    }

    const customerDisplayDetail = () => {
        setDisplaymemberList(false);
    }

    const customerDisplayList = () => {
        setDisplaymemberList(true);
        history.push('/');
    }

    return (

        <>
            <h2 onClick={customerDisplayList}>Clients</h2>
            { displaymemberList && (
                <>
                    <button onClick={() => addCustomer()}> add client </button>
                    {displayFromAddCustomer && (<AddCustomer />)}

                    <div>{'total de clients : ' + customerTotal}</div>

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