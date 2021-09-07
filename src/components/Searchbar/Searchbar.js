import PropTypes from 'prop-types';

const Searchbar = ({ onSearchHandle }) => (
    <div className='searchbar-container'>
        <input className='searchbar' type="text" placeholder='Search' onChange={(event) => onSearchHandle(event.target.value)} />
    </div>)

Searchbar.propTypes = {
    onSearchHandle: PropTypes.func,
}
export default Searchbar;
