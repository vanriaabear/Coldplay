<template>
  <section class="concert-section" id="concerts">
    <div class="concert-content">
      <h2>Concert History</h2>
      
      <!-- Year Tabs -->
      <div class="year-tabs">
        <button 
          v-for="year in years" 
          :key="year"
          @click="activeYear = year"
          :class="{ 'active': activeYear === year }"
        >
          {{ year }}
        </button>
      </div>

      <!-- Concert Grid -->
      <div class="concert-grid">
        <div class="grid-header">
          <div class="grid-cell">Date</div>
          <div class="grid-cell">Concert</div>
          <div class="grid-cell">Venue</div>
          <div class="grid-cell">Location</div>
        </div>
        
        <div 
          v-for="(concert, index) in filteredConcerts" 
          :key="index"
          class="concert-row"
        >
          <div class="grid-cell">{{ concert.date }}</div>
          <div class="grid-cell">{{ concert.title }}</div>
          <div class="grid-cell">{{ concert.venue }}</div>
          <div class="grid-cell">{{ concert.location }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeYear = ref('2025');
const years = ['2025', '2024', '2023'];

const concerts = {
  '2025': [
    {
      date: 'September 12, 2025',
      title: 'Coldplay / Elyanna / Chloe Qisha / Simón Bolívar Symphony Orchestra of Venezuela',
      venue: 'Wembley Stadium',
      location: 'London, England, United Kingdom'
    },
    {
      date: 'September 6, 2025',
      title: 'Coldplay / Tems / Elyanna / Gustavo Dudamel and The Simon Bolivar Symphony Orchestra of Venezuela',
      venue: 'Wembley Stadium',
      location: 'London, England, United Kingdom'
    },
    {
      date: 'August 18, 2025',
      title: 'Coldplay / Chiedu Oraka',
      venue: 'Sewell Group Craven Park Stadium',
      location: 'Hull, England, United Kingdom'
    },
    {
      date: 'July 27, 2025',
      title: 'Coldplay / Ayra Starr / Elyanna / TINI',
      venue: 'Hard Rock Stadium',
      location: 'Miami Gardens, Florida, United States'
    },
    {
      date: 'June 14, 2025',
      title: 'Coldplay / Willow Smith / Elyanna',
      venue: 'Sun Bowl Stadium, University of Texas at El Paso',
      location: 'El Paso, Texas, United States'
    }
  ],
  '2024': [
    {
      date: 'December 7, 2024',
      title: "Capital's Jingle Bell Ball",
      venue: 'The O2',
      location: 'London, England, United Kingdom'
    },
    {
      date: 'November 9, 2024',
      title: 'Coldplay / Emmanuel Kelly / Ayra Starr / Shone',
      venue: 'Accor Stadium',
      location: 'Sydney, New South Wales, Australia'
    },
    {
      date: 'October 6, 2024',
      title: 'Coldplay',
      venue: 'Music Hall of Williamsburg',
      location: 'New York, New York, United States'
    },
    {
      date: 'September 1, 2024',
      title: 'Coldplay / Maggie Rogers / Aslan / Aby Coulibaly',
      venue: 'Croke Park',
      location: 'Dublin, Leinster, Ireland'
    },
    {
      date: 'August 17, 2024',
      title: 'Coldplay / Maggie Rogers / Wilhelmie',
      venue: 'Olympiastadion',
      location: 'Munich, Bavaria, Germany'
    }
  ],
  '2023': [
    {
      date: 'July 15, 2023',
      title: 'Coldplay / Griff / Zoe Tauran',
      venue: 'Johan Cruyff Arena',
      location: 'Amsterdam, North Holland, Netherlands'
    },
    {
      date: 'June 21, 2023',
      title: 'Coldplay / CHVRCHES / Laila Al habash',
      venue: 'Stadio Diego Armando Maradona',
      location: 'Naples, Campania, Italy'
    },
    {
      date: 'March 21, 2023',
      title: 'Coldplay / CHVRVHES / Clara x Sofia',
      venue: 'Estádio Major Antônio Couto Pereira',
      location: 'Curitiba, Parana, Brazil'
    },
    {
      date: 'February 4, 2023',
      title: 'Coldplay',
      venue: 'Studio 8H, NBC Studios, 30 Rockefeller Plaza',
      location: 'New York, New York, United States'
    },
    {
      date: 'January 26, 2023',
      title: 'Coldplay',
      venue: 'Jimmy Kimmel Live!',
      location: 'Los Angeles, California, United States'
    }
  ]
};

const filteredConcerts = computed(() => {
  return concerts[activeYear.value] || [];
});
</script>

<style scoped>
.concert-section {
  width: 100vw;
  min-height: 100vh;
  background-image: url('/Coldplay/images/concertbg.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  padding: 2rem 0;
  overflow-x: hidden;
}

.year-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.year-tabs button {
  padding: 0.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.year-tabs button:hover {
  background: rgba(253, 95, 4, 0.5);
  transform: translateY(-2px);
}

.year-tabs button.active {
  background: rgba(253, 95, 4, 0.8);
  border-color: #fd5f04;
  box-shadow: 0 0 15px rgba(253, 95, 4, 0.5);
}

.concert-grid {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.grid-header {
  display: grid;
  grid-template-columns: 1.2fr 2fr 1.5fr 1.3fr;
  background: rgba(253, 95, 4, 0.6);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.concert-row {
  display: grid;
  grid-template-columns: 1.2fr 2fr 1.5fr 1.3fr;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.concert-row:last-child {
  border-bottom: none;
}

.concert-row:hover {
  background: rgba(255, 255, 255, 0.05);
}

.grid-cell {
  padding: 1rem;
  text-align: left;
  display: flex;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.95rem;
}

.grid-cell:last-child {
  border-right: none;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .grid-header,
  .concert-row {
    grid-template-columns: 1.2fr 2fr 1.5fr 1.3fr;
  }
}

@media (max-width: 768px) {
  .concert-grid {
    width: 95%;
  }
  
  .grid-header {
    display: none;
  }
  
  .concert-row {
    grid-template-columns: 1fr;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 1rem 0;
  }
  
  .grid-cell {
    padding: 0.5rem 1rem;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .grid-cell:last-child {
    border-bottom: none;
  }
  
  .grid-cell::before {
    content: attr(data-label);
    font-weight: 600;
    margin-right: 0.5rem;
    color: #fd5f04;
    min-width: 80px;
    display: inline-block;
  }
}

.concert-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.concert-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  font-size: 3.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.coming-soon {
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  backdrop-filter: blur(5px);
}

.coming-soon p {
  font-size: 1.5rem;
  margin: 0;
  color: #fff;
}

/* Responsive styles */
@media (max-width: 768px) {
  h2 {
    font-size: 2.5rem;
  }
  
  .coming-soon p {
    font-size: 1.2rem;
  }
  
  .concert-content {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 2rem;
  }
  
  .coming-soon p {
    font-size: 1rem;
  }
}
</style>