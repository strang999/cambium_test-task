import { useContext } from 'react';
import { AppContext } from '../App/App';

function Navbar({ handleOpacityChange, categories, handleSearch }) {
    const opacity = useContext(AppContext);
    console.log(categories);
    return (
        <nav className='navbar-container'>
            <div className='categories-wrapper'>
                {
                    categories.map(category => {
                        return (<p className='category-item' key={category} onClick ={(e)=>handleSearch(e)}>{category}</p>)
                    })
                }
            </div>
            <div className='opacity-control-container'>
                <div className='input-slider-container'>
                    <p>Opacity</p>
                    <input
                        id='opacity-input-slider'
                        type='range'
                        value={opacity}
                        min='0' max='1'
                        onChange={handleOpacityChange}
                        step='0.01' />
                </div>
                <input value={opacity} type="text" placeholder='Opacity' id="opacity-text-input" onChange={handleOpacityChange} />
            </div>
        </nav>

    )
}

export default Navbar
