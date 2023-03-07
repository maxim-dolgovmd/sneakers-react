function Drawer({
    title,
    price,
    imageUrl,
}) {
    
    return (
        <div className="cartItem">
            <img width={70} height={70} src={imageUrl} alt="cartSneakers"/>
            <div className="cartText">
                <p>{title}</p>
                <b>{price}</b>
            </div>
            <img className="buttomBtn" src="/img/remove.svg" alt="remove"/>
        </div>
    )
}

export default Drawer;