<script lang="ts">
	import { mdiClose, mdiMenu } from '@mdi/js/mdi.js';

  import {Router, Link, Route} from 'svelte-routing';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Icon from './components/ui/Icon.svelte';
  import './app.css';
  import Logo from './components/ui/Logo.svelte';
    import MenuItem from './components/ui/MenuItem.svelte';

  let url = $state('');
  let menuOpen = $state(false);

  function click() {
    menuOpen = !menuOpen
  }
</script>

<Router {url}>
  <header>
    <button onclick={() => menuOpen = !menuOpen}>
      <Icon path={mdiMenu} />
    </button>
    <Logo />
  </header>
  <div class="menu" class:menuOpen class:menuClosed={!menuOpen}>
    <nav id="side-menu" >
      <div class="header">
        <button onclick={() => menuOpen = !menuOpen}>
          <Icon path={mdiClose} />
        </button>
        <Logo />
      </div>
      <MenuItem path="/" {click}>Home</MenuItem>
      <MenuItem path="/about"  {click}>About</MenuItem>
    </nav>
  </div>
  <section id="main">
    <Route path="/"><Home /></Route>
    <Route path="/about"><About /></Route>
  </section>
</Router>

<style>
  @reference "tailwindcss/theme";

  header, .header {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
    align-items: center;
    position: relative;
  }
  section#main {
    padding: 1rem;
  }
  nav#side-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background: theme(--color-gray-100);
  }
  .menuOpen{
    display: block;
  }
  .menuClosed {
    display: none;
  }
  #side-menu {
    display: flex;
    flex-direction: column;
  }
  button {
    padding: 1rem;
  }
  #side-menu :global(a) {
    padding: .25rem 1rem;
  }
</style>