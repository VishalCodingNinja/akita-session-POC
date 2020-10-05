import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  login(creds) {
    return timer(300).pipe(mapTo({ token: 'token', name: 'Inbal Sinai' }));
  }
}
