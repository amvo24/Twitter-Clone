import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './SharePost.css'

function SharePost({post}) {
    const [showMenu, setShowMenu] = useState(false)
    const [copied, setCopied] = useState(false)
    const originUrl = window.location.origin
    const CopyPostUrl = `${originUrl}/post/${post.id}`
    console.log(copied, 'BOOLEAN OF CLICKED')

    const openMenu = () => {
        if (showMenu) return
        setShowMenu(true)
    }

    useEffect(() => {
        if (!showMenu) return

        const closeMenu = () => {
            setShowMenu(false)
        }
        document.addEventListener('click', closeMenu)
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu])


    return (
      <>
        <div className="ShareButtonDiv">
          <svg
            onClick={openMenu}
            // className='TweetDeleteButton'
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            width="24"
            height="24"
          >
            <g fill="#536471">
              <path
                d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"
                fill="#536471"
              ></path>
              <path
                d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"
                fill="#536471"
              ></path>
            </g>
          </svg>
          {showMenu && (
            <div className="Menu_4378209">
              <div className="TopOfMenu_4378209">
                Share this link with your friends!
              </div>
              <div className="BottomOfMenu_4378209">
                <div className="LinkBarSharePost">
                    <div className="LinkforShare">{CopyPostUrl}</div>
                </div>
                <CopyToClipboard text={CopyPostUrl} onCopy={() => setCopied(true)}>
                    <div className="CopySVGButton">
                        <svg
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        width="24"
                        height="24"
                        >
                        <g fill="#536471">
                            <path
                            d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"
                            fill="#536471"
                            ></path>
                            <path
                            d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"
                            fill="#536471"
                            ></path>
                        </g>
                        </svg>
                    </div>
                </CopyToClipboard>
              </div>
            </div>
          )}
          {copied ? <div id="copySuccess">Copied!</div> : null}
        </div>
      </>
    );
}

export default SharePost
