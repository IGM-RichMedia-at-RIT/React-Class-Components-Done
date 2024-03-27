/* Be sure to read example1.jsx first before continuing on to this file.

   In example1 we rendered a very basic component to the screen. It was static,
   and never changed. However, much of the power of react comes from it's dynamic
   ability to update things on screen automatically. React supports two way data 
   binding, meaning that as our data updates the display will also update 
   automatically and vice versa.
*/

const React = require('react');
const { createRoot } = require('react-dom/client');

class HelloUser extends React.Component {

    /* Like any class, React components can have constructors to setup their
       initial state. React components also take in a parameter called "props",
       which is a key-value object based on the attributes passed to the component
       when we call ReactDOM.render() on it.

       To properly set the component up, we also pass this props object to the
       React.Component constructor (base class constructors are called super()).

       The other thing we do in this constructor is setup an internal object called
       state. State is tremendously important in React components, as it is the
       interface for the data binding mentioned above. More on that below.
    */
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
        };
    }

    /* Just like our last component, we have a render function here that returns
       some JSX to be rendered to the screen. Note that this time we are making use
       of variables like this.state.username. You'll also note that we are using the
       onChange event to call our handleNameChange() function. Note that onChange is
       a react event listener, and is different from the html onchange. So when the
       text in the text input changes, handleNameChange() will be called.
    */
    render() {
        return(
            <div>
                <p>Hello {this.state.username}</p>
                <label>Change Name: </label>
                <input type="text" value={this.state.username} onChange={this.handleNameChange} />
            </div>
        );
    }

    /* This event handler is called whenever our text input from above is edited. We
       take in our event object "e" so that we have access to that event. Whenever the
       text box is edited, we are going to use the setState() function that this component
       inherits from React.Component. This will do two things: 1) update the state of the
       component, and 2) flag the component to be rerendered. This means that by updating the
       data we will automatically rerender the page as well. This is where React components
       really become powerful, as our data and display are now directly linked in both directions.
    */
    handleNameChange = (e) => {
        this.setState({ username: e.target.value });
    }
}

/* Like last demo, we need to kick off the process by rendering the component for the first time.
   Keep in mind that handleNameChange and setState() will handle all future renders once this first
   one is complete.

   Also, you will note below that we have a username='Austin' attribute on our HelloUser component.
   Attributes like this populate the props param passed to the constructor. For example, props.username
   would equal 'Austin' because of the code below.
*/
const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render( <HelloUser username='Austin'/> );
};

window.onload = init;