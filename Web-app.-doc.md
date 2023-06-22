# Weather Web App

Welcome to *ClimaGraphix* weather web app documentation

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [App and team information](#App-and-team-information)
- [My process](#my-process)
  - [Built with / Project technical specification](#built-with/Project-technical-specification)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

The weather web app aims to provide users with accurate and up-to-date weather information in a user-friendly manner. With its real-time weather data, radar map feature, beach condition feature, the ocean condition feature for fishing in the ocean, and customizable display options, the app offers valuable insights into current and forecasted weather conditions.

By leveraging reliable weather data sources and utilizing modern web technologies, the app ensures that users have access to the most reliable and accurate weather information available. The real-time weather data includes details such as temperature, humidity, wind speed, and more. Users can stay informed about the current weather conditions for their location.

The radar map feature enhances the user experience by visually representing weather patterns and precipitation. Users can easily identify areas of rain, snow, or storms on the map, allowing them to plan their activities accordingly. The radar map can be updated in real-time or near real-time, providing users with a dynamic and interactive view of the weather in their area.

The Beach Condition feature is designed to enhance the user experience by providing valuable information about the beach conditions. Users can access real-time data regarding factors such as water temperature, wave height, wind conditions, and tide levels. This feature enables beach goers to make informed decisions and plan their beach activities accordingly. By incorporating this feature into the weather web app, users can have a comprehensive understanding of both the atmospheric and beach conditions, ensuring a safe and enjoyable beach experience.

The Ocean Condition feature is specifically designed to cater to fishers, providing them with valuable information to enhance their fishing experience and ensure their safety. Users can access real-time data on ocean conditions such as water temperature, wave height, wind speed and direction, and tide levels. This feature equips fishers with the necessary knowledge to make informed decisions about the best fishing spots and times. By incorporating the Ocean Condition feature into the weather web app, fishers can maximize their chances of a successful fishing trip while staying safe by being aware of potentially hazardous conditions.

The weather web app also offers customizable display options, allowing users to tailor the app's appearance to their preferences. They can choose between different units of measurement, such as Celsius or Fahrenheit, and select a light or dark theme for the interface. This customization ensures that users have a personalized experience while accessing weather information.

By incorporating reliable weather data sources and implementing modern web technologies, the weather web app delivers a seamless and informative experience. It empowers users to make informed decisions based on accurate weather forecasts and real-time weather conditions. Whether planning outdoor activities or staying updated on weather changes, the weather web app provides users with valuable insights to help them navigate their daily lives.


### Screenshot

![Desktop version](./images/127.0.0.1_5502_home.html(Nest%20Hub%20Max).png)


Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Code URL: [Github repository URL](https://github.com/Yasser-Ena/ClimaGraphix)
- Live Site URL: [Live Site URL](https://inquisitive-salamander-3892b1.netlify.app/)

## App and team information
- App Name                   : ClimaGraphix
- Customer                   : It's personal project
- Development and design team: Me Yasser
- Management                 : Me Yasser 
- Web URL                    : (https://yasser-Ena-Portfolio.dev)


## My process 

### Built with / Project technical specification

- This project is builded using pure HTML CSS JS.
- Semantic HTML5 markup:
  > I did use nav element to contain's the navigation, section element to contain the main content and the footer element to conation the footer content.

- CSS custom properties and media queries:
  >I did use tow media queries to change the style of the HTML element depends of the screen width, the first one is in 52.125rem **Large tablets**, and the second one is in 75rem **Laptop & Desktop**.

- Mobile-first workflow

- Interactive and functional using Vanilla JS:
  >I did use JavaScript for two main purposes. Firstly, it was employed to create interactivity between the user and the page, enabling features such as menu toggling and other interactive elements. Secondly, JavaScript was instrumental in accomplishing tasks that couldn't be achieved solely with CSS or HTML. For instance, in the navigation section, JavaScript was employed to manipulate the layout by breaking a div into two items: the menu icon and the customize tab. This was necessary because both the nav element and body employed the same grid template columns, '12column,' in the desktop version of the web app. To align the menu icon with the sidebar, both elements had to be repositioned within the last two columns, and the customize tab required a margin right that matched the padding in the dashboard section. JavaScript provided the flexibility and control needed to achieve these layout adjustments seamlessly.

- Third party API:
  >I did use three API's, one for getting the user geolocation coordinates automatically, second one for revers the location that the user type in the search bar from string to `latitude` and `longitude`, and third one for getting the weather map.
  [Link to how did it](./Used-api's.md).

- [Font](https://fonts.google.com/specimen/Nunito) - Google fonts

- [Icons](https://fontawesome.com) - Fontawesome

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**


## Installation

### To get started with the Weather Web App, follow these steps:

1. **Clone the repository**: Start by cloning the project repository to your local machine using the following command:
`git clone https://github.com/Yasser-Ena/ClimaGraphix.git`

2. **Navigate to the project directory**: Move into the project directory that wast created after cloning the repository:
`cd ClimaGraphix `

3. **Open the project in vscode if you to**: Open the project vscode:
`code .`

4. **API Key configuration**:

5. **Google map API Key**:

## Features

### Real-Time Weather Information
Stay informed about the current weather conditions in your location and other locations of interest. The weather web app provides real-time updates on temperature, humidity, wind speed and direction, precipitation, and more. Users can easily access accurate and up-to-date weather data to plan their activities accordingly.

### Radar Maps
Visualize weather patterns and track storms with interactive radar maps. The app integrates radar data to provide users with a comprehensive view of precipitation, cloud cover, and other weather phenomena. Users can zoom in and out, toggle different layers, and view the movement of weather systems for a more detailed understanding of weather conditions.

### Beach Conditions
For beach goers, the app offers a specialized feature that provides valuable information about beach conditions. Users can access real-time data on water temperature, wave height, wind conditions, and tide levels. This feature enables beach enthusiasts to make informed decisions about the best times for swimming, surfing, or other beach activities.

### Ocean Conditions
Catering specifically to fishers, the app includes a dedicated Ocean Conditions feature. Fishers can access real-time information on water temperature, wave height, wind speed and direction, and tide levels. This feature helps fishers plan their fishing trips more effectively, identifying optimal fishing spots and times while prioritizing safety.

### Customizable Display Options
The app offers various customization options to tailor the user experience. Users can personalize the app by selecting preferred units of measurement (e.g., Celsius or Fahrenheit), choosing different themes, and setting up notifications and alerts for specific weather events. This flexibility ensures that users can access weather information in a format that suits their preferences.

### User-Friendly Interface
The weather web app features a user-friendly interface designed to provide a seamless and intuitive experience. The interface is clean, responsive, and optimized for different screen sizes and devices. The app incorporates user-friendly navigation, intuitive controls, and clear visual representations of weather data to enhance usability.

### Forecast and Historical Data
In addition to real-time weather information, the app offers forecast data to help users plan ahead. Users can access hourly and multi-day forecasts, including temperature trends, precipitation chances, and other relevant details. Moreover, the app allows users to explore historical weather data, enabling them to analyze past weather patterns and trends for a specific location.

### Location-Based Services
The app utilizes location-based services to automatically detect the user's location if he enable that feature and provide localized weather information. Users can also search for weather conditions in different locations, making it convenient for travelers or individuals interested in weather updates for specific areas.

### Save Weather Information
Users have the ability to save weather information for future reference. The app allows users to bookmark specific locations or weather conditions they want to track regularly. Users can create personalized collections of saved weather data, organizing it by location, date, or any other relevant criteria. This feature enables users to easily access and compare weather information over time, making it convenient for planning trips or monitoring weather trends.

### Polling
The app includes a polling feature that enables users to receive automatic updates for their saved locations or preferred weather conditions. Users can set up polling intervals to periodically fetch and display updated weather information without manual refreshes. This feature ensures that users always have the latest weather data at their fingertips, even without actively interacting with the app.

### Offline Mode
The app incorporates an offline mode that allows users to access previously fetched weather information even when an internet connection is unavailable. Users can view the most recent weather data that was cached by the app, ensuring they still have access to essential information during internet outages or when traveling to areas with limited connectivity. This feature enhances the app's usability and ensures that users can rely on it regardless of their internet availability.

### Calendar Integration
The app seamlessly integrates with the user's calendar to provide weather-related information for scheduled events or activities. Users can sync their calendar with the app and receive weather forecasts or alerts for specific dates and locations. This feature helps users plan their day, week, or month with weather considerations in mind, ensuring that they are prepared for any weather conditions during scheduled events.

### User Registration
The app offers a user registration feature, allowing users to create an account and access personalized features. Users can sign up by providing their email address, creating a password, and optionally providing additional profile information. User registration enables a personalized experience, including the ability to save preferences, access saved locations, and sync settings across devices.

### Login and Authentication
Once registered, users can securely log into their accounts using their email and password. The app employs authentication protocols to protect user data and ensure the privacy and security of their account information. By logging in, users can access their personalized settings, saved locations, and other account-specific features.

### Personalized Settings and Preferences
Registered users can customize their app experience through personalized settings and preferences. They can choose preferred units of measurement (e.g., Celsius or Fahrenheit), language preferences, theme options, notification settings, and other customization features. These personalized settings enhance the user experience and allow users to tailor the app to their specific needs and preferences.

### Saved Locations and Syncing
Registered users can save their frequently accessed locations for quick and easy access to weather information. These saved locations can include the user's current location, home, workplace, favorite travel destinations, or any other places of interest. Additionally, by syncing their account across devices, users can access their saved locations and preferences seamlessly across multiple platforms and devices.

### Enhanced Data Storage
Registered users may benefit from enhanced data storage capabilities. They can save their historical weather data, access extended forecasts, and track weather patterns over time. The app may offer expanded storage options for registered users to store and retrieve their weather data efficiently.

### Account Management
Registered users have access to account management features that enable them to update their profile information, change passwords, manage email preferences, and review their account activity. These features provide users with control over their account and ensure a smooth and secure user experience.

### Share Weather
The app provides a convenient Share Weather feature that allows users to share weather information with others. Users can easily generate and share weather snapshots or forecasts via email, messaging apps, or social media platforms

### Accessibility
The weather web app prioritizes accessibility to ensure that all users, including those with disabilities, can access weather information. The app adheres to accessibility guidelines and standards, providing features such as keyboard navigation, screen reader compatibility, and appropriate color contrast for enhanced readability.

## Usage Guide
1. Getting Started
To begin using the weather web app, follow these simple steps:

Visit the app's website.

Create a new account by clicking on the "Sign Up" button and providing the required information, including your email address and a secure password. Alternatively, you can choose to log in using your existing social media accounts, such as Google or Facebook.
Upon successful registration, you will be redirected to the app's dashboard, where you can start exploring the weather features and functionality.

2. Locating and Adding Places
The weather web app allows you to access weather information for various locations. Here's how you can locate and add places:

Use the search bar on the main screen to enter the name of the desired location or use the app's geolocation feature to detect your current location automatically.
Once the location is found, click on the "Add" or "Save" button to add it to your list of saved places.
You can manage your saved places by editing or deleting them as needed. This feature allows you to quickly access weather information for your favorite or frequently visited locations.

3. Viewing Weather Information
The weather web app provides comprehensive weather information to keep you informed. Here's how you can access and interpret the weather data:

On the main dashboard, you'll find the current weather conditions, including temperature, humidity, wind speed and direction, and precipitation. Additional details such as sunrise and sunset times may also be displayed.
Navigate through different tabs or sections to access specific weather features such as radar maps, beach conditions, ocean conditions, sun condition, and extended forecasts. Each section provides detailed information relevant to that specific aspect of weather.
Customize the app's display options, such as units of measurement (Celsius or Fahrenheit) or theme preferences, to personalize the weather information according to your preferences.

4. Saving and Syncing Preferences
The weather web app allows you to save your preferred settings and sync them across devices. Here's how you can manage your preferences:

Go to the app's settings or preferences menu to access various customization options.
Choose your preferred units of measurement, language settings, notification preferences, and theme options.
Save your preferences to ensure a consistent experience across devices. By syncing your account, you can access your saved places, settings, and preferences seamlessly on different platforms.

5. Interacting with Features
The weather web app offers interactive features to enhance your user experience. Here's how you can make the most of these features:

Explore the radar maps to track weather patterns, zoom in and out, and toggle different layers for a comprehensive view of precipitation and other weather phenomena.
Utilize the beach conditions feature to access real-time data on water temperature, wave height, wind conditions, and tide levels, enabling you to plan your beach activities accordingly.
For fishers, the ocean conditions feature provides real-time information on water temperature, wave height, wind speed and direction, and tide levels to help you plan your fishing trips more effectively and ensure safety.
The sun condition feature provides valuable details about sunrise and sunset times, duration of daylight, and solar azimuth and elevation angles, aiding photographers, outdoor enthusiasts, and those planning activities around specific sunlight conditions.

6. Troubleshooting and Support
If you encounter any issues or have questions while using the weather web app, refer to the following resources:

Consult the app's Help or FAQ section for frequently asked questions and troubleshooting tips.
Contact the app's support team via email, chat, or the provided support channels for assistance with technical issues or general inquiries.
Stay up to date with

## Future Enhancements^

1. Personalized Weather Alerts
Consider implementing personalized weather alert notifications for registered users. Users can customize their alert preferences based on specific weather conditions or locations of interest. This feature will ensure that users receive timely notifications for weather events that matter to them, such as severe weather warnings, rainstorms, or temperature fluctuations.

2. Historical Weather Data
Integrate a historical weather data feature that allows users to access past weather information for a specific location and date. This feature can be useful for researchers, travelers, and weather enthusiasts who want to analyze weather patterns, trends, and historical data for a particular region or time period.

3. Weather Widgets and API Integration
Provide users with customizable weather widgets that they can embed on their personal websites or blogs. Additionally, consider offering an API (Application Programming Interface) that allows developers to integrate the weather data into their own applications, expanding the reach and usability of the weather web app.

4. Social Media Integration
Enhance user engagement by integrating social media features into the app. This can include the ability to share weather updates, snapshots, or forecasts directly to popular social media platforms. Additionally, consider implementing social media login options to streamline the registration and login process for users.

5. Travel Planner and Weather Recommendations
Develop a travel planner feature that suggests destinations based on weather preferences. Users can input their desired weather conditions and receive recommendations for suitable travel destinations during specific periods. This feature can help users plan vacations, business trips, or outdoor activities more effectively.

6. Language Localization
Expand the app's language support to cater to a broader user base. Implement language localization features that allow users to access the app in their preferred language. This enhancement will improve accessibility and user experience for non-native English speakers or users from different regions.

7. Integration with Smart Home Devices
Explore integration possibilities with popular smart home devices such as voice assistants or smart displays. Users can receive weather updates, forecasts, or alerts through their smart devices, making it convenient to access weather information hands-free or through a centralized home hub.

8. User Feedback and Ratings
Include a feedback system that allows users to provide suggestions, report issues, or rate the app. This feedback can help in identifying areas for improvement and gathering insights to enhance the user experience further. Consider implementing a user rating system to collect and display user reviews and ratings for the app.


## Security and Privacy^

Security and Privacy

1. Data Encryption
To ensure the confidentiality and integrity of user data, the weather web app employs industry-standard encryption protocols. This includes encrypting sensitive user information such as passwords, ensuring that it is securely stored and transmitted.

2. Secure Authentication
The app implements secure authentication mechanisms to protect user accounts from unauthorized access. This includes utilizing strong password requirements, implementing measures to prevent brute-force attacks, and employing secure login processes such as multi-factor authentication (MFA) if deemed necessary.

3. Secure Data Transmission
All data transmitted between the user's device and the app's servers is encrypted using secure protocols (e.g., HTTPS) to prevent interception or unauthorized access by third parties. This ensures that user data, including personal information and weather-related queries, remains confidential during transmission.

4. User Data Protection
The weather web app adheres to strict data protection practices to safeguard user information. This includes implementing access controls and limiting data access to authorized personnel only. User data is stored securely and protected against unauthorized disclosure, alteration, or deletion.

5. Privacy Policy
The app maintains a clear and comprehensive privacy policy that outlines how user data is collected, used, and protected. The policy should be easily accessible to users and transparently communicate how their data is handled, including any third-party integrations or data sharing practices.

6. Data Retention and Deletion
The app establishes guidelines for data retention to ensure that user data is retained only for the necessary duration. It also provides mechanisms for users to request the deletion of their personal information from the app's database, if they choose to do so.

7. Compliance with Data Protection Regulations
The weather web app complies with applicable data protection regulations and privacy laws, such as the General Data Protection Regulation (GDPR) or other regional regulations. This includes obtaining user consent for data processing, providing users with control over their data, and honoring user rights concerning data access, rectification, and erasure.

8. Regular Security Audits and Updates
The app undergoes regular security audits to identify and address potential vulnerabilities. This includes implementing necessary patches, updates, and security measures to protect against emerging threats. Security monitoring and incident response protocols are also in place to detect and respond to any security breaches or incidents.

## Support and Contact Information^
1. Help Documentation and FAQs
The weather web app provides comprehensive help documentation and frequently asked questions (FAQs) to assist users in navigating the app's features and addressing common issues. The documentation covers various topics such as account management, accessing weather information, customization options, and troubleshooting steps.

2. In-App Support and Chat
The app offers an in-app support feature that allows users to access real-time assistance and chat with a support representative. This feature enables users to receive personalized support and prompt responses to their queries or concerns directly within the app.

3. Email Support
Users can contact the app's support team via email for assistance with technical issues, account-related inquiries, or general feedback. The support email address is provided in the app's contact information, making it easy for users to reach out for assistance or share their experiences.

4. Social Media Channels
The app maintains an active presence on popular social media platforms, such as Facebook, Twitter, or Instagram. Users can follow these channels to stay updated on app news, feature releases, and receive support or interact with the app's community.

5. Community Forums or Discussion Boards
Consider creating community forums or discussion boards where users can engage with each other, share tips, ask questions, or discuss weather-related topics. These platforms provide an opportunity for users to connect, learn from one another, and provide mutual support.

6. Feedback and Feature Requests
The app encourages users to provide feedback, suggest enhancements, or report any issues they encounter. Users can utilize dedicated feedback channels, such as feedback forms or dedicated email addresses, to share their thoughts and contribute to the continuous improvement of the app.

7. Version Updates and Release Notes
Communicate version updates and release notes to users, highlighting new features, bug fixes, and improvements. This information helps users understand changes in the app, stay informed about enhancements, and assess the relevance of updates to their specific needs.

8. User Support Portal
Consider developing a user support portal or knowledge base where users can find answers to frequently asked questions, access troubleshooting guides, or browse through tutorials and instructional videos. This self-service option empowers users to find solutions independently and reduces the need for direct support.

## Changelog^

Keeping users informed about the latest updates and improvements is essential for maintaining transparency and ensuring they can make the most of the weather web app. The changelog provides a detailed record of changes made to the app with each version release. Here's how the changelog can benefit users:

1. Overview of Changes
The changelog provides an overview of the changes made to the app, including new features, enhancements, bug fixes, and optimizations. Users can refer to the changelog to understand what has been updated since their last app usage and to stay informed about the improvements available in the latest version.

2. Bug Fixes and Stability Improvements
Users appreciate knowing when bugs have been fixed or stability improvements have been made. The changelog highlights specific issues that have been addressed, ensuring users are aware of improvements that contribute to a smoother and more reliable user experience.

3. New Features and Enhancements
The changelog highlights any new features or enhancements that have been added to the app. Users can quickly see what additional functionality is now available to them and how it can enhance their interaction with the app. Including brief descriptions and instructions for new features helps users understand how to utilize them effectively.

4. User Experience Improvements
The changelog may include updates that focus on enhancing the overall user experience. This can range from visual design changes, navigation improvements, performance optimizations, or responsiveness enhancements. Communicating these updates in the changelog assures users that the app is continuously evolving to provide a better and more seamless experience.

5. Security and Privacy Updates
If any security or privacy-related updates have been implemented, they should be clearly outlined in the changelog. This could include security patches, encryption enhancements, privacy policy changes, or compliance with new data protection regulations. Informing users about these updates demonstrates the app's commitment to their data security and privacy.

6. Known Issues and Workarounds
In cases where certain issues or limitations persist, the changelog can include information about known issues and any available workarounds or temporary solutions. This helps manage user expectations and provides transparency about ongoing efforts to address these issues.

7. Accessing the Changelog
The changelog can be accessed within the app itself or on the app's website. It should be easily accessible and prominently displayed to allow users to review the changes at their convenience.

By maintaining an up-to-date changelog, users can stay informed about the app's progress, understand the improvements made, and feel confident that their feedback and suggestions are being addressed. Regularly updating the changelog demonstrates the app's commitment to continuous improvement and user satisfaction.


## Author

- Website - [Yasser Elanaya Portfolio](https://648d94afdeb93b719786d9d7--nimble-tarsier-f34414.netlify.app/)
- GitHub - [Yasser-Ena](https://github.com/Yasser-Ena)
