import { environment as env } from './environment.default';

export const environment = {
  ...env,
  production: false,
  "a": [{ "b": { "c": 3 } }]
};
