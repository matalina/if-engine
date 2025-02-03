<script lang="ts">
    import type { Snippet } from "svelte";
  import { Link } from "svelte-routing";

  interface MenuItemProps {
    path: string;
    click: () => void;
    children: Snippet;
  }

  let {path, click, children}: MenuItemProps = $props();
</script>

<Link to={path} onclick={click}>{@render children()}</Link>