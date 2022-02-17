<template>
  <div class="join">
    <div class="join-col">
      <img
        class="join-image"
        src="@/assets/images/join-metavault.png"
        alt="metavault"
      />
    </div>
    <div class="join-col">
      <span class="join-title"
        >Join the First Step of the Project by Getting one of the 10000 NFTs
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.join {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.join-col:first-child {
  margin-right: 80px;
}

.join-image {
  display: block;
  max-width: 600px;
  width: 100%;
}

.join-title {
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  line-height: 72px;
  display: block;
  max-width: 500px;
}

@media (max-width: 1230px) {
  .join {
    flex-direction: column-reverse;
  }

  .join-title {
    font-size: 32px;
    line-height: 56px;
    margin-bottom: 40px;
  }

  .join-col:first-child {
    margin-right: 0;
  }

  .join-image {
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .join-image {
    max-width: 300px;
  }
}
</style>
