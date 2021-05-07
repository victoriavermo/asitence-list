import { PipeLowercasePipe } from './pipe-lowercase.pipe';

describe('PipeLowercasePipe', () => {
  it('create an instance', () => {
    const pipe = new PipeLowercasePipe();
    expect(pipe).toBeTruthy();
  });
});
