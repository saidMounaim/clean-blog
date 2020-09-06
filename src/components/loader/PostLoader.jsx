import React from 'react';
import ContentLoader from 'react-content-loader';

const PostLoader = (props) => (
	<ContentLoader
		speed={2}
		width={400}
		height={160}
		viewBox="0 0 400 160"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="55" y="4" rx="3" ry="3" width="410" height="6" />
		<rect x="57" y="20" rx="3" ry="3" width="380" height="6" />
		<rect x="57" y="36" rx="3" ry="3" width="410" height="6" />
		<rect x="59" y="52" rx="3" ry="3" width="380" height="6" />
		<rect x="57" y="89" rx="3" ry="3" width="410" height="6" />
		<rect x="59" y="105" rx="3" ry="3" width="380" height="6" />
		<rect x="59" y="121" rx="3" ry="3" width="410" height="6" />
		<rect x="61" y="137" rx="3" ry="3" width="380" height="6" />
	</ContentLoader>
);

export default PostLoader;
