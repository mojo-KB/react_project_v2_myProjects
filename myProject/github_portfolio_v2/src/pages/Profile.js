import { useState, useEffect } from 'react';

function Profile( {userName} ) {
   const [loading, setloading] = useState(false);
   const [profile, setProfile] = useState({});

   useEffect( () => {
        async function fetchData() {
            const profile = await fetch(
                `https://api.github.com/users/${userName}`
            );
            const result = await profile.json();


            if(result) {
                setProfile(result);
                setloading(false);
            }
        }
    fetchData();
    
   }, [userName]);

   return (
    <div>
        <h2>About me</h2>
        {
            loading ? (
                <span>Loading...</span>
            ) : ( <ul>
                <li>
                <span>Avatar_url: </span>
                
                {profile.avatar_url}
                </li>
                
                </ul>)
        }
    </div>
   );
}

export default Profile;