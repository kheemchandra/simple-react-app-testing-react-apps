import { render, screen } from  "@testing-library/react"; 
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

describe('Greeting component!', () => {
  test('renders "Hello World! on screen', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument;
  });

  test('renders "nice to see" on screen BEFORE button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const outputElement = screen.getByText('nice to see', {exact: false});
    expect(outputElement).toBeInTheDocument;
  });

  test('renders "Text changed!" on screen AFTER button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act 
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText('Text changed', { exact: false});
    expect(outputElement).toBeInTheDocument;
  });

  test('does NOT render "nice to see" on screen AFTER button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText('nice to see', { exact: false});
    expect(outputElement).toBeNull;
  });
});