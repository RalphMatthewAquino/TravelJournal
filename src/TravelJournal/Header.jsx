import React from 'react';
import '../CSS_Styles/TravelJournal.css';
import TravelJournalLogo from '../assets/travel-journal-assets/travelmat.png';
import { FaSearch } from 'react-icons/fa';

const TravelJournalHeader = () => {
    return (

        <>
            <header className="travel-journal-header">
                <div className='travel-journal-title-container'>
                    <img src={TravelJournalLogo} alt='My Travel Journal Logo' className='travel-journal-logo'/>
                    <h1 className='travel-journal-title'>My Travel Journal</h1>
                </div>

                <SearchBar />
            </header>
        </>
        
    )
}

const SearchBar = () => {
    return (
        <div className='search-place-container'>
            <input 
                className='search-place-input' 
                placeholder='Search for a place (e.g. country, city, tourist spots)'
                type='text' />
                
            <FaSearch className='search-place-icon' size={20} color='gray'/>
        </div>
    )
}

export default TravelJournalHeader;

