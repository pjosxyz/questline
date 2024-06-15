<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import qlLogo from '$lib/images/home/ql-logo.svg';
	import heroImage from '$lib/images/home/hero-illustration.svg';
	import heart from '$lib/images/home/heart.svg';

	import type { PageData } from './$types';
	import Carousel from '$lib/components/ui/Carousel.svelte';

	export let data: PageData;
</script>

<main class="mx-auto max-w-6xl p-6">
	<header class="mb-20">
		<nav class="mb-14 flex items-center justify-between">
			<img src={qlLogo} alt="questline logo" class="w-40" />
			<div class="flex gap-2 lg:gap-0">
				<Button kind="ghost">Get started</Button>
				<button class="btn" onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
			</div>
		</nav>

		<div class="flex flex-col-reverse items-center gap-5 lg:flex-row">
			<div class="flex flex-col gap-5">
				<h1 class="text-center font-tight text-5xl font-semibold text-neutral-900">
					Review and rate the games you <span
						class="relative inline-flex before:absolute before:top-0 before:content-[url('../lib/images/home/heart.svg')]"
						>love</span
					>
					(and
					<span class="hate">hate</span>)
				</h1>
				<p class="text-center text-xl text-neutral-600">
					Sometimes it’s important to get it off your chest and share your thoughts.
				</p>
				<button class="btn btn-primary text-white">Get started!</button>
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
			<h2 class="font-tight text-4xl font-semibold text-neutral-900">Reviews Like These</h2>
			<p class="text font-sans text-lg">
				See, lots of people are doing it! Which means you should too.
			</p>
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
