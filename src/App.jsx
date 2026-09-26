import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Image Gallery</h1>

      <div className="image-container">

        <div className="image-card">
          <img
            src="/assets/images/image1.png"
            alt="Image 1"
          />
          <h2>Image 1</h2>
        </div>

        <div className="image-card">
          <img
            src="/assets/images/image2.png"
            alt="Image 2"
          />
          <h2>Image 2</h2>
        </div>

        <div className="image-card">
          <img
            src="/assets/images/image3.png"
            alt="Image 3"
          />
          <h2>Image 3</h2>
        </div>

        <div className="image-card">
          <img
            src="/assets/images/image4.png"
            alt="Image 4"
          />
          <h2>Image 4</h2>
        </div>

        <div className="image-card">
          <img
            src="/assets/images/image5.png"
            alt="Image 5"
          />
          <h2>Image 5</h2>
        </div>

        <div className="image-card">
          <img
            src="/assets/images/image6.png"
            alt="Image 6"
          />
          <h2>Image 6</h2>
        </div>

      </div>
    </>
  )
}

export default App