import { useState, useEffect } from 'react';
import './App.css';
import MainContent from './components/MainContent';

function App() {

  const [search, SetSearch] = useState("");
  const [userFriends, SetUserFriends] = useState([]);

	const HandleSearch = e => {
		e.preventDefault();
		console.log(search);
		FetchUserFriends(search);
	}

	const FetchUserFriends = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v4/users/${query}/friends`)
			.then(res => res.json());

			console.log(temp);
			SetUserFriends(temp.data);
	}

  return (
    <div className="App">
		<header className="App-header">
			<h1 className="title"> MyAnimeTaste </h1>
		</header>
		<body id="my-body">
			<MainContent
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					userFriends={userFriends} /> 
		</body>
    </div>
  );
}

export default App;
