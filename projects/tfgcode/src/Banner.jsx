import './rootStyle.css'

export function Banner({image,title}) {
    return (
        <div className = 'bannerclass'>
            <img src = {image}></img>
            <p> {title} </p>
        </div>
    )
}