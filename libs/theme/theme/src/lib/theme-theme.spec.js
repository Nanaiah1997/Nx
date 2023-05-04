import { render } from '@testing-library/react';
import ThemeTheme from './theme-theme';
describe('ThemeTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeTheme />);
    expect(baseElement).toBeTruthy();
  });
});
