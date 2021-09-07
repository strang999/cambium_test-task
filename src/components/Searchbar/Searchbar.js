function Searchbar({ handleSearch }) {
    return (
        <div className='searchbar-container'>
            <input className='searchbar' type="text" placeholder='Search' onChange={(event) => handleSearch(event)} />
        </div>
    )
}

export default Searchbar
