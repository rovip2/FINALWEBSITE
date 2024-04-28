document.getElementById("resumeBtn").addEventListener("click", function() {
    // Replace "PUBLIC_URL_TO_YOUR_PDF" with the actual public URL of your PDF file
    window.open("file:///C:/Users/Rrvp/Desktop/RESUME-COVERLTTR/RESUME-2024%20(1).pdf", "_blank");
});

document.getElementById("coverLetterBtn").addEventListener("click", function() {
    showContent("coverLetterContent");
});

document.getElementById("skillsBtn").addEventListener("click", function() {
    showContent("skillsContent");
});

document.getElementById("certificatesBtn").addEventListener("click", function() {
    showContent("certificatesContent"); // Corrected the ID to "certificatesContent"
});

document.getElementById("contactBtn").addEventListener("click", function() {
    showContent("contactContent");
});

function showContent(contentId) {
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    document.getElementById(contentId).style.display = "block";
}
