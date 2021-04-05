import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders login button text', () => {
  render(<App /> );
  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('app has email placeholder', () => {
  render(<App /> );
  expect(screen.queryByPlaceholderText('email')).toBeInTheDocument();
});

test('app has password placeholder', () => {
  render(<App /> );
  expect(screen.queryByPlaceholderText('password')).toBeInTheDocument();
});

test('detects invalid password', () => {
  render(<App />);

  const input = screen.queryByPlaceholderText('password');
  UserEvent.type(input, '12');

  expect(screen.getByText('password is too short')).toBeInTheDocument();
});

test('detects invalid email', () => {
  render(<App />);

  const input = screen.queryByPlaceholderText('email');
  UserEvent.type(input, 'lorem');

  expect(screen.getByText('email is invalid')).toBeInTheDocument();
});

