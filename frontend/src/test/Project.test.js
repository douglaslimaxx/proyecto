import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Project from "../components/Project/Project";

const project = {
  id: 1,
  name: "livros",
  img:
    "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
  description: "projeto de livros LGBT",
  progress: 0,
  components: [],
};

const setup = (props) => {
  const { container } = render(<Project {...props} />);
  const name = container.querySelector(".project-name");
  const description = container.querySelector(".project-description");
  const progress = container.querySelector(".project-progress");
  return {
    name,
    description,
    progress,
  };
};

test("name should be livros", () => {
  const { name } = setup({ ...project });
  expect(name.innerHTML).toBe("livros");
});

test("description should be projeto de livros LGBT", () => {
  const { description } = setup({ ...project });
  expect(description.innerHTML).toBe("projeto de livros LGBT");
});

test("progress should be 0", () => {
  const { progress } = setup({ ...project });
  expect(progress.innerHTML).toBe("0");
});
