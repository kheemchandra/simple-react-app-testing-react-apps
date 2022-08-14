import { render, screen } from  "@testing-library/react"; 
// import describe from '@testing-library/jest-dom';

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
});