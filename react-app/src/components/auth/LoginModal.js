import React from "react";
import { Modal } from '../../Context/Modal'
import LoginForm from "./LoginForm";
import { useState } from "react";

function LoginModal() {
    const [showModal, setShowModal] = useState(false)


    return(
        <>
        <div onClick={() => setShowModal(true)} className="LoginDiv_2397">
             <div className='LoginText_2397'>Sign in</div>
        </div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <div className="CPM_div">
                    <LoginForm />
                </div>
            </Modal>
        )}
        </>
    )
}

export default LoginModal
