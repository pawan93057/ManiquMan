function Home() {
  return (
    <div className="home-page">

      {/* Hero */}
      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-small-title">
            WELCOME TO
          </p>

          <h1>
            MANIQUE MAN
          </h1>

          <p>
            Discover modern men's fashion, styling inspiration
            and elegant looks.
          </p>

        </div>

      </section>


      {/* Collection */}
      <section className="image-section">

        <div className="section-container">

          <h2>
            Our Collection
          </h2>

          <p className="section-description">
            Explore our latest fashion inspiration and styles.
          </p>

          <div className="image-grid">

            <div className="image-card">
              <img
                src="/assets/images/image1.png"
                alt="Manique Man style"
              />
            </div>

            <div className="image-card">
              <img
                src="/assets/images/image2.png"
                alt="Manique Man style"
              />
            </div>

            <div className="image-card">
              <img
                src="/assets/images/image3.png"
                alt="Manique Man style"
              />
            </div>

            <div className="image-card">
              <img
                src="/assets/images/image4.png"
                alt="Manique Man style"
              />
            </div>

            <div className="image-card">
              <img
                src="/assets/images/image5.png"
                alt="Manique Man style"
              />
            </div>

            <div className="image-card">
              <img
                src="/assets/images/image6.png"
                alt="Manique Man style"
              />
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;