import { BehaviorSubject, Observable } from 'rxjs';

export class IsSuperUserObserverable{
  static _isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  static isAuthenticatedObs: Observable<boolean> = IsSuperUserObserverable._isAuthenticatedSubject.asObservable();
}
