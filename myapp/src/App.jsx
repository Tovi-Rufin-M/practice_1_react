import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">MySite</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Build Better Websites</h1>
        <p>Practicing modern web development with React.</p>
        <button>Get Started</button>
      </header>

      <section className="about">
        <h2>About This Site</h2>
        <p>
          This is a simple React website layout used to practice
          structure, styling, and component organization.
        </p>
      </section>
      
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>Project One</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio veritatis quod, 
              corporis repudiandae voluptates soluta consequatur placeat quidem necessitatibus nulla 
              perferendis animi, ipsam, saepe cupiditate temporibus? Ipsa, facilis quam.
            </p>
          </div>
          <div className="project-item">
            <h3>Project Two</h3>
            <p>A brief description of Project Two.</p>
          </div>
          <div className="project-item">
            <h3>Project Three</h3>
            <p>A brief description of Project Three.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 MySite. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
