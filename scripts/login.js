// guaranteed on log in page

// fill in username
chrome.storage.local.get('ms_internet_username').then((data) => {
    document.getElementById("ID_form909ded86_guest_login_user").value = data.ms_internet_username;
});

// fill in password
chrome.storage.local.get('ms_internet_password').then((data) => {
    document.getElementById("ID_form909ded86_guest_login_password").value = data.ms_internet_password;
})

// automatically accept terms and conditions.
// time out to ensure document loads beofre LOL
document.getElementById("ID_form909ded86_guest_login_visitor_accept_terms").checked = true;