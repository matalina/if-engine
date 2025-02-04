<script lang="ts">
	import { mdiClose, mdiMenu } from '@mdi/js/mdi.js';

  import {Router, Route} from 'svelte-routing';
  import Home from './pages/Home.svelte';
  import Icon from './components/ui/Icon.svelte';
  import Logo from './components/ui/Logo.svelte';
  import MenuItem from './components/ui/MenuItem.svelte';
  import Page from './pages/Page.svelte';

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
    <Route path="/about"><Page name='about' /></Route>
  </section>
</Router>

<style>
  @reference "tailwindcss/theme";

  header, .header {
    @apply m-0 p-0 flex gap-[1rem] items-center relative;
  }
  section#main {
    @apply p-[1rem];
  }
  nav#side-menu {
    @apply absolute top-0 left-0 overflow-auto w-full md:w-96 h-full border-r;
    background: theme(--color-gray-100);
  }
  .menuOpen{
    @apply block;
  }
  .menuClosed {
    @apply hidden;
  }
  #side-menu {
    @apply flex flex-col;
  }
  button {
    @apply p-[1rem];
  }
  #side-menu :global(a) {
    @apply py-[.25rem] px-[1rem];
  }
</style>