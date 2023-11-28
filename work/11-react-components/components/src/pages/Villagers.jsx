import React from 'react';
import './villagers_style.css';
import Ankha from '../assets/Ankha_NH.png';
import Antonio from '../assets/Antonio_NH.png';
import Audie from '../assets/Audie_NH.png';
import Beau from '../assets/Beau_NH.png';
import Katt from '../assets/Katt_NH.png';
import Marshal from '../assets/Marshal_NH.png';

const Villagers = () => {
    return (
        <div className = 'cardset'>
            <div className = "card">
                <h2 className = "card_title">Antonio</h2>
                <img className = 'photo' src={Antonio} alt="Antonio's portrait" />
                <div className = 'card_content'>
                    <p> Species: Anteater  <br />
                    	Personality: Jock  <br />
                        Gender: Male  <br />
                        Birthday: October 20th  <br />
                        Favorite saying	"Always go for the burn!"
                    </p>
                    <p>Phasellus non risus <span className="subscribe-text">Subscribe</span>  at purus vulputate consequat.</p>
                </div>
            </div>
            <div className = "card">
                <h2 className = "card_title">Marshal</h2>
                <img className = 'photo' src={Marshal}  alt="Marshal's portrait" />
                <div className = 'card_content'>
                    <p> Species: Squirrel  <br />
                    	Personality: Smug  <br />
                        Gender: Male  <br />
                        Birthday: September 29th  <br />
                        Favorite saying	"Seize the day."
                    </p>
                    <p>Phasellus non risus <span className="subscribe-text">Subscribe</span>  at purus vulputate consequat.</p>
                </div>
            </div>
            <div className = "card">
                <h2 className = "card_title">Katt</h2>
                <img className = 'photo' src={Katt}  alt="Katt's portrait" />
                <div className = 'card_content'>
                    <p> Species: Cat  <br />
                    	Personality: Big sister  <br />
                        Gender: Female  <br />
                        Birthday: April 27th  <br />
                        Favorite saying	"MeowMEOWmeow!"
                    </p>
                    <p>Phasellus non risus <span className="subscribe-text">Subscribe</span>  at purus vulputate consequat.</p>
                </div>
            </div> 
            <div className = "card">
                <h2 className = "card_title">Ankha</h2>
                <img className = 'photo' src = {Ankha} alt="Ankha's portrait" />
                <div className = 'card_content'>
                    <p> Species: Cat <br />
                    	Personality: Snooty  <br />
                        Gender: Female  <br />
                        Birthday: September 22nd  <br />
                        Favorite saying	"All that glitters is not gold."
                    </p>
                    <p>Phasellus non risus <span className="subscribe-text">Subscribe</span>  at purus vulputate consequat.</p>
                </div>
            </div>
            <div className = "card">
                <h2 className = "card_title">Audie</h2>
                <img className = 'photo' src={Audie}  alt="Audie's portrait" />
                <div className = 'card_content'>
                    <p> <br />Species: Wolf  <br />
                    	Personality: Peppy  <br />
                        Gender: Female  <br />
                        Birthday: August 31st  <br />
                        Favorite saying	"Be the kind of person, <br /> your future self won't regret having been."
                    </p>
                    <p>Phasellus non risus <span className="subscribe-text">Subscribe</span>  at purus vulputate consequat.</p>
                </div>
            </div>
            <div className = "card">
                <h2 className = "card_title">Beau</h2>
                <img className = 'photo' src={Beau}  alt="Beau's portrait" />
                <div className = 'card_content'>
                    <p> Species: Deer  <br />
                    	Personality: Lazy  <br />
                        Gender: Male  <br />
                        Birthday: April 5th  <br />
                        Favorite saying	"You snooze, you lose."
                    </p>
                    <p>Phasellus non risus <span className="subscribe-text">Subscribe</span>  at purus vulputate consequat.</p>
                </div>
            </div>
        </div>
                
    );
};

export default Villagers;