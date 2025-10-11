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
              :src="`/Coldplay/images/${image}`" 
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

      <!-- SINGLES Grid -->
      <div v-if="activeTab === 'SINGLES'" class="singles-grid">
        <div 
          v-for="(image, index) in singleImages" 
          :key="index" 
          class="single-cell"
        >
          <div class="single-content">
            <img 
              :src="`/Coldplay/images/${image}`" 
              :alt="singleInfo[index].title"
              class="single-image"
            />
            <div class="single-caption">
              <div class="single-date">{{ singleInfo[index].date }}</div>
              <div class="single-title">{{ singleInfo[index].title }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- SONGS Content -->
      <div v-if="activeTab === 'SONGS'" class="songs-content">
        <!-- Alphabetical Filter -->
        <div class="alphabet-filter">
          <button
            v-for="letter in alphabet"
            :key="letter"
            @click="selectedLetter = letter"
            class="letter-button"
            :class="{ 'active': selectedLetter === letter }"
          >
            {{ letter }}
          </button>
        </div>
        <!-- Songs list will go here -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ['ALBUMS', 'SINGLES', 'SONGS'];
const activeTab = ref('ALBUMS');

// Alphabet filter for SONGS tab
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const selectedLetter = ref('A');

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

const singleImages = [
  's_allmylove.webp',
  's_wepray.webp',
  's_feelslike.webp',
  's_letsomebody.jpg',
  's_myuni.jpg',
  's_higher.jpg',
  's_orphans.webp',
  's_something.jpg',
  's_everglow.jpg',
  's_up.jpg',
  's_hymn.jpg',
  's_adventure.jpg',
  's_miracles.jpg',
  's_truelove.jpg',
  's_asky.jpg',
  's_magic.jpg',
  's_midnight.jpg',
  's_atlas.jpg',
  's_hurts.jpg',
  's_princesss.jpg',
  's_upwith.jpg',
  's_charlie.jpg',
  's_paradise.jpg',
  's_everytear.jpg',
  's_everyteartwo.jpg',
  's_christmas.jpg',
  's_strawberry.jpg',
  's_lifein.jpg',
  's_lost.jpg',
  's_loversinjapan.jpg',
  's_vivalavida.jpg',
  's_violet.jpg',
  's_thehardest.jpg',
  's_talk.jpg',
  's_fixyou.jpg',
  's_speedofsound.jpg',
  's_god.jpg',
  's_clocks.jpg',
  's_thescientist.jpg',
  's_inmyplace.jpg',
  's_trouble.jpg',
  's_yellow.jpg',
  's_shiver.jpg',
  's_blueroom.jpg',
  's_brothers.jpg',
  's_safety.jpg'
];

const singleInfo = [
  { date: 'Released: October 4, 2024', title: 'ALL MY LOVE' },
  { date: 'Released: August 23, 2024', title: 'WE PRAY' },
  { date: 'Released: June 21, 2024', title: 'feelslikeimfallinginlove' },
  { date: 'Released: February 7, 2022', title: 'LET SOMEBODY GO' },
  { date: 'Released: September 24, 2021', title: 'MY UNIVERSE' },
  { date: 'Released: May 7, 2021', title: 'HIGHER POWER' },
  { date: 'Released: October 24, 2019', title: 'Orphans/ Arabesque' },
  { date: 'Released: February 22, 2017', title: 'SOMETHING JUST LIKE THIS' },
  { date: 'Released: November 11, 2016', title: 'EVERGLOW (SINGLE VERSION)' },
  { date: 'Released: April 22, 2016', title: 'UP&UP' },
  { date: 'Released: February 26, 2016', title: 'HYMN FOR THE WEEKEND' },
  { date: 'Released: November 6, 2015', title: 'ADVENTURE OF A LIFETIME' },
  { date: 'Released: December 15, 2014', title: 'MIRACLES' },
  { date: 'Released: August 18, 2014', title: 'TRUE LOVE' },
  { date: 'Released: June 29, 2014', title: 'A SKY FULL OF STARS EP' },
  { date: 'Released: March 3, 2014', title: 'MAGIC' },
  { date: 'Released: April 19, 2014', title: 'MIDNIGHT' },
  { date: 'Released: September 6, 2013', title: 'ATLAS' },
  { date: 'Released: November 19, 2012', title: 'HURTS LIKE HEAVEN' },
  { date: 'Released: June 4, 2012', title: 'PRINCESS OF CHINA' },
  { date: 'Released: April 21, 2012', title: 'UP WITH THE BIRDS' },
  { date: 'Released: February 3, 2012', title: 'CHARLIE BROWN' },
  { date: 'Released: September 12, 2011', title: 'PARADISE' },
  { date: 'Released: June 26, 2011', title: 'EVERY TEARDROP IS A WATERFALL EP' },
  { date: 'Released: June 3, 2011', title: 'EVERY TEARDROP IS A WATERFALL' },
  { date: 'Released: December 1, 2010', title: 'CHRISTMAS LIGHTS' },
  { date: 'Released: September 14, 2009', title: 'STRAWBERRY SWING' },
  { date: 'Released: February 2, 2009', title: 'LIFE IN TECHNICOLOUR II' },
  { date: 'Released: November 10, 2008', title: 'LOST!' },
  { date: 'Released: November 3, 2008', title: 'LOVERS IN JAPAN' },
  { date: 'Released: June 12, 2008', title: 'VIVA LA VIDA' },
  { date: 'Released: May 6, 2008', title: 'VIOLET HILL' },
  { date: 'Released: April 6, 2006', title: 'THE HARDEST PART' },
  { date: 'Released: December 19, 2005', title: 'TALK' },
  { date: 'Released: September 5, 2005', title: 'FIX YOU' },
  { date: 'Released: May 23, 2005', title: 'SPEED OF SOUND' },
  { date: 'Released: July 7, 2003', title: 'GOD PUT A SMILE UPON YOUR FACE' },
  { date: 'Released: April 2, 2003', title: 'CLOCKS' },
  { date: 'Released: November 4, 2002', title: 'THE SCIENTIST' },
  { date: 'Released: August 5, 2002', title: 'IN MY PLACE' },
  { date: 'Released: October 23, 2000', title: 'TROUBLE' },
  { date: 'Released: June 26, 2000', title: 'YELLOW' },
  { date: 'Released: March 6, 2000', title: 'SHIVER' },
  { date: 'Released: October 11, 1999', title: 'BLUE ROOM EP' },
  { date: 'Released: April 26, 1999', title: 'BROTHERS & SISTERS' },
  { date: 'Released: May, 1998', title: 'SAFETY EP' }
];
</script>

<style scoped>
.music-section {
  width: 100vw;
  min-height: 100vh;
  background-image: url('/Coldplay/images/music_background.jpg');
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

.singles-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  width: calc(100% - 200px);
  max-width: 1100px;
  padding: 20px;
  padding-left: 180px;
  margin-left: auto;
  margin-right: auto;
}

.single-cell {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: visible;
  padding: 15px;
}

.single-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.single-cell:hover {
  background: rgba(253, 95, 4, 0.3);
  border-color: rgba(253, 95, 4, 0.6);
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.single-image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  flex-shrink: 0;
}

.single-caption {
  text-align: center;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  flex-shrink: 0;
}

.single-date {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2px;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.single-title {
  font-size: 0.75rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  letter-spacing: 0.5px;
  line-height: 1.2;
  word-wrap: break-word;
  overflow-wrap: break-word;
  width: 100%;
  max-height: 2.4em;
  overflow: hidden;
}

.solo-content,
.songs-content {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Alphabet Filter Styles */
.alphabet-filter {
  position: absolute;
  top: 20px;
  left: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-wrap: nowrap;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  z-index: 5;
}

.letter-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  flex-shrink: 0;
}

.letter-button:hover {
  background: rgba(253, 95, 4, 0.5);
  border-color: rgba(253, 95, 4, 0.8);
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(253, 95, 4, 0.4);
}

.letter-button.active {
  background: rgba(253, 95, 4, 0.9);
  border-color: #fd5f04;
  box-shadow: 0 0 15px rgba(253, 95, 4, 0.6);
  transform: scale(1.15);
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
  
  .singles-grid {
    grid-template-columns: repeat(3, 264px);
    gap: 12px;
    padding: 15px;
    margin-left: 150px;
  }
  
  .single-date {
    font-size: 0.6rem;
  }
  
  .single-title {
    font-size: 0.75rem;
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
  
  .singles-grid {
    grid-template-columns: repeat(2, 264px);
    gap: 10px;
    padding: 10px;
    margin-left: 100px;
  }
  
  .single-date {
    font-size: 0.55rem;
  }
  
  .single-title {
    font-size: 0.7rem;
  }
}
</style>

