# tri-tool-dashboard

Welcome to Tri-Tool Dashboard. Tri-Tool-Dashboard is a site that enables users to be more effective and organized throughout their day. The site hopes to help users who need quick and simple tools in a fast manner. By combining these three tools on one website, users can quickly navigate between tasks, a timer, and a unit conversion. This will be useful to all visitors as they will be able to manage their tasks in an efficient manner with a timer by their side. If they need conversions, we have a section for that too.

Currently, it seems quite empty. But do not worry. As time passes, more and more features will be implemented on the site. It will go from Tri-Tool-Dashboard to Deca-Tool-Dashboard. An amazing new name!
<img width="1261" height="692" alt="image" src="https://github.com/user-attachments/assets/a256e05c-f1d7-4247-aaa1-3e412c0af552" />
Source: https://techsini.com/multi-mockup/index.php


## Features

### Home Page / Dashboard

*  The Home Page or Dashboard is the first place users will arrive when entering the site. This page contains the title (name of the website), the page description (inside the gray container), and three buttons which will take you to three different parts of the website.

- This is of importance to the user because it is the most useful part of the website. It presents the user with three choices for navigation, each taking the visitor to their desired destination.
<img width="1280" height="855" alt="image" src="https://github.com/user-attachments/assets/649274fc-e129-4921-bc6c-d1f0d67440a2" />

### Task Manager

* The Task Manager is the button to the left (green). It is the section where users will create their tasks. Once a task is entered, the task will be displayed on the left, while on the right there will be a delete button.

- This is the part of the page where users will be able to write down their tasks. It is of importance because it will allow the user to keep track of their to-do list and not forget any important details.
<img width="1280" height="860" alt="image" src="https://github.com/user-attachments/assets/53595bf5-b194-4d69-a9a9-debc126bfaf8" />

### Unit Converter

* The Unit Converter is the button in the middle (blue). It takes you to the Unit Converter section. In this section, the user will encounter three blue boxes, each having its own conversion. Distance(KM-MI), Volume (L-Gal), and Temperatures (C, F, and K).

- It is of importance to the user because it allows quick conversions between the most commonly used metric systems.
<img width="1264" height="834" alt="image" src="https://github.com/user-attachments/assets/ce5d772f-4610-44db-8cd8-f0d9ee20bc43" />


### Timer

* The timer is the button to the right (red). This button takes the user to the Timer page. Here, the user will have a timer to help keep track of how much time is spent on each task.

- It is of importance because it helps the user know how much time has passed, or how much time has been spent working on a task needed to be finished.
<img width="1273" height="856" alt="image" src="https://github.com/user-attachments/assets/3438d530-e832-4611-a081-bc83748c539a" />

### Features Left to Implement

* A notes section. This section would let users open a tab and be able to edit the textual content inside it.

### Bugs Found & Fixed

* A bug I found was that whenever the timer would reset, it would go back to its original count. So I made it go back to 0 whenever the reset button was pressed and I kept the number in the input just in case the user wanted to use the same time again.

* An annoying bug I found was in the Task Manager section. If I made the task too big, it would go outside the normal task box and extend beyond the monitor and continue going right. It was an easy fix. I just edited some CSS code so the content would not overflow and made sure there was a word wrap styling.

## Testing

<strong> Validator Testing </strong>

* HTML
No errors were returned through the Official W3C validator
https://validator.w3.org/nu/#textarea

* CSS
No errors were returned through the Official Jigsaw Validator
https://jigsaw.w3.org/css-validator/#validate_by_input

* JS
Small, but non-essential warnings in the JSLINT Validator
https://www.jslint.com/

Warnings found:
task-manager.js
<img width="1166" height="426" alt="image" src="https://github.com/user-attachments/assets/72949e09-deb0-45b3-a01c-35e695502a5e" />
<img width="1248" height="128" alt="image" src="https://github.com/user-attachments/assets/7da8c968-9b15-4128-8d92-52e4c278de7b" />

timer.js
<img width="1179" height="411" alt="image" src="https://github.com/user-attachments/assets/2467bf24-3770-4dbf-bdea-03f8616b6718" />

