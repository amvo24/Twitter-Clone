import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import CreateComment from './CreateComment'


function CreateCommentModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <button onClick={()=> setShowModal(true)}>Comment</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateComment />
        </Modal>
      )}
        </>
    )

}

export default CreateCommentModal;
