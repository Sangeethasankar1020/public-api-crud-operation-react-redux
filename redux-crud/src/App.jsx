import React from "react";
import PostsList from "./components/PostsList";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">
          CRUD Operations with redux and Public Api
        </h1>
      </header>
      <main className="container mx-auto p-6">
        <PostsList />
      </main>
    </div>
  );
}

export default App;
