<script lang="ts">
	import Button from '../components/ui/Button.svelte';
	import qlLogo from '../lib/images/home/ql-logo.svg';
	import heroImage from '../lib/images/home/hero-illustration.svg';
	import type { PageData } from './$types';
	import ReviewCard from '../components/ReviewCard.svelte';
	import Carousel from '../components/ui/Carousel.svelte';

	export let data: PageData;
</script>

<main>
	<header>
		<nav>
			<img src={qlLogo} alt="questline logo" />
			<div class="nav-buttons">
				<Button kind="ghost">Sign up</Button>
				<Button kind="ghost">Log in</Button>
			</div>
		</nav>

		<div class="hero">
			<div class="text-flex">
				<h1 id="headline">
					Review and rate the games you <span class="heart">love</span> (and
					<span class="hate">hate</span>)
				</h1>
				<p id="subheadline">
					Sometimes it’s important to get it off your chest and share your thoughts.
				</p>
				<Button kind="rg">Get started!</Button>
			</div>
			<div class="img-flex">
				<img
					src={heroImage}
					alt="Medieval character with five-star Baldur's Gate 3 review; angry astronaut with one-star Starfield review."
					width="500px"
				/>
			</div>
		</div>
	</header>

	<section>
		<h2 class="heading">Some Fake Reviews</h2>
		<p class="subheading">See, lots of people are doing it! Which means you should too.</p>

    
	</section>
  <Carousel reviews={data.cardData} />
</main>

<style>
	main {
    max-width: var(--xl);
		margin: 0 auto;
	}
  
  header, section {
    padding: 0rem 2.4rem 0rem 2.4rem;
  }

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* padding: 1.2rem 0rem 1.2rem 0rem; */
    padding-top: 1.2rem;

		& img {
			width: 16rem;
		}

		& .nav-buttons {
			display: flex;
			justify-content: space-between;
			gap: 0.8rem;
		}
	}

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

  
</style>
