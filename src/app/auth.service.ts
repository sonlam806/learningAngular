export class AuthService {
  loggedIn = false;

  isAuthenticated(): Promise<boolean> {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });

    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
