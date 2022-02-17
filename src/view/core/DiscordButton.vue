<template>
  <div class="discord">
    <img class="discord-icon" src="@/assets/images/discord.png" alt="discord" />
    <span class="discord-title">Join discord</span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.discord {
  min-width: 195px;
  max-width: 195px;
  margin-left: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: rgba(113, 161, 249, 0.85);
  border-radius: 50px;
  padding: 8px 16px;
}

.discord-title {
  margin-left: 16px;
  font-size: 20px;
  line-height: 30px;
  white-space: nowrap;
}

.discord-icon {
  max-width: 28px;
  width: 100%;
}
</style>
