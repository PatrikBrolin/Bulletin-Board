import { useState } from "react";
import PostLiked from "./PostLiked";

import { FaThumbsUp } from 'react-icons/fa';
import styles from "./ReactPost.module.scss";

const ReactPost = ({ question, awnser }) => {
	const [likedPost, setLikedPost] = useState(false);
	return (
		<div className={styles.reactPost}>
			<h2>{question}</h2>
			<p>{awnser}</p>
      <div className={styles.likedDiv}>
			{!likedPost ? (
				<label>
					<FaThumbsUp className={styles.like}/>
					<input
						type="checkbox"
						onChange={() => {
							setLikedPost(!likedPost);
						}}
					></input>
				</label>
			) : (
				<>
					<PostLiked />
					<label>
						<FaThumbsUp  className={styles.liked}/>
						<input 
							type="checkbox"
							onChange={() => {
								setLikedPost(!likedPost);
							}}
						></input>
					</label>
				</>
        
			)}
      </div>
		</div>
	);
};

export default ReactPost;
