# Vector Full Stack Project

## How to Run:
* clone this Repo.
* make sure node and npm is installed.
* install all the dependencies using "npm i" command.
* Run "npm start" command. Default browser should open with "localhost:3000"

### Part 1: Front End
* Loaded data from local json (data.json) from `public` folder.
* Using Fetch method to read local json and saving it with the help of state hook
* Showing them as Card with 3 Cards in first row and 2 in second row.
* Using Grid layout to display the cards. Passing Card Title and Image url as Props to child component (myCard)
* Using NPM Draggable so that we can drag the cards and rearrange them. 
* Using Modal to show the image when we click a card. Maintaining the open or close state by state hook
* when we click a card, set the item and use that in modal image