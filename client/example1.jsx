/* This demo covers React's class component syntax. Class Components are the original,
   older syntax in React. The newer syntax (functional components) is has replaced
   class components across the board. However, Class Components give us a good view
   into the basic lifecycle of React components. You also may see them at jobs that
   are still using legacy code.
*/

/* First things first, we need to import the React and ReactDOM libraries to get access
   to their functionality. React contains things like React.Component (which is the base
   class component), and ReactDOM's createRoot function lets us render things to the DOM.
*/
const React = require('react');
const { createRoot } = require('react-dom/client');

/* Our first component will simply display "hello world" to the screen. We start by creating
   a class that extends from the root React.Component class. We will see some features that
   we get from this class in example2 and example3.

   Every react component needs to do at least one thing: return some JSX (an html-like format
   in-line with our javascript) to be rendered to the screen. This is the job of the render()
   function. Below we see it returning a div containing the text "Hello World!".
*/

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                Hello World!
            </div>
        );
    }
}

/* The component above defines something that can be rendered to the screen. However, we need
   to go about getting it on the screen in the first place. To do this, we have an init
   function that is called when the page loads. init() will first create a react root in our
   DOM container (the app div) using react-dom/client's createRoot function. Once we have the
   root, we can use it to render our components by treating them like HTML tags.
*/
const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render( <HelloWorld/> );
};

window.onload = init;