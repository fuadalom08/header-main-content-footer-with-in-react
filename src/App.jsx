import React from 'react';
import'./App.css'



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-primary text-white p-4 font-bold">
        <h1 className="text-3xl font-bold text-center">My Simple Webpage</h1>
        <ul classname="main-header">
          <li><a href="#">Home</a></li>
          <li><a href="#">service</a></li>
          <li><a href="#">vlog</a></li>
          <li><a href="#">contact</a></li>
          <li><a href="#">login</a></li>
          <li><a href="#">logout</a></li>
        </ul>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-base-200 p-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Welcome to My Page</h2>
          <p className="text-lg text-center">
            This is a simple webpage layout using React, Tailwind CSS, and DaisyUI. 
            You can add more content here as needed.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral text-neutral-content p-4 text-center">
        <p>© 2024 My Simple Webpage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
