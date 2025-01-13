import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Application ToDo</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
