import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AutoCompleteService {

constructor(private db: AngularFireDatabase) { }

getPersoanlities(start, end): FirebaseListObservable<any> {
    return this.db.list('/personalities', {
      query: {
        orderByChild: 'name',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
    });
  }

getPersoanlity(personalityName): FirebaseListObservable<any> {
    return this.db.list('/personalities', {
      query: {
        orderByChild: 'name',
        limitToFirst: 1,
        startAt: personalityName
      }
    });
  }

}
