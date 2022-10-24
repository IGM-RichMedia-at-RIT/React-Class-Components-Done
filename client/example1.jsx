/* This demo covers React's class component syntax. Class Components are the original,
   older syntax in React. The newer syntax (functional components) is pretty much the
   default way to do things these days. However, Class Components give us a good view
   into the basic lifecycle of React components. You also may see them at jobs that
   are still using legacy code.
*/

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
   function that is called when the page loads. init() will call ReactDOM.render (from the
   ReactDOM library) to render it. The first param is a JSX call to the component (note the
   HTML like syntax). The second parameter is the DOM element in the HTML to render the component
   to.

   Note that the React and ReactDOM libraries are being imported by the client's browser in the
   respective .handlebars files in the views folder.
*/
const init = () => {
    ReactDOM.render(<HelloWorld/>, document.getElementById('app'));
};

window.onload = init;