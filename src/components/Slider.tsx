import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

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
