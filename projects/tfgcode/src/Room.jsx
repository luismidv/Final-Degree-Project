import './styles/roomStyle.css'


export function RoomBanner({label, img, rooms, metters, bathrooms,price, bedroomsvg, 
    bathroomsvg, eurosvg,profilesvg, username, directionsvg, direction, description}) {
    
    return(
        
        <div className = 'room-label'>
            <img class = "room-banner-img" src = {img}></img>
            <p class = "desc-p"> {label}  </p>
            <div class = "head-info">
                <p class = 'metters-p'> {metters} M </p>
            </div>
            <div class = "head-info">
                <p class = 'bathrooms-p'> {bathrooms} </p>
                <img class= "bathroom-img" src = {bathroomsvg} ></img>
            </div>
            <div class = "head-info">
                <p class = 'bedroom-p'>{rooms}</p>
                <img class = "bedroom-img" src = {bedroomsvg} ></img>
            </div>
           <p class = 'price-p'>  {price}</p>
            
            <img class ="profile-img" src = {profilesvg}></img>
            <p class = "username-p"> {username}</p>
            
            <img class = "direction-img" src = {directionsvg}></img>
            <p class = "direction-p"> {direction}</p>
            
            <a class = "room-info" target = "_blank">Visit</a>
            
            {description.split('\n').map((line,index) => (
                <p class = "description-p" key={index}>{line}</p>
            ))}
            
            
            
            
            
        </div>
    )
}

