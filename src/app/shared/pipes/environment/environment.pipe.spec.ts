import { EnvironmentPipe } from './environment.pipe';

describe('EnvironmentPipe', () => {
  const pipe = new EnvironmentPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "a[0].b.c" to "3"', () => {
    expect(pipe.transform('a[0].b.c')).toBe(3);
  });
});
