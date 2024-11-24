import './styles/rootStyle.css'

export function Banner({image,title}) {
    return (
        <div className = 'bannerclass'>
            <img src = {image}></img>
            <p> {title} </p>
            <a class = "details" href="./src/templates/room.html"> More details</a>
            
        </div>
    )
}