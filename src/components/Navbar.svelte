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
</nav>

<style lang="scss">
  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1.5rem 0;

    &:after {
    content: "";
    flex: 1;
    }
  }

  .logotype {
    flex: 1;
    font-family: "Fira Code", monospace;
    font-size: 1.5rem;
    line-height: 2rem;
    padding: 0 1.5rem;
    color: var(--color-text);

    .blink {
      animation: blink 1.2s steps(1, start) infinite;
    }
  }

  .logotype__highlight {
    color: var(--color-accent);
  }

  .nav-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    &:hover > .nav-item:not(:hover) {
      color: var(--color-background-light);
    }
  }

  .nav-item {
    font-family: "Fira Code", monospace;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: var(--color-text);
    transition: color 0.2s ease-in-out;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
</style>
