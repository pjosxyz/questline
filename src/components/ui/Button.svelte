<script>
	export let kind;
</script>

{#if kind === 'rg'}
	<button
		class="font-tight text-lg text-white min-h-12 font-semibold bg-indigo-500 rounded-full px-4 py-2 lg:px-12 lg:py-6"
	>
		<slot></slot>
	</button>
{:else if kind === 'ghost'}
	<button
		class="text-base font-tight text-neutral-900 font-semibold px-4 py-2 lg:px-8 lg:py-4 transition-colors rounded-full bg-neutral-200 lg:bg-none min-h-12 lg:hover:bg-neutral-200"
	>
		<slot></slot>
	</button>
{/if}
