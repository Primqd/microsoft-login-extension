// automatically register data about internet recipet

// set username
chrome.storage.local.set({ ms_internet_username: document.getElementById("ID_form2646a36f_guest_register_receipt_username").value }); // hidden input field

// set password
chrome.storage.local.set({ ms_internet_password: document.getElementById("ID_form2646a36f_guest_register_receipt_password").value }); // hidden input field

// set expire time
chrome.storage.local.set({ ms_internet_expire_time: document.getElementById("ID_form2646a36f_guest_register_receipt_expire_time").value });