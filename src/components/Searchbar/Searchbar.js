function Searchbar({handleSearch}) {
    return (
        <div style={{ margin: '0 auto', marginTop: '10%' }}>
        <label>Search:</label>
        <input type="text" onChange={(event) =>handleSearch(event)} />
        </div>
    )
}

export default Searchbar
