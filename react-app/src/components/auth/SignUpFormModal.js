import React from "react";
import { Modal } from '../../Context/Modal'
import SignUpForm from "./SignUpForm";
import { useState } from "react";
import './SignUpFormModal.css'

function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div onClick={() => setShowModal(true)} className="SignUpContainer">
             <div className='SignUpText_2938'>Sign up with email</div>
        </div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <div className="outerSUFcontainer">
                    <div className="SUFtitle">Create your account</div>
                    <div className="CPM_div">
                        <SignUpForm />
                    </div>
                </div>
            </Modal>
        )}
        </>
    )
}

export default SignUpFormModal
