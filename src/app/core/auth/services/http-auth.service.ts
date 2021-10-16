import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {
  private baseUrl = environment.baseUrl;
  private token: string;
  public tokenSubjectSource = new BehaviorSubject<string>('');
  public tokenSubjectData = this.tokenSubjectSource.asObservable();
  public isLogoutSubject = new BehaviorSubject<boolean>(false);
  public isLogoutState = this.isLogoutSubject.asObservable();

  public isUserOperationSource = new BehaviorSubject<boolean>(false);
  public isUserOperationState = this.isUserOperationSource.asObservable();
  public userWithRoles = new BehaviorSubject<any>(null);

  USERS = [
    { email: 'receptionist', roles: ['home-reports', 'queue', 'campaigns'] },
    { email: 'cbc', roles: ['home-reports', 'cbc'] },
    { email: 'doctor', roles: ['home-reports', 'doctor', 'announcements'] },
    {
      email: 'phlebotomy',
      roles: ['home-reports', 'phlebotomy-dash', 'blood-collection']
    }
  ];

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private router: Router
  ) {}

  registerApi(body) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.httpClient.post(`${this.baseUrl}register`, body, {
      observe: 'response',
      headers: headers
    });
  }

  loginApi(body) {
    return this.httpClient.post(`${this.baseUrl}login`, body, {
      observe: 'response'
    });
  }

  public saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.tokenSubjectSource.next(token);
    this.token = token;
  }

  public saveUserName(name: string): void {
    localStorage.setItem('userName', name);
  }

  public getToken(): string {
    if (!this.token) {
      let token = localStorage.getItem('token') || null;
      this.token = token;
    }
    return this.token;
  }

  isLoggedIn() {
    this.tokenSubjectData.subscribe(data => {
      return data;
    });
  }
  public saveUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
  }

  public getUserRole() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData['roles'][0];
  }

  async logOut() {
    await localStorage.removeItem('token');
    await localStorage.removeItem('userWithRoles');
    await this.router.navigate(['/auth/login']);
    await window.location.reload();
  }

  simulateLocalLogin(email) {
    let user = this.USERS.find(user => user.email === email);
    if (user) {
      
      this.userWithRoles.next(user);
      localStorage.setItem('userWithRoles', JSON.stringify(user));
      this.router.navigate([`/dash/${email}-dash`]);
    } else return alert('no user found !!');
  }

  isAuthorized(allowedRoles: string[]): boolean {
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }
    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelperService.decodeToken(token);
    if (!decodeToken && token) {
      this.router.navigate(['/auth']);
      return false;
    }

    const roles = decodeToken['privileges'];
    const isFoundedRole = allowedRoles.some(al => roles.includes(al));
    return isFoundedRole;
  }
}
