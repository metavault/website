<template>
  <div class="featured" id="featured">
    <span class="title">Featured on:</span>
    <ul class="featured-list">
      <li class="featured-item">
        <img
          :src="require('@/assets/images/cryptonaute.png')"
          alt="cryptonaute"
          class="cryptonaute"
        />
      </li>
      <li class="featured-item">
        <img
          :src="require('@/assets/images/inside-bitcoins.png')"
          alt="inside-bitcoins"
          class="inside-bitcoins"
        />
      </li>
      <li class="featured-item">
        <img
          :src="require('@/assets/images/news-daily.png')"
          alt="news-daily"
          class="news-daily"
        />
      </li>
      <li class="featured-item">
        <img
          :src="require('@/assets/images/nft-evening.png')"
          alt="nft-evening"
          class="nft-evening"
        />
      </li>
      <li class="featured-item">
        <img
          :src="require('@/assets/images/nft-calendar.png')"
          alt="nft-calendar"
          class="nft-calendar"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.featured {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.featured-list {
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  align-items: center;
}

.featured-list::before, .featured-list::after {
  content: '';
  margin: auto;
}

.featured-list::-webkit-scrollbar {
  display: none;
}

.featured-item {
  margin-right: 20px;
}

.featured-item:last-child {
  margin-right: 20px;
}

.title {
  display: block;
  margin-bottom: 18px;
  font-size: 30px;
  font-weight: 700;
  line-height: 34px;
}

.cryptonaute {
  min-width: 268px;;
}

.inside-bitcoins {
  min-width: 176px;
}

.news-daily {
  min-width: 169px;
}

.nft-evening {
  min-width: 286px;
}

.nft-calendar {
  min-width: 104px;
}
</style>