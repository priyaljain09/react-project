import {useState} from 'react';

export default function App() {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    if (event.target.value.trim().length > 0) {
      alert('Input is not empty');
    } else {
      alert('Input is empty');
    }
  };

  return (
    <div>
      <h2>String: {message}</h2>

      <input
        id="message"
        name="message"
        onChange={handleChange}
        autoComplete="off"
      />

      <button disabled={message.length === 0}>Click</button>
    </div>
  );
}