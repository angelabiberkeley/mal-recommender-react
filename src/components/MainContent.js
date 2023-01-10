import React from 'react'
import UserCard from './UserCard';
import './MainContent.css';

function MainContent(props) {

    return (
        <main>
            <div className="home-page">
                <h1>Get anime recommendations from friends.</h1>
                <br/>
                <p>Login with MyAnimeList and explore your friends' anime tastes.</p>
            </div>
            <img className="placeholder-image" src="placeholder-claymore-image.jpeg"></img>
            <div className="main-head">
                <form 
                    className="search-box"
                    onSubmit={props.HandleSearch}>
                    <input 
                        type="search"
						placeholder="Search for a user..."
						required
						value={props.search}
						onChange={e => props.SetSearch(e.target.value)}/>
                        <br/>
                    <button> Find my Friends </button>
                </form>
                <div className="user">
                    {props.userFriends.map((element) => (
                        <UserCard
                            element={element}
                            key={element.user.username} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default MainContent