import { render } from '@testing-library/react';

import ActionLibSbomAction from './action-lib-sbom-action';

describe('ActionLibSbomAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActionLibSbomAction />);
    expect(baseElement).toBeTruthy();
  });
});
