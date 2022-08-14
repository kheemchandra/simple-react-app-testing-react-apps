import { render, screen } from '@testing-library/react'; 
 

import Async from './Async';
import Greeting from './Greeting';

describe('Async component', () => {
  test('renders data asynchronously', async () => { 
    // Not a good practise to send request to database in test
    // instead use mock data for testing

    // Arrange
    render(<Async />);

    // Act
    // ... nothing

    // Assert 
    const outputListItems = await screen.findAllByRole('listitem');
    
    expect(outputListItems).not.toHaveLength(0);
  });

  test('renders mock data', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id: 'p1', title: 'First post'}]
    });

    render(<Async />);

    const outputListItems = await screen.findAllByRole('listitem');
    expect(outputListItems).not.toHaveLength(0);
  });
});