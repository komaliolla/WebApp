#  Weather Web App

This is a simple and elegant Weather Web Application that allows users to search for real-time weather information for any city in the world. It is built using **HTML**, **CSS**, and **JavaScript**, and fetches live data from the **WeatherAPI.com**.

##  Features

-  Search by city name
-  Real-time weather data
-  Displays temperature, humidity, wind speed, and weather condition
-  Weather condition icon
-  Responsive and user-friendly interface

##  Technologies Used

- **HTML** – for structuring the webpage and input form
- **CSS** – for styling the layout, background, and responsiveness
- **JavaScript (Vanilla)** – for DOM manipulation and API integration
- **WeatherAPI.com** – for retrieving current weather data via REST API

##  Development Process

As part of my learning, I designed and built this weather app from scratch using core frontend web technologies. The approach I followed included:

1. **Planning UI/UX:** 
   - Designed a clean and minimal interface with a central input and output section.
   - Ensured responsiveness and accessibility across screen sizes.

2. **HTML & CSS Setup:**
   - Created the user interface using semantic HTML elements.
   - Used CSS Flexbox and gradients to enhance appearance and readability.

3. **JavaScript Integration:**
   - Handled `onclick` events from the button to trigger API calls.
   - Fetched data using the `fetch()` method to access WeatherAPI.
   - Dynamically displayed weather details on the DOM based on API response.

4. **Error Handling:**
   - Included validation for empty input fields.
   - Added fallback messages for invalid or failed API responses.

5. **Testing:**
   - Tested with various city names, including edge cases.
   - Verified responsiveness and cross-browser behavior.

##  How It Works

1. User enters a city name in the search box.
2. JavaScript uses `fetch()` to call the WeatherAPI endpoint with the given city.
3. The weather data is retrieved in JSON format and dynamically rendered on the screen.

##  Files

| File Name                 | Description                                 |
|---------------------------|---------------------------------------------|
| `user_interface.html`     | Main HTML structure of the app              |
| `user_interface_deco.css` | CSS styling for design and layout           |
| `functional_script.js`    | JavaScript logic for API call and display   |


