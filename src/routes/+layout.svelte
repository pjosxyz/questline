<script>
	import '../app.css';
</script>

<slot></slot>

<style lang="postcss">
	:global(body) {
		@apply bg-neutral-100 dark:bg-neutral-800;
		height: 100%;
	}
</style>
