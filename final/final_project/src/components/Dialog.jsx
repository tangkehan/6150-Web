import React from 'react';
import './dialog.css';
import logo from '../assets/amiibo.png';
import Button from './Button';

const dialog = ({ onClose, isFavorite, setIsFavorite }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
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
                
                    <div className = 'buttons'>
                        <Button type="submit" visual="button" className="submitButton" text = 'Submit'  onClick={handleSubmit} />
                        <Button type="button" visual="button" className="cancelButton"  text = 'Cancel' onClick={handleCancel} />
                    </div>
                </div>
            </form>
        </div>

    );
}

export default dialog;