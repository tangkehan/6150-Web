import React from 'react';
import './dialog.css';
import logo from '../assets/amiibo.png';
import Button from './Button';

const dialog = ({ onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleCancel = () => {
        onClose()
    }
   
    return (
    
        <div className ="dialog">
            <form className = 'form' onSubmit = {handleSubmit}>
                <img className = 'dialog-logo'src={logo} alt={`amibo logo image`} />
                <h2 className = 'form-title'>Account Creation</h2>
                <div className = 'container'>
                    <label for = "email">
                        <span>Email:  *require</span>
                        <input type ="text" className = "email" name = 'email' />
                        <span className = "email-error"></span>
                    </label>
                    <label for = "confirm-email">
                        <span>Confirm Email:  *require </span>
                        <input type ="text" className = "confirm-email" name = 'confirm-email' />
                        <span class = "confirm-error"></span>
                    </label>
                    <div className = 'buttons'>
                        <Button type="submit" visual="link" className="submitButton" text = 'Submit' />
                        <Button type="button" visual="button" className="cancelButton"  text = 'Cancel' onClick={handleCancel} />
                    </div>
                </div>
            </form>
        </div>

    );
}

export default dialog;