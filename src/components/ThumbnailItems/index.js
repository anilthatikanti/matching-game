import './index.css'

const ThumbnailItems = props => {
  const {thumbnailDetails, selectedImage, randomImage} = props
  const {imageUrl, thumbnailUrl} = thumbnailDetails

  const selectedThumbnail = () => {
    selectedImage(imageUrl)
  }

  return (
    <li className="thumbnailList">
      <button
        type="button"
        className="thumbnailBtn"
        onClick={selectedThumbnail}
      >
        <img className="thumbnailImage" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbnailItems
