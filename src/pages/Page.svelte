<script lang="ts">
  import Markdown from "../components/ui/Markdown.svelte";    

  import { about } from './about';

  interface PageProps {
    name: string;
  }

  let { name }:PageProps = $props();

  const pages: { [key: string]: string } = {
    about,
  };
</script>

<Markdown markdown={pages[name]} />