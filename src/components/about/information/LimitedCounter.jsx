import { useRef, useState } from 'react';

function LimitedCounter() {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState('');
  const [testMessage, setTestMessage] = useState('');
  const devRef = useRef()

  const increase = () => {
    if (count < 10) {
      setCount(prev => {
        const newCount = prev + 1;
        console.log("Increased count to:", newCount);
        return newCount;
      });
      setMessage('');
    } else {
      setMessage('⚠️ Maximum value is 10');
      console.warn("Attempted to go above 10");
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(prev => {
        const newCount = prev - 1;
        console.log("Decreased count to:", newCount);
        return newCount;
      });
      setMessage('');
    } else {
      setMessage('⚠️ Minimum value is 1');
      console.warn("Attempted to go below 1");
    }
  };

  const reset = () => {
    setCount(1);
    setMessage('');
    setTestMessage('');
    console.log(devRef.current)
    console.log("Reset count to 1");
    devRef.current.style.gap = '20px'
  };

  const testCount = () => {
    const testMsg = `Test: Current count is ${count}`;
    console.log(testMsg);
    setTestMessage(testMsg);
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '350px', border: '1px solid #ccc', margin: '1rem auto' }}>
      <h2>Count: {count}</h2>
      <div ref={devRef} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={testCount}>Test</button>
      </div>

      {message && <p style={{ color: 'red' }}>{message}</p>}
      {testMessage && <p style={{ color: 'green' }}>{testMessage}</p>}
    </div>
  );
}

export default LimitedCounter;
