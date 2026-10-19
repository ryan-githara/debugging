import React, { useState } from 'react';

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function UserCard(props) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h4>{props.name}</h4>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

function App() {
  const [users] = useState([
    { id: 1, name: "Ali" },
    { id: 2, name: "Sara", age: 22, email: "sara@test.com" }
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Buggy App</h1>
      {/* BUG 1: Passing string instead of number */}
      <Counter initialValue="0" />

      {/* BUG 2: Missing props and missing key */}
      {users.map(user => (
        <UserCard name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default App;