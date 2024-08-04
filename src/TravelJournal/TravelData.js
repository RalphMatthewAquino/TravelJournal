import Paris from '../assets/travel-journal-assets/countries/paris.jpg';
import Argentina from '../assets/travel-journal-assets/countries/argentina.jpeg';
import Australia from '../assets/travel-journal-assets/countries/australia.jpg';
import UAE from '../assets/travel-journal-assets/countries/uae.jpg';
import Germany from '../assets/travel-journal-assets/countries/germany.jpg';
import Brazil from '../assets/travel-journal-assets/countries/brazil.jpg';
import Poland from '../assets/travel-journal-assets/countries/poland.jpg';
import Philippines from '../assets/travel-journal-assets/countries/ph.jpg';
import Nepal from '../assets/travel-journal-assets/countries/nepal.jpg';
import USA from '../assets/travel-journal-assets/countries/usa.jpg';
import China from '../assets/travel-journal-assets/countries/china.jpg';
import Korea from '../assets/travel-journal-assets/countries/korea.jpg';
import Greece from '../assets/travel-journal-assets/countries/greece.jpg';
import Japan from '../assets/travel-journal-assets/countries/japan.jpg';
import Italy from '../assets/travel-journal-assets/countries/italy.jpg';

import Netherlands from '../assets/travel-journal-assets/countries/netherlands.jpg';
import Russia from '../assets/travel-journal-assets/countries/russia.jpg';
import Norway from '../assets/travel-journal-assets/countries/norway.jpg';
import Spain from '../assets/travel-journal-assets/countries/spain.jpg';
import Thailand from '../assets/travel-journal-assets/countries/thailand.jpg';
import Maldives from '../assets/travel-journal-assets/countries/maldives.jpg';
import Turkey from '../assets/travel-journal-assets/countries/turkey.jpeg';
import Switzerland from '../assets/travel-journal-assets/countries/switzerland.jpg';
import Iceland from '../assets/travel-journal-assets/countries/iceland.jpg';

import JasonStathan from '../assets/travel-journal-assets/people/statham.jpg';
import StephenCurry from '../assets/travel-journal-assets/people/steph.jpg';
import RebeccaFerguson from '../assets/travel-journal-assets/people/fergusson.jpg';
import TheRock from '../assets/travel-journal-assets/people/the-rock.jpg';
import TaylorSwift from '../assets/travel-journal-assets/people/swift.jpg';
import HenryCavill from '../assets/travel-journal-assets/people/henry-cavill.jpg';
import JaysonTatum from '../assets/travel-journal-assets/people/tatum.jpg';
import KeanuReeves from '../assets/travel-journal-assets/people/keanu.jpg';
import KlayThompson from '../assets/travel-journal-assets/people/klay.jpg';

import ArgentinaFlag from '../assets/travel-journal-assets/flags/argentina-flag.svg';
import AustraliaFlag from '../assets/travel-journal-assets/flags/australia-flag.svg';
import ParisFlag from '../assets/travel-journal-assets/flags/france-flag.svg';
import UAEFlag from '../assets/travel-journal-assets/flags/uae-flag.svg';
import GermanyFlag from '../assets/travel-journal-assets/flags/germany-flag.svg';
import BrazilFlag from '../assets/travel-journal-assets/flags/brazil-flag.svg';
import PolandFlag from '../assets/travel-journal-assets/flags/poland-flag.svg';
import PhilippinesFlag from '../assets/travel-journal-assets/flags/ph-flag.svg';
import NepalFlag from '../assets/travel-journal-assets/flags/nepal-flag.svg';
import USAFlag from '../assets/travel-journal-assets/flags/usa-flag.svg';
import ChinaFlag from '../assets/travel-journal-assets/flags/china-flag.svg';
import KoreaFlag from '../assets/travel-journal-assets/flags/south-korea-flag.svg';
import GreeceFlag from '../assets/travel-journal-assets/flags/greece-flag.svg';
import JapanFlag from '../assets/travel-journal-assets/flags/japan-flag.svg';
import ItalyFlag from '../assets/travel-journal-assets/flags/italy-flag.svg';

