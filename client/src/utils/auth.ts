import { jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // Return the decoded token
    const token = this.getToken();
    if (!token) return null;
    return jwtDecode(token);
  }

  loggedIn() {
    // Return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // Return a value that indicates if the token is expired
    try {
      const decoded: any = jwtDecode(token);
      if (!decoded.exp) return true;
      return decoded.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  }

  getToken(): string {
    // Return the token
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    // Set the token to localStorage
    localStorage.setItem('id_token', idToken);
    // Redirect to the home page
    window.location.assign('/');
  }

  logout() {
    // Remove the token from localStorage
    localStorage.removeItem('id_token');
    // Redirect to the login page
    window.location.assign('/login');
  }
}

export default new AuthService();
