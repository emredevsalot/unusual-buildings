import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

type Props = {
  images: ReadonlyArray<ReactImageGalleryItem>;
};

const Slider = ({ images }: Props) => {
  return (
    <ImageGallery
      items={images}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      autoPlay={true}
      slideInterval={4000}
    />
  );
};

export default Slider;
