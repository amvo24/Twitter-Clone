import React from "react";
import { Modal } from "../../Context/Modal";
import CreatePost from "./CreatePost";
import { useState } from "react";
import './CreatePostModal.css'

function CreatePostModal() {
    const [showModal, setShowModal] = useState(false)


    return (
        <>
        <div onClick={() => setShowModal(true)} className='TwitterBlueButton'>
             <div className='WordContainer'>
             <div className='LogoutWord'>Post</div>
            </div>
        </div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <div className="CPM_div">
                    <CreatePost />
                </div>
            </Modal>
        )}
        </>
    )
}

export default CreatePostModal
