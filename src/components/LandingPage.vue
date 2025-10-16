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
  <h2 style="text-align:center; width:100%;">Welcome aboard the Coldplay fan hub!</h2>
  <div class="info-subtitle" style="text-align:center; width:100%;">Check out their official pages on these platforms:</div>
    <div class="profile-grid" style="margin-left:auto; margin-right:auto;"> 
        <div class="profile-item">
          <a href="https://web.facebook.com/coldplay" target="_blank" rel="noopener noreferrer">
            <img src="/images/pfp.jpg" alt="Profile 1" class="profile-pic" />
          </a>
          <a href="https://web.facebook.com/coldplay" target="_blank" rel="noopener noreferrer" class="profile-btn">
            <span style="display: flex; align-items: center; justify-content: center;">
              <img src="/images/fblogoo.png" alt="Facebook Logo" class="profile-logo" />
              FACEBOOK
            </span>
          </a>
        </div>
        <div class="profile-item">
          <a href="https://www.instagram.com/coldplay/" target="_blank" rel="noopener noreferrer">
            <img src="/images/pfp.jpg" alt="Profile 2" class="profile-pic" />
          </a>
          <a href="https://www.instagram.com/coldplay/" target="_blank" rel="noopener noreferrer" class="profile-btn">
            <span style="display: flex; align-items: center; justify-content: center;">
              <img src="/images/iglogoo.png" alt="Instagram Logo" class="profile-logo" />
              INSTAGRAM
            </span>
          </a>
        </div>
        <div class="profile-item">
          <a href="https://www.youtube.com/channel/UCDPM_n1atn2ijUwHd0NNRQw" target="_blank" rel="noopener noreferrer">
            <img src="/images/pfp.jpg" alt="Profile 3" class="profile-pic" />
          </a>
          <a href="https://www.youtube.com/channel/UCDPM_n1atn2ijUwHd0NNRQw" target="_blank" rel="noopener noreferrer" class="profile-btn">
            <span style="display: flex; align-items: center; justify-content: center;">
              <img src="/images/ytlogoo.png" alt="YouTube Logo" class="profile-logo" />
              YOUTUBE
            </span>
          </a>
        </div>
        <div class="profile-item">
          <a href="https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU" target="_blank" rel="noopener noreferrer">
            <img src="/images/pfp.jpg" alt="Profile 4" class="profile-pic" />
          </a>
          <a href="https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU" target="_blank" rel="noopener noreferrer" class="profile-btn">
            <span style="display: flex; align-items: center; justify-content: center;">
              <img src="/images/spotifylogoo.png" alt="Spotify Logo" class="profile-logo" />
              SPOTIFY
            </span>
          </a>
        </div>
      </div>
      
    </div>
  </section>
  <!-- ...existing code... -->
</template>

