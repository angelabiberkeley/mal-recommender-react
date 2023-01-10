import React from 'react';
import { useState, useEffect } from 'react';
import './UserCard.css';


function UserCard({element}) {
	const [friend, SetFriend] = useState([]);

	const HandleClick = e => {
		e.preventDefault();
		FetchFriendAnime(element.user.username);
		console.log(element.user.username);
	}

	const FetchFriendAnime = async (query) => {
		const temp = await fetch(`http://localhost:8080/api.myanimelist.net/v2/users/${query}/animelist?fields=list_status&sort=list_score`,
		{ method: 'GET', headers: {'X-MAL-CLIENT-ID': `${process.env.REACT_APP_CLIENT_ID}`}})
			.then(res => res.json());

			console.log(temp.data);
			SetFriend(temp.data);
	}
	
	const FriendsSince = element.friends_since.substring(0, 10);

	return (
		<div className="user-card">
			<div className="user-card-info">
				<a 
					href={element.user.url}
					target="_blank"
					rel="noreferrer">
					<h3>{ element.user.username }</h3>
				</a>
				<br/>
				<img src={element.user.images.jpg.image_url} onClick={HandleClick}/>
				<h3> Friends Since: {FriendsSince} </h3>
			</div>
			<div className="user-card-anime-list">
				<br/>
                {friend.map((anime) => 
					<div className="friend-anime">
						<li>Title = {anime.node.title}, Score = {anime.list_status.score}
					</li> 
					</div>
				)}
				<br/>
			</div>
		</div>
	)
}

export default UserCard