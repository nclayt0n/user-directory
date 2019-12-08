## `User Directory`
### Live Link
https://nrclayton-user-directory.now.sh

### Summary 
User Directory starts on a landing screen with App Name and a browse directory button. When you click the browse button you will be sent to the /user-list where 10 users will be displayed. You can navigate through pages of users. User information will include: first & last name, email, phone number, age, gender, and a picture of user. 

#### Feature
At the bottom of each list of users will be a button that will export a CSV file of the users currently being displayed on that page. 

### API
randomuser.me API to fetch random user data.

#### Parameters used on the API ENDPOINT:
/?results=10&page=${num}&seed=abc&inc=name,email,phone,dob,gender,picture

### Technologies
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).