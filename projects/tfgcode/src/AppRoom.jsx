import './styles/roomStyle.css'
import { RoomBanner } from './Room.jsx'

const description = "Beatiful house in the center of valencia\nat 5 minutes from the center";
const description_jumps = description.split("\n");
export function AppRoom(){
  return(
    <section id = 'room-container'>
      <RoomBanner label = "Room at the center of Valencia" img = "../../media1/roombanner1.webp" 
      rooms = '4 ' metters = '120' bathrooms = '2' price = '350' bathroomsvg = "../../media1/RoomBanners/bathroom.svg"
      bedroomsvg = "../../media1/RoomBanners/bedroom.svg"  eurosvg = "../../media1/RoomBanners/euro.svg" 
      profilesvg= "../../media1/RoomBanners/userprof.svg" username = "PepitoVendepisos"
      directionsvg = "../../media1/RoomBanners/direction.svg" direction ="Joaquin Sorolla street"
      description = "Beatiful house in the center "/>

      <RoomBanner label = "Room at the center of Madrid" img = "../../media1/roombanner2.jpg" 
      rooms = '4' metters = '120' bathrooms = '2' price = '350' bathroomsvg = "../../media1/RoomBanners/bathroom.svg"
      bedroomsvg = "../../media1/RoomBanners/bedroom.svg"  eurosvg = "../../media1/RoomBanners/euro.svg" 
      profilesvg= "../../media1/RoomBanners/userprof.svg" username = "PepitoVendepisos"
      directionsvg = "../../media1/RoomBanners/direction.svg" direction="Joaquin Sorolla street"
      description = "Beatiful house in the center "/>

      <RoomBanner label = "Room at the center of Seville" img= "../../media1/roombanner3.webp" 
      rooms = '4' metters = '120' bathrooms = '2' price = '350' bathroomsvg = "../../media1/RoomBanners/bathroom.svg"
      bedroomsvg = "../../media1/RoomBanners/bedroom.svg"  eurosvg = "../../media1/RoomBanners/euro.svg" 
      profilesvg= "../../media1/RoomBanners/userprof.svg" username = "PepitoVendepisos"
      directionsvg = "../../media1/RoomBanners/direction.svg" direction ="Joaquin Sorolla street"
      description = "Beatiful house in the center "/>
      
      <RoomBanner label = "Room at the center of Malaga" img= "../../media1/roombanner4.jpg" 
      rooms = '4' metters = '120' bathrooms = '2' price = '350' bathroomsvg = "../../media1/RoomBanners/bathroom.svg"
      bedroomsvg = "../../media1/RoomBanners/bedroom.svg"  eurosvg = "../../media1/RoomBanners/euro.svg" 
      profilesvg= "../../media1/RoomBanners/userprof.svg" username = "PepitoVendepisos"
      directionsvg = "../../media1/RoomBanners/direction.svg" direction ="Joaquin Sorolla street"
      description = "Beatiful house in the center"
      />
    </section>
  )
}

export default AppRoom