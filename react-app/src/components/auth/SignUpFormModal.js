import React from "react";
import { Modal } from '../../Context/Modal'
import SignUpForm from "./SignUpForm";
import { useState } from "react";

function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div onClick={() => setShowModal(true)} className="SignUpContainer">
             <div className='SignUpText_2938'>Sign up with email</div>
        </div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <div className="CPM_div">
                    <SignUpForm />
                </div>
            </Modal>
        )}
        </>
    )
}

export default SignUpFormModal
