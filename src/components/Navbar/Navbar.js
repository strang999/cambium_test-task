import { useContext } from 'react';
import { AppContext } from '../App/App';

function Navbar({handleOpacityChange}) {
    const opacity = useContext(AppContext);

    return (
        
        <div className='navbar-container'>
            <input
                id="typeinp"
                type="range"
                value={opacity}
                min="0" max="1"
                onChange={handleOpacityChange}
                step="0.01" />
        </div>
    )
}

export default Navbar
