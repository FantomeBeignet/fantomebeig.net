<script>
  let isMenuOpen = false;
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="navbar">
  <h3 class="logotype">
    <span class="logotype__highlight">F</span>antome<span
      class="logotype__highlight">B</span
    >eignet<span class="blink">_</span>
  </h3>
  <ul class="nav-inner">
    <li class="nav-item">// home</li>
    <li class="nav-item">// about</li>
    <li class="nav-item">// projects</li>
    <li class="nav-item">// contact</li>
  </ul>
  <button on:click={toggleMenu} class="menu-button">//</button>
  <div class={isMenuOpen ? "sidebar sidebar__open" : "sidebar sidebar__closed"}>
    <div class="sidebar-top">
      <button on:click={toggleMenu} class="sidebar-close">//</button>
    </div>
    <ul class="sidebar-links">
      <li class="sidebar-link">// home</li>
      <li class="sidebar-link">// about</li>
      <li class="sidebar-link">// projects</li>
      <li class="sidebar-link">// contact</li>
    </ul>
  </div>
</nav>

<style lang="scss">
  .navbar {
    font-family: "Fira Code", monospace;
    display: flex;
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
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4rem;

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
    display: flex;
    color: var(--color-text);
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .sidebar {
    transition: opacity 0.15s ease-in-out;
  }

  .sidebar__closed {
    opacity: 0;
    pointer-events: none;
    height: 0;
    width: 0;
    overflow: hidden;
  }

  .sidebar__open {
    opacity: 1;
    pointer-events: auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-text);
    z-index: 1;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8rem;

    &:after {
      content: "";
      flex: 1;
    }

    .sidebar-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;
      width: 100%;

      .sidebar-close {
        background-color: transparent;
        color: var(--color-background);
        font-size: 1.25rem;
        line-height: 1.75rem;
        cursor: pointer;
      }
    }

    .sidebar-links {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 1rem;

      .sidebar-link {
        font-size: 1.25rem;
        line-height: 1.75;
        color: var(--color-background);
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

  @media screen and (min-width: 768px) {
    .navbar::after {
      content: "";
      flex: 1;
    }
    .logotype {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .nav-inner {
      display: flex;
    }

    .menu-button {
      display: none;
    }
  }
</style>
