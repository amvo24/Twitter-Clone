import React from "react";
import { Modal } from '../../Context/Modal'
import { useState } from "react";
import EditProfileForm from "./EditProfilePageForm";
import './EditProfileModal.css'



function EditProfileModal({user}) {
    const [showModal, setShowModal] = useState(false)


    return (
        <>
        <div className="EditText_34789" onClick={() => setShowModal(true)}>
            Edit profile
        </div>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <div className="TestMainC">
                <div className="editProfileModalContainer">
                    <div className="TopBarPM">
                        <div className="BackButtonPM">BackBttn here</div>
                        <div className="EditPmTxt">Edit profile</div>
                        <div className="SaveButtonPM">save button here</div>
                    </div>
                    <div className="BannerPicPM">
                        <img className="ActualBannerPicPm" src={user.banner_pic}/>
                    </div>
                    <div className="ContainerWithImagePm">
                        <div className="ProfilePicPM">
                            <img className="ActualImagePM" src={user.profile_pic}/>
                            </div>
                    </div>
                    <div className="EditPMForm">
                    <EditProfileForm user={user}/>
                    </div>
                    {/* <div>
                        hi
                    </div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div> */}
                </div>
                </div>
            </Modal>
        )}
        </>
    )
}
export default EditProfileModal;
