<script>
	export let kind;
</script>

{#if kind === 'rg'}
	<button class="rg">
		<slot></slot>
	</button>
  {:else if kind === 'ghost'}
  <button class="ghost">
		<slot></slot>
	</button>
{/if}

<style>
	button {
		appearance: none;
		border: none;
		font-family: 'Inter-Tight', sans-serif;
		font-weight: 600;
		min-height: 4.8rem;
		font-size: 1.8rem;
		padding: 1.2rem 2.4rem 1.2rem 2.4rem;
    background-color: none;
    background: none;
    cursor: pointer;
    transition: background-color .2s ease-in-out;
    border-radius: 999rem;
	}

  .rg {
    color: white;
    background-color: var(--indigo-1);
    &:hover {
      background-color: var(--indigo-2);
    }
  }

  .ghost {
    &:hover {
      background-color: var(--bg-2);
    }
  }
</style>
