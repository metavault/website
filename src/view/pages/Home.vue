<template>
  <div class="home">
    <app-header />
    <div class="main-screen">
      <div class="container">
        <div class="main-screen-content" data-aos-duration="2000" data-aos="fade">
          <h1 class="title">
            Private Member Area Unlockable With Limited NFT tickets
          </h1>
          <span class="description"
            >Putting the Power Back in the Hands of Content Creators</span
          >
          <div class="socials">
            <twitter-button />
            <discord-button />
          </div>
        </div>
        <div class="main-screen-image" data-aos-duration="2000" data-aos="fade">
          <img
            class="metavault-image"
            src="@/assets/images/vault.png"
            alt="vault"
          />
          <h1 class="main-screen-title">Metavault NFTs</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <featured class="section featured" data-aos="fade-down" data-aos-duration="2000" />
      <div class="metavault-info">
        <span class="metavault-info-title">Meet metavault</span>
        <span class="metavault-info-description">Metavault aims to change the way creators monetize their content and engage with their community.</span>
      </div>
      <creators class="section creators"/>
      <collectors class="section collectors"/>
      <roadmap class="section roadmap"/>
      <join class="section join" data-aos="fade-down" data-aos-duration="2000"/>
      <benefits class="section benefits" data-aos-offset="500" data-aos-duration="1000" data-aos="zoom-in"/>
      <team class="section team" data-aos="fade-down" data-aos-duration="2000"/>
      <logo class="footer-logo"/> 
    </div>
  </div>
</template>

<script>
import Header from "@/view/layout/Header";
import TwitterButton from "@/view/core/TwitterButton";
import DiscordButton from "@/view/core/DiscordButton";
import Featured from "@/view/components/Featured";
import Creators from "@/view/components/Creators";
import Collectors from "@/view/components/Collectors";
import Roadmap from "@/view/components/Roadmap";
import Join from "@/view/components/Join";
import Benefits from "@/view/components/Benefits";
import Team from "@/view/components/Team/Team";
import Logo from "@/view/core/Logo";


export default {
  components: {
    "app-header": Header,
    TwitterButton,
    DiscordButton,
    Featured,
    Creators,
    Collectors,
    Roadmap,
    Join,
    Benefits,
    Team,
    Logo
  },
};
</script>

<style scoped>
.main-screen .container {
  display: flex;
  justify-content: space-between;
}

.home .container {
  padding-bottom: 48px;
}

.main-screen {
  margin-bottom: 48px;
  background: url("../../assets/images/header-background.png") repeat no-repeat
    top center;
}

.socials {
  display: flex;
  align-items: center;
}

.main-screen-content {
  padding-top: 130px;
  max-width: 700px;
}

.title {
  display: block;
  margin-bottom: 13px;
  font-size: 60px;
  line-height: 72px;
}

.description {
  display: block;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 36px;
}

.main-screen-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
}

.metavault-image {
  display: block;
  margin-bottom: 24px;
}

.metavault-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 48px;
}

.featured {
  margin-bottom: 72px;
}

.metavault-info {
  margin: 0 auto 72px auto;
  max-width: 600px;
}

.metavault-info-title {
  font-size: 30px;
  font-weight: 700;
  line-height: 34px;
  margin-bottom: 18px;
}

.metavault-info-description {
  text-align: center;
  font-size: 22px;
  line-height: 28px;
}

.section {
  margin-bottom: 128px;
}

.footer-logo {
  display: flex;
  justify-content: center;
}

.main-screen-title {
  text-align: center;
  font-size: 56px;
  line-height: 56px;
}


@media (max-width: 1420px) {
  .metavault-image {
    max-width: 400px;
  }
}

@media (max-width: 1260px) {
  .main-screen-image {
    display: none;
  }

  .main-screen-content {
    margin: auto;
    padding-top: 70px;
  }

  .title {
    font-size: 48px;
    line-height: 56px;
  }

  .description {
    font-size: 28px;
  }

  .section {
    margin-bottom: 42px;
  }
}

@media (max-width: 768px) { 
  .title {
    font-size: 32px;
  }

  .description {
    font-size: 24px;
  }


  ::v-deep .logo-img {
    max-width: 200px;
  }

  .main-screen {
    margin-bottom: 30px;
  }
}
</style>
