import PropTypes from 'prop-types';
import ImageComponent from "../ImageComponent/ImageComponent"

const GalleryGrid = ({ filteredData }) => (
    filteredData.map(({ image, text }) => (<ImageComponent key={text} image={image} text={text} />))
);

GalleryGrid.propTypes = {
    filteredData: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        image: PropTypes.string
    }))
}

export default GalleryGrid;
