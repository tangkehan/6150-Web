import React from 'react';
import './villagers_style.css';
import Ankha from '../assets/Ankha_NH.png';
import Antonio from '../assets/Antonio_NH.png';
import Audie from '../assets/Audie_NH.png';
import Beau from '../assets/Beau_NH.png';
import Katt from '../assets/Katt_NH.png';
import Marshal from '../assets/Marshal_NH.png';
import Card from '../components/card';
import Dialog from '../components/Dialog';
import { useState } from 'react';


const Villagers = () => {
  // here is to let the whole page only shows one dialog
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleDialog = () => {
      setIsDialogOpen(true);

    }

  
    const closeDialog = () => {
      setIsDialogOpen(false);
    };

    const animal_data = [
        {
        name: 'Antonio',
        imageSrc: Antonio,
        species: 'Anteater ',
        personality: 'Jock',
        gender: 'Male',
      },
      {
        name: 'Marshal',
        imageSrc: Marshal,
        species: 'Squirrel ',
        personality: 'Smug',
        gender: 'Male',
      },
      {
        name: 'Katt',
        imageSrc: Katt,
        species: 'Cat ',
        personality: 'Big Sister',
        gender: 'Female',
      },
      {
        name: 'Ankha',
        imageSrc: Ankha,
        species: 'Cat',
        personality: 'Snooty',
        gender: 'Female',
      },
      {
        name: 'Audie',
        imageSrc: Audie,
        species: 'Wolf',
        personality: 'Peppy',
        gender: 'Female',
      },
      {
        name: 'Beau',
        imageSrc: Beau,
        species: 'Beau ',
        personality: 'Lazy',
        gender: 'Male',
      }
    ];

    return (
        <div className = 'cardset'>
             {animal_data.map((animal, index) => (
                <Card
                    key = {index}
                    name = {animal.name}
                    imageSrc= {animal.imageSrc}
                    species= {animal.species}
                    personality= {animal.personality}
                    gender= {animal.gender}
                    toggleDialog={toggleDialog}
                />
                
              ))};
               {isDialogOpen && <Dialog onClose={closeDialog} />}

        </div>
                
    );
};

export default Villagers;