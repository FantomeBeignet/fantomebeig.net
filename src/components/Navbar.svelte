<script>
  let isMenuOpen = false;
  function toggleMenu() {
    if (isMenuOpen) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
    isMenuOpen = !isMenuOpen;
  }
  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<nav class={`navbar ${isMenuOpen ? "sidebar--open" : "sidebar--closed"}`}>
  <h3 class="navbar__logo">
    <span class="navbar__logo--highlight">F</span>antome<span
      class="navbar__logo--highlight">B</span
    >eignet<span class="navbar__logo--blink">_</span>
  </h3>
  <ul class="navbar__links" aria-expanded={isMenuOpen ? "true" : "false"}>
    <li class="navbar__link"><a href="/" on:click={closeMenu}>// home</a></li>
    <li class="navbar__link">
      <a href="/#about" on:click={closeMenu}>// about</a>
    </li>
    <li class="navbar__link">// projects</li>
    <li class="navbar__link">// contact</li>
  </ul>
  <button on:click={toggleMenu} class="navbar__button">//</button>
</nav>

<style lang="scss">
  .navbar {
    font-family: "Fira Code", monospace;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1.5rem;

    &__logo {
      flex: 1;
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: color(neutral, 100);

      &--blink {
        animation: blink 1.2s steps(1, start) infinite;
      }

      &--highlight {
        color: color(primary);
      }
    }

    &__links {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1.5rem;
      background-color: color(neutral, 100);
      padding: 1.5rem;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;

      &:hover > li:not(:hover) {
        color: color(neutral, 400);
      }
    }

    &__link {
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: color(neutral, 100);
      transition: color 0.2s ease-in-out;
    }

    &__button {
      z-index: 9999;
      display: flex;
      color: color(neutral, 100);
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    &.sidebar--closed > &__links {
      opacity: 0;
    }

    &.sidebar--open {
      .navbar__links {
        opacity: 1;
      }

      .navbar__link,
      .navbar__button {
        color: color(neutral, 900);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .navbar {
      padding: 2rem;

      &::after {
        content: "";
        flex: 1;
      }

      &__logo {
        font-size: 1.5rem;
        line-height: 2rem;
      }

      &__links {
        opacity: 1 !important;
        height: 100%;
        background-color: transparent;
        color: var(--color-text);
        inset: unset;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4rem;
      }

      &__link {
        font-size: 1.5rem;
        line-height: 2rem;
      }

      &__button {
        display: none;
      }
    }
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
</style>
