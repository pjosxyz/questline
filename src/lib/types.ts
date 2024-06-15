export type StarRating = 1 | 2 | 3 | 4 | 5;

export type CardDataType = {
	id: number | string;
	gameTitle: string;
	imageUrl: string;
	altText: string;
	username: string;
	userAvatar: string;
	reviewHeadline: string;
	reviewSubheadine: string;
	starRating: StarRating;
};
