import './DynamicComp.css';



const DynamicCompon = ({DynamicImage,btnText,titleHead,text,url,textHistoty,btnClass,cName}) =>{
    return(
        <div className={cName}>
            <img src={DynamicImage} alt={titleHead}></img>
<div className='title_text'>
    <h1>{titleHead}</h1>
    <p>{text}</p>
    <a href={url} className={btnClass}>{btnText}</a>
    {textHistoty}
</div>

        </div>
    )
}

export default DynamicCompon;