
// Sample video data
const videos = [
    { title: "Video 1", link: "https://example.com/video1.mp4" },
    { title: "Video 2", link: "https://example.com/video2.mp4" },
    { title: "Video 3", link: "https://example.com/video3.mp4" },
];

// Populate video list
const videoListUl = document.getElementById("video-list-ul");
videos.forEach((video) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = video.title;
    a.href = "#";
    a.onclick = () => playVideo(video.link);
    li.appendChild(a);
    videoListUl.appendChild(li);
});

