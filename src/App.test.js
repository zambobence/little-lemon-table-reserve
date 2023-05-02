import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';


test('Form inputs can be changed', () => {
  render(<Router>
    <BookingPage />
    </Router>);

  const dateInput = screen.getByLabelText('Choose date');
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText('Occasion');
  const timeInput = screen.getAllByLabelText('Choose time')


  fireEvent.focus(dateInput);
  fireEvent.blur(dateInput);
  
  fireEvent.focus(timeInput)
  fireEvent.blur(timeInput)

  fireEvent.change(guestsInput, {target: {value: '0'}})
  expect(guestsInput.value).toBe('0')

  fireEvent.focus(occasionSelect);
  fireEvent.blur(occasionSelect);

  const dateErrorMessage = screen.getByText('Please select a valid date!');
  expect(dateErrorMessage).toBeInTheDocument();
  const timeErrorMessage = screen.getByText('Please select a time!');
  expect(timeErrorMessage).toBeInTheDocument();
  const guestErrorMessage = screen.getByText('The number of guests cannot be less than 0');
  expect(guestErrorMessage).toBeInTheDocument();
  const occasionErrorMessage = screen.getByText('Please select an occasion!');
  expect(occasionErrorMessage).toBeInTheDocument();



  fireEvent.change(dateInput, { target: { value: '2023-05-01' } });
  expect(dateInput.value).toBe('2023-05-01');

  fireEvent.change(timeInput, { target: { value: '17:00' } });
  expect(dateInput.value).toBe('17:00');

  fireEvent.change(guestsInput, {target: {value: '3'}})
  expect(guestsInput.value).toBe('3')

  userEvent.selectOptions(occasionSelect, 'Anniversary');
  expect(occasionSelect.value).toBe('Anniversary');


  fireEvent.focus(dateInput);
  fireEvent.blur(dateInput);

  const errorMessage = screen.getByText('Please select a valid date');
  expect(errorMessage).toBeInTheDocument();
});


