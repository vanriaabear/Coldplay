<template>
  <header class="header">
  <img src="/images/sun.jpg" alt="Header sun" class="header-img" />
    <span class="header-title">COLDPLAY</span>
  </header>
  <section class="landing-bg"></section>
  <footer class="footer">
    <img src="/images/sun.jpg" alt="Footer sun" class="footer-img" />
  </footer>
  <section class="info-section">
    <div class="info-content">
      <h2>Welcome to Coldplay Fan Page</h2>
      <p>Discover the latest news, albums, and tour dates of Coldplay. Stay tuned for more updates and exclusive content!</p>
    </div>
  </section>
  <!-- ...existing code... -->
</template>

<style scoped>
:global(body) {
  margin: 0;
  padding: 0;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  overflow: hidden;
  z-index: 1000;
  margin: 0;
  padding: 0;
}
.header-img {
  width: 100vw;
  height: 70px;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
.header-title {
  position: absolute;
  left: 32px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 0 1px 4px rgba(0,0,0,0.4);
  margin: 0;
  padding: 0;
}
.landing-bg {
  width: 100vw;
  height: 600px;
  background-image: url('/images/coldplay_landing2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 0 !important;
  margin: 0;
  padding: 0;
}
.footer {
  width: 100vw;
  height: 70px;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.footer-img {
  width: 100vw;
  height: 70px;
  object-fit: cover;
  display: block;
  margin-left: 0 !important;
  margin: 0;
  padding: 0;
}
.info-section {
  width: 100vw;
  min-height: 200px;
  background: #222;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 32px 0;
}
.info-content {
  max-width: 700px;
  text-align: center;
}
.info-section h2 {
  margin-bottom: 16px;
  font-size: 2rem;
}
.info-section p {
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .header {
    height: 40px;
  }
  .header-img {
    height: 32px;
  }
  .header-title {
    font-size: 1rem;
  }
  .landing-bg {
    height: 220px;
  }
  .footer {
    height: 40px;
  }
  .footer-img {
    height: 40px;
  }
  .info-section {
    min-height: 120px;
    padding: 16px 0;
  }
  .info-section h2 {
    font-size: 1.3rem;
  }
  .info-section p {
    font-size: 1rem;
  }
}

@media (max-width: 400px) {
  .header {
    height: 24px;
  }
  .header-img {
    height: 24px;
  }
  .header-title {
    font-size: 0.9rem;
  }
  .landing-bg {
    height: 120px;
  }
  .footer {
    height: 28px;
  }
  .footer-img {
    height: 28px;
  }
}
</style>

<!-- ...existing code... -->

