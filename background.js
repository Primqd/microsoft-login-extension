const logInPage = `https://msftguest.microsoft.com/guest/msft_a_guest_register_login.php?_browser=1`;

chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url === logInPage) {
        console.log("true"); // goes to service worker console
    }
})