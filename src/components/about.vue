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
    <!-- Profile Grid -->
    <div class="profile-grid">
      <div 
        class="profile-card" 
        v-for="profile in profiles" 
        :key="profile.name"
        @click="toggleProfile(profile.name)"
        :class="{ 'expanded': expandedProfile === profile.name }"
      >
        <img :src="profile.image" :alt="profile.name" class="profile-img" />
        <h3 class="profile-name">{{ profile.name }}</h3>
        <p class="profile-role">{{ profile.role }}</p>
        
        <!-- Expandable Info Section -->
        <transition name="slide-fade">
          <div v-if="expandedProfile === profile.name" class="profile-info">
            <div class="info-content">
              <p class="info-item"><strong>Full Name:</strong> {{ profile.fullName }}</p>
              <p class="info-item"><strong>Born:</strong> {{ profile.born }}</p>
              <p class="info-item"><strong>Nationality:</strong> {{ profile.nationality }}</p>
              <p class="info-item"><strong>Instruments:</strong> {{ profile.instruments }}</p>
              <p class="info-item info-bio">{{ profile.bio }}</p>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="carousel-container">
      <div class="carousel-wrapper">
        <div class="carousel-column" v-for="col in 4" :key="col">
          <div class="carousel-images">
            <img 
              v-for="img in 3" 
              :key="img" 
              :src="getImageSrc((col - 1) * 3 + img)" 
              :alt="`Band image ${(col - 1) * 3 + img}`"
              class="carousel-img"
            />
            <!-- Duplicate for seamless loop -->
            <img 
              v-for="img in 3" 
              :key="'dup-' + img" 
              :src="getImageSrc((col - 1) * 3 + img)" 
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

<script setup>
import { ref } from 'vue';

const profiles = ref([
  { 
    name: 'Chris Martin', 
    role: 'Lead Vocals, Piano', 
    image: '/Coldplay/images/chris_1.jpg',
    fullName: 'Christopher Anthony John Martin',
    born: 'March 2, 1977',
    nationality: 'British',
    instruments: 'Vocals, Piano, Guitar',
    bio: 'Lead vocalist and co-founder of Coldplay. Known for his distinctive voice and piano skills.'
  },
  { 
    name: 'Jonny Buckland', 
    role: 'Lead Guitar', 
    image: '/Coldplay/images/jonny_1.jpg',
    fullName: 'Jonathan Mark Buckland',
    born: 'September 11, 1977',
    nationality: 'British',
    instruments: 'Lead Guitar, Backing Vocals',
    bio: 'Lead guitarist and co-founder of Coldplay, known for his atmospheric and melodic guitar work that defines Coldplay\'s sound.'
  },
  { 
    name: 'Guy Berryman', 
    role: 'Bass Guitar', 
    image: '/Coldplay/images/guy_1.webp',
    fullName: 'Guy Rupert Berryman',
    born: 'April 12, 1978',
    nationality: 'British',
    instruments: 'Bass Guitar, Keyboards',
    bio: 'Bassist and one of the founding members, providing the rhythmic foundation for the band.'
  },
  { 
    name: 'Will Champion', 
    role: 'Drums, Backing Vocals', 
    image: '/Coldplay/images/will_1.jpg',
    fullName: 'William Champion',
    born: 'July 31, 1978',
    nationality: 'British',
    instruments: 'Drums, Percussion, Backing Vocals',
    bio: 'Multi-instrumentalist drummer who adds depth to Coldplay\'s music with his versatile skills.'
  }
]);

const expandedProfile = ref(null);

function toggleProfile(name) {
  console.log('Toggling profile:', name);
  console.log('Current expanded:', expandedProfile.value);
  expandedProfile.value = expandedProfile.value === name ? null : name;
  console.log('New expanded:', expandedProfile.value);
}

function getImageSrc(n) {
  // Chris Martin - images 1-3
  if (n === 1) return '/Coldplay/images/chris_2.webp';
  if (n === 2) return '/Coldplay/images/chris_3.jpeg';
  if (n === 3) return '/Coldplay/images/chris_4.webp';
  
  // Jonny Buckland - images 4-6
  if (n === 4) return '/Coldplay/images/jonny_2.jpg';
  if (n === 5) return '/Coldplay/images/jonny_3.jpg';
  if (n === 6) return '/Coldplay/images/jonny_4.jpg';
  
  // Guy Berryman - images 7-9
  if (n === 7) return '/Coldplay/images/guy_2.jpg';
  if (n === 8) return '/Coldplay/images/guy_3.jpg';
  if (n === 9) return '/Coldplay/images/guy_4.jpg';
  
  // Will Champion - images 10-12
  if (n === 10) return '/Coldplay/images/will_2.jpg';
  if (n === 11) return '/Coldplay/images/will_3.jpg';
  if (n === 12) return '/Coldplay/images/will_4.jpg';
  
  return `/images/band${n}.jpg`;
}
</script>

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
  flex-wrap: wrap;
  justify-content: flex-end;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  gap: 10px;
}

.profile-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 80px;
  padding: 0 20px;
  align-items: start;
}

.profile-card {
  background: rgb(253, 95, 4);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 8px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  overflow: visible;
  position: relative;
  z-index: 1;
}

.profile-card:hover {
  transform: translateY(-4px);
  background: rgb(255, 115, 30);
  box-shadow: 0 8px 20px rgba(253, 95, 4, 0.4);
}

.profile-card.expanded {
  background: rgb(255, 115, 30);
  box-shadow: 0 12px 30px rgba(253, 95, 4, 0.5);
}

.profile-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: border-color 0.3s ease;
}

.profile-card:hover .profile-img {
  border-color: rgba(255, 255, 255, 0.6);
}

.profile-name {
  color: #fff;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0 0 4px 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.profile-role {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.7rem;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

.profile-info {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  text-align: left;
}

.info-content {
  animation: fadeInUp 0.4s ease-out;
}

.info-item {
  color: #fff;
  font-size: 0.65rem;
  margin: 6px 0;
  line-height: 1.4;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

.info-item strong {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
}

.info-bio {
  margin-top: 10px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 8px;
}

/* Slide-fade transition */
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  margin-top: 5px;
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
    padding: 0 16px;
  }
  .carousel-wrapper {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
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
  .footer {
    height: 40px;
  }
  .footer-img {
    height: 40px;
  }
  .background-section {
    min-height: 500px;
    padding: 20px 0;
  }
  .profile-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 60px;
    padding: 0 12px;
  }
  .profile-card {
    padding: 6px;
  }
  .profile-img {
    width: 50px;
    height: 50px;
  }
  .profile-name {
    font-size: 0.8rem;
  }
  .profile-role {
    font-size: 0.65rem;
  }
  .info-item {
    font-size: 0.6rem;
  }
  .carousel-wrapper {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .carousel-column {
    height: 300px;
  }
  .carousel-container {
    padding: 12px;
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
  .profile-grid {
    gap: 10px;
  }
  .profile-img {
    width: 45px;
    height: 45px;
  }
  .profile-name {
    font-size: 0.75rem;
  }
  .profile-role {
    font-size: 0.6rem;
  }
  .carousel-column {
    height: 250px;
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
  .footer {
    height: 35px;
  }
  .footer-img {
    height: 35px;
  }
  .profile-grid {
    gap: 8px;
  }
  .profile-card {
    padding: 5px;
  }
  .profile-img {
    width: 40px;
    height: 40px;
  }
  .profile-name {
    font-size: 0.7rem;
  }
  .profile-role {
    font-size: 0.55rem;
  }
  .info-item {
    font-size: 0.55rem;
  }
  .carousel-column {
    height: 200px;
  }
}
</style>
