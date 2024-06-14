<script lang="ts">
	import { onMount } from 'svelte';
	import type { CardDataType } from '../../types';
	import ReviewCard from '../ReviewCard.svelte';
	import Swiper from 'swiper';
	// import 'swiper/css';
	export let reviews: CardDataType[];
	let width: string;
	let x: number | undefined;

	function getDistanceFromLeftEdge() {
		x = document.querySelector('.dirty')?.getBoundingClientRect().x;
	}

	onMount(() => {
		const swiper = new Swiper('.swiper', {
			slidesPerView: 'auto',
			spaceBetween: 10,
			loop: false,
			centeredSlides: false
		});

		getDistanceFromLeftEdge();

		window.addEventListener('resize', getDistanceFromLeftEdge);

		return () => {
			window.removeEventListener('resize', getDistanceFromLeftEdge);
		};
	});
</script>

<!-- TODO: There has to be a better way.. -->
<div class="dirty"></div>

<div class="wrapper">
	<!-- Slider main container -->
	<div class="swiper" style="padding-left: {x}px;">
		<!-- Additional required wrapper -->
		<div class="swiper-wrapper">
			<!-- Slides -->
			<div class="swiper-slide"><ReviewCard bind:width review={reviews[0]} /></div>
			<div class="swiper-slide"><ReviewCard bind:width review={reviews[1]} /></div>
			<div class="swiper-slide"><ReviewCard bind:width review={reviews[2]} /></div>
			<div class="swiper-slide"><ReviewCard bind:width review={reviews[3]} /></div>
			<div class="swiper-slide"><ReviewCard bind:width review={reviews[4]} /></div>
		</div>
	</div>
</div>

<style>
	.dirty {
		height: 0px;
	}
	.wrapper {
		width: 100vw;
		margin-left: calc((-100vw + 100%) / 2);
		margin-right: calc((-100vw + 100%) / 2);
	}
	.swiper {
		overflow: hidden;
		padding-left: 286px;
		width: auto;
		max-width: 100%;
		@media (width < 500px) {
			overflow: hidden;
		}
	}
	.swiper-wrapper {
		/* overflow: hidden; */
		display: flex;
	}
	.swiper-slide {
		display: flex;
		justify-content: center;
	}
</style>
