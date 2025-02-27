 <script lang="ts">
  interface AttributeProps {
    name: string;
    edit?: boolean;
    value?: number;
  }

  let { name, edit = false, value = undefined }: AttributeProps = $props();

 </script>

<div class="attribute">
  <div class="name">{name}</div>
  {#if edit}
  <div class="edit-buttons">
    <!-- edit buttons -->
  </div>
  {/if}
  {#if value !== undefined}
    {value >= 0?`+${value}`:{value}}
  {/if}
</div>