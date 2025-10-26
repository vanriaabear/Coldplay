<template>
  <section class="concert-section" id="concerts">
    <div class="concert-content">
      <h2>Concert History</h2>
      <!-- Concert history content will go here -->
      <div class="coming-soon">
        <p>Stay tuned for upcoming tour dates and past concerts!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here
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