<script lang="ts">
	import { onMount } from 'svelte';
	import type { CardDataType } from '../types';

	export let review: CardDataType;
	export let width;

	const stars = Array(review.starRating).fill('');

	// onMount(() => {
	// 	const article = document.querySelector("article")
	// })
</script>

<article bind:clientWidth={width}>
	<header>
		<div class="review-headline">
			<h3>{review.gameTitle} Review</h3>
		</div>
		<div class="review-image">
			<img src={review.imageUrl} alt="game fuck" />
		</div>
	</header>
	<div>
		<div class="review-details">
			<div class="user-details">
				<img src={review.userAvatar} alt="" />
				<p>{review.username}</p>
			</div>
		</div>
		<div class="review-preview">
			<p>{review.reviewHeadline}</p>
			<p>{review.reviewSubheadine}</p>
		</div>
	</div>
	<footer>
		{#each stars as star}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="star">
				<path
					fill-rule="evenodd"
					d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
					clip-rule="evenodd"
				/>
			</svg>
		{/each}
	</footer>
</article>

<style>
	article {
		background-color: white;
		overflow: hidden;
		display: inline-flex;
		flex-direction: column;
		width: 37rem;
    border: 2px solid var(--bg-2);
		border-radius: 3.2rem;
		box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

		& header {
			border-bottom: 1px solid var(--gray-100);

			& .review-headline {
				height: 5.6rem;
				display: flex;
				align-items: center;
				font-family: var(--font-inter);
				padding: 0rem 1.6rem 0rem 1.6rem;
				
				& h3 {
					font-size: 1.6rem;
					color: var(--gray-300);
					font-weight: 600;
					align-self: flex-end;
				}
			}

			& .review-image {
				height: 20rem;
				width: 100%;
				padding: 1.6rem;
				overflow: hidden;
				& img {
					border-radius: 6px;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}

		& .review-details {
			display: flex;
			justify-content: space-between;
			align-items: center;

			& .user-details {
				display: flex;
				align-items: center;
				gap: 1.6rem;
				padding: 0rem 1.6rem 0rem 1.6rem;

				& img {
					width: 3.2rem;
					height: 3.2rem;
					object-fit: cover;
					border-radius: 50%;
				}

				& p {
					font-family: var(--font-inter);
					font-weight: 600;
					font-size: 1.4rem;
				}
			}
		}

		& .review-preview {
			padding: 1rem 1.6rem 2rem 1.6rem;

			& p:nth-child(1) {
				font-family: var(--font-tight);
				font-size: 2.4rem;
				font-weight: 600;
			}

			& p:nth-child(2) {
				font-family: var(--font-inter);
				font-size: 2rem;
			}
		}

		& footer {
			display: flex;
      background-color: var(--bg-1);
      border-top: 1px solid var(--bg-2);
      align-items: center;
			padding: 1.6rem 1.6rem 1.6rem 1.6rem;
			& .star {
				width: 2.4rem;
			}
		}
	}
</style>