unit-converter.js
<img width="1181" height="361" alt="image" src="https://github.com/user-attachments/assets/538ee509-6bb7-448b-afc1-6c08f92c5bcd" />

<strong> LightHouse Testing</strong>

Dashboard
<img width="447" height="148" alt="image" src="https://github.com/user-attachments/assets/5b17637e-ccbe-4af7-bf36-72cd1904a3b9" />

Task Manager
<img width="439" height="147" alt="image" src="https://github.com/user-attachments/assets/f7a14f0f-087c-4496-9023-0c007746b29a" />

Unit Conversions
<img width="445" height="149" alt="image" src="https://github.com/user-attachments/assets/7fe4d7e3-0426-4ef9-bec6-db1dc79975f0" />

Timer
<img width="445" height="140" alt="image" src="https://github.com/user-attachments/assets/4fdcd4aa-61cf-4d17-8fb4-28db93614264" />

### Display Testing (Visuals on different screen sizes)

Everything related with testing screen sizes is in this document:
https://docs.google.com/document/d/1dwUF_ai0WJE3m36SNGdY2rDy6Yr7SBkwnClOguKJ4oA/edit?usp=sharing
<img width="551" height="458" alt="image" src="https://github.com/user-attachments/assets/90a79f65-e4d0-44f8-a1e2-6a1872af2c12" />

## Deployment

* The following are the steps I took to deploy the site:

1-) Created a repository and connected the terminal of VS Code to the repository.<br>
2-) Go to GitHub and enter the repository you wish to deploy(Tri-Tool-Dashboard).<br>
3-) Go to settings on the top right of the navbar.<br>
4-) Go to pages on the drop-down on the left side.<br>
5-) Select deploy from a branch, under, select main, root, and finally, the save button.

Deployed site:
https://enrique2007s.github.io/tri-tool-dashboard/

If link does not work, try this one:
https://enrique2007s.github.io/tri-tool-dashboard/index.html

## Credits

Favicon: Used for generating the FavIcon
https://favicon.io/favicon-generator/

EMMETT: Used for bug fixing and code suggestions throughout the development process. Really useful with repetitive tasks.

DeepSeek: Used for JS help. This AI tool was invaluable with JS. Without it, this project would not have been as good as it is. Furthermore, one part in the JS file for task manager I added the credit to DeepSeek because I had no knowledge of creating HTML in JS. Lastly, DeepSeek helped greatly with understanding how JS operates, corrected any mistakes I had made while coding (which were a lot!), and like EMMETT, suggested code of which I took into consideration while writing JS.

Youtube: Youtube helped with a lot of the inspiration to create the three tasks. It was a tough process, trying to understand and trying to replicate in my own way was a hard step in this project.

Code Institute: Without Code Institute giving this course, none of these projects would have been deployed.

jsprojects: JSProjects gave me a great idea of the projects I could create with JS. It was really cool to see all the different projects other people had made.
https://www.100jsprojects.com/projects

developer Mozilla: Helped getting the syntax of my code right alongside with DeepSeek. It is quite similar to bootstrap, but I did not use their copy/paste code as I wanted to test out different ways of writing JS, as will be mentioned later.

## What Have I Learnt?

* I learnt that JS can be really annoying.

* The main tag helps screen readers navigate the site and know which is the important part of the website.

* I slightly learnt what the JSON was, although still have a long way to go before truly knowing what it is. As far as I know, it is a way for people to read/store data easily. I learnt this because every time I tried to see what the local site looked like through a CSS or JS file, a JSON file would appear, and it would not let me open the local until I deleted the file.

* I also forgot to commit a part of the distance converter part, so it might look like there was a big commit at one point.

* I learnt that I shold not be afraid of looking things up. This project really made me realise that. Developers are not expected to know every single thing about every language they know, and its so much information that everyone is bound to forget something. I completely forgot how to add a src link to a button!

* As you might have noticed, the commits when it comes to the JS parts are really weird. That is because I wanted to try out different methods and see which was the best for writing JS. In the end, I figured the best way was:

If you have various functions and they all do similar things, complete one function first, the rest will follow easily. 

If there are various functions and each is doing a different thing, write down all the functions and do it from most to least important. To test, add Event Listeners or a console.log somewhere and test if it works.



