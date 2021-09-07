import ImageComponent from "../ImageComponent/ImageComponent"

function GalleryGrid({ filteredData }) {

    console.log(filteredData[0]);
    return (
        filteredData && filteredData[0].map(item => {
            const { image, text } = item;
            return (<ImageComponent key={text} image={image} text={text} />)
        })
    )
}

export default GalleryGrid
