<template>
  <header class="header">
    <img src="/images/sun.jpg" alt="Header sun" class="header-img" />
    <span class="header-title">COLDPLAY</span>
    <nav class="header-nav">
      <button class="header-btn">About the band</button>
      <button class="header-btn">Music</button>
      <button class="header-btn">Concert history</button>
    </nav>
  </header>

  <main class="background-section">
  </main>

  <footer class="footer">
    <img src="/images/sun.jpg" alt="Footer sun" class="footer-img" />
  </footer>
</template>

<style scoped>
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

.header-nav {
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 16px;
}

.header-btn {
  background: rgba(255,255,255,0.15);
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 18px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.header-btn:hover {
  background: rgba(255,255,255,0.35);
  color: #222;
}

.background-section {
  width: 100vw;
  height: 600px;
  background-image: url('/images/aboutt_bg.jpg'), url('/images/sun.jpg');
  background-size: cover, 120%;
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  margin-top: 15px;
}

.footer {
  width: 100vw;
  height: 50px;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.footer-img {
  width: 100vw;
  height: 60px;
  object-fit: cover;
  display: block;
  margin-left: 0 !important;
  margin: 0;
  padding: 0;
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
  .footer {
    height: 40px;
  }
  .footer-img {
    height: 40px;
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
  .footer {
    height: 28px;
  }
  .footer-img {
    height: 28px;
  }
}
</style>
