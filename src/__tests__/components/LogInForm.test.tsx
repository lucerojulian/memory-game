import { fireEvent, render, screen } from '@testing-library/react';
import LogInForm from '../../components/login-form/LoginForm';

describe('LoginForm', () => {
  it('should render required elements to log in', () => {
    render(<LogInForm onLogIn={() => {}} />);

    const loginMessage = screen.queryByText(/Please log in to play!/i);
    const nameInput = screen.queryByPlaceholderText(/Enter your name/i);
    const submitButton = screen.queryByText(/Play/);

    expect(loginMessage).toBeVisible();
    expect(nameInput).toBeVisible();
    expect(submitButton).toBeVisible();
  });

  it('should change input value when typing', () => {
    render(<LogInForm onLogIn={() => {}} />);

    const nameInput = screen.queryByPlaceholderText(/Enter your name/i);

    fireEvent.change(nameInput!, { target: { value: 'julian' } });
    expect(nameInput).toHaveValue('julian');
  });

  it('should execute onLogin correctly', () => {
    const mockOnLogin = vi.fn();

    render(<LogInForm onLogIn={mockOnLogin} />);

    const submitButton = screen.queryByText(/Play/);
    const nameInput = screen.queryByPlaceholderText(/Enter your name/i);

    fireEvent.change(nameInput!, { target: { value: 'julian' } });
    fireEvent.click(submitButton!);

    expect(mockOnLogin).toHaveBeenCalledTimes(1);
  });

  it('should not execute the onLogin if the form is empty', () => {
    const mockOnLogin = vi.fn();

    render(<LogInForm onLogIn={mockOnLogin} />);

    const submitButton = screen.queryByText(/Play/);
    fireEvent.click(submitButton!);

    expect(mockOnLogin).toHaveBeenCalledTimes(0);
  });
});
