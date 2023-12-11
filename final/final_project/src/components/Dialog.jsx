import React from 'react';
import './dialog.css';
import logo from '../assets/amiibo.png';
import Button from './Button';

const dialog = ({ onClose, isFavorite, setIsFavorite }) => {
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
                <h2 className = 'form-title'>Do you want to mark this as a favorite?</h2>
                <div className = 'container'>
                <div className = "favorite-checkbox">
                    <label>
                        <span>Mark as Favorite: </span>
                        <input type="checkbox" checked={isFavorite} 
                            onChange={() => setIsFavorite(!isFavorite)}/>   
                    </label>
                </div>
                    {/* <label for = "email">
                        <span>Email:  *require</span>
                        <input type ="text" className = "email" name = 'email' />
                        <span className = "email-error"></span>
                    </label>
                    <label for = "confirm-email">
                        <span>Confirm Email:  *require </span>
                        <input type ="text" className = "confirm-email" name = 'confirm-email' />
                        <span class = "confirm-error"></span>
                    </label> */}
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