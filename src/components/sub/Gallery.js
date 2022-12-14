import Layout from '../common/Layout';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-component';
import { useSelector } from 'react-redux';

function Gallery() {
	// const [Items, setItems] = useState([]);
	const [Index, setIndex] = useState(0);
	const masonryOptions = {
		transitionDuration: '0.5s',
	};
	const Pics = useSelector((state) => state.flickr.data.photo);

	// const getFlickr = async () => {
	// 	const key = '5f93204b89f778b6700e782d390ca6ea';
	// 	const user = '196184841@N06';
	// 	const num = 200;
	// 	const extras = 'tags, description, views';
	// 	const method_search = 'flickr.photos.search';
	// 	const method_interest = 'flickr.interestingness.getList';
	// 	const method_user = 'flickr.people.getPhotos';
	// 	const method_favs = 'flickr.favorites.getList';
	// 	const method_gallery = 'flickr.galleries.getList';
	// 	const url = `https://www.flickr.com/services/rest/?method=${method_favs}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1&user_id=${user}`;

	// 	await axios.get(url).then((json) => {
	// 		if (json.data.photos.photo.length === 0)
	// 			return alert('해당 검색어의 결과값이 없습니다.');
	// 		setItems(json.data.photos.photo);
	// 		console.log(Items);
	// 	});
	// };

	// useEffect(() => {
	// 	getFlickr();
	// }, []);

	const subtitle = {
		title: '#Bluebottle',
		p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
	};

	// const imageClick = (i) => {

	// 	return (
	// 		<img
	// 			src={`https://live.staticflickr.com/${Items[0].server}/${Items[0].id}_${Items[0].secret}_m.jpg`}
	// 			alt={Items[0].title}
	// 		/>
	// 	);
	// };

	return (
		<Layout name='gallery' sub={subtitle}>
			{/* <article>{imageClick}</article> */}
			<div className='frame'>
				<Masonry
					elementType={'div'}
					options={masonryOptions}
					columns={2}
					spacing={0}>
					{Pics.map((item, i) => {
						return (
							<article>
								<div className='inner'>
									{console.log(item)}
									<img
										src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
										alt={item.title}
										// onClick={() => {
										// 	setIndex(i);
										// }} //무한루프 해결
									/>
								</div>
							</article>
						);
					})}
				</Masonry>
			</div>
		</Layout>
	);
}

export default Gallery;
