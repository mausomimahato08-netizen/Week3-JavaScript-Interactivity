# Week 3: Integrating JavaScript for Interactive User Experience

## Project
**PixelCraft – Responsive Creative Studio Website**

## Overview
This project adds JavaScript interactivity to a responsive creative studio webpage. It uses plain HTML, CSS, and JavaScript without any external JavaScript library.

## Interactive features
1. Mobile navigation menu opens and closes when the menu button is clicked.
2. Theme switch changes the page between light and dark modes.
3. Service buttons display a short toast message.
4. Contact form checks the name, email format, and message length before showing success feedback.
5. The footer year updates automatically.

## Files
- `index.html` – webpage structure and interactive elements.
- `style.css` – layout, colors, responsive design, and visual states.
- `script.js` – event listeners, DOM updates, menu, theme, toast, and form validation.

## How to run
1. Download and extract the ZIP folder.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser (or use Live Server).
4. Try the menu, theme button, service buttons, and contact form.

## Technical notes
JavaScript is connected using the `defer` attribute in the script tag. This lets the HTML load before the script runs. Event listeners respond to user actions, while DOM methods update classes, text, and accessibility attributes. The form uses client-side validation only; it does not send data to a server.

## Challenges and solutions
- **Mobile menu:** A CSS class is added or removed to show and hide the navigation.
- **Form validation:** Empty fields, invalid email addresses, and short messages are checked before success feedback is displayed.
- **Theme switching:** A class on the body element changes CSS variables, keeping the design consistent.
- **Responsive layout:** CSS media queries adjust the navigation, hero, service cards, and footer for smaller screens.

## Conclusion
The task demonstrates DOM manipulation, event handling, form validation, and responsive UI integration using beginner-friendly JavaScript.