<style scoped>
 .profile-logo {
   width: 20px;
   height: 20px;
   object-fit: contain;
   vertical-align: middle;
   margin-right: 8px;
   margin-bottom: 2px;
 }
 .profile-btn {
  display: inline-flex;
  align-items: center;
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
  padding: 0 16px;
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
  margin-left: 40px;
  color: #fff;
  font-size: 1.5rem;
  margin-top: 4px;
  text-shadow: 0 4px 16px #ff8800, 0 1px 2px #ff8800;
  transition: text-shadow 0.6s cubic-bezier(0.4,0,0.2,1), color 0.6s cubic-bezier(0.4,0,0.2,1);
  animation: glow-orange 2s cubic-bezier(0.4,0,0.2,1) infinite alternate;
}
:global(body) {
  margin: 0;
  padding: 0;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  overflow: hidden;
  z-index: 1000;
  margin: 0;
  padding: 0;
}
.header-img {
  width: 100%;
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
  flex-wrap: wrap;
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
  width: 100%;
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
  width: 100%;
  height: 50px;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.footer-img {
  width: 100%;
  height: 60px;
  object-fit: cover;
  display: block;
  margin-left: 0 !important;
  margin: 0;
  padding: 0;
}
.info-section {
  width: 100%;
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
  margin-left: 45px;
  margin-top: 5px;
  margin-bottom: 12px;
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 0 4px 16px #ff8800, 0 1px 2px #ff8800;
  transition: text-shadow 0.6s cubic-bezier(0.4,0,0.2,1), color 0.6s cubic-bezier(0.4,0,0.2,1);
  animation: glow-orange 2s cubic-bezier(0.4,0,0.2,1) infinite alternate;
  padding: 0 16px;
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

.black-section {
  width: 100vw;
  min-height: 400px;
  background: #000000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 60px 20px;
}

.black-content {
  max-width: 900px;
  text-align: center;
}

.black-section h2 {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 0 4px 16px #ff8800, 0 1px 2px #ff8800;
  transition: text-shadow 0.6s cubic-bezier(0.4,0,0.2,1);
  animation: glow-orange 2s cubic-bezier(0.4,0,0.2,1) infinite alternate;
}

.black-section p {
  font-size: 1.3rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
}

/* Tablet breakpoint */
@media (max-width: 768px) {
  .header-title {
    font-size: 1.4rem;
    left: 16px;
  }
  .header-nav {
    right: 16px;
    gap: 8px;
  }
  .header-btn {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
  .profile-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    max-width: 400px;
  }
  .profile-pic {
    width: 80px;
    height: 80px;
  }
  .info-section h2 {
    font-size: 2rem;
    margin-left: 0;
  }
  .info-subtitle {
    font-size: 1.2rem;
    margin-left: 0;
  }
}

/* Mobile breakpoint */
@media (max-width: 600px) {
  .header {
    height: 50px;
  }
  .header-img {
    height: 50px;
  }
  .header-title {
    font-size: 1.2rem;
    left: 12px;
  }
  .header-nav {
    right: 12px;
    gap: 6px;
  }
  .header-btn {
    padding: 5px 10px;
    font-size: 0.75rem;
    border-radius: 12px;
  }
  .landing-bg {
    height: 300px;
  }
  .footer {
    height: 40px;
  }
  .footer-img {
    height: 40px;
  }
  .info-section {
    min-height: 120px;
    padding: 20px 0;
  }
  .info-content {
    padding: 0 12px;
  }
  .info-section h2 {
    font-size: 1.5rem;
    margin-left: 0;
  }
  .info-subtitle {
    font-size: 1rem;
    margin-left: 0;
  }
  .info-section p {
    font-size: 1rem;
  }
  .profile-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 0 12px;
  }
  .profile-pic {
    width: 70px;
    height: 70px;
  }
  .profile-btn {
    font-size: 0.85rem;
    padding: 5px 12px;
  }
  .profile-logo {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
  .black-section {
    min-height: 300px;
    padding: 40px 16px;
  }
  .black-section h2 {
    font-size: 2rem;
  }
  .black-section p {
    font-size: 1.1rem;
  }
}

/* Small mobile breakpoint */
@media (max-width: 480px) {
  .header-nav {
    gap: 4px;
  }
  .header-btn {
    padding: 4px 8px;
    font-size: 0.65rem;
  }
  .info-section h2 {
    font-size: 1.3rem;
  }
  .info-subtitle {
    font-size: 0.9rem;
  }
  .profile-grid {
    gap: 10px;
  }
  .profile-pic {
    width: 60px;
    height: 60px;
  }
  .profile-btn {
    font-size: 0.75rem;
    padding: 4px 10px;
  }
}

/* Extra small mobile breakpoint */
@media (max-width: 400px) {
  .header {
    height: 45px;
  }
  .header-img {
    height: 45px;
  }
  .header-title {
    font-size: 1rem;
    left: 8px;
  }
  .header-nav {
    right: 8px;
    gap: 3px;
  }
  .header-btn {
    padding: 3px 6px;
    font-size: 0.6rem;
  }
  .landing-bg {
    height: 250px;
  }
  .footer {
    height: 35px;
  }
  .footer-img {
    height: 35px;
  }
  .info-section h2 {
    font-size: 1.1rem;
  }
  .info-subtitle {
    font-size: 0.8rem;
  }
  .profile-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .profile-pic {
    width: 55px;
    height: 55px;
  }
  .profile-btn {
    font-size: 0.7rem;
    padding: 3px 8px;
  }
  .profile-logo {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }
}
</style>

<!-- ...existing code... -->

