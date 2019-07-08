##Readme - The Hive

##The Code
*Separate your program into modules that each deal with one particular focus, or concern.-Excellent and complete separation of concerns demonstrating a strong understanding of software design*

*Demonstrate DRY (Don’t Repeat Yourself) principles in all code.-Excellent use of DRY principles, every piece of knowledge has a single, unambiguous, authoritative representation*

*Demonstrate use of functions--Meets D with clearly commented code; use of functions clearly improves code serviceability and maintenance*

*Apply Object oriented principles/patterns--Superior use of object oriented principles/patterns; use of OO principles/patterns throughout application with positive impact on code maintainability and serviceability*

*Code structure--Shows exceptional understanding of folder structure and file naming conventions, adheres to all MERN best practices and conventions*

*Code style --The code adheres to all team standards. The code is exceptionally well organised and very easy to follow. Comments are complete and useful; variables' and functions’ purposes are clearly communicated by their names.*

*Async implementation--Exceptional understanding of async patterns, e.g. expert use of promises and callbacks*

*Recognise, identify and utilise classes--Utilises highly sophisticated classes, demonstrating an exceptional level of understanding; Extensive use of prototypes/inheritance*

*Recognise, identify and utilise functions--Utilises highly sophisticated functions, demonstrating an exceptional level of understanding; Advanced functional programming concepts including Immediately-Invoked Function Expression (IIFE), etc*

*Validation of data (including ranges)--All data is expertly validated using a range of techniques (e.g. regex, etc) and checked; demonstrating an exceptional level of understanding*

*Arrays--Shows thorough understanding of the use-cases of Arrays and utilises them to solve a problem unsolvable otherwise.*

*Objects--Understands, utilises and manipulates Objects using a range of methods to benefit the solution.*

**

##Project Management

1. Record interactions with your client in a diary format
2. Plan information gathering activities to determine project requirements, constraints and risks
3. Develop project charter, including preliminary statement of project scope and obtain sign-off
4. Prepare project work breakdown and schedule
5. Allocate roles and responsibilities to team members, based on project solution requirements
*Meets D with project results demonstrating consideration of strength and weaknesses of team members and project/team conditions*
*Employ and utilise task delegation methodology--Simple and clear standards for planning methodology chosen and adhered to*
6. Monitor each other’s assigned work
7. Reassess ongoing project scope changes, risks and issues
8. Manage system testing and hand over activities. Prepare maintenance or support plans for client
*Demonstrate code flow control--Flawless code flow control: documented test coverage/successful results for all user stories, including corner cases*
*Comprehensive test suite including both unit and integration tests in both backend and frontend, with at least 90% code coverage*
9. Obtain final project sign-off
10. As a team, conduct post project review
11. Create a questionnaire for the client to ascertain the satisfaction with your products and services

##Application Design

1. Compose a summary of your application including problem definition and solution
2. Review the conceptual design with the client and edit based on their feedback
3. User stories for the whole application
*Provide UX/UI design documentation(user stories) that adequately show Agile methodology implementation.-Provides multiple user stories that use ‘persona, what and why’ that outline meaningful features of project. Shows evidence of user story revision and refinement.*

4. A workflow diagram of the user journey/s

5. Wireframes for all main pages of your app
*Demonstrate sound design Architecture--Shows almost flawless understanding of the high level structure of the app NOT SURE IF THIS CRITERION IS WELL-LOCATED HERE*

*Provide UX/UI design documentation(wireframes) that adequately show Agile methodology implementation.--Provides wireframes that show exceptional planning of project flow and structure including but not limited to space distrobution, content prioritisation, intended actions, functions, relationships between screens.*

*User-interface is highly intuitive, with no impediments to user flow*

6. Object Relational Mapping (ORM)
*ORM accurately reflects an efficient and practical database design for project, using correct ORM symbology*

7. Project plan and effort estimation

8. Data Flow Diagram
*Provides dataflow diagram(s) that strictly follow the standard convensions to clearly identify the processes within your application. Clearly depicts where data is coming from, where it is going and how it is being stored.*
9. Database schema
*Creates a well constructed Database schema that contains methods which meaningfully contribute to the solution.*
10. OO design documentation
*Provides Object Oriented design diagrams(UML or alternative) that clearly identify OO class attributes, methods, relationships.*
*Apply Object oriented principles/patterns--Superior use of object oriented principles/patterns; use of OO principles/patterns throughout application with positive impact on code maintainability and serviceability*

##Tools & Methodologies

1. Trello or similar project management tool to be used for Kanban process to track progress of build
*Select and follow a commonly used planning methodology, such as Kanban, Trello, Jira, or Asana.-Simple and clear standards for planning methodology chosen and adhered to*
2. GitHub - Demonstrate use of frequent commits, feature branches (based on user stories), pull requests and merges
*Provide an overview and description of your source control process.--Meets D criteria and demonstrates frequent commits, merges and pull requests*

*Employ and utilise proper source control methodology--Meets D criteria and demonstrates frequent commits, merges and pull requests from all team members*

3. Use Agile development methodologies
4. Code review - Demonstrate that you have had your code reviewed by other students and that you have provided a code review for others
5. Show evidence of client communication, e.g. meeting minutes, emails, or other communication tools

