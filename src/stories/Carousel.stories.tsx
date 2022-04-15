import { ComponentMeta, ComponentStory } from "@storybook/react";
import Carousel from "../components/Carousel";

export default {
  title: "Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

export const Standard: ComponentStory<typeof Carousel> = () => (
  <Carousel type="standard" items={[]} title="Title"></Carousel>
);

export const Highlight: ComponentStory<typeof Carousel> = () => (
  <Carousel type="highlight" items={[]} title="Title"></Carousel>
);
