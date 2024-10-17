import './roomStyle.css'


export function RoomBanner({label, img, rooms, metters, bathrooms,price, bedroomsvg, 
    bathroomsvg, eurosvg,profilesvg, username, directionsvg, direction, description}) {
    
    return(
        
        <div className = 'room-label'>
            <img class = "room-banner-img" src = {img}></img>
            <p class = "desc-p"> {label}  </p>
            <p class = 'metters-p'> {metters} M </p>
            <p class = 'bathrooms-p'> {bathrooms}</p>
            <img src = {bathroomsvg} ></img>
            <p class = 'rooms-p'>{rooms}</p>
            <img class = "room-banner-svg" src = {bedroomsvg} ></img>
            <p class = 'price-p'>  {price}</p>
            <img  src = {eurosvg} ></img>
            <img  src = {profilesvg}></img>
            <p class = "username-p"> {username}</p>
            <img src = {directionsvg}></img>
            <p class = "direction-p"> {direction}</p>
            {description.split('\n').map((line,index) => (
                <p class = "description-p" key={index}>{line}</p>
            ))}
            
            
        </div>
    )
}

