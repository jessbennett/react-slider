## Grafton Studio React Code Test

- [Overview](#overview)
- [Requirements](#requirements)
- [Included Components](#included-components)
- [HTTP Requests](#http-requests)
- [Getting Started](#getting-started)
- [Questions](#questions)

### Overview:
You are tasked with creating what we will call a "faux image slider". Here are the steps we would like you to follow:

- Make an AJAX GET request to `http://react-code-test.graftonstudio.com/thumbnails/api` to receive an array of JSON data.
- The array you receive should contain four objects with the following example structure:
```
{
  "thumbnail_url": "http://react-code-test.graftonstudio.com/thumbnails/pexels-photo-1428787.jpeg",
  "thumbnail_content": "This will be filled with dumby text content."
}
```
- No need to go to crazy on styling and make things look amazing. Your "slider" could be something as simple as this [Faux Slider Example GIF](http://react-code-test.graftonstudio.com/thumbnails/code-test.gif). (File is several MB's so give it some time if it does not load right away). Also, the black outline when we click on an arrow is the video recorder we used, that is not a part of the functionality.

### Requirements
- We are simply looking for the following functionality:
  - Build out all of your components in the components/ directory, then integrate them into the main Slider component in `slider.js`.
  - By default, display the data from the first object in the array.
  - Right arrow button click:
    - Show next "slide" if its available.
    - If another "slide" is not available, show the first "slide".

  - Left arrow button click:
    - Go back to previous "slide" if you are not at the first "slide".
    - If you are at the first "slide", then do nothing.
  - Please use inline styling to achieve any CSS you need to write. Example:
  ```
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

    or via a custom style object:

    class Example extends Component {
      render() {
        return (
          <div>
            <button style={buttonStyles}>
              Click Me
            </button>
          </div>
        )
      }
    }

    const buttonStyles = {
      backgroundColor: 'red',
      fontSize: '20px',
      border: '5px solid black'
    }
  ```

- **P.S.** We use "slide" in quotes because we want to stress that the functionality is not overly complicated to build. Really all you are doing is toggling which section in the array is shown on the screen. There is absolutely no need for spinners or animations.

### Included Components
- The left and right arrow buttons have already been created for you as components. For example, if you created a file
inside of the components/ directory, you could import the ArrowButton into it like so:
```
import ArrowButton from './arrow-button'
```
- ArrowButton accepts two props:
  - **type** (string) with possible values of: 'left' or 'right'
  - **onClick** (function).

### HTTP Requests
- The http client npm package Axios has been included for you to make your GET request. However, if you prefer another one(ie: fetch), feel free to use anything you are more comfortable with. [Axios Docs](https://github.com/axios/axios)

### Getting Started
- `git clone https://github.com/graftonstudio/react-code-test.git`
- cd into directory and `npm install`
- `npm run dev`
- This should open up your default browser, but if not, please visit `localhost:8080` in your browser.
- Your browser will refresh automatically whenever you save a file within the src/ directory.
- To submit your code, send your folder via [WeTransfer](https://wetransfer.com/) to dzuzevich@graftonstudio.com
- Before submitting, please make sure to delete your node_modules folder to keep the file size down!
- Please don't spend more than 2 hours on this! It is absolutely fine if you don't finish the whole thing, so don't rush and try to get every single thing done.

### Questions?
Feel free to e-mail us with any questions you have.
