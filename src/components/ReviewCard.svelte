<script lang="ts">
	import { onMount } from 'svelte';
	import type { CardDataType } from '../types';

	export let review: CardDataType;
	export let width;

	const stars = Array(review.starRating).fill('');


</script>

<article bind:clientWidth={width} class="bg-white overflow-hidden inline-flex flex-col w-10/12 lg:w-96 min-w-72 max-w-[450px] border-2 border-neutral-200 rounded-xl lg:rounded-[32px] shadow-lg">
	<header class="px-4">
		<div class="flex pt-2 pb-2">
			<h3 class="font-inter font-semibold text-neutral-600">{review.gameTitle} Review</h3>
		</div>
		<div class="w-full h-44 rounded-md overflow-hidden">
			<img src={review.imageUrl} alt="{review.altText}" class="object-cover w-full h-full" />
		</div>
	</header>
	<div>
		<div class="flex px-4">
			<div class="flex items-center gap-3 py-4">
				<img src={review.userAvatar} alt="" class="size-9 object-cover rounded-full " />
				<p class="font-inter font-semibold text-indigo-400">{review.username}</p>
			</div>
		</div>
		<div class="px-4">
			<p class="font-tight font-semibold text-2xl text-neutral-800">{review.reviewHeadline}</p>
			<p class="font-sans text-lg text-neutral-600">{review.reviewSubheadine}</p>
		</div>
	</div>
	<footer class="flex p-4 gap-3">
		{#each stars as star}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
				<defs>
					<linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style="stop-color:#FFB381;stop-opacity:1" />
						<stop offset="100%" style="stop-color:#F76808;stop-opacity:1" />
					</linearGradient>
				</defs>
				<path
					fill="url(#grad)"
					d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
					clip-rule="evenodd"
				/>
			</svg>
		{/each}
	</footer>
</article>

