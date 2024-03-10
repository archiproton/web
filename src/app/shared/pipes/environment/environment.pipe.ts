import { Pipe, PipeTransform } from '@angular/core';

import { get } from 'lodash';

import { environment } from '../../../../environments/environment';

@Pipe({
  name: 'env'
})
export class EnvironmentPipe implements PipeTransform {

  transform(value: string): any {
    let env = get(environment, value);

    if (!env) return null;

    return env;
  }

}
