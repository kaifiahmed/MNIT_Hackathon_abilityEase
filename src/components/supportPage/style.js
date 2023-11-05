import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcICA0HBwcHBwcHCA0HBwcHBw8ICQcNFREWFhUREx8YHSggGBolJxUfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDisZFRk3KzctKysrKysrKys3Nys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAACAQADBAf/xAAZEAEBAQEBAQAAAAAAAAAAAAAAARESAhP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6HFiRY0wsKDCgFCgwoKsKJCgFCgw4Cw4MOAsODDgLCiQoCxUiwVmZgZmYGZmEFKVGgNCnRoOdCulCg50adCgFGnRoBRp0KINRalBEZgaLEiwChQYUAoUGFBShRIUBYcSFAWHBhwFhwYcBYsSEKyswMysCMrAjMwINIaINGlRoBRp0KAUKdGg50adGgFGlRogVKVGgLNUoLFiLAKHAhwChQYUFKHBhQDhQYcAoUGHAWFEhQVYsSFAZWVBmVgRCQESqlBBpUaolGlRoBRpUaIFCnRoBQp0aAUKdGgFGlRog1KVECWIUBYUSFAWHBhQUocCFAOHAhQDhwIUA4UCFBShQYsQJUUFZtYGasgNRqpQSjVqVRKNWjQGjSoUQaNKhQGjSoUBo0qNAaFOjRBqKgEsSLAKFEhQVYUGFAKFBhQChQYsB0lKVzlKUHSUpXOUpRTlKVzlWUHTV0NbUHTW0NbQPU0dTQLUtTU1RbRta0bQa0bWtG0GtG1bRoiUatGgNGlUoDRpUaA0aVGiDUWoCxYiwDhQIUFOFAhQDiwYUAosSLAWFBUC1ZRYD1dDW0V01dc9bQdNXXPptA9bQ6ToHTU0NTQPRtTUEXUtRgSpVQEo0qlAaNKjQGjSo0Bo0qNEGotQFWJFgFFiRYKUKBCgOkKOcKUHSFAlKUCipCgNjYq4AMeJgCh4mAOtq8tyCa2ryvICxcrgCxY2ALYWIApSo0BqVbQoJRq0aCUatGglGlRoJUWoIqxFFWFBhAsKDFgFCgxYBwpQhQHSUpXOUpQdIUc5TlFOReUlOIDyvDpCkBx4bh35i8wHn4bh6OYnIPPw3LtYNBzwbDoWgNGraNqiWja1o2iJaNWjQSjSo0Eo0qNBKlWpQFCQRYzLBVipFBYsSLAKLEiwCixIsBYUSLAKUpQhA6T0c9OOrPSK9E9HPby9L2D1T2XbyfRvoD19jfbzfRvoDvfQX05dpfQHfQWpo2qLaNrJREo0qNAUq1KA1KtSgg0qNBEVARFQFVFBVRQWLEhQFixIsAoUGFAWFEigrMoqMqA2prJgL0nTYmAXTdDi4C6upigzKwIyoA1KVGiDRpVKA0aVGgglUAahJQFlQH//Z'); 
  background-size: cover;
  background-position: center;

  h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.3em;
    line-height: 1.6;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1.1em;
    margin-bottom: 10px;
  }

  form {
    margin-top: 7px;
    text-align: left;
  }

  div {
    margin-bottom: 10px;
  }

  label {
    display: block;
    font-size: 1.1em;
    margin-bottom: 10px;
    border-radius : 10px;

  }

  input,
  textarea {
    width: 50%;
    padding: 7px;
    font-size: 0.9em;
    margin :  0 200px;
    border-radius : 8px;
    border : 1px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 7px 20px;
    font-size: 1em;
    margin : 0 410px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export default Wrapper;
