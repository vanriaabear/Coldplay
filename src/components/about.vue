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
    <div class="carousel-container">
      <div class="carousel-wrapper">
        <div class="carousel-column" v-for="col in 4" :key="col">
          <div class="carousel-images">
            <img 
              v-for="img in 3" 
              :key="img" 
              :src="`/images/band${(col - 1) * 3 + img}.jpg`" 
              :alt="`Band image ${(col - 1) * 3 + img}`"
              class="carousel-img"
            />
            <!-- Duplicate for seamless loop -->
            <img 
              v-for="img in 3" 
              :key="'dup-' + img" 
              :src="`/images/band${(col - 1) * 3 + img}.jpg`" 
              :alt="`Band image ${(col - 1) * 3 + img}`"
              class="carousel-img"
            />
          </div>
        </div>
      </div>
    </div>
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
  min-height: 600px;
  background-image: url('/images/aboutt_bg.jpg'), url('/images/sun.jpg');
  background-size: cover, 120%;
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.carousel-container {
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.carousel-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
}

.carousel-column {
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  height: 400px;
}

.carousel-images {
  display: flex;
  flex-direction: column;
  animation: scroll-vertical 15s linear infinite;
}

.carousel-column:nth-child(even) .carousel-images {
  animation-direction: reverse;
}

.carousel-img {
  width: 100%;
  height: 130px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
}

.carousel-img:hover {
  transform: scale(1.05);
  z-index: 10;
}

@keyframes scroll-vertical {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
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
  .carousel-wrapper {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .carousel-column {
    height: 300px;
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
