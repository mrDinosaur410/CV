import React from 'react'

const Contacts = () => {
    return (
        <div className="block">
            <h3>CONTACTS</h3>
            <div className="content">
                <div className="contact">
                    <h4>Email:</h4>
                    <a href='mailto:mmf.titovTA@bsu.by'>mmf.titovTA@bsu.by</a>
                </div>
                <div className="contact">
                    <h4>Phone:</h4>
                    <p>+123456789111</p>
                </div>
                <div className="contact">
                    <h4>Telegram:</h4>
                    <a href='https://t.me/MrDinosaur410'>
                        @MrDinosaur410
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contacts