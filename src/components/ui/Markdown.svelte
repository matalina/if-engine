<script lang="ts">
  import markdownit from 'markdown-it';
  const md = markdownit();

  interface MarkdownProps {
    class?: string;
    markdown: string;
  }

  let {class: className, markdown}: MarkdownProps = $props();

  let html: string = $state(md.render(markdown));
</script>

<div class={className}>
  {@html html}
</div>