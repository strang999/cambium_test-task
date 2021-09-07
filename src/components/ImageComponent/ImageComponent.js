import PropTypes from 'prop-types';
import { useContext } from "react";
import { AppContext } from "../App/App";

const ImageComponent = ({ image, text }) => {
    const opacity = useContext(AppContext);
    return (
        <div className="item-container">
            <img className="image" style={{ opacity }} src={image} alt={text} />
            <p className="image-text"> {text}</p>
        </div>
    );
};


ImageComponent.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string
}
export default ImageComponent;
