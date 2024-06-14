<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import ReviewCard from '../ReviewCard.svelte';

	export let reviews;

	let emblaApi;
	let options = { loop: false };

	function onInit(event) {
		emblaApi = event.detail;
		console.log(emblaApi.slideNodes()); // Access API
	}
</script>

<div class="embla" use:emblaCarouselSvelte={{ options }} on:emblainit={onInit}>
	<div class="embla__container">
		{#each reviews as review (review.id)}
			<div class="embla__slide">
				<ReviewCard {review} />
			</div>
		{/each}
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 370px; /* Each slide covers 80% of the viewport */
    gap: 2.4rem;
		/* gap: 2.4rem;
		width: 100vw;
		position: relative;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		border: 1px solid red; */
	}
	.embla__slide {
		flex: 0 0 370px;
		min-width: 0;
		/* border: 1px solid red; */
	}
</style>
