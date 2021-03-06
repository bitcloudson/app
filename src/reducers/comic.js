import * as t from 'constants/ActionTypes';

const initialState = {
	/*
	 * comics = {
	 *   "manhua-yiquanchaoren": [
	 *     {
	 *       title: "rtyukjkl"
	 *       link: "sfdafg"
	 *       cid: "asdfasdf",
	 *     },
	 *     {
	 *       title: "rtyukjkl"
	 *       link: "sfdafg"
	 *       cid: "12333"
	 *     }
	 *   ]
	 * }
	 */
	comics: {},
	chapters: [],

	/*
	 *
	 readingChapters = [
	   {
		   cid: "",
		   images: [

		   ]
	   }
	 ]
	 */
	readingChapters: [],
	readingChapterID: null,
	/*
	 * readingImages is an array of array
		[
			// chapter 1
			[
				"image1",
				"image2",
				"image3",
			],
			// chapter 2
			[
				"image1",
				"image2",
				"image3",
			],
		]
	 */
	readingImages: [],
	flattenReadingImages: [],
	readingIndex: null,
	appBarTitle: 'Loading...',
	comicName: null,

	comicManager: null
};

export default function comics(state = initialState, action) {
	switch(action.type) {

	case t.LOAD_NEXT_CHAPTER:
		return state;

	case t.LOAD_PREVIOUS_CHAPTER:
		return state;

	case t.SWITCH_CHAPTER:
		// var flatten = action.readingImages.reduce((prev, cur) => {
		// 	return prev.concat(cur);
		// }, []);

		return {
			...state,
			readingChapters: action.readingChapters,
			readingImages: action.readingImages,
			appBarTitle: action.appBarTitle,
			readingChapterID: action.readingChapterID
			// flattenReadingImages: flatten
		};

	case t.CLEAR_COMIC_IMAGES:
		return {
			...state,
			readingImages: [],
			readingChapterID: null,
			appBarTitle: 'Loading...'
		};

	case t.INIT_COMIC_MANAGER:
		return {
			...state,
			chapters: action.chapters,
			comicManager: action.comicManager,
			comicID: action.comicID,
			comics: {
				...comics,
				[action.comicID]: action.chapters
			}
		};

	case t.SET_COMIC_NAME:
		return {
			...state,
			comicName: action.comicName
		};

	default:
		return state;
	}
}
