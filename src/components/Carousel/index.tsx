import Media from "../../types/Media/Media";

interface CarouselProps {
  type: "standard" | "highlight";
  items: Media[];
  title?: string;
}

const Carousel = (props: CarouselProps) => (
  <h3>{props.type === "standard" && props.title}</h3>
);

export default Carousel;
