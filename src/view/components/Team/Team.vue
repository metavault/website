<template>
  <div class="team" id="team">
    <div class="team-header">
      <span class="team-title">Meet the team</span>
      <span class="team-description">Trust and Transparency</span>
    </div>
    <div class="members">
      <team-member class="member" v-for="(member, index) in members" :key="index" :member="member" />
    </div>
  </div>
</template>

<script>
import TeamMember from '@/view/components/Team/TeamMember'
export default {
  components: {
    TeamMember
  },
  data: () => ({
    members: [
      { 
        image: require('@/assets/images/team-member_1.png'),
        name: 'Yoann',
        twitter: 'https://twitter.com/',
        position: 'founder',
        description: 'From le Puy-en-velay to BKK SaaS machine'
      },
      { 
        image: require('@/assets/images/team-member_2.png'),
        name: 'Pierre',
        twitter: 'https://twitter.com/',
        position: 'founder',
        description: 'From Lavilledieu to BKK SEO machine'
      }
    ]
  })
};
</script>

<style scoped>
.team-header {
  margin-bottom: 72px;
}

.team-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 18px;
}

.team-description {
  font-size: 22px;
  line-height: 28px;
}

.members {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 80px;
}

.member {
  flex: 1 0 250px;
}

.member:last-child {
  margin-right: 0;
}

@media (max-width: 768px) {
  .team-header {
    margin-bottom: 40px;
  }

  .members {
    gap: 40px;
  }
}
</style>
