const profile = {
    skills: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js']
};

let favoriteSkills = [];

function displaySkills(skills) {
    const skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = ''; // Clear current list
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${skill}
            <button class="favorite-button" onclick="addToFavorites('${skill}')">Add to Favorites</button>
        `;
        skillsList.appendChild(li);
    });
}

document.getElementById('sortSkills').addEventListener('click', () => {
    profile.skills.sort((a, b) => a.localeCompare(b));
    displaySkills(profile.skills);
});

function addToFavorites(skill) {
    if (!favoriteSkills.includes(skill)) {
        favoriteSkills.push(skill);
        updateFavoritesCount();
        displayFavorites();
    }
}

function updateFavoritesCount() {
    document.getElementById('favoritesCount').innerText = favoriteSkills.length;
}

function displayFavorites() {
    const favoritesList = document.getElementById('favoritesList');
    favoritesList.innerHTML = ''; // Clear current list
    favoriteSkills.forEach(skill => {
        const li = document.createElement('li');
        li.innerText = skill;
        favoritesList.appendChild(li);
    });
}

displaySkills(profile.skills);

