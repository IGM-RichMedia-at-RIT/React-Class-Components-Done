/* Check out example1 and example2 before reading this file!

   Now that we have looked at making a basic component, and one that properly
   binds the data and the component, we will look at a more practical example.
   This example shows a component that renders, makes a request to the server,
   and updates once the server responds.
*/

const React = require('react');
const { createRoot } = require('react-dom/client');

class SongContainer extends React.Component {

    /* Our constructor will take in props, including an array of songs called songs.
       It will then call the loadSongsFromServer() function, which will ask
       the server for a list of songs.
    */
    constructor(props) {
        super(props);

        this.state = {
            songs: props.songs,
        };

        this.loadSongsFromServer();
    }

    render() {
        // If we have no songs, we will simply render that out.
        if(this.state.songs.length === 0) {
            return (
                <div>
                    <h3>No Songs Yet!</h3>
                </div>
            );
        }

        /* Otherwise if we do have songs, we will create JSX for each of them. The
           array.map() function loops over every element in the array. For each element,
           it calculates some value (in this case some JSX) and returns them to a second
           array (songList).
        */
        const songList = this.state.songs.map((song) => {
            return (
                <div key={song.title}>
                    <h2>{song.artist} - <i>{song.title}</i></h2>
                </div>
            )
        });

        /* Once we have our songList populated by the map above based on the songs that
           were given to the component, we will render them. Passing something like an
           array of JSX into {} as we do with songList will cause react to loop over them
           and display each of them on screen.
        */
        return (
            <div>
                <h1>My favorite songs!</h1>
                {songList}
            </div>
        )
    }

    /* Using fetch, we can easily make a GET request to /getSongs, parse the
       response, and set the songs state equal to the object parsed out of the
       JSON response.
    */
    loadSongsFromServer = async () => {
        const response = await fetch('/getSongs');
        const songs = await response.json();
        this.setState({ songs });
    };
}

/* Finally we kick off the process by first rendering the component to the
   screen with an empty array of songs.
*/
const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render( <SongContainer songs={[]} /> );
};
  
window.onload = init;
  