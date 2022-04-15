import { render, screen } from "@testing-library/react";
import Carousel from ".";

test("should render title on standard carousel", () => {
  render(<Carousel type="standard" items={[]} title="Title Test" />);
  const title = screen.getByText("Title Test");
  expect(title).toBeInTheDocument();
});
