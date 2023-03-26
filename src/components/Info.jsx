import React from 'react'
import AppContext from '../context'

const Info = ({title, image, description}) => {

    const {setCartOpened} = React.useContext(AppContext)

    return (
        <div className='cartEmpty'>
            <img
                width='120px'
                height='120px'
                src={image}
                alt='drawer'
            />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => setCartOpened(false)} className='emptyBasket'>
                <img src='/img/strelka.png' alt='strelka left' />
                Вернуться назад
            </button>
        </div>
    )
}

export default Info
