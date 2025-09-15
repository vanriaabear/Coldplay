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
  <section class="landing-bg"></section>
  <footer class="footer">
    <img src="/images/sun.jpg" alt="Footer sun" class="footer-img" />
  </footer>
  <section class="info-section">
    <div class="info-content">
  <h2>Welcome aboard the Coldplay fan hub!</h2>
  <div class="info-subtitle">Check out their official pages on these platforms:</div>
      <div class="profile-grid">
        <div class="profile-item">
          <a href="https://web.facebook.com/coldplay" target="_blank" rel="noopener noreferrer">
            <img src="/images/pfp.jpg" alt="Profile 1" class="profile-pic" />
          </a>
          <a href="https://web.facebook.com/coldplay" target="_blank" rel="noopener noreferrer" class="profile-btn">FACEBOOK</a>
        </div>
        <div class="profile-item">
          <a href="https://www.instagram.com/coldplay/" target="_blank" rel="noopener noreferrer">
            <img src="/images/pfp.jpg" alt="Profile 2" class="profile-pic" />
          </a>
          <a href="https://www.instagram.com/coldplay/" target="_blank" rel="noopener noreferrer" class="profile-btn">INSTAGRAM</a>
        </div>
        <div class="profile-item">
          <a href="https://www.youtube.com/channel/UCDPM_n1atn2ijUwHd0NNRQw" target="_blank" rel="noopener noreferrer">
            <img src="/images/pfp.jpg" alt="Profile 3" class="profile-pic" />
          </a>
          <a href="https://www.youtube.com/channel/UCDPM_n1atn2ijUwHd0NNRQw" target="_blank" rel="noopener noreferrer" class="profile-btn">YOUTUBE</a>
        </div>
        <div class="profile-item">
          <a href="https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU" target="_blank" rel="noopener noreferrer">
            <img src="/images/pfp.jpg" alt="Profile 4" class="profile-pic" />
          </a>
          <a href="https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU" target="_blank" rel="noopener noreferrer" class="profile-btn">SPOTIFY</a>
        </div>
      </div>
      
    </div>
  </section>
  <!-- ...existing code... -->
</template>

<style scoped>
 .profile-btn {
   display: inline-block;
   margin-top: 8px;
   padding: 6px 18px;
   background: rgba(255,136,0,0.18);
   color: #fff;
   font-size: 1rem;
   font-weight: 600;
   border: none;
   border-radius: 18px;
   text-shadow: 0 2px 8px #ff8800, 0 1px 2px #ff8800;
   transition: background 0.3s, text-shadow 0.6s cubic-bezier(0.4,0,0.2,1), color 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.2s;
   animation: glow-orange 2s cubic-bezier(0.4,0,0.2,1) infinite alternate;
   text-align: center;
   cursor: pointer;
   text-decoration: none;
 }
 .profile-btn:hover {
   background: rgba(255,136,0,0.38);
   color: #222;
   transform: scale(1.08);
 }
 .profile-item {
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 .profile-label {
   margin-top: 8px;
   color: #fff;
   font-size: 0.95rem;
   font-weight: 600;
   letter-spacing: 1px;
   text-shadow: 0 2px 8px #ff8800, 0 1px 2px #ff8800;
   transition: text-shadow 0.6s cubic-bezier(0.4,0,0.2,1), color 0.6s cubic-bezier(0.4,0,0.2,1);
   animation: glow-orange 2s cubic-bezier(0.4,0,0.2,1) infinite alternate;
   text-align: center;
 }
 .profile-grid {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 24px;
   margin: 18px auto 0 auto;
   max-width: 500px;
   width: 100%;
   background: none;
   border: none;
 }
 .profile-pic {
   width: 90px;
   height: 90px;
   object-fit: cover;
   border-radius: 50%;
   box-shadow: 0 2px 12px rgba(0,0,0,0.18);
   border: 2px solid #fff0;
   background: none;
  transition: box-shadow 0.3s, transform 0.3s cubic-bezier(0.4,0,0.2,1);
 }
 .profile-pic:hover {
  box-shadow: 0 0 0 4px rgba(255,255,255,0.18), 0 0 16px 8px rgba(255,255,255,0.35), 0 0 32px 16px rgba(255,255,255,0.45);
  transform: scale(1.18);
 }
 .info-subtitle {
   color: #fff;
   font-size: 1.5rem;
   margin-top: 4px;
   text-shadow: 0 4px 16px #ff8800, 0 1px 2px #ff8800;
   transition: text-shadow 0.6s cubic-bezier(0.4,0,0.2,1), color 0.6s cubic-bezier(0.4,0,0.2,1);
   animation: glow-orange 2s cubic-bezier(0.4,0,0.2,1) infinite alternate;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
 }
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
.info-section {
  width: 100vw;
  min-height: 300px;
  background: #00061d;
  color: #fff;
  display: block;
  margin: 0;
  padding: 0;
}
.info-content {
  max-width: 900px;
  text-align: center;
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
}
.info-section h2 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
  margin-bottom: 12px;
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 0 4px 16px #ff8800, 0 1px 2px #ff8800;
  transition: text-shadow 0.6s cubic-bezier(0.4,0,0.2,1), color 0.6s cubic-bezier(0.4,0,0.2,1);
  animation: glow-orange 2s cubic-bezier(0.4,0,0.2,1) infinite alternate;
}

@keyframes glow-orange {
  0% {
    text-shadow: 0 4px 16px #ff8800, 0 1px 2px #ff8800;
  }
  50% {
    text-shadow: 0 12px 48px #ff5500, 0 4px 16px #ff8800;
  }
  100% {
    text-shadow: 0 8px 32px #ff5500, 0 2px 8px #ff8800;
  }
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

