<template>
  <div class="creators">
    <div class="creators-left">
      <span class="title">FOR CREATORS</span>
      <img
        class="creators-image"
        src="@/assets/images/gold-black-metavault.png"
        alt="metavault"
      />
    </div>
    <div class="creators-right">
      <div class="card" data-aos="flip-left" data-aos-duration="1500">
        <span class="card-title">Creator vaults</span>
        <span class="card-description">
          Vault are creators private area free to fill with any content they
          wish, in the form of NFTs.
        </span>
      </div>
      <div class="card" data-aos="flip-left" data-aos-duration="1500">
        <span class="card-title">Vault Passes</span>
        <span class="card-description">
          Creator Vault can only be accessed with a Vault Pass - which itself is
          an NFT
        </span>
      </div>
      <div class="card" data-aos="flip-left" data-aos-duration="1500">
        <span class="card-title">Control And Ownership</span>
        <span class="card-description">
          Influencers truly own their content, giving them greater control over
          it.
        </span>
      </div>
      <div class="card" data-aos="flip-left" data-aos-duration="1500">
        <span class="card-title">Royalties</span>
        <span class="card-description">
          Creators earns royalties on every vault pass sold on the secondary
          market
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.creators {
  display: flex;
  align-items: center
}

.creators-left {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
}

.description {
  text-align: center;
}

.creators-image {
  max-width: 250px;
  width: 100%;
}

.creators-right {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  gap: 40px;
}

.card {
  flex-grow: 1;
  flex: 1 0 300px;
}

@media (max-width: 1230px) {
  .creators {
    flex-direction: column;
  }

  .creators-left {
    margin: 0 auto 36px auto;
    width: 100%;
  }

  .creators-right {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .creators-image {
    max-width: 200px;
  }

  .title {
    font-size: 30px;
    line-height: 34px;
  }

  .card {
    flex-grow: 1;
    flex: 1 0 250px;
  }
}
</style>
