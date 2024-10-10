import './roomStyle.css'
import { RoomBanner } from './Room.jsx'

export function AppRoom(){
  return(
    <section id = 'room-container'>
      <RoomBanner label = "Habitación en el centro de Valencia" img = "../media1/roombanner1.webp" 
      rooms = '4 ' metters = '120' bathrooms = '2' price = '350' bathroomsvg = "../media1/RoomBanners/bathroom.svg"
      bedroomsvg = "../media1/RoomBanners/bedroom.svg"  eurosvg = "../media1/RoomBanners/euro.svg"/>

      <RoomBanner label = "Habitación en el centro de Madrid" img = "../media1/roombanner2.jpg" 
      rooms = '4' metters = '120' bathrooms = '2' price = '350' bathroomsvg = "../media1/RoomBanners/bathroom.svg"
      bedroomsvg = "../media1/RoomBanners/bedroom.svg"  eurosvg = "../media1/RoomBanners/euro.svg"/>

      <RoomBanner label = "Habitacion en el centro de Sevilla" img= "../media1/roombanner3.webp" 
      rooms = '4' metters = '120' bathrooms = '2' price = '350' bathroomsvg = "../media1/RoomBanners/bathroom.svg"
      bedroomsvg = "../media1/RoomBanners/bedroom.svg"  eurosvg = "../media1/RoomBanners/euro.svg"/>
      
      <RoomBanner label = "Habitacion en el centro de Zaragoza" img= "../media1/roombanner4.jpg" 
      rooms = '4' metters = '120' bathrooms = '2' price = '350' bathroomsvg = "../media1/RoomBanners/bathroom.svg"
      bedroomsvg = "../media1/RoomBanners/bedroom.svg"  eurosvg = "../media1/RoomBanners/euro.svg"/>
    </section>
  )
}

export default AppRoom