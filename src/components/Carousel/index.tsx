import { Card, Container } from "react-bootstrap";
import Media from "../../types/Media/Media";
import "./style";
import { Standard } from "./style";

interface CarouselProps {
  type: "standard" | "highlight";
  items: Media[];
  title?: string;
}

const Carousel = (props: CarouselProps) => {
  const cards = props.items.map((i) => (
    <Card>
      <Card.Header>{i.title}</Card.Header>
      <Card.Body>{i.description}</Card.Body>
      <Card.Footer>{i.rating}</Card.Footer>
    </Card>
  ));

  return (
    <Standard>
      <h3>{props.type === "standard" && props.title}</h3>
      <Container>{cards}</Container>
    </Standard>
  );
};

export default Carousel;
