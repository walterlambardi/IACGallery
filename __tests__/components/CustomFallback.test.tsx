import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CustomFallback from '../../src/components/CustomFallback';

describe('CustomFallback', () => {
  it('renders error message correctly', () => {
    const error = {
      message: 'Test Error Message',
    };

    const { getByText } = render(
      <CustomFallback error={error} resetErrorBoundary={() => {}} />,
    );

    const errorMessage = getByText('Something went wrong:');
    const errorText = getByText('Test Error Message');

    expect(errorMessage).toBeDefined();
    expect(errorText).toBeDefined();
  });

  it('calls resetErrorBoundary when Try again button is pressed', () => {
    const resetErrorBoundaryMock = jest.fn();

    const { getByText } = render(
      <CustomFallback
        error={new Error()}
        resetErrorBoundary={resetErrorBoundaryMock}
      />,
    );

    const tryAgainButton = getByText('Try again');
    fireEvent.press(tryAgainButton);

    expect(resetErrorBoundaryMock).toHaveBeenCalled();
  });
});
