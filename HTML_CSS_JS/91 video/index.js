const fs = require("fs");
const path = require("path");

// Define the directory to organize
const targetDir = "./clutter"; // Replace with your directory path

// Define categories for file extensions
const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif"],
  videos: [".mp4", ".mkv", ".avi"],
  documents: [".txt", ".pdf", ".docx"],
  others: [], // For files with extensions not listed above
};

// Function to create a folder if it doesn't exist
function ensureFolderExists(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}

// Function to organize files
function organizeFiles(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.lstatSync(filePath).isFile()) {
      const ext = path.extname(file).toLowerCase();
      let folderName = "others";

      // Find the category for the file extension
      for (const category in categories) {
        if (categories[category].includes(ext)) {
          folderName = category;
          break;
        }
      }

      // Create the category folder if it doesn't exist
      const folderPath = path.join(dirPath, folderName);
      ensureFolderExists(folderPath);

      // Move the file to the appropriate folder
      const destPath = path.join(folderPath, file);
      fs.renameSync(filePath, destPath);
      console.log(`Moved: ${file} -> ${folderName}`);
    }
  });
}

// Run the organizer
organizeFiles(targetDir);
console.log("Directory organized successfully!");
