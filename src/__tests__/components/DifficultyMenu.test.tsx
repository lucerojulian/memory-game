import { fireEvent, render, screen } from '@testing-library/react';
import DifficultyMenu from '../../components/DifficultyMenu';

describe('LoginForm', () => {
  it('should render all difficulty options', () => {
    const mockOnChooseDifficulty = vi.fn();
    render(<DifficultyMenu onChooseDifficulty={mockOnChooseDifficulty} />);

    const easyModeButton = screen.queryByText(/Easy/);
    const normalModeButton = screen.queryByText(/Normal/);
    const hardModeButton = screen.queryByText(/Hard/);

    expect(easyModeButton).toBeVisible();
    expect(normalModeButton).toBeVisible();
    expect(hardModeButton).toBeVisible();
  });

  it('should call onChooseDifficulty when a difficulty is clicked', () => {
    const mockOnChooseDifficulty = vi.fn();
    render(<DifficultyMenu onChooseDifficulty={mockOnChooseDifficulty} />);

    const easyModeButton = screen.queryByText(/Easy/);
    const normalModeButton = screen.queryByText(/Normal/);
    const hardModeButton = screen.queryByText(/Hard/);

    fireEvent.click(easyModeButton!);
    expect(mockOnChooseDifficulty).toHaveBeenCalledTimes(1);

    fireEvent.click(normalModeButton!);
    expect(mockOnChooseDifficulty).toHaveBeenCalledTimes(2);

    fireEvent.click(hardModeButton!);
    expect(mockOnChooseDifficulty).toHaveBeenCalledTimes(3);
  });
});
