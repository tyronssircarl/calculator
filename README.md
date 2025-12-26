# Calculator

A simple and functional web-based calculator application built with vanilla HTML, CSS, and JavaScript. This calculator provides basic arithmetic operations with a clean and responsive user interface that works seamlessly across all device sizes.

## Project Description

This calculator application allows users to perform basic mathematical operations including addition, subtraction, multiplication, and division. The interface features a simple design with loading animations on buttons to prevent double-clicking and ensure smooth user experience. The calculator is fully responsive and optimized for mobile devices, tablets, and desktop screens.

## How to Run the Project

1. Navigate to the calculator folder in your file system
2. Double-click on the index.html file
3. The calculator will open in your default web browser

## File Structure

The project consists of exactly three files as required:

1. index.html - Contains the HTML structure and layout of the calculator
2. style.css - Contains all styling rules, responsive design, and animations
3. script.js - Contains all JavaScript functions for calculator functionality

All files are located in the calculator directory. No inline CSS or JavaScript is used in the HTML file.

## Features

Basic Arithmetic Operations
The calculator supports four basic operations:
- Addition (+)
- Subtraction (-)
- Multiplication (×)
- Division (/)

Number Input
- Decimal number support with decimal point button
- Number buttons from 0 to 9
- Proper handling of decimal point to prevent multiple decimal points

Control Functions
- Clear (C) button to reset the calculator completely
- Delete (⌫) button to remove the last entered digit
- Equals (=) button to calculate and display the result

User Experience Features
- Loading animations on buttons to prevent double-clicking
- Visual feedback on button hover and active states
- Error handling for division by zero
- Responsive design that adapts to all screen sizes
- Clean and simple interface without unnecessary elements

## Technologies Used

HTML5 - For the structure and semantic markup
CSS3 - For styling, layout, responsive design, and animations
JavaScript (Vanilla) - For calculator logic and interactivity

No external libraries or frameworks are used in this project.

## Usage Instructions

1. Click on number buttons (0-9) to enter numbers
2. Click on operator buttons (+, -, ×, /) to select an operation
3. Enter the second number
4. Click the equals (=) button to see the result
5. Use the Clear (C) button to reset the calculator
6. Use the Delete (⌫) button to remove the last entered digit
7. Click the decimal point (.) button to enter decimal numbers

Example Calculation:
1. Click 5
2. Click +
3. Click 3
4. Click =
Result: 8

## Code Organization

The JavaScript code is organized using functions only. No classes, constructors, or initialization functions are used. The code structure includes:

Main Functions:
- handleNumberClick() - Handles number button clicks and updates the display
- handleOperatorClick() - Handles operator button clicks and prepares for calculation
- calculate() - Performs the actual mathematical calculation based on the selected operator
- handleEquals() - Displays the final result when equals button is clicked
- handleClear() - Resets all calculator values to initial state
- handleDelete() - Removes the last entered digit
- handleButtonClick() - Main event handler that routes button clicks to appropriate functions
- updateScreen() - Updates the calculator display screen
- addLoadingState() - Adds loading animation to prevent double clicks
- removeLoadingState() - Removes loading animation after processing

Event Listeners:
- All calculator buttons have click event listeners attached
- Event listeners are set up using forEach loop without document.onload

## Responsive Design

The calculator is fully responsive and includes media queries for different screen sizes:

Mobile Devices (max-width: 480px)
- Reduced padding and font sizes
- Smaller button heights
- Adjusted screen display size

Small Mobile Devices (max-width: 360px)
- Further reduced dimensions
- Optimized spacing for very small screens

Tablet and Desktop (min-width: 768px)
- Larger display screen
- Increased button sizes
- Enhanced spacing for better usability

The calculator uses CSS Grid for button layout and Flexbox for container alignment, ensuring proper display across all devices.

## CSS Features

The stylesheet includes:
- Card layout for the calculator container
- Grid layout for button arrangement
- Hover effects on all interactive buttons
- Custom color theme with distinct colors for different button types
- Loading spinner animation for button feedback
- Smooth transitions for better user experience
- Proper CSS formatting with multi-line declarations

## JavaScript Implementation Details

Function-Based Architecture:
- All code uses functions only, no classes or constructors
- No initialization functions or document.onload events
- Event listeners are attached directly after DOM elements are selected

State Management:
- currentInput - Stores the currently displayed number
- previousInput - Stores the first number in a calculation
- operator - Stores the selected mathematical operator
- shouldResetScreen - Flag to determine when to reset the display

Error Handling:
- Division by zero detection with user-friendly alert message
- Input validation to prevent invalid number formats
- Proper handling of edge cases in calculations

Loading States:
- Buttons show loading animation when clicked
- Loading state prevents multiple clicks during processing
- Animation automatically removes after 150ms delay

## Browser Compatibility

This calculator works on all modern web browsers including:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

## Project Requirements Compliance

The project follows all specified requirements:
- Uses functions only in JavaScript, no constructors or init functions
- No document.onload or similar initialization events
- Separate CSS and JavaScript files, no inline code
- Responsive design for all screen sizes including mobile
- Loading animations on buttons to prevent double clicks
- Unique classnames prefixed with calculator-
- Proper code indentation and formatting
- Simple and functional UI without fancy elements
- No emojis or icons used
- No gradient colors, only solid colors
- Five Tagalog comments in JavaScript for main functions

## Future Enhancements

Potential improvements that could be added:
- Keyboard input support
- History of calculations
- Memory functions (M+, M-, MR, MC)
- Scientific calculator functions
- Theme customization options

## Screenshot
<img width="807" height="601" alt="image" src="https://github.com/user-attachments/assets/23a27f21-d1c4-4c1d-96df-9db446e4348e" />


