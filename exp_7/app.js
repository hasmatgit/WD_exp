document.getElementById('fetchButton').addEventListener('click', fetchUser);
function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            38
            const user = data.results[0];
            document.getElementById('userData').innerHTML = ` 
<img src="${user.picture.large}" alt="User Picture">
 <p><strong>Name:</strong> ${user.name.first} 
${user.name.last}</p> 
<p><strong>Email:</strong> ${user.email}</p>
 <p><strong>Location:</strong> ${user.location.city}, 
${user.location.country}</p> 
`;
        })
        .catch(error => console.error('Error fetching user:', error));
} 