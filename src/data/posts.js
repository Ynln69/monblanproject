const TOTAL_POSTS = 24
const LIST_IMAGE_COUNT = 9

const GRID_IMAGE_NUMBERS = [1, 2, 3, 5, 6, 7, 8]

const listImages = Array.from(
  { length: LIST_IMAGE_COUNT },
  (_unused, position) => `/images/image-for-list${position + 1}.jpg`,
)

const gridImages = GRID_IMAGE_NUMBERS.map(
  (imageNumber) => `/images/image-for-grid${imageNumber}.jpg`,
)

const makePost = (postIndex) => {
  return {
    id: postIndex + 1,
    imageList: listImages[postIndex % listImages.length],
    imageGrid: gridImages[postIndex % gridImages.length],
    today: { label: 'Today', likes: 128, comments: 31 },
    dated: { label: '9-08-2016', likes: 67, comments: 22 },
    action: 'Image upload',
    date: '11-04-2016',
  }
}

export const posts = Array.from({ length: TOTAL_POSTS }, (_unused, postIndex) =>
  makePost(postIndex),
)
