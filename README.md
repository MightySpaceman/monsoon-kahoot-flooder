# monsoon 🚧
Kahoot lobby flooder made in node.js. Thought of after the frustration of the many deprecated/outdated/buggy flooders out there, and difficulty to find a working one. 

Many of the old ones use now discontinued Kahoot API's - however, monsoon uses a different approach: web scraping. Using the cheerio module, it identifies the 'nickname' textbox and 'join' button in order to join the lobby - it's as if it were just loaded into a web browser.
