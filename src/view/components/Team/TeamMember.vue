<template>
  <div class="team-member">
    <img class="team-member-image" :src="member.image" alt="">
    <span class="position"> {{ member.position }} </span>
    <span class="name"> {{ member.name }} </span>
    <twitter-button class="twitter-button" />
    <span class="description"> {{ member.description }} </span>
  </div>
</template>

<script>
import TwitterButton from '@/view/core/TwitterButton'
export default {
  components: {
    TwitterButton
  },
  props: {
    member: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  width: 100%;
}

.team-member-image {
  max-width: 300px;
  margin-bottom: 20px;
  width: 100%;
}

.position {
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 8px;
  color: #3F80F6;
}

.name {
  font-weight: bold;
  font-size: 32px;
  line-height: 34px;
  margin-bottom: 8px;
}

.twitter-button {
  margin-bottom: 8px;
}

.description {
  text-align: center;
  font-size: 20px;
  line-height: 28px;
}
</style>