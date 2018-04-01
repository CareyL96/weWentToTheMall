class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      buyer: null,
      meme: null,
      count: null,
    };
  }
  
  // TODO: create handler functions for click and submit events
  
  render() {
    return (
      <div>
        <Memes />
        <PurchaseForm />
      </div>
    );  
  }
}

window.App = App;