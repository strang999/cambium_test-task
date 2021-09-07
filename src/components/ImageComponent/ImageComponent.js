
import '../../styles.scss';
import { useContext } from 'react';
import { AppContext } from '../App/App';
function ImageComponent({ image, text }) {
    const opacity = useContext(AppContext);
    return (
        <div className='item-container'>
            <img className='image' style={{ opacity: opacity }} src={image} alt={text} />
            <p className='image-text'> {text}</p>
        </div>
    )
}

export default ImageComponent
