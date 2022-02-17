<template>
  <div class="collectors">
    <div class="collectors-left">
      <span class="title">FOR COLLECTORS</span>
      <img
        class="collectors-image"
        src="@/assets/images/collectors.png"
        alt="metavault"
      />
    </div>
    <div class="collectors-right">
      <div class="card" data-aos="flip-left" data-aos-duration="1500">
        <span class="card-title">Exclusive access</span>
        <span class="card-description">
          Owning a creator vault pass gives you exclusive access to your
          favourite creators.
        </span>
      </div>
      <div class="card" data-aos="flip-left" data-aos-duration="1500">
        <span class="card-title">Lifetime value </span>
        <span class="card-description">
          Unlike recurring a subscription, a vault pass gives you lifetime
          access to a creator’s vault.
        </span>
      </div>
      <div class="card" data-aos="flip-left" data-aos-duration="1500">
        <span class="card-title">Investment gateway</span>
        <span class="card-description">
          The vault pass is an asset and store of value. It’s your investment
          gaterway to your favorite creators. You can decide to keep it and
          re-sell it when you want.
        </span>
      </div>
      <div class="card" data-aos="flip-left" data-aos-duration="1500">
        <span class="card-title">Display your collection</span>
        <span class="card-description">
          Discover, collect and curate your digital possessions.Your vault pass
          collection is the new way to build your brand through what you love.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.collectors {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.collectors-left {
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

.collectors-image {
  max-width: 250px;
  width: 100%;
}

.collectors-right {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  gap: 40px;
}

.card {
  flex: 1 0 300px;
}

@media (max-width: 1230px) {
  .collectors {
    flex-direction: column;
  }

  .collectors-left {
    margin: 0 auto 36px auto;
    width: 100%;
  }

  .collectors-right {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .collectors-image {
    max-width: 200px;
  }

  .title {
    font-size: 30px;
    line-height: 34px;
  }

  .card {
    flex: 1 0 260px;
  }
}
</style>
