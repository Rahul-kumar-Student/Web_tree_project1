import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  // Fetch user data from API
  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => setUser(data.results[0]))
      .catch(error => console.error('Error fetching user:', error));
  }, []);

  // Show loading while fetching data
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="max-w-xs mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl p-6">
          <div className="flex items-center">
          {/* Image container with specified width and height */}
          <div 
            className="mr-6 bg-white" 
            style={{ width: '473px', height: '253px', overflow: 'hidden', position: 'relative' }}
          >
            {/* Profile Image - smaller, square, and centered */}
            <img 
              className="object-cover" 
              src={user.picture.large}
              style={{ width: '200px', height: '200px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          </div>

          {/* Text Information aligned to the right */}
          <div className="text-left mb-12 mr-10  text-black">
            <h2 className="text-xl font-bold w-64  truncate">{user.name.first} {user.name.last}</h2>
            <p className="mt-4  font-bold">{user.gender}</p>
            <p className="mt-4 font-bold">{user.phone}</p>
          </div>
        </div>
      </div>
    
  );
}

export default Profile;
