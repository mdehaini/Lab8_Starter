# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

We would fit them within a github action that runs whenever code is pushed. Firstly, this would make it automatic so that the developer does not have to worry and remember to run the test every time they push code (which is why 2 is wrong). We also need to test consistently, because we do not want to have an end product that is a jumble of code and mistakes. Rather, we want to continually test to assure every push of code adds to the application and works rather than adding errors and causing it to crash (which is why 3 is wrong).

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
   
Yes, we are emulating user actions from start to finish and making sure our application works correctly. Recieving the correct output is part of that process

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
No, I would not because messgae will be an end-to-end process that requires components to interact with each other. This would not be testing an individual part of code which is why we would not use a unit test on this feature. 

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, getting length is an individual part of the code that would not interact with another feature which means we can use unit testing. 
