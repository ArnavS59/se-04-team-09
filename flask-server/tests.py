import unittest
from main import app

class FlaskTestCase(unittest.TestCase):

    # -----------------------------------------------------------------------
    # Ensure that the login and Sign page loads correctly

    def test_login_page_loads(self):
        tester = app.test_client(self)
        response = tester.get('/')
        self.assertIn(b'Welcome to the JUB Beer Game', response.data)
        self.assertIn(b'Login', response.data)

    # -----------------------------------------------------------------------
    # Ensures that Sign Up works correctly

    def test_signup_page_loads(self):
        tester = app.test_client(self)
        response = tester.get('/register')
        self.assertIn(b'Register', response.data)
        self.assertIn(b'Username', response.data)
        self.assertIn(b'Email', response.data)
        self.assertIn(b'Password', response.data)

    # -----------------------------------------------------------------------

    def test_logout(self):
        tester = app.test_client()
        response = tester.get('/logout', follow_redirects=True)
        self.assertIn(b'Login', response.data)

    # -----------------------------------------------------------------------
    # Ensure that logout page requires user login

    def test_stud__logout_route_requires_login(self):
        tester = app.test_client()
        response = tester.get('/logout', follow_redirects=True)
        self.assertIn(b'Login', response.data)

    def test_inst_logout_route_requires_login(self):
        tester = app.test_client()
        response = tester.get('/logout', follow_redirects=True)
        self.assertIn(b'Login', response.data)


if __name__ == '__main__':
    unittest.main()
