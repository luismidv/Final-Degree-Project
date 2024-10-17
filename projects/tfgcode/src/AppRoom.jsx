import './roomStyle.css'
import { RoomBanner } from './Room.jsx'

const description = "Beatiful house in the center of valencia\nat 5 minutes from the center";
const description_jumps = description.split("\n");
export function AppRoom(){
  return(
    <section id = 'room-container'>
      <RoomBanner label = "Habitación en el centro de Valencia" img = "../media1/roombanner1.webp" 
      rooms = '4 ' metters = '120' bathrooms = '2' price = '350' bathroomsvg = "../media1/RoomBanners/bathroom.svg"
      bedroomsvg = "../media1/RoomBanners/bedroom.svg"  eurosvg = "../media1/RoomBanners/euro.svg" 
      profilesvg= "../media1/RoomBanners/userprof.svg" username = "PepitoVendepisos"
      directionsvg = "../media1/RoomBanners/direction.svg" direction ="Calle Joaquin Sorolla"
      description = "Beatiful house in the center of valencia "/>

      <RoomBanner label = "Habitación en el centro de Madrid" img = "../media1/roombanner2.jpg" 
      rooms = '4' metters = '120' bathrooms = '2' price = '350' bathroomsvg = "../media1/RoomBanners/bathroom.svg"
      bedroomsvg = "../media1/RoomBanners/bedroom.svg"  eurosvg = "../media1/RoomBanners/euro.svg" 
      profilesvg= "../media1/RoomBanners/userprof.svg" username = "PepitoVendepisos"
      directionsvg = "../media1/RoomBanners/direction.svg" direction="Calle Joaquin Sorolla"
      description = "Beatiful house in the center of valencia "/>

      <RoomBanner label = "Habitacion en el centro de Sevilla" img= "../media1/roombanner3.webp" 
      rooms = '4' metters = '120' bathrooms = '2' price = '350' bathroomsvg = "../media1/RoomBanners/bathroom.svg"
      bedroomsvg = "../media1/RoomBanners/bedroom.svg"  eurosvg = "../media1/RoomBanners/euro.svg" 
      profilesvg= "../media1/RoomBanners/userprof.svg" username = "PepitoVendepisos"
      directionsvg = "../media1/RoomBanners/direction.svg" direction ="Calle Joaquin Sorolla"
      description = "Beatiful house in the center of valencia "/>
      
      <RoomBanner label = "Habitacion en el centro de Málaga" img= "../media1/roombanner4.jpg" 
      rooms = '4' metters = '120' bathrooms = '2' price = '350' bathroomsvg = "../media1/RoomBanners/bathroom.svg"
      bedroomsvg = "../media1/RoomBanners/bedroom.svg"  eurosvg = "../media1/RoomBanners/euro.svg" 
      profilesvg= "../media1/RoomBanners/userprof.svg" username = "PepitoVendepisos"
      directionsvg = "../media1/RoomBanners/direction.svg" direction ="Calle Joaquin Sorolla"
      description = "Beatiful house in the center of valencia"
      />
    </section>
  )
}

export default AppRoom