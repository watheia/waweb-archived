import { render } from '@testing-library/react';

import Signin from '../pages/signin';

describe('Signin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Signin />);
    expect(baseElement).toBeTruthy();
  });
});
