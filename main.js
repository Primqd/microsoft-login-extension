const usernameBox = document.getElementById("username");
const usernameLabel = document.getElementById("username-label");

const passwordBox = document.getElementById("password");
const passwordLabel = document.getElementById("password-label");

// username
chrome.storage.local.get("ms_internet_username").then((data) => {
    usernameLabel.textContent = `Username (Currently ${data.ms_internet_username})`
    usernameBox.value = data.ms_internet_username;
});

usernameBox.addEventListener("input", async (event) => {
    await chrome.storage.local.set({ ms_internet_username: usernameBox.value });
    chrome.storage.local.get("ms_internet_username").then((data) => {
        usernameLabel.textContent = `Username (Currently ${data.ms_internet_username})`
    });
});

// password

chrome.storage.local.get("ms_internet_password").then((data) => {
    passwordLabel.textContent = `Password (Currently ${data.ms_internet_password})`
    passwordBox.value = data.ms_internet_password;
});

passwordBox.addEventListener("input", async (event) => {
    await chrome.storage.local.set({ ms_internet_password: passwordBox.value });
    chrome.storage.local.get("ms_internet_password").then((data) => {
        passwordLabel.textContent = `Password (Currently ${data.ms_internet_password})`
    });
});