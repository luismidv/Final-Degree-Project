import './styles/rootStyle.css'

export function Banner({image,title}) {
    return (
        <div className = 'bannerclass'>
            <img src = {image}></img>
            <p> {title} </p>
            <button class = "details"> More details</button>
            
        </div>
    )
}