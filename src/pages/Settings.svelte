<script lang="ts">
  import Attribute from "../components/ui/Attribute.svelte";
  import { settings } from '../lib/data.svelte';

  const attributes = $state(settings.value.attributes);

</script>

<h1>Settings</h1>

<h2>Attributes</h2>
<div class="tags">
  {#each attributes as name}
    <Attribute {name} edit={true}/>
  {/each}
</div>

<style>
  .tags {
    @apply flex gap-[1rem] border;
    @apply  bg-gray-50 text-gray-500 border-gray-500;
  }
</style>
