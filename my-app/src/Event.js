import './Event.css';

export default function Event() {
    return (
      <Toolbar
        onPlay={() => alert('Playing!')}
        onPause={() => alert('Paused')}
      />
    );
  }
  
  function Toolbar({ onPlay, onPause }) {
    return (
      <div>
        <h1>Play and Pause Button </h1>
        <Button onClick={onPlay}>
          Play 
        </Button>
        <Button onClick={onPause}>
          Pause
        </Button>
      </div>
    );
  }
  
  function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }