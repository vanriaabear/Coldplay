<template>
  <section class="music-section">
    <!-- Tabbed Interface -->
    <div class="tab-container">
      <button 
        v-for="tab in tabs" 
        :key="tab"
        @click="activeTab = tab"
        class="tab-button"
        :class="{ 'active': activeTab === tab }"
      >
        <span class="tab-circle" :class="{ 'active': activeTab === tab }"></span>
        <span class="tab-text">{{ tab }}</span>
      </button>
    </div>

    <div class="music-content">
      <!-- ALBUMS Grid -->
      <div v-if="activeTab === 'ALBUMS'" class="albums-grid">
        <div 
          v-for="(image, index) in albumImages" 
          :key="index" 
          class="album-cell"
          :class="{ 'last-cell': index === 16 }"
        >
          <div class="album-content">
            <img 
              :src="`/images/${image}`" 
              :alt="albumInfo[index].title"
              class="album-image"
            />
            <div class="album-caption">
              <div class="album-date">{{ albumInfo[index].date }}</div>
              <div class="album-title">{{ albumInfo[index].title }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- SOLO Content -->
      <div v-if="activeTab === 'SOLO'" class="solo-content">
        <!-- Solo content will go here -->
      </div>

      <!-- SONGS Content -->
      <div v-if="activeTab === 'SONGS'" class="songs-content">
        <!-- Songs content will go here -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ['ALBUMS', 'SOLO', 'SONGS'];
const activeTab = ref('ALBUMS');

const albumImages = [
  'moon.jpg',
  'mots.jpg',
  'everyday_life.jpg',
  'livein.jpg',
  'kalei.jpg',
  'head.jpg',
  'ghostlive.jpg',
  'ghost.jpg',
  'live_2012.jpg',
  'mylo.jpg',
  'leftright.jpg',
  'prospekt.jpg',
  'vivala.jpg',
  'xy.jpg',
  'live_2003.jpg',
  'rush.jpg',
  'parachutes.jpg'
];

const albumInfo = [
  { date: 'Released: October 4, 2024', title: 'MOON MUSiC' },
  { date: 'Released: October 15, 2021', title: 'MUSIC OF THE SPHERES' },
  { date: 'Released: November 22, 2019', title: 'EVERYDAY LIFE' },
  { date: 'Released: December 7, 2018', title: 'LIVE IN BUENOS AIRES' },
  { date: 'Released: July 14, 2017', title: 'KALEIDOSCOPE EP' },
  { date: 'Released: December 4, 2015', title: 'A HEAD FULL OF DREAMS' },
  { date: 'Released: November 24, 2014', title: 'GHOST STORIES LIVE 2014' },
  { date: 'Released: May 19, 2014', title: 'GHOST STORIES' },
  { date: 'Released: November 19, 2012', title: 'LIVE 2012' },
  { date: 'Released: October 24, 2011', title: 'MYLOXY LOTO' },
  { date: 'Released: May 15, 2009', title: 'LEFTRIGHTLEFTRIGHTLEFT' },
  { date: 'Released: November 21, 2008', title: "PROSPEKT'S MARCH" },
  { date: 'Released: June 12, 2008', title: 'VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS' },
  { date: 'Released: June 6, 2005', title: 'X&Y' },
  { date: 'Released: November 11, 2003', title: 'LIVE 2003' },
  { date: 'Released: August 26, 2002', title: 'A RUSH OF BLOOD TO THE HEAD' },
  { date: 'Released: July 10, 2000', title: 'PARACHUTES' }
];
</script>

<style scoped>
.music-section {
  width: 100vw;
  min-height: 100vh;
  background-image: url('/images/music_background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  padding: 40px 0;
}

.music-content {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.tab-container {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 10;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.tab-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(5px);
}

.tab-button.active {
  background: rgba(253, 95, 4, 0.8);
}

.tab-circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  transition: all 0.3s ease;
}

.tab-circle.active {
  background: #fff;
  border-color: #fff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.tab-text {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.albums-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  margin-left: 200px;
}

.album-cell {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  padding: 15px;
}

.album-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.album-cell:hover {
  background: rgba(253, 95, 4, 0.3);
  border-color: rgba(253, 95, 4, 0.6);
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.album-cell.last-cell {
  grid-column: 1;
}

.album-image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  border-radius: 8px;
}

.album-caption {
  text-align: center;
  color: #fff;
}

.album-date {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 4px;
  letter-spacing: 0.5px;
}

.album-title {
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  letter-spacing: 1px;
  line-height: 1.2;
}

.solo-content,
.songs-content {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  color: #fff;
}

/* Responsive styles */
@media (max-width: 768px) {
  .tab-container {
    top: 15px;
    left: 15px;
    gap: 10px;
  }
  
  .tab-button {
    padding: 8px 16px;
  }
  
  .tab-text {
    font-size: 0.8rem;
  }
  
  .albums-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 15px;
    margin-left: 150px;
  }
  
  .album-cell.last-cell {
    grid-column: 1;
  }
  
  .album-date {
    font-size: 0.65rem;
  }
  
  .album-title {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .music-section {
    padding: 60px 15px 15px;
  }
  
  .tab-container {
    top: 10px;
    left: 10px;
    gap: 8px;
  }
  
  .tab-button {
    padding: 6px 12px;
  }
  
  .tab-text {
    font-size: 0.7rem;
  }
  
  .tab-circle {
    width: 10px;
    height: 10px;
  }
  
  .albums-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
    margin-left: 100px;
  }
  
  .album-date {
    font-size: 0.6rem;
  }
  
  .album-title {
    font-size: 0.75rem;
  }
}
</style>