import NetherlandsFlag from '../assets/travel-journal-assets/flags/netherlands-flag.svg';
import RussiaFlag from '../assets/travel-journal-assets/flags/russia-flag.svg';
import NorwayFlag from '../assets/travel-journal-assets/flags/norway-flag.svg';
import SpainFlag from '../assets/travel-journal-assets/flags/spain-flag.svg';
import ThailandFlag from '../assets/travel-journal-assets/flags/thailand-flag.svg';
import MaldivesFlag from '../assets/travel-journal-assets/flags/maldives-flag.svg';
import TurkeyFlag from '../assets/travel-journal-assets/flags/turkey-flag.svg';
import SwitzerlandFlag from '../assets/travel-journal-assets/flags/switzerland-flag.svg';
import IcelandFlag from '../assets/travel-journal-assets/flags/iceland-flag.svg';

import RDJ from '../assets/travel-journal-assets/people/rdj.jpg';
import ChrisHemsworth from '../assets/travel-journal-assets/people/hemsworth.jpg';
import ChrisEvans from '../assets/travel-journal-assets/people/evans.jpg';

const exp = '\"A true dream come true! I had the opportunity to travel to this incredible country and experience everything that the locals have to offer. The culture, food, and people were absolutely fantastic!\"';

const overallRating = 5;
const TravelJournalData = {
    title: 'TravelMat',
    catchphrase: 'Discover the world in the palm of your hands.',
    navigation_items: [
        'Home',
        'About',
        'Help',
        'Contact Us'
    ],

    main_description: "TravelMat is your go-to resource for discovering the best places around the world and the must-visit tourist spots within each destination. Whether you're planning your next vacation or simply dreaming about future travels, TravelMat offers comprehensive guides that cater to all types of travelers. From bustling cities to serene landscapes, historic landmarks to hidden gems, TravelMat provides detailed information to help you explore and experience the wonders of the world. Dive into our expertly curated guides, and let TravelMat be your companion in every adventure.",
    places: [
        {
            place: 'Argentina',
            description: `
                Cerro Fitz Roy is a stunning mountain located near El Chaltén village, within the Southern Patagonian Ice Field in Patagonia. It stands at an elevation of 3,405 meters (11,171 feet) and is renowned for its sheer granite faces, which present a challenging climb for mountaineers. The mountain is also a popular destination for trekkers who come to enjoy the breathtaking scenery, which includes glaciers, turquoise lakes, and diverse wildlife. The surrounding Los Glaciares National Park offers numerous trails and stunning vistas, making it a must-visit spot for nature enthusiasts.
            `,
            image: Argentina,
            startDate: 'May 31, 2010',
            endDate: 'June 30, 2010',
            locationOnMaps: 'https://maps.app.goo.gl/rxU2gYR88xgESr6k8',
            experience: exp,
            touristSpot: 'Cerro Fitz Roy',
            rating: overallRating,
            flag: ArgentinaFlag
        },
        {
            place: 'Australia',
            description: `
                The Sydney Opera House is one of the most iconic and recognizable buildings in the world, situated in Sydney, Australia. Designed by Danish architect Jørn Utzon, it is renowned for its unique sail-like architectural design. Completed in 1973, the Opera House hosts more than 1,500 performances annually, including opera, ballet, theater, and concerts, attracting millions of visitors each year. Its location on Bennelong Point in Sydney Harbour provides a stunning backdrop, making it a popular spot for tourists to photograph and explore. The Opera House is also a UNESCO World Heritage Site, celebrated for its architectural innovation and cultural significance.
            `,
            image: Australia,
            startDate: 'May 31, 2011',
            endDate: 'June 30, 2011',
            locationOnMaps: 'https://maps.app.goo.gl/vgmhhHmHJMDvMFBZA',
            experience: exp,
            touristSpot: 'Sydney Opera House',
            rating: overallRating,
            flag: AustraliaFlag
        },
        {
            place: 'Brazil',
            description: `
                Christ the Redeemer (Cristo Redentor) is an iconic statue located atop the Corcovado Mountain in Rio de Janeiro, Brazil. Standing at 30 meters (98 feet) tall, with an additional 8-meter (26-foot) pedestal, it overlooks the city with outstretched arms. Completed in 1931, the statue is a symbol of Christianity and has become an emblem of Rio de Janeiro and Brazil. Visitors can take a train ride up the mountain to the base of the statue, where they can enjoy panoramic views of the city, including Sugarloaf Mountain, the beaches of Copacabana and Ipanema, and the expansive Tijuca Forest.
            `,
            image: Brazil,
            startDate: 'May 31, 2012',
            endDate: 'June 30, 2012',
            locationOnMaps: 'https://maps.app.goo.gl/7VoP8Y26BXn4AM8U8',
            experience: exp,
            touristSpot: 'Cristo Redentor',
            rating: overallRating,
            flag: BrazilFlag
        },
        {
            place: 'China',
            description: `
                The Great Wall of China is one of the most impressive architectural feats in history and a UNESCO World Heritage Site. Spanning over 13,000 miles, it stretches from the east coast to the Gobi Desert in the west. The wall was originally constructed to protect against invasions from nomadic tribes and has been rebuilt and maintained over various dynasties. Visitors can explore several well-preserved sections of the wall, such as Badaling and Mutianyu, which offer breathtaking views of the surrounding landscapes. The Great Wall is a testament to China's historical ingenuity and determination.
            `,
            image: China,
            startDate: 'May 31, 2013',
            endDate: 'June 30, 2013',
            locationOnMaps: 'https://maps.app.goo.gl/e3uBLgFT6vbwFdWUA',
            experience: exp,
            touristSpot: 'Great Wall of China',
            rating: overallRating,
            flag: ChinaFlag
        },
        {
            place: 'Germany',
            description: `
                Neuschwanstein Castle, located in the Bavarian Alps near Füssen, Germany, is a fairytale-like castle that inspired Disney's Sleeping Beauty Castle. Commissioned by King Ludwig II of Bavaria in the 19th century, the castle is known for its stunning architecture and breathtaking location. Visitors can tour the castle's opulent interiors, which include ornate rooms and stunning murals, and explore the surrounding landscape, which offers hiking trails and panoramic views of the Alps. Neuschwanstein is one of Germany's most popular tourist attractions, drawing millions of visitors each year.
            `,
            image: Germany,
            startDate: 'May 31, 2014',
            endDate: 'June 30, 2014',
            locationOnMaps: 'https://maps.app.goo.gl/qr7YYiV8GTWNv5RV6',
            experience: exp,
            touristSpot: 'Neuschwanstein Castle',
            rating: overallRating,
            flag: GermanyFlag
        },
        {
            place: 'Greece',
            description: `
                The Acropolis of Athens is an ancient citadel located on a rocky hill above the city of Athens, Greece. It is home to several iconic structures, including the Parthenon, the Temple of Athena Nike, and the Erechtheion. The Acropolis is a symbol of classical Greek culture and its enduring legacy in art, architecture, and democracy. Visitors can explore the ruins and enjoy panoramic views of Athens. The site also features a museum that houses artifacts and provides insight into the history and significance of the Acropolis.
            `,
            image: Greece,
            startDate: 'May 31, 2015',
            endDate: 'June 30, 2015',
            locationOnMaps: 'https://maps.app.goo.gl/uvrvsBRCMutXSx93A',
            experience: exp,
            touristSpot: 'Acropolis',
            rating: overallRating,
            flag: GreeceFlag
        },
        {
            place: 'Iceland',
            description: `
                The Blue Lagoon is a geothermal spa located in a lava field near Grindavík on the Reykjanes Peninsula in Iceland. Known for its milky-blue waters, the lagoon is rich in minerals like silica and sulfur, which are believed to have healing properties for the skin. The warm waters are supplied by the nearby Svartsengi geothermal power station. Visitors can relax in the soothing waters, enjoy spa treatments, and take in the stunning volcanic landscape that surrounds the lagoon. The Blue Lagoon is one of Iceland's most popular tourist destinations.
            `,
            image: Iceland,
            startDate: 'May 31, 2016',
            endDate: 'June 30, 2016',
            locationOnMaps: 'https://maps.app.goo.gl/9wnKJ9wEEQvx3j8Z8',
            experience: exp,
            touristSpot: 'Blue Lagoon',
            rating: overallRating,
            flag: IcelandFlag
        },
        {
            place: 'Italy',
            description: `
                The Colosseum in Rome, Italy, is one of the most iconic and well-preserved ancient structures in the world. Completed in 80 AD, this massive amphitheater could hold up to 80,000 spectators and was used for gladiatorial contests, public spectacles, and theatrical performances. The Colosseum is an architectural and engineering marvel, showcasing the grandeur of ancient Roman civilization. Visitors can explore the various levels of the amphitheater, including the underground chambers where gladiators and animals were kept before contests. The Colosseum remains a symbol of Rome's imperial power and historical significance.
            `,
            image: Italy,
            startDate: 'May 31, 2018',
            endDate: 'June 30, 2018',
            locationOnMaps: 'https://maps.app.goo.gl/kwT95GRvaXhBTwpz5',
            experience: exp,
            touristSpot: 'Colosseum',
            rating: overallRating,
            flag: ItalyFlag
        },
        {
            place: 'Japan',
            description: `
                Mount Fuji, Japan's highest peak at 3,776 meters (12,389 feet), is an iconic symbol of the country. Located on Honshu Island, it is a stratovolcano that last erupted in 1707. Mount Fuji is a popular destination for climbers and tourists, especially during the official climbing season in July and August. The mountain is also a UNESCO World Heritage Site and holds significant cultural and spiritual importance in Japanese society. Visitors can hike the various trails to the summit or enjoy the stunning views from nearby vantage points, such as the Fuji Five Lakes region.
            `,
            image: Japan,
            startDate: 'May 31, 2019',
            endDate: 'June 30, 2019',
            locationOnMaps: 'https://maps.app.goo.gl/Pir5dmdCCyRYMg9aA',
            experience: exp,
            touristSpot: 'Mount Fuji',
            rating: overallRating,
            flag: JapanFlag
        },
        {
            place: 'South Korea',
            description: `
                N Seoul Tower, also known as Namsan Seoul Tower, is a prominent landmark located on Namsan Mountain in the heart of Seoul, South Korea. The tower stands at 236 meters (774 feet) tall and offers panoramic views of the city and beyond from its observation decks. Originally built as a broadcast tower in 1969, it has since become a popular tourist attraction, renowned for its stunning nighttime illuminations and romantic ambiance.
            `,
            image: Korea,
            startDate: 'May 31, 2020',
            endDate: 'June 30, 2020',
            locationOnMaps: 'https://maps.app.goo.gl/b7vqQgjnVfUJ1BCR9',
            experience: exp,
            touristSpot: 'N Seoul Tower',
            rating: overallRating,
            flag: KoreaFlag
        },
        {
            place: "Maldives",
            description: `
                Alimathaa is a picturesque island in the Maldives, renowned for its pristine white sandy beaches and crystal-clear turquoise waters. This stunning island, part of the Gaaf Dhaal Atoll, is celebrated for its vibrant coral reefs and rich marine life, making it an ideal destination for snorkeling and diving. The tranquil environment, surrounded by lush palm trees and serene waters, provides a perfect tropical escape where visitors can enjoy luxury overwater bungalows and a range of water sports.
            `,
            image: Maldives,
            startDate: "May 31, 2021",
            endDate: "June 30, 2021",
            locationOnMaps: "https://maps.app.goo.gl/PEYv2TJ9D1ESbvVn9",
            experience: exp,
            touristSpot: "Alimathaa",
            rating: overallRating,
            flag: MaldivesFlag
        },
        {
            place: "Nepal",
            description: `
                Mount Everest, standing at 8,848 meters (29,029 feet), is the tallest mountain in the world and a legendary destination for mountaineers. Located in the Himalayas, straddling the border between Nepal and Tibet, this majestic peak draws climbers from around the globe seeking to reach its summit. The climb to Everest's peak is an epic adventure through challenging terrains and high altitudes, offering unparalleled views of the surrounding mountain ranges. The area around Everest is also home to diverse cultures and breathtaking landscapes, making it a must-visit for adventure seekers.
            `,
            image: Nepal,
            startDate: "May 31, 2022",
            endDate: "June 30, 2022",
            locationOnMaps: "https://maps.app.goo.gl/VC9M7c2cvWGaXfai8",
            experience: exp,
            touristSpot: "Mount Everest",
            rating: overallRating,
            flag: NepalFlag
        },
        {
            place: "Netherlands",
            description: `
                The Rijksmuseum in Amsterdam is the premier national museum of the Netherlands, renowned for its extensive collection of Dutch Golden Age masterpieces. The museum's impressive collection includes iconic works by Rembrandt, Vermeer, and Van Gogh, showcasing the rich artistic heritage of the country. Designed by architect Pierre Cuypers, the museum's grand architecture and beautifully curated exhibits make it a cultural landmark in Amsterdam. Visitors can explore the museum's vast array of paintings, sculptures, and historical artifacts, providing a deep insight into Dutch art and history.
            `,
            image: Netherlands,
            startDate: "May 31, 2023",
            endDate: "June 30, 2023",
            locationOnMaps: "https://maps.app.goo.gl/tzxWEBxocN72WWqA9",
            experience: exp,
            touristSpot: "Rijksmuseum",
            rating: overallRating,
            flag: NetherlandsFlag
        },
        {
            place: "Norway",
            description: `
                The Lofoten Islands, situated above the Arctic Circle, offer a stunning landscape of jagged mountains, deep fjords, and picturesque fishing villages. Known for their dramatic natural beauty, the islands are a haven for outdoor enthusiasts. Visitors can experience the Northern Lights, explore scenic hiking trails, and enjoy winter sports. The Lofoten Islands also feature charming traditional villages with vibrant local cultures and stunning coastal vistas, making them a perfect destination for nature lovers and adventure seekers.
            `,
            image: Norway,
            startDate: "May 31, 2024",
            endDate: "June 30, 2024",
            locationOnMaps: "https://maps.app.goo.gl/kvvbzfMLueiwtVT68",
            experience: exp,
            touristSpot: "Lofoten",
            rating: overallRating,
            flag: NorwayFlag
        },
        {
            place: "Paris",
            description: `
                Paris, the capital of France, is renowned for its rich cultural heritage, world-class art, and iconic landmarks. The Eiffel Tower, a symbol of Parisian elegance, stands at 324 meters and offers panoramic views of the city. Paris is also home to the Louvre Museum, which houses thousands of works of art, including the Mona Lisa. Visitors can explore historic sites like Notre-Dame Cathedral, enjoy leisurely strolls along the Seine River, and savor gourmet cuisine in charming cafes. Known as "The City of Light," Paris captivates with its romantic ambiance and vibrant cultural scene.
            `,
            image: Paris,
            startDate: "November 31, 2015",
            endDate: "December 30, 2015",
            locationOnMaps: "https://maps.app.goo.gl/kDJz92z1eoAex2RJA",
            experience: exp,
            touristSpot: "Eiffel Tower",
            rating: overallRating,
            flag: ParisFlag
        },
        {
            place: "Philippines",
            description: `
                Puerto Princesa is a captivating city on the island of Palawan in the Philippines, known for its stunning natural beauty and rich biodiversity. The highlight of Puerto Princesa is the Underground River, a UNESCO World Heritage Site featuring an impressive limestone cave system with an underground river flowing directly into the sea. The city is surrounded by lush forests, pristine beaches, and vibrant coral reefs, offering opportunities for eco-tourism and adventure. Puerto Princesa is a gateway to exploring Palawan's breathtaking landscapes and marine life.
            `,
            image: Philippines,
            startDate: "November 31, 2016",
            endDate: "December 30, 2016",
            locationOnMaps: "https://maps.app.goo.gl/7HRn7hkeX72jpCZLA",
            experience: exp,
            touristSpot: "Puerto Princesa Palawan",
            rating: overallRating,
            flag: PhilippinesFlag
        },
        {
            place: "Poland",
            description: `
                Rynek Glowny, or the Main Market Square, is the central square in Krakow, Poland, and is one of the largest medieval town squares in Europe. Surrounded by historic buildings such as the Cloth Hall and St. Mary's Basilica, the square is a vibrant hub of activity. It hosts lively street performances, bustling markets, and charming cafes. The square's historical significance and architectural beauty make it a focal point for visitors exploring Krakow's rich cultural heritage.
            `,
            image: Poland,
            startDate: "November 31, 2017",
            endDate: "December 30, 2017",
            locationOnMaps: "https://maps.app.goo.gl/eAfKrCtk8KeoNMAJ6",
            experience: exp,
            touristSpot: "Rynek Glowny",
            rating: overallRating,
            flag: PolandFlag
        },
        {
            place: "Russia",
            description: `
                Red Square is the historic heart of Moscow, Russia, and a major cultural landmark. Flanked by iconic structures such as the colorful St. Basil's Cathedral and the imposing Kremlin, the square has been the site of numerous historical events and celebrations. Its architectural diversity, from medieval cathedrals to Soviet-era monuments, reflects Russia's rich history and cultural evolution. Red Square is a central point for visitors exploring Moscow's vibrant urban landscape and historical significance.
            `,
            image: Russia,
            startDate: "November 31, 2018",
            endDate: "December 30, 2018",
            locationOnMaps: "https://maps.app.goo.gl/aSD5M8oTZikV7Zxn7",
            experience: exp,
            touristSpot: "Red Square",
            rating: overallRating,
            flag: RussiaFlag
        },
        {
            place: "Spain",
            description: `
                The Alhambra is a majestic palace and fortress complex located in Granada, Spain. Renowned for its exquisite Moorish architecture, intricate tilework, and lush gardens, the Alhambra reflects the grandeur of the Nasrid dynasty. Visitors can explore the Alhambra’s stunning palaces, courtyards, and towers, including the famous Hall of Mirrors and the Generalife gardens. The Alhambra's historical significance and architectural beauty make it one of Spain's most iconic landmarks.
            `,
            image: Spain,
            startDate: "November 31, 2019",
            endDate: "December 30, 2019",
            locationOnMaps: "https://maps.app.goo.gl/MYfnyKLF3o7Pzm2f8",
            experience: exp,
            touristSpot: "Alhambra",
            rating: overallRating,
            flag: SpainFlag
        },
        {
            place: "Switzerland",
            description: `
                Chillon Castle, situated on the shores of Lake Geneva, is a beautifully preserved medieval fortress in Switzerland. Dating back to the 12th century, the castle offers visitors a glimpse into medieval life with its impressive towers, ramparts, and dungeons. Surrounded by stunning lake and mountain views, Chillon Castle is a popular destination for history enthusiasts and those seeking to explore Switzerland's rich cultural heritage.
            `,
            image: Switzerland,
            startDate: "November 31, 2020",
            endDate: "December 30, 2020",
            locationOnMaps: "https://maps.app.goo.gl/k2x7Mtxsa5Di25XL9",
            experience: exp,
            touristSpot: "Chillon Castle",
            rating: overallRating,
            flag: SwitzerlandFlag
        },
        {
            place: "Thailand",
            description: `
                Koh Samui is a stunning tropical island in Thailand known for its beautiful beaches, clear blue waters, and vibrant nightlife. The island offers a range of activities, from relaxing on the sandy shores and swimming in the crystal-clear waters to exploring its lush interior and visiting serene temples. Koh Samui's charming resorts, lively markets, and diverse culinary offerings make it a popular destination for both relaxation and adventure.
            `,
            image: Thailand,
            startDate: "November 31, 2021",
            endDate: "December 30, 2021",
            locationOnMaps: "https://maps.app.goo.gl/atsV2G1F36vpqdmcA",
            experience: exp,
            touristSpot: "Koh Samui",
            rating: overallRating,
            flag: ThailandFlag
        },
        {
            place: 'Turkey',
            description: `
                Hagia Sophia, located in Istanbul, Turkey, is a historic architectural marvel that has served as a cathedral, mosque, and museum over the centuries. Originally built as a cathedral in 537 AD by the Byzantine Emperor Justinian I, it was converted into a mosque in 1453 following the Ottoman conquest of Constantinople. Today, it is a museum that attracts millions of visitors annually. The building is renowned for its massive dome, stunning mosaics, and intricate calligraphy. Hagia Sophia represents a unique blend of Christian and Islamic architectural elements and is a symbol of Istanbul's rich history.
            `,
            image: Turkey,
            startDate: 'May 31, 2017',
            endDate: 'June 30, 2017',
            locationOnMaps: 'https://maps.app.goo.gl/41etWQK1mDPsTLHJ8',
            experience: exp,
            touristSpot: 'Hagia Sophia Grand Mosque',
            rating: overallRating,
            flag: TurkeyFlag
        },
        {
            place: "UAE",
            description: `
                The Burj Khalifa in Dubai is the tallest building in the world, reaching a height of 828 meters (2,717 feet). This architectural marvel is renowned for its sleek design, luxurious interiors, and breathtaking panoramic views from its observation decks. The Burj Khalifa stands as a symbol of Dubai's rapid development and innovation, offering visitors a glimpse into the city's modern skyline and grandeur.
            `,
            image: UAE,
            startDate: "November 31, 2022",
            endDate: "December 30, 2022",
            locationOnMaps: "https://maps.app.goo.gl/4tSgguXqTtd78jJ18",
            experience: exp,
            touristSpot: "Burj Khalifa Tower",
            rating: overallRating,
            flag: UAEFlag
        },
        {
            place: "USA",
            description: `
                The Golden Gate Bridge, an iconic symbol of San Francisco, California, is a marvel of engineering and design. Spanning the Golden Gate Strait, the bridge connects San Francisco to Marin County and offers stunning views of the bay and the city. Its striking red-orange color and Art Deco design make it one of the most photographed landmarks in the world. The Golden Gate Bridge stands as a testament to American ingenuity and is a must-see for visitors exploring San Francisco.
            `,
            image: USA,
            startDate: "November 31, 2023",
            endDate: "December 30, 2023",
            locationOnMaps: "https://maps.app.goo.gl/A7GAmGAYGvZcSnX1A",
            experience: exp,
            touristSpot: "Golden Gate Bridge",
            rating: 3,
            flag: USAFlag
        }
    ],
    peopleExperiences: [
        
        {
            person: 'Chris Hemsworth',
            rate: 5,
            experience: exp,
            image: ChrisHemsworth
        },
        {
            person: 'Chris Evans',
            rate: 5,
            experience: exp,
            image: ChrisEvans
        },
        {
            person: 'Robert Downey Jr.',
            rate: 5,
            experience: exp,
            image: RDJ
        },
        {
            person: 'Dwayne Johnson',
            rate: 5,
            experience: exp,
            image: TheRock
        },
        {
            person: 'Jason Statham',
            rate: 4,
            experience: exp,
            image: JasonStathan        
        },
        {
            person: 'Rebecca Fergusson',
            rate: 4,
            experience: exp,
            image: RebeccaFerguson       
        },
        {
            person: 'Stephen Curry',
            rate: 3,
            experience: exp,
            image: StephenCurry       
        },
        {
            person: 'Klay Thompson',
            rate: 3,
            experience: exp,
            image: KlayThompson        
        },
        {
            person: 'Jayson Tatum',
            rate: 5,
            experience: exp,
            image: JaysonTatum        
        },
        {
            person: 'Keanu Reeves',
            rate: 5,
            experience: exp,
            image: KeanuReeves        
        },
        {
            person: 'Taylor Swift',
            rate: 5,
            experience: exp,
            image: TaylorSwift        
        },
        {
            person: 'Henry Cavill',
            rate: 5,
            experience: exp,
            image: HenryCavill       
        },
        
    ]
    
}

export default TravelJournalData;