<template>
  <header class="header">
    <div class="container">
      <div class="navigation-inner">
        <logo />
        <nav class="navigation">
          <ul class="navigation-list">
            <li class="navigation-item" @click.prevent="navigate('featured')">
              <a class="navigation-link" href="#"> Features </a>
            </li>
            <li class="navigation-item" @click.prevent="navigate('roadmap')">
              <a class="navigation-link" href="#"> Roadmap </a>
            </li>
            <li class="navigation-item" @click.prevent="navigate('team')">
              <a class="navigation-link" href="#"> Team </a>
            </li>
            <li class="navigation-item">
              <a class="navigation-link" href="#"> Whitepaper </a>
            </li>
          </ul>
          <div class="burger-menu" @click="isActive = !isActive">
            <span class="line" />
            <span class="line" />
            <span class="line" />
          </div>
        </nav>
        <div class="socials">
          <twitter-button />
          <discord-button />
        </div>
      </div>
      <transition name="slide">
        <div v-if="isActive"  class="navigation-drawer">
          <ul class="navigation-list">
            <li class="navigation-item" @click.prevent="navigate('featured')">
              <a class="navigation-link" href="#"> Features </a>
            </li>
            <li class="navigation-item" @click.prevent="navigate('roadmap')">
              <a class="navigation-link" href="#"> Roadmap </a>
            </li>
            <li class="navigation-item" @click.prevent="navigate('team')">
              <a class="navigation-link" href="#"> Team </a>
            </li>
            <li class="navigation-item">
              <a class="navigation-link" href="#"> Whitepaper </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import Logo from "@/view/core/Logo";
import TwitterButton from "@/view/core/TwitterButton";
import DiscordButton from "@/view/core/DiscordButton";

export default {
  data: () => ({
    isActive: false
  }),
  components: {
    Logo,
    TwitterButton,
    DiscordButton,
  },
  methods: {
    navigate(elem) {
      document.querySelector(`#${elem}`).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.header {
  padding: 20px 0;
}

.navigation-link {
  font-size: 21px;
  line-height: 24px;
}

.navigation-inner {
  display: flex;
  align-items: center;
}

.navigation-list {
  display: flex;
  align-items: center;
}

.navigation-item {
  position: relative;
  margin-right: 16px;
}

.navigation-item:last-child {
  margin-right: 0;
}

.navigation {
  margin: auto;
}

.socials {
  display: flex;
  align-items: center;
}

.navigation-item::after {
  content: "";
  left: 0;
  right: 0;
  position: absolute;
  height: 2px;
  background-color: #fff;
  bottom: -4px;
  transform: scale(0, 1);
  transform-origin: 100% 50%;
  transition: transform 0.5s ease;
}

.navigation-item:hover::after {
  transform: scale(1, 1);
  transform-origin: 0% 50%;
}

.navigation-drawer {
  display: none;
}

.burger-menu {
  cursor: pointer;
  margin-left: auto;
  display: none;
  width: 32px;
  height: 22px;
  justify-content: space-between;
  flex-direction: column;
}

.line {
  border-radius: 4px;
  width: 100%;
  height: 4px;
  background-color: #fff;
}

.slide-enter-active {
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
}

.slide-leave-active {
   transition-duration: 0.3s;
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
@media (max-width: 1056px) {
  .navigation-list {
    display: none;
  }

  .socials {
    display: none;
  }

  .navigation {
    margin: 0 0 0 auto;
  }

  .navigation-inner {
    margin-bottom: 20px;
  }

  .navigation-drawer {
    display: block;
  }

  .navigation-drawer .navigation-list {
    display: flex;
    flex-direction: column;
  }

  .burger-menu {
    display: flex;
  }
}
</style>
