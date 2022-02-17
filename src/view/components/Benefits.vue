<template>
  <div class="benefits">
    <span class="benefits-title">
      Benefits of being an nft  holder
    </span>
    <div class="benefits-table">
      <div class="row">
        <span class="row-title">Airdrop</span>
        <span class="row-description">Eligible for the airdrop</span>
      </div>
      <div class="row">
        <span class="row-title">Presale access</span>
        <span class="row-description">NFT holders can buy Metavault tokens before the public launch at a lower price!</span>
      </div>
      <div class="row">
        <span class="row-title">DAO - Voting rights and governance</span>
        <span class="row-description">Get access to Metavault DAO and get a say in Metavault’s future decisions.</span>
      </div>
      <div class="row">
        <span class="row-title">App features</span>
        <span class="row-description">Gain access to early features of Metavault. Before everyone else!</span>
      </div>
      <div class="row">
        <span class="row-title">Better rewards</span>
        <span class="row-description">Enjoy better stacking rewards - just by holding the NFT in your wallet!</span>
      </div>
      <div class="row">
        <span class="row-title">Access to a private community</span>
        <span class="row-description">Connect with like-minded individuals and get tips and tricks from the community.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.benefits-title {
  text-align: center;
  display: block;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 60px;
}

.benefits-table {
  max-width: 80%;
  width: 100%;
  margin: 0 auto;
}

.row {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr;
  align-items: baseline;
  margin-bottom: 20px;
}

.row-title {
  display: block;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  max-width: 450px;
  width: 100%;
  margin-right: 20px;
}

.row-description {
  font-size: 20px;
  line-height: 28px;
  color: #868282;
}

@media (max-width: 768px) {
  .benefits-table {
    max-width: 100%;
  }

  .row {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .benefits-title {
    margin-bottom: 40px;
  }
}
</style>
