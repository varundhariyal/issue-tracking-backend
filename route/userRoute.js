const express = require('express');
const router = express.Router();
const userController = require("../controllers/user");
const listController = require('../controllers/singleTodo')
const sendMail = require('../controllers/mail')
const appConfig = require("../config/appConfig")
const auth = require('../midlleware/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

    /**
       * @apiGroup users
       * @apiVersion  1.0.0
       * @api {post} /v1/users/signup api for user signup.
       *
       * @apiParam {string} FirstName first-name of the user. (body params) (required)
       * @apiParam {string} LastName last-name of the user. (body params) (optional)
       * @apiParam {string} Email email of the user. (body params) (required)
       * @apiParam {string} Password password of the user. (body params) (required)
       * @apiParam {string} CountryCode country code of the user. (body params) (required)
       * @apiParam {string} MobileNumber mobile number of the user. (body params) (required)
       *
       * @apiSuccess {object} myResponse shows error status, message, http status code, result.
       * 
       * @apiSuccessExample {object} Success-Response:
          {
              "error": false,
              "message": "User created",
              "status": 200,
              "data": {
                  "FirstName": "Him",
                  "LastName": "Test",
                  "Email": "test@gmail.com",
                  "CountryCode": "91",
                  "CreatedOn": "2019-05-31T06:57:20.000Z",
                  "_id": "5cf0d0508832515f4f88bdf2",
                  "userId": "qPh5rDtGw",
                  "MobileNumber": 9728540099,
                  "__v": 0
              }
          }       
      */

    // params: FirstName, LastName, Email, MobileNumber, Password, CountryCode.
    app.post(`${baseUrl}/signup`, userController.signup);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /v1/users/login api for user login.
     *
     * @apiParam {string} Email email of the user. (body params) (required)
     * @apiParam {string} Password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "User Login Success",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6InhLQmx3LUpRcCIsImlhdCI6MTU1OTI4NjE4OTg5NywiZXhwIjoxNTU5MzcyNTg5LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJMaXZlVG8tRE8iLCJkYXRhIjp7IkZpcnN0TmFtZSI6IkhpbSIsIkxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJDb3VudHJ5Q29kZSI6IjkxIiwiQ3JlYXRlZE9uIjoiMjAxOS0wNS0zMVQwNjo1NzoyMC4wMDBaIiwidXNlcklkIjoicVBoNXJEdEd3IiwiTW9iaWxlTnVtYmVyIjo5NzI4NTQwMDk5fX0.HfS2zF0GGdYtEhXUucfhrn2dIMLHK2HdVNr6fGMVpRE",
                "userDetails": {
                    "FirstName": "Him",
                    "LastName": "Test",
                    "Email": "test@gmail.com",
                    "CountryCode": "91",
                    "CreatedOn": "2019-05-31T06:57:20.000Z",
                    "userId": "qPh5rDtGw",
                    "MobileNumber": 9728540099
                }
            }
        }
    */

    // params: Email, Password.
    app.post(`${baseUrl}/login`, userController.login);


    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /v1/users/logout api for user logout.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "User Login Success",
            "status": 200,
            "data": {}
        }
    */


    app.post(`${baseUrl}/logout`, userController.logout);

    app.get(`${baseUrl}/getallusers`, userController.getAllUser)


    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /v1/users/sendMail api for reset password email.
     *
     * @apiParam {string} Email email of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "User Login Success",
            "status": 200,
            "data": {}
        }
    */
    app.post(`${baseUrl}/sendMail`, sendMail.sendMail)

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /v1/users/update api for password update.
     *
     * @apiParam {string} Email email of the user. (body params) (required)
     * @apiParam {string} Password new password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "User Password Changed Success",
            "status": 200,
            "data": {}
        }
    */
    // params: Email, Password.
    app.post(`${baseUrl}/update`, userController.updatepassword);

}