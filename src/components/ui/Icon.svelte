<script lang="ts">
  interface IconProps {
    path: string;
    spin?: boolean;
    spinInverse?: boolean;
    size?: string;
    class?: string;
  }

  let {
    path,
    spin = false,
    spinInverse = false,
    size = '1rem',
    ...restProps
  }: IconProps = $props();
</script>

<svg viewBox="0 0 24 24" width={size} height={size} {...restProps}>
  {#if spin || spinInverse}
    <g class:spin={spin || spinInverse} class:inverse={spinInverse}>
      <path d={path} />
    </g>
  {:else}
    <path d={path} />
  {/if}
</svg>

<style>
  svg {
    flex: 0 0 auto;
    fill: currentColor;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes spin-inverse {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
  .spin {
    animation: spin linear 1s infinite;
    transform-origin: center;
  }
  .inverse {
    animation-name: spin-inverse;
  }
</style>
  