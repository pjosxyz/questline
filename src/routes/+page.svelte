<script lang="ts">
	import Button from '../components/ui/Button.svelte';
	import qlLogo from '../lib/images/home/ql-logo.svg';
	import heroImage from '../lib/images/home/hero-illustration.svg';
	import heart from '../lib/images/home/heart.svg'

	import type { PageData } from './$types';
	import Carousel from '../components/ui/Carousel.svelte';

	export let data: PageData;
</script>

<main class="max-w-6xl mx-auto p-6">
	<header class="mb-20">
		<nav class="flex items-center justify-between mb-14">
			<img src={qlLogo} alt="questline logo" class="w-40" />
			<div class="flex gap-2 lg:gap-0">
				<Button kind="ghost">Sign up</Button>
				<Button kind="ghost">Log in</Button>
			</div>
		</nav>

		<div class="flex flex-col-reverse gap-5 lg:flex-row items-center">
			<div class="flex flex-col gap-5">
				<h1 class="font-tight font-semibold text-5xl text-center">
					Review and rate the games you <span class="relative inline-flex before:top-0 before:absolute before:content-[url('../lib/images/home/heart.svg')]">love</span> (and
					<span class="hate">hate</span>)
				</h1>
				<p class="text-xl text-neutral-600 text-center">
					Sometimes it’s important to get it off your chest and share your thoughts.
				</p>
				<Button kind="rg">Get started!</Button>
			</div>
			<div class="flex grow">
				<img
					src={heroImage}
					alt="Medieval character with five-star Baldur's Gate 3 review; angry astronaut with one-star Starfield review."
					width="500px"
				/>
			</div>
		</div>
	</header>

	<section>
		<div class="flex flex-col gap-4">
			<h2 class="font-tight font-semibold text-4xl">Reviews Like These</h2>
			<p class="font-sans text-lg text">See, lots of people are doing it! Which means you should too.</p>
		</div>
		<Carousel reviews={data.cardData} />
	</section>
</main>

<style>




	.hero {
		display: flex;
		align-items: center;
		gap: 4.8rem;

		margin-top: 3.2rem;
		margin-bottom: 6.4rem;

		& .text-flex {
			flex-basis: 1;
			gap: 3.2rem;
			width: 55%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			& h1 {
				& .heart,
				.hate {
					position: relative;
					display: inline-flex;
				}

				& .heart::before {
					content: url('../lib/images/home/heart.svg');
					display: block;
					position: absolute;
					top: 0;
					right: -0.1rem;
					transform: scale(0.5) translateX(120%) translateY(-50%);
				}

				& .hate::before {
					content: url('../lib/images/home/marker-thick-underline.svg');
					position: absolute;
					bottom: -0.5rem;
					left: 0;
					transform-origin: left;
					transform: scale(0.5) translateY(100%);
				}
			}

			& p {
				font-family: 'Inter';
			}
		}

		& .img-flex {
			display: flex;
			flex: 1;
		}

		& img {
			max-width: 100%;
			height: auto; /* Maintain aspect ratio */
			flex-basis: 0; /* Make sure the image can shrink */
			flex-grow: 1; /* Allow the image to grow */
		}
	}

	.section-reviews {
		& .section-heading {
			& h2 {
				margin: 0;
			}
			display: flex;
			flex-direction: column;
			gap: 2.4rem;
			margin-bottom: 4rem;
		}
	}
</style>
