# Teyvat Tracker
A fan site based on the game Genshin Impact.


> ### [View Live Site](https://teyvat-tracker.netlify.app/)


## Built With
React, TailwindCSS, DaisyUI, MambaUI, JavaScript, Python, Figma

## Lessons Learned
This project was a great learning experience, and a fun one! 

I created this as a way to learn more about React, while combining some of my personal interests. 

Through this build, I learned: 
- How to incorporate Python to provide JSON data to my web app
- Conditional Rendering
- useEffect and useState hook
- JSON/API usage
- Passing state between child/parent components
- Fetching data from APIs
- React Routing

## Process
I started out designing this small app in Figma, then used React to build out the components. I used a mix of TailwindCSS/DaisyUI/MambaUI, and adjusted the styling to my needs. 

Next, I used Python + BeautifulSoup module to get data and images from various Fandom/Hoyo sites to render the images and events. There was a bit of struggle with getting usable resolution images, so I had to do a workaround by grabbing images that could be used locally, based on string from the url.

Next up, I used data from the https://genshin.dev/ API to source my data for the character page. At this point, this was where I started to research how to use React Routing, as well as useEffect.

After that, it was mostly styling, conditional rendering, and optimizations for mobile + desktop viewing. 




