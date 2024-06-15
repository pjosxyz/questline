<script lang="ts">
	import Nav from '$lib/components/ui/Nav.svelte';
	import SignInDialog from '$lib/components/SignInDialog.svelte';


import HeroImage from './HeroImage.svelte';
</script>
<Nav />
<main class="container p-4">
	<div class="">
		<div class="flex-col h-full gap-6 lg:flex-row-reverse">
			<HeroImage />
			<div>
				<h1 class="font-tight text-5xl font-bold text-neutral-900 dark:text-neutral-100">
					Review and rate the games you love (and hate)
				</h1>
				<p class="py-6 text-lg text-neutral-800 dark:text-neutral-200">
					It's good to sing praises and tell people how you feel about games. It works really well in Steam forums.
				</p>
				<SignInDialog />
			</div>
		</div>
	</div>
</main>
