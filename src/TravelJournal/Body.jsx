import React from 'react';
import '../CSS_Styles/TravelJournal.css';

import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const TravelJournalBody = ({ travelData }) => {

    const TravelBodyComponent = travelData.places.map((place, index) => {
        // Calculate the number of filled stars and empty stars based on the rating.
        const totalStars = 5;
        const starsFilled = place.rating
        const emptyStars = totalStars - starsFilled;

        const overallRating = Array.from({ length: starsFilled }).map((_, index) => (
            <FaStar key={index} size={20} color='gold' className='place-rating-icon'/>
        ))

        const emptyRating = Array.from({ length: emptyStars }).map((_, index) => (
            <FaStar key={index} size={20} color='gray' className='place-rating-icon'/>
        ))

        return(
            <div 
                className="travel-journal-card-container" 
                key={index} 
                style={{backgroundImage: `url(${place.flag})`}}
            >
                <img src={place.image} alt='places' className='place-image'/>

                <div className='place-location-container'>

                    <div className='location-country-container'>
                        <FaMapMarkerAlt size={20} color='red' />
                        <p className='country'>{place.place.toUpperCase()}</p>
                        <a href={place.locationOnMaps} className='location-on-map-address'>
                            <small>
                                View on Google Maps
                            </small>
                        </a>
                    </div>

                    <h1 className='tourist-spot'>{place.touristSpot.toUpperCase()}</h1>

                    <p className='travel-date'>{place.startDate} - {place.endDate}</p>

                    <p className='place-description'>{place.description}</p>

                    <p className='place-experience'>{place.experience}</p>


                    <div className='place-rating-container'>
                        <p className='place-rating-text'>Overall rating: </p>
                        {overallRating}
                        {emptyRating}
                    </div>
                    
                    
                </div>
            </div>
        )
    })

    return (
        <>
            {TravelBodyComponent}
        </>
        
    )
}

export default TravelJournalBody;