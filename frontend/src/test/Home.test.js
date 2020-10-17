import React from "react";
import {
  render,
  fireEvent,
  cleanup
} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/HomePage/Home";

const projects = [
  {
    id: 0,
    name: "projeto1",
    img:
      "https://o4u.com.br/wp-content/uploads/2018/11/gest%C3%A3o-empresarial-na-pr%C3%A1tica.jpg",
    description: "projeto de livros LGBT",
    progress: 0,
    components: [],
  },
  {
    id: 1,
    name: "livros",
    img:
      "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
    description: "projeto de livros LGBT",
    progress: 0,
    components: [],
  },
  {
    id: 2,
    name: "livros lgbt",
    img:
      "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
    description: "projeto de livros LGBT",
    progress: 0,
    components: [],
  }
]

const setup = (props) => {
  const { container } = render(<Home {...props} />)
  const input = container.querySelector("#searchBar")
  const projectsList = container.querySelector("#container")
  return {
    input,
    projectsList,
    container
  }
}

afterEach(function () {
  cleanup();
})

test('project list should be empty ', () => {
  const { projectsList } = setup({ projects: [] })
  expect(projectsList.children.length).toBe(0)
})

test('project list should have 2 itens ', () => {
  const { projectsList } = setup({ projects })
  expect(projectsList.children.length).toBe(3)
})

test('one project should have livros as name ', () => {
  const { input, projectsList } = setup({ projects })
  fireEvent.change(input, { target: { value: 'livros' } })
  expect(projectsList.children.length).toBe(2)
})

test('one project should have livros as name ', () => {
  const { input, projectsList } = setup({ projects })
  fireEvent.change(input, { target: { value: 'filmes' } })
  expect(projectsList.children.length).toBe(0)
})



