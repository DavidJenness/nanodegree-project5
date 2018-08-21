# Mobile Web Specialist Certification Course
# David Jenness
---
#### Restaurant Reviews

## Project Overview

This project shows a map with nearby restaurants. The user can choose to filter
results based on the neighborhood or type of cuisine. Once they see a restaurant they are interested in, they can "View Details". On the Details Screen, the user will see a map of the location, a photo, Address, Hours of operation, as well as reviews.  

### Features

This app was designed with the following ideals:

* Mobile First - The App was designed to look great on everything from the smallest
                 iPhone to the largest Web Monitor. Responsive Design is awesome!
* Offline First - This App uses Service workers that will cache all of the items
                  that pass through the web site. On subsequent attempts to access the page, the service worker will attempt to load from cache first
* Accessibility - Special care was made to ensure that accessibility
                  recommendations were followed. This includes such things as ARIA labels and roles
* Focus - Tab indexes were used to help improve navigation especially on the                  reviews page to ease navigation concerns in regard to accessibility.


### How do I install this project

1. Download the code from [Project 5](https://github.com/DavidJenness/nanodegree-project5) 

2. In order for this project to work correctly, you will need to add a file to the /js directory called "apikey.js"

3. The contents will need to be as follows (where YOUR_MAPAPI_KEY is replaced with your ApApi Key that is provided by them):

    `var MapAPIkey = 'YOUR_MAPAPI_KEY'`

4. Open a terminal window to your project's location

5. Use Python to server as a web server. In my case, the command was 
    "python -m http.server 8000"  but this may vary for you.

6. With your server running, visit the site:
    [http://localhost:8000](http://localhost:8000)

 7. Now you should be able to run the code.
