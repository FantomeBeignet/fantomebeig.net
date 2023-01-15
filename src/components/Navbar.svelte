<script>
  let isMenuOpen = false;
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class={`navbar ${isMenuOpen ? "sidebar__open" : "sidebar__closed"}`}>
  <h3 class="logotype">
    <span class="logotype__highlight">F</span>antome<span
      class="logotype__highlight">B</span
    >eignet<span class="blink">_</span>
  </h3>
  <ul class="nav-inner" aria-expanded={isMenuOpen ? "true" : "false"}>
    <li class="nav-item">// home</li>
    <li class="nav-item">// about</li>
    <li class="nav-item">// projects</li>
    <li class="nav-item">// contact</li>
  </ul>
  <button on:click={toggleMenu} class="menu-button">//</button>
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
  }

  .logotype {
    flex: 1;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: var(--color-text);

    .blink {
      animation: blink 1.2s steps(1, start) infinite;
    }
  }

  .logotype__highlight {
    color: var(--color-accent);
  }

  .nav-inner {
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
    background-color: var(--color-text);
    padding: 1.5rem;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    &:hover > .nav-item:not(:hover) {
      color: var(--color-background-light);
    }
  }

  .nav-item {
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: var(--color-text);
    transition: color 0.2s ease-in-out;
  }

  .menu-button {
    z-index: 9999;
    display: flex;
    color: var(--color-text);
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .sidebar__closed > .nav-inner {
    opacity: 0;
  }

  .sidebar__open {
    .nav-inner {
      opacity: 1;
    }

    .nav-item,
    .menu-button {
      color: var(--color-background-dark);
    }
  }

  @media screen and (min-width: 1024px) {
    .navbar {
      padding: 2rem;
    }
    .navbar::after {
      content: "";
      flex: 1;
    }
    .logotype {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    .nav-inner {
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

    .nav-item {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    .menu-button {
      display: none;
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
