import type { PageServerLoad } from './$types';
import type { CardDataType } from '../types';

const DUMMY_DATA: CardDataType[] = [
	{
		id: 1,
		gameTitle: 'Super Mario 64',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg',
		altText: 'Stupid',
		username: 'Nintendo4Eva',
		userAvatar:
			'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		reviewHeadline: 'I like killing the mushrooms',
		reviewSubheadine: 'Fun for all the family',
		starRating: 5
	},
	{
		id: 2,
		gameTitle: 'Super Mario 64',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg',
		altText: 'Stupid',
		username: 'Nintendo4Eva',
		userAvatar:
			'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		reviewHeadline: 'I like killing the mushrooms',
		reviewSubheadine: 'Fun for all the family',
		starRating: 5
	},
	{
		id: 3,
		gameTitle: 'Super Mario 64',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg',
		altText: 'Stupid',
		username: 'Nintendo4Eva',
		userAvatar:
			'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		reviewHeadline: 'I like killing the mushrooms',
		reviewSubheadine: 'Fun for all the family',
		starRating: 5
	},
	{
		id: 4,
		gameTitle: 'Super Mario 64',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg',
		altText: 'Stupid',
		username: 'Nintendo4Eva',
		userAvatar:
			'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		reviewHeadline: 'I like killing the mushrooms',
		reviewSubheadine: 'Fun for all the family',
		starRating: 5
	},
	{
		id: 5,
		gameTitle: 'Super Mario 64',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg',
		altText: 'Stupid',
		username: 'Nintendo4Eva',
		userAvatar:
			'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		reviewHeadline: 'I like killing the mushrooms',
		reviewSubheadine: 'Fun for all the family',
		starRating: 5
	}
];

export const load: PageServerLoad = () => {
	return {
		cardData: DUMMY_DATA
	};
};
