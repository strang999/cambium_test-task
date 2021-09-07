import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '../App/App';

const Navbar = ({ onOpacityChange, categories, onCategoryChange }) => {
    const opacity = useContext(AppContext);

    return (
        <nav className='navbar-container'>
            <div className='categories-wrapper'>
                {
                    categories.map(category => (<p className='category-item' key={category} onClick={() => onCategoryChange(category)}>{category}</p>)
                    )
                }
            </div>
            <div className='opacity-control-container'>
                <div className='input-slider-container'>
                    <p>Opacity</p>
                    <input
                        id='opacity-input-slider'
                        type='range'
                        value={opacity}
                        min='0'
                        max='1'
                        onChange={onOpacityChange}
                        step='0.01' />
                </div>
                <input value={opacity} type="text" placeholder='Opacity' id="opacity-text-input" onChange={onOpacityChange} />
            </div>
        </nav>

    )
}
Navbar.propTypes = {
    onOpacityChange: PropTypes.func,
    categories: PropTypes.array,
    onCategoryChange: PropTypes.func
}
export default Navbar;
