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
          @click="openAlbumDetail(index)"
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

      <!-- ALBUM DETAIL Tab Content (simple placeholder, to be designed later) -->
      <div v-if="activeTab === 'DETAIL' && selectedAlbumIndex !== null" class="album-detail-tab">
        <div class="album-detail-content">
          <div class="album-detail-date">{{ albumInfo[selectedAlbumIndex].date }}</div>
          <div class="album-detail-title">{{ albumInfo[selectedAlbumIndex].title }}</div>
          <img
            :src="`/Coldplay/images/${albumImages[selectedAlbumIndex]}`"
            :alt="albumInfo[selectedAlbumIndex].title"
            class="album-detail-image"
          />

          <!-- Moon Music Track Grid: only for first album -->
          <div v-if="selectedAlbumIndex === 0" class="track-grid">
            <div 
              v-for="(track, i) in moonTracks" 
              :key="i" 
              class="track-row"
              @click="openLyrics(i)"
            >
              <div class="track-col track-num">
                {{ (i + 1).toString().padStart(2, '0') }}
              </div>
              <div class="track-col track-title">
                {{ track }}
              </div>
              <div class="track-col track-lyrics">Lyrics</div>
            </div>
          </div>
        </div>
      </div>

      <!-- LYRICS Tab: vertical split -->
      <div v-if="activeTab === 'LYRICS' && selectedSongIndex !== null" class="lyrics-tab">
        <div class="lyrics-layout">
          <div class="lyrics-left">
            <div class="lyrics-header">{{ currentSongTitle }}</div>
            <div class="lyrics-subheader">{{ currentAlbumDate }}</div>
            <img 
              :src="`/Coldplay/images/${albumImages[selectedAlbumIndex]}`" 
              :alt="currentAlbumTitle" 
              class="lyrics-cover"
            />
          </div>
          <div class="lyrics-right">
            <div v-if="currentSongLyrics.length" class="lyrics-content">
              <div v-for="(line, i) in currentSongLyrics" :key="i" class="lyric-line">{{ line }}</div>
            </div>
            <div v-else class="lyrics-placeholder">Lyrics coming soon.</div>
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
        <!-- Songs Grid -->
        <div v-if="selectedLetter === 'A'" class="songs-grid">
          <!-- Header Row -->
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <!-- Song Rows -->
          <div 
            v-for="(song, index) in songsLetterA" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <!-- Songs Grid for B -->
        <div v-if="selectedLetter === 'B'" class="songs-grid">
          <!-- Header Row -->
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <!-- Song Rows -->
          <div 
            v-for="(song, index) in songsLetterB" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <!-- Songs Grid for C -->
        <div v-if="selectedLetter === 'C'" class="songs-grid">
          <!-- Header Row -->
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <!-- Song Rows -->
          <div 
            v-for="(song, index) in songsLetterC" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <!-- Songs Grid for D -->
        <div v-if="selectedLetter === 'D'" class="songs-grid">
          <!-- Header Row -->
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <!-- Song Rows -->
          <div 
            v-for="(song, index) in songsLetterD" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <!-- Songs Grid for E -->
        <div v-if="selectedLetter === 'E'" class="songs-grid">
          <!-- Header Row -->
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <!-- Song Rows -->
          <div 
            v-for="(song, index) in songsLetterE" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <!-- Songs Grid for F -->
        <div v-if="selectedLetter === 'F'" class="songs-grid">
          <!-- Header Row -->
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <!-- Song Rows -->
          <div 
            v-for="(song, index) in songsLetterF" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <!-- Songs Grid for G -->
        <div v-if="selectedLetter === 'G'" class="songs-grid">
          <!-- Header Row -->
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <!-- Song Rows -->
          <div 
            v-for="(song, index) in songsLetterG" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <!-- Songs Grid for H -->
        <div v-if="selectedLetter === 'H'" class="songs-grid">
          <!-- Header Row -->
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <!-- Song Rows -->
          <div 
            v-for="(song, index) in songsLetterH" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>

        <!-- Songs Grid for I -->
        <div v-if="selectedLetter === 'I'" class="songs-grid">
          <!-- Header Row -->
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <!-- Song Rows -->
          <div 
            v-for="(song, index) in songsLetterI" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <div v-if="selectedLetter === 'J'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterJ" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>

        <div v-if="selectedLetter === 'K'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterK" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>

        <div v-if="selectedLetter === 'L'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterL" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>

        <div v-if="selectedLetter === 'M'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterM" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>

        <div v-if="selectedLetter === 'N'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterN" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>

        <div v-if="selectedLetter === 'O'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterO" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <div v-if="selectedLetter === 'P'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterP" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <div v-if="selectedLetter === 'R'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterR" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <div v-if="selectedLetter === 'S'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterS" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <div v-if="selectedLetter === 'T'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterT" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <div v-if="selectedLetter === 'U'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterU" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <div v-if="selectedLetter === 'V'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterV" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <div v-if="selectedLetter === 'W'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterW" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <div v-if="selectedLetter === 'X'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterX" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
        <div v-if="selectedLetter === 'Y'" class="songs-grid">
          <div class="song-cell song-header">
            <div class="song-content">
              <div class="song-title-col">TITLE</div>
              <div class="song-album-col">ALBUM</div>
            </div>
          </div>
          <div 
            v-for="(song, index) in songsLetterY" 
            :key="index" 
            class="song-cell"
          >
            <div class="song-content">
              <div class="song-title-col">{{ song.title }}</div>
              <div class="song-album-col">{{ song.album }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const tabs = ['ALBUMS', 'SINGLES', 'SONGS', 'DETAIL', 'LYRICS'];
const activeTab = ref('ALBUMS');
const selectedAlbumIndex = ref(null);
const selectedSongIndex = ref(null);

function openAlbumDetail(index) {
  selectedAlbumIndex.value = index;
  activeTab.value = 'DETAIL';
}

// Moon Music track list used in the 3-column grid for the first album
const moonTracks = [
  'MOON MUSiC',
  'feelslikeimfallinginlove',
  'WE PRAY',
  'JUPiTER',
  'GOOD FEELINGS',
  'RAINBOW',
  'iAAM',
  'AETERNA',
  'ALL MY LOVE',
  'ONE WORLD',
];

function openLyrics(trackIndex) {
  selectedSongIndex.value = trackIndex;
  activeTab.value = 'LYRICS';
}

const currentAlbumTitle = computed(() => {
  return selectedAlbumIndex.value !== null ? albumInfo[selectedAlbumIndex.value].title : '';
});

const currentSongTitle = computed(() => {
  if (selectedAlbumIndex.value === 0 && selectedSongIndex.value !== null) {
    return moonTracks[selectedSongIndex.value];
  }
  return '';
});

const currentAlbumDate = computed(() => {
  return selectedAlbumIndex.value !== null ? albumInfo[selectedAlbumIndex.value].date : '';
});

// Lyrics data: currently only for Moon Music track 01
const lyricsData = {
  0: { // album index 0: Moon Music
    0: [
      'Once upon a time',
      'I tried to get myself together',
      'Be more like the sky and welcome',
      'Every kind of weather',
      'Be more eagle-like and',
      'Find the flight in every feather',
      '',
      'Once upon a time',
      'But I’m still trying to get better',
      'Maybe I’m just crazy',
      'I should just be a brick in the wall',
      'Sit and watch the t.v.',
      'Blame everyone else for it all',
      '',
      'But I’m trying to trust in the Heavens above',
      'And I’m trying to trust in a world full of love',
      'Fire and water and constantly dream',
      'Of the balance of things',
      'And the music between',
      '',
      'If there’s anyone out there',
      'I’m close to the end',
      'If there’s anyone out there',
      'I just need a friend',
    ],
    1: [
      'I know that this could hurt me bad',
      'I know that this could feel like that',
      'But I just can’t stop',
      'Let my defences drop',
      '',
      'I know that I was born to kill',
      'Any angel on my windowsill',
      'But it’s so dark inside',
      'I throw the windows wide',
      '',
      'I know, la-la-la-la-la-la-la-la-la',
      'I know, la-la-la-la-la-la-la-la',
      'Still, I don’t let go',
      'And fields of flowers grow',
      '',
      'Oh, it feels like',
      'I’m fallin’ in love',
      'Maybe for the first time',
      'Baby, it’s my mind you blow',
      '',
      'It feels like',
      'I’m fallin’ in love',
      'You’re throwin’ me a lifeline',
      'And this is for a lifetime, I know',
      '',
      'I know that in this kind of scene',
      'Of two people, there’s a spark between',
      'One gets torn apart',
      'One gets a broken heart',
      '',
      'I know, la-la-la-la-la-la-la-la-la',
      'I know, la-la-la-la-la-la-la-la',
      'Still, I don’t let go',
      'And fields of flowers grow',
      '',
      'Oh, it feels like',
      'I’m fallin’ in love',
      'Maybe for the first time',
      'Baby, it’s my mind you blow',
      '',
      'It feels like',
      'I’m fallin’ in love',
      'You’re throwin’ me a lifeline',
      'And this is for a lifetime, I know',
      '',
      'Ooh, ooh',
      'Ooh (feels like)',
      'Whoa',
      '',
      'It feels like',
      'I’m fallin’ in love',
      'You’re throwin’ me a lifeline',
      'Oh, now for the first time',
      'I know I’m not alone',
      '',
      'Ah-la-la, la-la, lo-lee-lo',
      'Ah-la-la, la-la, lo-lee-lo',
      'Ah-la-la, la-la, lo-lee-lo, oh',
      'Ah-la-la, la-la, lo-lee-lo',
      'Ah-la-la, la-la, lo-lee-lo',
      'Ah-la-la, la-la, lo-lee-lo, oh',
    ],
    2: [
      '(Whoa!)',
      'And so We Pray',
      '',
      'I pray that I don’t give up',
      'Pray that I do my best',
      'Pray that I can lift up',
      'Pray my brother is blessed',
      'Praying for enough',
      'Pray Virgilio wins',
      'Pray I – I – I',
      'Judge nobody and forgive me my sins',
      'I pray we make it',
      'Pray my friend will pull through',
      'Pray as I take it',
      'Unto others I do',
      'Praying on your love',
      'We pray with every breath',
      'Though I – I – I’m in the valley of the shadow of death',
      '',
      'And so We Pray',
      'And so We Pray',
      'And so We Pray',
      'Pray that we make it to the end of the day',
      'And so We Pray',
      'I know somewhere that heaven is waiting',
      'And so We Pray',
      'I know somewhere there’s something amazing',
      'And so We Pray',
      'I know somewhere we’ll feel no pain',
      'Until we make it to the end of the day',
      '',
      'I pray that love will',
      'Shelter us from our fears',
      'Oh I pray you trust to',
      'Let me wipe off your tears',
      'Confront all the pain that we feel inside',
      'With all the cards we been dealt in life',
      'Pray I – I – I speak my truth',
      'and keep my sisters alive',
      'So for the ones who parted seas (ah yeah)',
      'For the ones who’s following dreams (ah yeah)',
      'For the ones who opened doors (ah yeah)',
      'And allowed us to pass down keys (ah yeah)',
      'Pray that we speak with a tongue that is honest',
      'And that we understand how to be modest',
      'Pray when she looks at herself in the mirror',
      'She sees a queen',
      'She sees a goddess',
      '',
      'And so We Pray',
      'For someone to come and show me the way',
      'And so We Pray',
      'For some shelter and some records to play',
      'And so We Pray',
      'We’ll be singing Baraye',
      'Pray that we make it to the end of the day',
      'And so We Pray',
      'I know somewhere that heaven is waiting',
      'And so We Pray',
      'I know somewhere there’s something amazing',
      'And so We Pray',
      'I know somewhere we’ll feel no pain',
      'Until we make it to the end of the day, we pray',
      '',
      'On my knees',
      'I pray',
      'As I sleep and wake',
      'Cause inside my head is a frightening place',
      'Keep a smiling face',
      'Only by his grace',
      'Cause love’s more than I can take, yeah',
      '',
      'And so We Pray',
      'And so we pray – ay – ay',
      'And so We Pray',
      'And so we pray – ay – ay',
      'And so We Pray',
      'We’ll be singing Baraye',
      '‘til nobody’s in need',
      'And everybody can say',
      '',
      'La la la la la la la la (la la)',
      'La la la la la la la la (la la la la)',
      'La la la la la la la la (sing it to me)',
      'La la la la la',
      'We Pray',
      'We Pray',
      '',
      'I know somewhere that heaven is waiting (heaven is waiting)',
      'I know somewhere there’s something amazing (something amazing)',
      'Until we feel no pain',
      'We Pray',
      'We Pray',
      'We Pray',
    ],
    3: [
      'Jupiter named for a planet, wasn’t free to be',
      'To be exactly who she ought to be',
      'She saw in colours others couldn’t see',
      '',
      'Jupiter named for a planet',
      'Would pretend to be',
      'Somebody way less extraordinary',
      'Sometimes I wonder what is wrong with me?',
      'Am I bad am I wrong am I weird in the head?',
      '',
      'The only one awake and everyone’s in bed',
      'Still she followed the river where the river led',
      'Right up to heaven where the billboard read;',
      '',
      'i L❤VE WHO i LOVE',
      'Oh yeah i LOVE WHO i lL❤VE',
      'i LOVE WHO i LOVE,',
      'The message from above, is NEVER GIVE UP!!!',
      'Love who you love',
      '',
      'Jupiter longed to be herself or die',
      'I want to burst into a butterfly',
      'Am I bad am I wrong am I not ok?',
      'Speaking only words that a girl can’t say',
      'Still she followed the rain to where the rainbow',
      'lay',
      'All of the angels singing come and say',
      '',
      'I love who I love',
      'Oh yeah I love who I love',
      'I love who I love',
      'The message from above',
      'Is never give up',
      'Love who you love',
      '',
      'And It’s a battle for your song',
      'You had to hide away for so long',
      'When they say ‘your self is wrong,’',
      'The orchestra of rainbows play',
      'I love who I love',
      '',
      'Oh yeah I love who I love',
      'I love who I love',
      'I struggle with this stuff',
      'Now all I want to say is',
      '',
      'La La La La lay ay',
      'La La La La lay ay',
      'La La La La lay ay',
      'Oh I’m ok',
      'Oh I’m ok',
      'Hey hey hey!!!',
    ],
    4: [
      'We fell in love in the summer',
      'I remember baby',
      'We saw the sunshine too',
      'And we were born for each other',
      'Just remember baby',
      'Whatever we go through',
      '',
      'All the good feelings',
      'For one another',
      'As we danced to the radioAll the good good feelings',
      'We have for each other',
      'Don’t ever, ever let them go',
      'All the good good feelings',
      'Don’t ever let',
      'Don’t ever let them',
      'Don’t ever let them go no',
      'Don’t ever let',
      'Don’t ever let them',
      'All those good good feelings',
      'Don’t ever let',
      'Don’t ever let them',
      'Don’t ever forget those good feelings',
      'Don’t ever let them go',
      'We fell in love in the summer',
      'I remember baby',
      '',
      'We fell under the moon',
      'Ohh; we were born for each other',
      'I remember when I’m millions of miles from you',
      '',
      'All the good feelings',
      'For one another',
      'As we danced to the radio',
      'All the good good feelings',
      'We have for each other',
      'Don’t ever, ever let them go',
      '',
      'All those good good feelings',
      'Don’t ever let',
      'Don’t ever let them',
      'Don’t ever let them go no',
      'Don’t ever let',
      'Don’t ever let them',
      '',
      'All those good good feelings',
      'Don’t ever let',
      'Don’t ever let them',
      'Don’t ever forget',
      'Those good feelings',
      'Don’t ever let them go',
      'All the good good feelings',
      '',
      'La la la la',
      'La la la la la la la',
      '“hey the kids want to sing for you” spoken',
      'La la la la',
      'La la la la la la la',
      'La la la la',
      'La la la la la la la',
      'La la la la',
      'La la la la la la la',
      '',
      'Oh we’re going to make it through',
      '',
      'All the good good feelings',
      'Don’t ever let',
      'Don’t ever let them',
      'Don’t ever let them go no',
      'Don’t ever let',
      'Don’t ever let them',
      'All those good good feelings',
      'Don’t ever let',
      'Don’t ever let them',
      'Don’t ever forget those good feelings',
      'Don’t ever let them go',
      'All the good good feelings',
    ],
    5: [
      'As much as I could',
      'As much as I tried',
      'I just couldn’t seem to find the light',
      'it glows in your eyes',
      'everything that lives',
      'all the stars in the sky',
      'to all of us.',
      'No, don’t give up',
      'storms pass, love lasts, it all goes by so fast.',
      'when it looked like the sun',
      'wasn’t going to shine anymore',
      'God put a rainbow in the clouds',
      'God put a rainbow in the clouds',
    ],
  },
};

const currentSongLyrics = computed(() => {
  const a = selectedAlbumIndex.value;
  const s = selectedSongIndex.value;
  if (a === null || s === null) return [];
  const lines = lyricsData[a]?.[s] || [];
  // Return each non-empty line as its own rendered line
  return lines.filter(l => l.trim() !== '');
});

// Alphabet filter for SONGS tab
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const selectedLetter = ref('A');

// Songs starting with A
const songsLetterA = [
  { title: 'A HEAD FULL OF DREAMS', album: 'A HEAD FULL OF DREAMS' },
  { title: 'A HOPEFUL TRANSMISSION', album: 'MYLO XYLOTO' },
  { title: 'A L I E N S', album: 'KALEIDOSCOPE EP' },
  { title: 'A MESSAGE', album: 'X&Y' },
  { title: 'A RUSH OF BLOOD TO THE HEAD', album: 'A RUSH OF BLOOD TO THE HEAD' },
  { title: 'A SKY FULL OF STARS', album: 'GHOST STORIES' },
  { title: 'A SPELL A REBEL YELL', album: 'VOILET HILL' },
  { title: 'A WHISPER', album: 'A RUSH OF BLOOD TO THE HEAD' },
  { title: 'ADVENTURE OF A LIFETIME', album: 'A HEAD FULL OF DREAMS' },
  { title: 'AETERNA', album: 'MOON MUSIC' },
  { title: 'ALL I CAN THINK IS YOU', album: 'KALEIDOSCOPE EP' },
  { title: 'ALL MY LOVE', album: 'MOON MUSIC' },
  { title: 'ALL MY FRIENDS', album: 'A SKY FULL OF STARS EP' },
  { title: 'ALWAYS IN MY HEAD', album: 'GHOST STORIES LIVE 2014' },
  { title: 'AMAZING DAY', album: 'A HEAD FULL OF DREAMS' },
  { title: 'AMOR ARGENTINA', album: 'LIVE IN BUENOS AIRES' },
  { title: 'AMSTERDAM', album: 'A RUSH OF BLOOD TO THE HEAD' },
  { title: 'ANIMALS', album: 'CLOCKS' },
  { title: "ANOTHER'S ARMS", album: 'GHOST STORIES LIVE 2014' },
  { title: 'ARABESQUE', album: 'EVERYDAY LIFE' },
  { title: 'ARMY OF ONE', album: 'A HEAD FULL OF DREAMS' },
  { title: 'ATLAS', album: 'ATLAS' }
];

// Songs starting with B
const songsLetterB = [
  { title: 'BIGGER STRONGER', album: 'SAFETY EP & BLUE ROOM EP' },
  { title: 'BIRDS', album: 'A HEAD FULL OF DREAMS' },
  { title: 'BIUTYFUL', album: 'MUSIC OF THE SPHERES' },
  { title: 'BROKEN', album: 'EVERYDAY LIFE' },
  { title: 'BROTHERS & SISTERS', album: 'BROTHER & SISTERS, TROUBLE' }
];

// Songs starting with C
const songsLetterC = [
  { title: 'CAREFUL WHERE YOU STAND', album: 'SHIVER' },
  { title: 'CEMETERIES OF LONDON', album: 'VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS' },
  { title: 'CHAMPION OF THE WORLD', album: 'EVERYDAY LIFE' },
  { title: 'CHARLIE BROWN', album: 'MYLO XYLOTO, CHARLIE BROWN, LIVE 2012' },
  { title: 'CHRISTMAS LIGHTS', album: 'MYLO XYLOTO, CHARLIE BROWN, LIVE 2012' },
  { title: 'CHURCH', album: 'EVERYDAY LIFE' },
  { title: 'CLOCKS', album: 'A RUSH OF BLOOD TO THE HEAD, LIVE 2003, LIVE 2012, CLOCKS' },
  { title: 'COLORATURA', album: 'MUSIC OF THE SPHERES' },
  { title: 'COLOUR SPECTRUM', album: 'A HEAD FULL OF DREAMS' },
  { title: 'CRESTS OF WAVES', album: 'CLOCKS' },
  { title: 'CRY CRY CRY', album: 'EVERYDAY LIFE' }
];

// Songs starting with D
const songsLetterD = [
  { title: 'DADDY', album: 'EVERYDAY LIFE' },
  { title: 'DAYLIGHT', album: 'A RUSH OF BLOOD TO THE HEAD' },
  { title: 'DE MuSICA LIGERA', album: 'LIVE IN BUENOS AIRES' },
  { title: 'DEATH AND ALL HIS FRIENDS', album: 'VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS' },
  { title: 'DEATH WILL NEVER CONQUER', album: 'VIVA LA VIDA' },
  { title: "DON'T LET IT BREAK YOUR HEART", album: 'MYLO XYLOTO' },
  { title: "DON'T PANIC", album: 'PARACHUTES' }
];

// Songs starting with E
const songsLetterE = [
  { title: 'EASY TO PLEASE', album: 'BROTHERS & SISTERS' },
  { title: 'Eko', album: 'EVERYDAY LIFE' },
  { title: 'END CREDITS', album: 'LIVE IN BUENOS AIRES' },
  { title: 'EVERGLOW', album: 'A HEAD FULL OF DREAMS' },
  { title: 'EVERY TEARDROP IS A WATERFALL', album: 'MYLO XYLOTO' },
  { title: 'EVERYDAY LIFE', album: 'EVERYDAY LIFE' },
  { title: "EVERYTHING'S NOT LOST", album: 'PARACHUTES' }
];

// Songs starting with F
const songsLetterF = [
  { title: 'feelslikeimfallinginlove', album: 'MOON MUSIC' },
  { title: 'FIX YOU', album: 'X&Y' },
  { title: 'FIX YOU (VIDEO)', album: 'X&Y' },
  { title: 'FOR YOU', album: 'SHIVER' },
  { title: 'FUN', album: 'A HEAD FULL OF DREAMS' }
];

// Songs starting with G
const songsLetterG = [
  { title: 'GHOST STORY', album: 'A SKY FULL OF STARS EP' },
  { title: 'GLASS OF WATER', album: 'GLASS OF WATER, GLASS OF WATER' },
  { title: 'GOD PUT A SMILE UPON YOUR FACE', album: 'A RUSH OF BLOOD TO THE HEAD' },
  { title: 'GOOD FEELiNGS', album: 'MOON MUSIC' },
  { title: 'GRAVITY', album: 'TALK' },
  { title: 'GREEN EYES', album: 'A RUSH BLOOD TO THE HEAD' },
  { title: 'GUNS', album: 'EVERYDAY LIFE' }
];

// Songs starting with H
const songsLetterH = [
  { title: 'HELP IS ROUND THE CORNER', album: 'YELLOW' },
  { title: 'HIGH SPEED', album: 'PARACHUTES' },
  { title: 'HIGHER POWER', album: 'MUSIC OF THE SPHERES' },
  { title: "HOW YOU SEE THE WORLD - LIVE AT EARL'S COURT", album: 'THE HARDEST PART' },
  { title: 'HUMANKIND', album: 'MUSIC OF THE SPHERES' },
  { title: 'HURTS LIKE HEAVEN', album: 'MYLO XYLOTO' },
  { title: 'HYMN FOR THE WEEKEND', album: 'A HEAD FULL OF DREAMS' },
  { title: 'HYNOTISED', album: 'KALEIDOSOPE EP' }
];

// Songs starting with I
const songsLetterI = [
  { title: 'I BLOOM BLAUM', album: 'IN MY PLACE' },
  { title: 'I RAN AWAY', album: 'THE SCIENTIST' },
  { title: 'iAAM', album: 'MOON MUSIC' },
  { title: 'IN MY PLACE', album: 'A RUSH OF BLOOD TO THE HEAD' },
  { title: 'INK', album: 'GHOST STORIES LIVE 2014' },
  { title: 'INVISIBLE MAN REMIX', album: 'MYLO XYLOTO' }
];

//Songs starting with J
const songsLetterJ = [
  {title: 'JUPiTER', album: 'MOON MUSIC'}

];

// Songs starting with K
const songsLetterK = [
  { title: 'KALEIDOSCOPE', album: 'A HEAD FULL OF DREAMS' }
];

// Songs starting with L
const songsLetterL = [
  { title: 'LET SOMEBODY GO', album: 'MUSIC OF THE SPHERES' },
  { title: 'LIFE IN TECHNICOLOR', album: 'VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS' },
  { title: 'LIFE IN TECHNICOLOR II', album: 'LIFE IN TECHNICOLOUR II' },
  { title: 'LIFE IN TECHNICOLOR II (LIVE @ THE 02, LONDON)', album: 'LIFE IN TECHNICOLOUR II' },
  { title: 'LIFE IS FOR LIVING', album: 'PARACHUTES' },
  { title: 'LOST!', album: 'VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS' },
  { title: 'LOST+', album: "PROSPEKT'S MARCH" },
  { title: 'LOST?', album: "PROSPEKT'S MARCH" },
  { title: 'LOST@', album: "PROSPEKT'S MARCH" },
  { title: 'LOVER IN JAPAN (OSAKA SUN MIX)', album: "PROSPEKT'S MARCH" },
  { title: 'LOVERS IN JAPAN / REIGN OF LOVE', album: 'VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS' },
  { title: 'LOW', album: 'X&Y' }
];

// Songs starting with M
const songsLetterM = [
  { title: 'M.M.I.X', album: 'MYLO XYLOTO' },
  { title: 'MAGIC', album: 'MAGIC, MAGIC, MAGIC' },
  { title: 'MAJOR MINUS', album: 'MYLO XYLOTO' },
  { title: 'MIDNIGHT', album: 'GHOST STORIES LIVE 2014' },
  { title: 'MIRACLES', album: 'MIRACLES' },
  { title: 'MIRACLES (SOMEONE SPECIAL) - COLDPLAY & BIG SEAN', album: 'KALEIDOSCOPE EP' },
  { title: 'MOON MUSIC', album: 'MOON MUSIC' },
  { title: 'MOSES', album: 'LIVE 2003' },
  { title: 'MOVING TO MARS', album: 'EVERY TEARDROP IS A WATERFALL EP' },
  { title: 'MURDER', album: 'GOD PUT A SMILE UPON YOUR FACE' },
  { title: 'MY UNIVERSE', album: 'MUSIC OF THE SPHERES' },
  { title: 'MYLO XYLOTO', album: 'MYLO XYLOTO' }
];

// Songs starting with N
const songsLetterN = [
  { title: 'NO MORE KEEPING MY FEET ON THE GROUND', album: 'SAFETY EP' },
  { title: "NOW MY FEET WON'T TOUCH THE GROUND", album: "PROSPEKT'S MARCH" }
];

// Songs starting with O
const songsLetterO = [
  { title: 'O', album: 'GHOST STORIES' },
  { title: 'O (REPRISE)', album: 'A SKY FULL OF STARS EP' },
  { title: 'OCEANS', album: 'GHOST STORIES' },
  { title: 'OLD FRIENDS', album: 'EVERYDAY LIFE' },
  { title: 'ONE  I LOVE', album: 'IN MY PLACE, LIVE IN 2003' },
  { title: 'ONE WORLD', album: 'MOON MUSIC' },
  { title: 'ONLY SUPERSTITION', album: 'BROTHERS & SISTERS' },
  { title: 'ORPHANS', album: 'EVERYDAY LIFE' }
];
const songsLetterP = [
  { title: 'PARACHUTES', album: 'PARACHUTES' },
  { title: 'PARADISE', album: 'MYLO XYLOTO, PARADISE' },
  { title: 'PEOPLE OF THE PRIDE', album: 'MUSIC OF THE SPHERES' },
  { title: 'POLITIK', album: 'A RUSH OF BLOOD TO THE HEAD' },
  { title: 'POSTCARDS FROM FAR AWAY', album: "PROSPEKT'S MARCH" },
  { title: 'POUR ME', album: 'FIX YOU' },
  { title: 'PRINCESS OF CHINA', album: 'MYLO XYLOTO' },
  { title: 'PROOF', album: 'SPEED OF SOUND' },
  { title: "PROSPEKT'S MARCH / POPPYFIELDS", album: "PROSPEKT'S MARCH" }
];

const songsLetterR = [
  { title: 'RAINY DAY', album: "PROSPEKT'S MARCH" }
];

const songsLetterS = [
  { title: 'SEE YOU SOON', album: 'BLUE ROOM EP' },
  { title: 'SHIVER', album: 'PARACHUTES' },
  { title: "SHIVER (JO WHILEY'S LUNCHTIME SOCIAL)", album: 'PARACHUTES' },
  { title: 'SLEEPING SUN', album: 'TALK' },
  { title: 'SOMETHING JUSTLIKE THIS', album: 'KALEIDOSCOPE EP' },
  { title: 'SOMETHING JUST LIKE THIS (TOKYO REMIX) - COLDPLAY & THE CHAINSMOKERS', album: 'SOMETHING JUST LIKE THIS' },
  { title: 'بنی آدم', album: 'EVERYDAY LIFE' },
  { title: 'SPARKS', album: 'PARACHUTES' },
  { title: 'SPEED OF SOUND', album: 'X&Y' },
  { title: 'SPIES', album: 'PARACHUTES' },
  { title: 'SQUARE ONE', album: 'X&Y' },
  { title: 'STRAWBERRY SWING', album: 'VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS' },
  { title: 'SUCH A RUSH', album: 'SAFETY EP' },
  { title: 'SUNRISE', album: 'EVERYDAY LIFE' },
  { title: 'SWALLOWED IN THE SEA', album: 'X&Y' }
];

const songsLetterT = [
  { title: 'TALK', album: 'X&Y' },
  { title: 'THE GOLDRUSH', album: 'LIFE IN TECHNICOLOUR II' },
  { title: 'THE HARDEST PART', album: 'X&Y' },
  { title: 'THE HARDEST PART / POSTCARDS FROM FAR AWAY', album: 'X&Y' },
  { title: 'THE SCIENTIST', album: 'A RUSH OF BLOOD TO THE HEAD' },
  { title: 'THE WORLD TURNED UPSIDE DOWN', album: 'X&Y' },
  { title: "THINGS I DONT UNDERSTAND", album: 'SPEED OF SOUND' },
  { title: "'Til Kindom Come", album: 'X&Y' },
  { title: 'TROUBLE', album: 'PARACHUTES' },
  { title: 'TROUBLE IN TOWN', album: 'EVERYDAY LIFE' },
  { title: 'TRUE LOVE', album: 'TRUE LOVE' },
  { title: 'TWISTED LOGIC', album: 'X&Y' }
];

const songsLetterU = [
  { title: 'U.F.O', album: 'MYLO XYLOTO, UP WITH THE BIRDS' },
  { title: 'UP IN THE FLAMES', album: 'MYLO XYLOTO, LIVE 2012' },
  { title: 'UP WITH THE BIRDS', album: 'MYLO XYLOTO, UP WITH THE BIRDS' },
  { title: 'UP&UP', album: 'A HEAD FULL OF DREAMS' },
  { title: 'US AGAINST THE WORLD', album: 'MYLO XYLOTO, LIVE 2012' }
];

const songsLetterV = [
  { title: 'VIOLET HILL', album: 'VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS' },
  { title: 'VIVA LA VIDA', album: 'VIVA LA VID OR DEATH AND ALL HIS FREINDS, VIVA LA VIDA, LIVE 2012, LEFTRIGHTLEFTRIGHTLEFT' }
];

const songsLetterW = [
  { title: 'WARNING SIGN', album: 'A RSH OF BLOOD TO THE HEAD' },
  { title: 'WE NEVER CHANGE', album: 'PARACHUTES' },
  { title: 'WE PRAY', album: 'MOON MUSIC' },
  { title: 'WHAT IF', album: 'X&Y' },
  { title: 'WHEN I NEED A FRIEND', album: 'EVERYDAY LIFE' },
  { title: 'WHITE SHADOWS', album: 'X&Y' },
  { title: 'WOTW / POTP', album: 'EVERYDAY LIFE' }
];

const songsLetterX = [
  { title: 'X&Y', album: 'X&Y' }
];

const songsLetterY = [
  { title: 'YELLOW', album: 'PARACHUTES' },
  { title: 'YES', album: 'VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS' }
];

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

.album-detail-tab {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.album-detail-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.album-detail-date {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
}

.album-detail-title {
  color: #fff;
  font-size: 1.6rem;
  font-weight: 800;
}

.album-detail-image {
  width: 500px;
  height: 500px;
  object-fit: contain;
  border-radius: 8px;
}

/* Track grid under Moon Music detail */
.track-grid {
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 16px;
  gap: 8px;
}

.track-row {
  display: grid;
  grid-template-columns: 60px 1fr 80px;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: none;
  border-radius: 0;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.track-row:hover {
  background: transparent;
  transform: translateY(-1px);
}

.track-col {
  color: #fff;
}

.track-num {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
  letter-spacing: 1px;
}

.track-title {
  font-weight: 700;
}

.track-lyrics {
  text-align: right;
  color: #fd5f04;
  font-weight: 700;
}

/* Lyrics tab placeholder styling */
.lyrics-tab {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
}

.lyrics-layout {
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
  height: calc(100vh - 200px);
  max-height: calc(100vh - 200px);
}

.lyrics-left {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 0;
  text-align: center;
}

.lyrics-right {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.lyrics-header {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 800;
  text-align: center;
}

.lyrics-subheader {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
}

.lyrics-placeholder {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.lyrics-content p {
  text-align: justify;
  margin: 0 0 12px 0;
}

.lyrics-cover {
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 10px;
}

.lyric-line {
  color: rgba(255, 255, 255, 0.95);
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 6px;
  text-align: left;
  white-space: pre-wrap;
}

.singles-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  width: calc(100% - 140px);
  max-width: 1100px;
  padding: 80px 20px 20px;
  margin-left: 140px;
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

/* Songs Grid Styles */
.songs-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 557.5px;
  max-width: 557.5px;
  padding: 80px 20px 20px;
  margin-left: auto;
  margin-right: 20px;
}

.song-cell {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 15px 25px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.song-cell.song-header {
  background: rgba(253, 95, 4, 0.3);
  border-color: rgba(253, 95, 4, 0.6);
  cursor: default;
  font-weight: 700;
}

.song-cell.song-header:hover {
  background: rgba(253, 95, 4, 0.3);
  border-color: rgba(253, 95, 4, 0.6);
  transform: none;
  box-shadow: none;
}

.song-cell:hover {
  background: rgba(253, 95, 4, 0.2);
  border-color: rgba(253, 95, 4, 0.5);
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.song-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;
  align-items: center;
}

.song-title-col {
  font-size: 0.95rem;
  color: #fd5f04;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.song-album-col {
  font-size: 0.95rem;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

/* Responsive styles */
@media (max-width: 768px) {
  .music-section {
    padding: 30px 0;
  }

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
    margin-left: 0;
    max-width: 100%;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 80px 15px 15px;
    margin-left: 0;
    width: 100%;
    max-width: 100%;
  }
  
  .single-date {
    font-size: 0.6rem;
  }
  
  .single-title {
    font-size: 0.7rem;
  }

  .alphabet-filter {
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 20px;
    gap: 4px;
    padding: 8px 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .letter-button {
    width: 28px;
    height: 28px;
    font-size: 0.75rem;
  }

  .songs-grid {
    width: 90%;
    padding: 80px 15px 20px;
    margin-left: 0;
    margin-right: 0;
  }

  .song-content {
    gap: 15px;
  }

  .song-title-col,
  .song-album-col {
    font-size: 0.85rem;
  }
}

@media (max-width: 600px) {
  .music-section {
    padding: 20px 0;
  }

  .music-content {
    padding: 10px;
  }
  
  .tab-container {
    position: relative;
    top: 0;
    left: 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin-bottom: 15px;
    padding: 10px;
  }
  
  .tab-button {
    padding: 8px 14px;
  }
  
  .tab-text {
    font-size: 0.75rem;
  }
  
  .tab-circle {
    width: 10px;
    height: 10px;
  }
  
  .albums-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 10px;
    margin-left: 0;
    max-width: 100%;
  }

  .album-cell {
    padding: 12px;
  }
  
  .album-date {
    font-size: 0.65rem;
  }
  
  .album-title {
    font-size: 0.85rem;
  }
  
  .singles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 80px 10px 10px;
    margin-left: 0;
    width: 100%;
    max-width: 100%;
  }

  .single-cell {
    padding: 10px;
  }
  
  .single-date {
    font-size: 0.6rem;
  }
  
  .single-title {
    font-size: 0.7rem;
  }

  .alphabet-filter {
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 15px;
    gap: 3px;
    padding: 8px 10px;
    flex-wrap: wrap;
  }

  .letter-button {
    width: 26px;
    height: 26px;
    font-size: 0.7rem;
  }

  .songs-grid {
    width: 100%;
    padding: 80px 10px 10px;
    margin-left: 0;
    margin-right: 0;
  }

  .song-cell {
    padding: 12px 15px;
  }

  .song-content {
    gap: 10px;
    grid-template-columns: 1fr;
  }

  .song-title-col,
  .song-album-col {
    font-size: 0.8rem;
  }

  .song-album-col {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.85);
  }
}

@media (max-width: 480px) {
  .music-section {
    padding: 15px 0;
  }
  
  .tab-container {
    gap: 6px;
    padding: 8px;
  }
  
  .tab-button {
    padding: 6px 12px;
  }
  
  .tab-text {
    font-size: 0.7rem;
  }
  
  .tab-circle {
    width: 8px;
    height: 8px;
  }
  
  .albums-grid {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 8px;
  }

  .album-cell {
    padding: 10px;
  }
  
  .album-date {
    font-size: 0.6rem;
  }
  
  .album-title {
    font-size: 0.8rem;
  }
  
  .singles-grid {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 80px 8px 8px;
  }

  .single-cell {
    padding: 10px;
  }
  
  .single-date {
    font-size: 0.58rem;
  }
  
  .single-title {
    font-size: 0.68rem;
  }

  .alphabet-filter {
    gap: 2px;
    padding: 6px 8px;
  }

  .letter-button {
    width: 24px;
    height: 24px;
    font-size: 0.65rem;
  }

  .songs-grid {
    padding: 80px 8px 8px;
    
  }

  .song-cell {
    padding: 10px 12px;
  }

  .song-title-col {
    font-size: 0.75rem;
  }

  .song-album-col {
    font-size: 0.7rem;
  }
}

@media (max-width: 400px) {
  .tab-button {
    padding: 5px 10px;
  }

  .tab-text {
    font-size: 0.65rem;
  }

  .album-title {
    font-size: 0.75rem;
  }

  .single-title {
    font-size: 0.65rem;
  }

  .letter-button {
    width: 22px;
    height: 22px;
    font-size: 0.6rem;
  }

  .song-title-col {
    font-size: 0.7rem;
  }

  .song-album-col {
    font-size: 0.65rem;
  }
}
</style>

