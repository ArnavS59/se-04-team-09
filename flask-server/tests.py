import unittest
from main import app

class FlaskTestCase(unittest.TestCase):

    #-----------------------------------------------------------------------
    # Ensure that Flask was set up correctly

    # def test_index(self):
    #     tester = app.test_client(self)
    #     response = tester.get('/', content_type='html/text')
    #     self.assertEqual(response.status_code, 200)

    # #-----------------------------------------------------------------------
    # # Ensure that the login and Sign page loads correctly
    
    # def test_stud_login_page_loads(self):
    #     tester = app.test_client(self)
    #     response = tester.get('/stud-login')
    #     self.assertIn(b'Student Login', response.data)
    
    # def test_inst_login_page_loads(self):
    #     tester = app.test_client(self)
    #     response = tester.get('/ins-login')
    #     self.assertIn(b'Instructor Login', response.data)
    
    # #-----------------------------------------------------------------------
    # # Ensures that Sign Up works correctly

    # def test_stud_signup_page_loads(self):
    #     tester = app.test_client(self)
    #     response = tester.get('/stud-sign-up')
    #     self.assertIn(b'Student Sign Up Form', response.data)
    
    # def test_ins_signup_page_loads(self):
    #     tester = app.test_client(self)
    #     response = tester.get('/ins-sign-up')
    #     self.assertIn(b'Instructor Sign Up', response.data)
        
    # #-----------------------------------------------------------------------    
    # # Ensure login behaves correctly with correct credentials

    # def test_stud_correct_login(self):
    #     tester = app.test_client()
    #     response = tester.post(
    #         '/stud-login',
    #         data=dict(email="arberlleshi@gmail.com", password="arberlleshi@gmail.com"),
    #         follow_redirects=True
    #     )
    #     self.assertIn(b'Web site created using create-react-app', response.data)

    # def test_inst_correct_login(self):
    #     tester = app.test_client()
    #     response = tester.post(
    #         '/ins-login',
    #         data=dict(email="arberlleshi@gmail.com", password="arberlleshi@gmail.com"),
    #         follow_redirects=True
    #     )
    #     self.assertIn(b'Web site created using create-react-app', response.data)
 
    
    # #-----------------------------------------------------------------------
    # # Ensure login behaves correctly with incorrect credentials

    # def test_stud_incorrect_login(self):
    #     tester = app.test_client()
    #     response = tester.post(
    #         '/stud-login',
    #         data=dict(email="arberlleshi@gmail.com", password="wrong"),
    #         follow_redirects=True
    #     )
    #     self.assertIn(b'Your password is Incorrect, try again.', response.data)
    
    # def test_inst_incorrect_login(self):
    #     tester = app.test_client()
    #     response = tester.post(
    #         '/ins-login',
    #         data=dict(email="arberlleshi@gmail.com", password="wrong"),
    #         follow_redirects=True
    #     )
    #     self.assertIn(b'Incorrect password, try again.', response.data)
    
    # def test_stud_incorrect_login2(self):
    #     tester = app.test_client()
    #     response = tester.post(
    #         '/stud-login',
    #         data=dict(email="wrong@gmail.com", password="wrong"),
    #         follow_redirects=True
    #     )
    #     self.assertIn(b'Email does not exist.', response.data)

    # def test_inst_incorrect_login2(self):
    #     tester = app.test_client()
    #     response = tester.post(
    #         '/ins-login',
    #         data=dict(email="wrong@gmail.com", password="wrong"),
    #         follow_redirects=True
    #     )
    #     self.assertIn(b'Email does not exist.', response.data)

    # #-----------------------------------------------------------------------
    # # Ensure logout behaves correctly

    # def test_stud_logout(self):
    #     tester = app.test_client()
    #     tester.post(
    #         '/stud-login',
    #         data=dict(email="arberlleshi@gmail.com", password="arberlleshi@gmail.com"),
    #         follow_redirects=True
    #     )
    #     response = tester.get('/stud-logout', follow_redirects=True)
    #     self.assertIn(b'You are Logged Out', response.data)
    
    # def test_ins_logout(self):
    #     tester = app.test_client()
    #     tester.post(
    #         '/ins-login',
    #         data=dict(email="arberlleshi@gmail.com", password="arberlleshi@gmail.com"),
    #         follow_redirects=True
    #     )
    #     response = tester.get('/inst-logout', follow_redirects=True)
    #     self.assertIn(b'You are Logged Out', response.data)

    # #-----------------------------------------------------------------------
    # # Ensure that main page requires user login
    
    # def test_instructor_route_requires_login(self):
    #     tester = app.test_client()
    #     response = tester.get('/instructor', follow_redirects=True)
    #     self.assertIn(b'You need to login first.', response.data)
    
    # def test_student_route_requires_login(self):
    #     tester = app.test_client()
    #     response = tester.get('/student', follow_redirects=True)
    #     self.assertIn(b'You need to login first.', response.data)


    # #-----------------------------------------------------------------------
    # # Ensure that logout page requires user login
    
    # def test_stud__logout_route_requires_login(self):
    #     tester = app.test_client()
    #     response = tester.get('/stud-logout', follow_redirects=True)
    #     self.assertIn(b'You need to login first.', response.data)
    
    # def test_inst_logout_route_requires_login(self):
    #     tester = app.test_client()
    #     response = tester.get('/inst-logout', follow_redirects=True)
    #     self.assertIn(b'You need to login first.', response.data)


if __name__ == '__main__':
    unittest.main()