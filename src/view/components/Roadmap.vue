<template>
  <div class="roadmap" id="roadmap">
    <div class="roadmap-header">
      <span class="roadmap-title">Roadmap</span>
      <div class="roadmap-description">
        Our Roadmap for Metavault Mass Adoption
      </div>
    </div>
    <div class="roadmap-cards">
      <div class="card" data-aos="fade-right" data-aos-offset="500">
        <span class="card-title">ENGAGE - Q1 2022</span>
        <span class="card-description">Awareness, NFT and Community</span>
        <ul class="card-list">
          <li class="card-item checked">
            <span>Build partnership & Rally influencers to the project</span>
          </li>
          <li class="card-item checked">
            <span>Build discord community</span>
          </li>
          <li class="card-item checked">
            <span>Raise awareness on social media, press release, AMA</span>
          </li>
          <li class="card-item" style="padding-left: 36px">
            <span>Launch Metavault NFT collection</span>
          </li>
        </ul>
      </div>
      <div class="card" data-aos="fade-right" data-aos-delay="200" data-aos-offset="500">
        <span class="card-title">LAUNCH - Q2 2022</span>
        <span class="card-description">Token Release and app Launch</span>
        <ul class="card-list">
          <li class="card-item">
            <span>Aidrop $MEVA token for NFT holders</span>
          </li>
          <li class="card-item">
            <span>Private presale of the token for NFT holders Only</span>
          </li>
          <li class="card-item">
            <span>IDO $MEVA token</span>
          </li>
          <li class="card-item">
            <span>Release metavault webapp</span>
          </li>
        </ul>
      </div>
      <div class="card" data-aos="fade-right" data-aos-delay="400" data-aos-offset="500">
        <span class="card-title">SCALE - Q3 2022</span>
        <span class="card-description">App advanced features and mass Adoption</span>
        <ul class="card-list">
          <li class="card-item">
            <span>Launch IOS and Android app</span>
          </li>
          <li class="card-item">
            <span>Credit-card on ramp to buy token on app </span>
          </li>
          <li class="card-item">
            <span>Vault ticket marketplace, auction and app advanced features</span>
          </li>
          <li class="card-item">
            <span>Rally Brand ambassador</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.roadmap-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, max-content));
  justify-content: center;
  gap: 40px;
}

.card {
  padding-bottom: 180px;
  flex: 1 0 300px;
}


.card-title {
  margin-bottom: 20px;
  text-align: center;
}

.card-description {
  display: block;
  padding: 0 20px;
  text-align: center;
  margin-bottom: 20px;
  height: 56px;
}

.card-item {
  display: flex;
  align-items: baseline;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 16px;
}

.card-item span {
  display: flex;
  align-items: flex-start;
}

.card-item.checked ::before {
  display: inline-block;
  content: url('../../assets/images/check-mark.svg');
  width: 28px;
  min-width: 28px;
  height: 28px;
  margin-right: 8px;
}

.roadmap-header {
  margin-bottom: 40px;
  text-align: center;;
}


.roadmap-title {
  display: block;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  margin-bottom: 18px;
}

.roadmap-description {
  display: block;
  font-size: 22px;
  line-height: 28px;
}

@media (max-width: 768px) {
  .card {
    padding-bottom: 20px;
    flex: 1 0 260px;
  }

  .roadmap-cards {
    grid-template-columns: repeat(auto-fit, minmax(240px, max-content));
  }
}
</style>