### Short Answer Questions

1. What are the most important aspects of quality software?
*List discuss and demonstrate 6 software quality characteristics.*
First of all, we can define quality software (from now on, QS) as “reasonably bug or defect free, delivered on time and within budget, meets requirements and/or expectations, and is maintainable”, according to [Try QA](http://tryqa.com/).

We can break definition of QS depending on which one of the three involved stakeholders we take into account: development team, sponsors or end users. Therefore, we can identify three aspects of QS, which will be explained in the following paragraphs.

On one hand, we get the functional quality. As [David Chappell](http://www.davidchappell.com/writing/white_papers/The_Three_Aspects_of_Software_Quality_v1.0-Chappell.pdf) says, it can relate to:

* Meeting the specified requirements.
* Creating software that has few defects.
* Good enough performance.
* Ease of learning and ease of use.

Another aspect of QS is structural quality. It refers to the way the code is structured, and the properties of this kind of quality are: 

* Code testability (easy-to-test code).
* Code maintainability (easy-to-change-without-introducing-bugs code).
* Code understandability and code efficiency (readable code, DRY).
* Code security.

Some of the points given supra are linked to the SQ Attributes Approach (QSAA). It has to do with fixed quality models. An old one, which seems to take into account the first two aspects discussed, would be the ISO 8402-1986 standard, which defined quality as “the totality of features and characteristics of a product or service that bears its ability to satisfy stated or implied needs” and highlighted the following attributes: good design, good functionality, reliability, consistency, durability, good after sales service, and value for money”.

One more modern standard would be ISO/IEC 25010:2011, which described a hierarchy of eight quality characteristics, each composed of sub-characteristics: functional suitability, reliability, operability, performance efficiency, security, compatibility, maintainability, transferability. Moreover, it defines a quality-in-use model composed of five characteristics: effectiveness, efficiency, satisfaction, safety, and usability.

Another approach would be the Defect Management one (SQDM), defined by ([ASQ](https://asq.org/quality-resources/software-quality) as the one “based on counting and managing defects. Defects are commonly categorized by severity, and the numbers in each category are used for planning”. As ASQ continues, “[m]ore mature software development organizations use tools, such as defect leakage matrices (for counting the numbers of defects that pass through development phases prior to detection) and control charts, to measure and improve development process capability” .

That is how we end at the third and last QS aspect, the development process quality, which affects the value received by the three of the stakeholders mentioned above. The key parts of process quality are:

* meeting delivery dates.
* meeting budgets.
* a repeatable development process that reliably delivers quality software.

Bibliography:
1. [David Chappell. THE THREE ASPECTS OF SOFTWARE QUALITY:FUNCTIONAL, STRUCTURAL, AND PROCESS](http://www.davidchappell.com/writing/white_papers/The_Three_Aspects_of_Software_Quality_v1.0-Chappell.pdf)
2. [ASQ. WHAT IS A SOFTWARE QUALITY? ](https://asq.org/quality-resources/software-quality).
3. [TRY QA. What is Software Quality?](http://tryqa.com/what-is-software-quality/).

2. What libraries are being used in the app and why?
*Appropriate use and description of libraries used in the app-Excellent use of libraries and a complete and detailed description of libraries used in the app*


3. A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

*Effectively describes a range of skills and knowledge required by IT workers to complete a quality web development project*

The knowledge and skills required for a project depend on the deliveries that must be made. In this case, we are questioned about a website. Therefore, the former will have to do with full stack web development.

This requires both back-end and front-end capabilities. The former refer to the “server-side” of web applications. The latter, to the client-side.

The back-end developer create the logic to make the web app work properly. They focus on databases, scripting, and the architecture of websites, and their code helps to communicate the database information to the browser. They work, mainly, with:

* Server-side programming language/s (Python, Ruby,...).
* Database Management System technology (MongoDB, MySQL, …).
* Server.
* API (REST and SOAP).

The front-end developer is in charge of the experience of the end user, which means they have to carry on the following tasks:

* Apply the design to the web using web technologies like DOM, HTML, CSS and Js.
* Change and maintain the web.
* Adapt the design to various devices and browsers.
* Improve the interaction between the user and the web.
* Use APIs to connect the web with various services or systems.


Both of them should feel comfortable with git and version control systems, problem solving, and testing. 

The full-stack developer is the one with all the skills discussed in the previous paragraphs.

Bibliography:
1. [Techopedia. Back-End Developer](https://www.techopedia.com/definition/29568/back-end-developer).
2. [The balance careers. The Skills You Need to Be a Back-End Developer](https://www.thebalancecareers.com/the-skills-you-need-to-be-a-backend-developer-2071184).
3. [guru99. What is Backend Developer? Skills to become a Web Developer.](https://www.guru99.com/what-is-backend-developer.html).
4. [Frontendmasters. What is a Front-End Developer?](https://frontendmasters.com/books/front-end-handbook/2018/what-is-a-FD.html). 


4. Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

*Effectively describes a range of skills and knowledge used to complete group project.*

5. Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

*Evaluates effectiveness of knowledge and skills accurately, providing examples, and providing an insightful improvement on each skill*