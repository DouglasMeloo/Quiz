# knowledge Quiz

![knowledge quiz](/assets/images/knowlegdequiz.webp)

knowledge Quiz is a fun website for user test their knowledge.

## Table of Contents

- [Description](#Description)
- [Features](#Features)
- [Deployment](#Deployment)
- [Usage](#Usage)
- [Technologies](#Technologies)
- [Testing](#Testing)
- [Debugging](#Debugging)
- [Credits](#Credits)

## Description

The quiz is a fun game that tests your knowledge on various topics. You will start by entering your name to personalize the experience and Then, choose the number of questions, category, and difficulty level.
During the quiz, you will see questions with multiple choice options, think quickly and select your answer.
The countdown timer adds excitement as you progress. After answering all questions, see your final score and maybe a fun comment. Play again to beat your score or challenge friends.
The quiz has a user friendly interface, making it easy to enjoy and test your knowledge. Get ready to have fun and test your knowledge with the quiz!

## Features

- User friendly interface: The quiz has a simple and intuitive interface that makes it easy for users to navigate and enjoy the game.
  ![interface](/assets/images/interface.webp)

- Personalized experience: Users can enter their names at the beginning of the quiz to create a more personalized and engaging experience.
  ![name](/assets/images/username.webp)

- Number of questions selection: Users have the flexibility to choose the number of questions in the quiz. They can select from a range of options, including 5, 10, 15 and 20 questions.
  ![number of questions](/assets/images/numbquestion.webp)

- Multiple question categories: The quiz offers a variety of question categories to choose from, allowing users to test their knowledge in their preferred areas of interest.
  ![choose category](/assets/images/categories.webp)

- Adjustable difficulty levels: Users can select the difficulty level that suits their expertise, going from easy to hard, ensuring an appropriate level of difficulty for all players.
  ![choose level](/assets/images/level.webp)

- Timed gameplay: The quiz features a countdown timer that adds excitement and a sense of urgency to the game. Users can choose the duration of the countdown timer from a range of options, including 10, 20, 30, 40, 50, and 60 seconds. If the user does not answer a question within the allotted time, the correct answer will be displayed.
  ![choose timer](/assets/images/time.webp)
  ![countdown time](/assets/images/countdown.webp)

- Multiple-choice questions: The quiz presents questions in a multiple-choice format, providing users with options to choose from and making the game more interactive and engaging.
  ![multiple choice question](/assets/images/questions.webp)

- Score tracking: The quiz keeps track of the user's score throughout the game, providing immediate feedback after each question. When a user selects the correct answer, it will be highlighted in green. If the user selects the wrong answer, it will be highlighted in red, and the correct answer will be displayed in highlighted green. The final score will be displayed at the end of the quiz.
  ![right answer](/assets/images/rightanswer.webp)
  ![wrong answer](/assets/images/wronganswer.webp)
  ![final score](/assets/images/finalscore.webp)

- Replayability: After completing the quiz, users have the option to play again, either to improve their score or challenge their friends.
  ![restart quiz](/assets/images/restartquiz.webp)

- Error handling: In case a user tries to access a non-existent page, a custom 404 page is displayed. The 404 page provides a friendly message and includes a link to go back to the Quiz homepage.
  ![404 page](/assets/images/errorpage.webp)

- Name field restrictions: The name field in the quiz enforces a minimum character lenght of at least 4 characters. Numerical characters are not allowed and Special characters (e.g., symbols, punctuation) are not permitted.
  ![Name restrictions](/assets/images/namerestriction.webp)

## Deployment 

To deploy the Quiz application, you can follow these steps:

#### Fork the repository: <p align="right">[(Back to Top)](#top)</p>

- Login or sign up to GitHub.
- Open the Quiz project repository: https://github.com/DouglasMeloo/Quiz.
- Click the "Fork" button in the top right corner to create a copy of the repository under your GitHub account.

#### Clone the repository:

- Login or sign up to GitHub.
- Open the Quiz project repository: https://github.com/YourUsername/Quiz (replace "YourUsername" with your actual GitHub username).
- Click on the "Code" button and select the cloning method you prefer (HTTPS, SSH, or GitHub CLI).
- Copy the provided link.

#### Deployment:

- After cloning the repository, navigate to the project directory using the cd command.
- Open the index.html file in a web browser to run the Quiz application locally.

#### Hosting on GitHub Pages:

- If you want to host the Quiz application on GitHub Pages, follow these additional steps:
- Create a new branch named gh-pages in your repository.
- Push the changes to the gh-pages branch.
- Wait for a few minutes for the changes to take effect.
- Visit the live website provided, https://douglasmeloo.github.io/Quiz/, to access the deployed Quiz application.

## Usage

### Quiz Application - Usage <p align="right">[(Back to Top)](#top)</p>

The Quiz application is a fun and interactive quiz game where users can test their knowledge on various topics. This file provides instructions on how to use the application effectively.

#### Prerequisites

- Web browser (Google Chrome, Mozilla Firefox, Safari, etc.)
- Internet connection

#### Getting Started

1. Access the Quiz application by visiting the live website: https://douglasmeloo.github.io/Quiz/.
2. The Quiz homepage will be displayed, showing the game instructions and options to configure the quiz settings.

### Game Configuration

1. Enter the user name:

- In the Quiz homepage, locate the input field labeled "Enter your name."
- Type in your desired username or nickname to personalize your game experience.

2. Choose the number of questions:

- Select the desired number of questions from the dropdown menu (5, 10, 15 or 20).
- This determines the total number of questions the quiz will include.

3. Choose the category:

- Select the desired category from the available options.
- The category represents the topic or subject area for the quiz questions (e.g., General Knowledge, History, Books, Sports, Movies, etc.).
- Click on the category dropdown menu and choose the category that interests you.

4. Choose the level:

- Select the desired difficulty level for the quiz.
- The level determines the complexity and challenge of the questions (e.g., Easy, Medium, Hard).
- Click on the level dropdown menu and choose the appropriate level.

5. Set the countdown timer:

- Select the desired duration for the countdown timer from the dropdown menu (10, 20, 30, 40, 50, or 60 seconds).
- The countdown timer adds excitement and a sense of urgency to the game.

6. Start the Quiz:

- Click on the "Start Quiz" button to begin the game with the selected settings.
- The first question will be displayed, along with multiple-choice options.

### Gameplay <p align="right">[(Back to Top)](#top)</p>

1. Answering questions:

- Read the question and choose the correct answer by clicking on the corresponding option.
- Once you have selected your answer, click on the "Submit" button to proceed.
- If the answer is correct, it will be highlighted in green.
- If the answer is incorrect, it will be highlighted in red, and the correct answer will be highlighted in green.

2. Score tracking:

- After answering each question and clicking on the "Submit" button, the application will provide immediate feedback on whether the answer was correct or not.
- Your score will be updated accordingly based on your correct and incorrect answers.
- At the end of the quiz, the final score will be displayed.

4. Timer:

- The countdown timer will start running as soon as the quiz begins.
- You must answer each question within the allotted time.
- If you do not submit your answer within the time limit, the correct answer will be automatically displayed, and you will have to proceed to the next question.

5. Next question:

- After answering a question and clicking on the "Submit" button, the "Next" button will automatically appear.
- Clicking on the "Next" button will seamlessly transition to the next question.
- Continue answering questions and clicking on the "Next" button to proceed through all the questions until the quiz is completed.

6. Restarting the quiz:

- At the end of the quiz, you have the option to play again by clicking on the "Restart Quiz" button.
- Clicking on the "Restart Quiz" button will bring you back to the start, allowing you to enjoy the quiz once more.
- Feel free to restart the quiz as many times as you like to test your knowledge and improve your score.

#### Conclusion

Enjoy playing the Quiz application and have fun testing your knowledge! Challenge yourself with different question quantities, level difficulties and time limits to enhance your quiz experience.

## Technologies 

#### Technologies Used  <p align="right">[(Back to Top)](#top)</p>

- The Quiz application was developed using the following technologies and API:

#### Languages Used

- HTML: Used to structure the web pages and create the user interface elements.
- CSS: Used to style the web pages and enhance the visual appeal of the application.
- JavaScript: Used to add interactivity and implement the quiz logic.

#### Framework, Libraries and Programs Used

- Bootstrap: Used as a CSS framework for responsive design and pre-built UI components.
- Adobe Photoshop (image editing): Used for editing and optimizing images for the web.
- Google Fonts (web fonts): Used to enhance the typography of the web application.
- GitHub: Used for version control and collaboration during the development process.
- GitHub Pages: Used for hosting the live website and making it accessible to users.
- Meta Tags Generator (HTML meta tags): Used to generate HTML meta tags for search engine optimization (SEO) and social media sharing.
- Trivia API: Used to fetch the quiz questions and answers dynamically from an external data source.  

## Testing                           
The web application has undergone a meticulous testing process, employing a diverse range of tools and techniques. This rigorous testing approach aims to guarantee the application's overall quality, performance, and adherence to industry standards. The following testing methodologies were carefully chosen and utilized during the evaluation phase:

- Lighthouse test (Google Inspect): The web application was evaluated using Lighthouse, a tool integrated within Google Inspect, to assess its performance, accessibility, best practices, and search engine optimization (SEO). This test helps identify areas for improvement and optimization.
- Desktop Test:
  - Performance: 99
  - Accessibility: 97
  - Best Practices: 100
  - SEO: 100
    ![lighthouse](/assets/images/desktoptest.webp)
- Mobile Test:

  - Performance: 96
  - Accessibility: 97
  - Best Practices: 100
  - SEO: 100
    ![lighthouse](/assets/images/mobiletest.webp)

- JSHint test: The JavaScript code was validated using JSHint, a popular static code analysis tool. This analysis ensures that the code follows best practices, detects potential errors, and promotes code quality and maintainability.
  ![JShint](/assets/images/jshinttest.webp)

- WAVE test (Web Accessibility Evaluation): The web application was subjected to the WAVE tool, which evaluates accessibility compliance based on the Web Content Accessibility Guidelines (WCAG). This test identifies any accessibility issues and provides recommendations for making the application more inclusive and accessible to all users.

![WAVE](/assets/images/wavetest.webp)
![WAVE-contrast](/assets/images/wavecontrast.webp)

- HTML and CSS validation: The HTML and CSS code was validated using the official W3C validators. These validators ensure that the code adheres to the standard specifications, minimizing potential rendering issues and enhancing cross-browser compatibility.
  ![html](/assets/images/htmltest.webp)
  ![css](/assets/images/csstest.webp)

### Manual Testing <p align="right">[(Back to Top)](#top)</p>

Desktop Pc:

- Device: Desktop pc
- Operating System: Windows 11
- Browser: Google Chrome

Mobile Device

- Devices: Iphone 14 proMax and Iphone 14 pro
- Operating System: IOS 16.5.1
- Browser: Safari

`Home Page`
Feature | Expected Outcome | Testing Performed | Result | Pass/Fail
----------------------|--------------------------------------|----------------------------------|-------------------|------------------
Name input | User clicks on "Enter your Name" | The entered name is displayed | The name field is filled | Pass
Number of Questions | User selects one of the options: 5, 10, 15, or 20 | The chosen number of questions is recorded | The selected option is successfully passed | Pass
Category Selection | User can choose one of the 10 available categories or leave on Any Category | The selected category (if any) is recorded | The selection process is successful | Pass
Level Selection | User can choose any level: easy, medium, or hard | The selected level is recorded | The selection process is successful | Pass
Time Selection | User can choose one of the 6 available time options: 10, 20, 30, 40, 50, or 60 seconds | The selected time option is recorded | The selection process is successful | Pass
Start Quiz Button | When hovering over the button, it changes color to a pleasant green and displays "Start Quiz" | The button is hovered over | The hover effect is successful | Pass

`Questions Page`
Feature | Expected Outcome | Testing Performed | Result | Pass/Fail
----------------------|--------------------------------------|----------------------------------|-------------------|------------------
Answer Selection | User can choose one of the provided options as the answer and submit it | The user selects an answer and submits it | The selection and submission process is successful | Pass
Countdown Timer | The countdown timer starts when the user clicks on "Start Quiz" | The user clicks on "Start Quiz" and observes the countdown timer | The countdown timer starts successfully | Pass
Time Limit Handling | If the user fails to select an answer within the time limit, the correct answer is displayed in green highlight | The user allows the timer to run out without selecting an answer | The correct answer is highlighted and the user is prevented from selecting after the timer expires | Pass
Correct Answer Highlight | When the user selects the correct answer, it is highlighted in green | The user selects the correct answer | The correct answer is highlighted in green | Pass
Wrong Answer Handling | When the user selects a wrong answer, it is highlighted in red and the correct answer will be displayed in highlighted green | The user selects a wrong answer | The wrong answer is highlighted in red, and the correct answer is highlighted in green | Pass
Submit and Next Buttons | The "Submit" button allows the user to submit their answer, and the "Next" button allows the user to proceed to the next question | The user clicks on "Submit" and "Next" buttons accordingly | The answers are successfully submitted, and the user can move to the next question | Pass

`Score Page`
Feature | Expected Outcome | Testing Performed | Result | Pass/Fail
----------------------|--------------------------------------|----------------------------------|-------------------|------------------
Score Page | After the quiz finishes, a score page is displayed | The quiz is completed | The score page is shown | Pass
Username and Score Display | The username and corresponding score are displayed on the score page | The score page is accessed after completing the quiz | The username and score are correctly displayed | Pass
Restart Quiz Button | Clicking on the "Restart Quiz" button redirects the user to the home page of the quiz | The user completes the quiz and clicks on "Restart Quiz" | The user is redirected to the home page successfully | Pass

By conducting these tests, the web application was thoroughly examined for quality assurance, performance optimization, accessibility compliance, and adherence to coding standards, ensuring a robust and reliable user experience.

## Debugging      

### Score Display Issue for Correct Answers <p align="right">[(Back to Top)](#top)</p>

**Issue:** The score was not being displayed correctly when the answer was correct.

**Fix:** The code has been modified to properly increment the score and show the score on the end screen.

Changes Made:
- Modified the `checkAnswer()` function to correctly increment the score and add the 'correct' class to the selected answer.
- Updated the `showScore()` function to display the correct score on the end screen.

### GitHub Link Issue

**Issue:** The website was not opening correctly in the GitHub link.

**Fix:** The CSS file link in the HTML file has been updated from 'assets/css/style.css' to './assets/css/style.css' to ensure the link is relative to the current directory.

Changes Made:
- Changed the CSS file link in the HTML file to './assets/css/style.css' for proper loading.

### Console Warning about Permissions-Policy Header

**Issue:** A console warning is displayed regarding the Permissions-Policy header. The warning message indicates: "Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'".

**Fix Attempted:** The Permissions-Policy header in the server configuration has been updated to enable the 'interest-cohort' feature. However, the warning may persist due to potential limitations or specific configuration requirements of the feature.

Next Steps:
- Consult the relevant documentation or seek assistance from the platform or service provider to ensure proper configuration and enablement of the 'interest-cohort' feature.

Despite this warning, the rest of the code has been tested and verified to be functioning correctly. Please refer to the documentation or seek further assistance to resolve the console warning related to the 'interest-cohort' feature.

## Credits

#### Credit <p align="right">[(Back to Top)](#top)</p>
- Sources of Inspiration
    * I drew inspiration from various YouTube videos on quiz game development.
- Progress Bar Tutorials
  - I referred to the following videos to learn how to create a progress bar:

    * Video 1: Progress Bar Tutorial - https://www.youtube.com/watch?v=uHVPAcaW1VQ
    * Video 2: Progress Bar Tutorial - https://www.youtube.com/watch?v=js8YiWjrOrw
    * Video 3: Progress Bar Tutorial - https://www.youtube.com/watch?v=basf1lH1H-E

#### Content API
The questions, answers, categories, and levels used in this project were obtained from the Open Trivia Database (https://opentdb.com/).

#### Acknowledgments
I would like to express my gratitude to the following individuals:

- Graeme Taylor: My mentor, whose guidance and support greatly contributed to the development of this project.
- Bruno Farias: The person who introduced me to coding and encouraged me to pursue this course. He generously dedicated his time to guide me through my code, helping me understand and learn more.
- Danilo Martins: A friend who started this course because of my influence. We have been studying together and supporting each other throughout this learning journey. 

#### Special Thanks
I would like to extend a special thanks to my wife for her invaluable support throughout the development of this project. Her unwavering encouragement, understanding, and assistance in taking care of our two children, aged 4 and 1, allowed me to dedicate the necessary time and focus to bring this project to fruition. I am grateful for her love and patience, which made this endeavor possible.<p align="right">[(Back to Top)](#top)</p>