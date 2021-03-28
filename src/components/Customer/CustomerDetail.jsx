import CustomerDetailGeneral from "./CustomerDetailGeneral";
import CustomerDetailAdresse from "./CustomerDetailAdresse";
import CustomerDetailContact from "./CustomerDetailContact";
import CustomerDetailDocs from "./CustomerDetailDocs";
import { useState } from "react";

const CustomerDetail = () => {

    const [selectOnglet, setSelectOnglet] = useState(
        {
            general : true,
            contact : false,
            adresse : false,
            document : false 
        }
    )

    const ongletGeneral = () => {

        setSelectOnglet(
            {
                general : true,
                contact : false,
                adresse : false,
                document : false 
            }
        )
    }

    const ongletContact = () => {
        setSelectOnglet(
            {
                general : false,
                contact : true,
                adresse : false,
                document : false 
            }
        )
    }

    const ongletAdresse = () => {
        setSelectOnglet(
            {
                general : false,
                contact : false,
                adresse : true,
                document : false 
            }
        )
    }

    const ongletDocument = () => {
        setSelectOnglet(
            {
                general : false,
                contact : false,
                adresse : false,
                document : true 
            }
        )
    }

    return (
        <>  
            <div className='onglets'>
                <div className='onglet-name' onClick={ongletGeneral}>General</div>
                <div className='onglet-name' onClick={ongletContact}>Contact</div>
                <div className='onglet-name' onClick={ongletAdresse}>Adresse</div>
                <div className='onglet-name' onClick={ongletDocument}>Document</div>
            </div>
            {selectOnglet.general && (<CustomerDetailGeneral />)}
            {selectOnglet.adresse && (<CustomerDetailAdresse />)}
            {selectOnglet.contact && (<CustomerDetailContact />)}
            {selectOnglet.document && (<CustomerDetailDocs />)}
        </>
    )
}

export default CustomerDetail