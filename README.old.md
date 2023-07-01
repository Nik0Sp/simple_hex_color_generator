<h1 align="center">Simple RGB Color Generator</h1>



<p align="center">
  <strong>A simple React application to generate RGB colors by adjusting sliders.</strong>
</p>

## Getting Started

To use this application, follow these steps:

1. Clone the repository: `git clone git@github.com:Nik0Sp/simple_rgb_color_generator.git`
2. Change directory to the project folder: `cd simple_rgb_color_generator`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application in action.

##  Usage

The application provides three sliders, one for each RGB channel: red, green, and blue. By moving the sliders, users can adjust the values of these channels and instantly see the resulting RGB color.

The color output is displayed in two places:

- The background color of the `<div id="color-output">` element.
- The text color of the `<h2>` heading.

Additionally, the current RGB value is displayed as a string below the sliders.

## Components

The main component of the application is `App`, which manages the state for the RGB color values and handles the color change event.

### State

The component uses the `useState` hook to manage the following states:

- `red`: Stores the value of the red channel.
- `green`: Stores the value of the green channel.
- `blue`: Stores the value of the blue channel.

### Event Handling

The `handleColorChange` function is called whenever any of the sliders' values change. It updates the background color of the `color-output` element, the text color of the `<h2>` heading, and the RGB color value displayed below the sliders.

### JSX Markup

The JSX markup in the `return` statement defines the structure and appearance of the application's user interface. It includes a `<div>` element to display the generated color, a container `<div>` for the main content, sliders for each RGB channel, and a text display for the current RGB value.

##Contributions

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the license terms.