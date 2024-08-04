import React from 'react';
import '../CSS_Styles/TravelJournal.css';
import TravelJournalData from './TravelData';
import TravelJournalBody from './Body';

import TravelJournalHeader from './Header';
import TravelJournalFooter from './Footer';


const TravelJournal = () => {
    return (
        <>
            <TravelJournalHeader />
            <TravelJournalBody travelData={TravelJournalData} />
            <TravelJournalFooter />
        </>
        
    )
}

export default TravelJournal;