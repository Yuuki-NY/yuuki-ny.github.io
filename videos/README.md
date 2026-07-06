# Videos Folder

Place local video files here if you prefer self-hosting over YouTube embeds.

## Grass Demo Video
- `grass-demo.mp4` — Self-balancing and BLE control demo

To use a local video in the project modal, find the Grass entry in the PROJECTS array
in index.html and update to:
```js
video: { type: 'local', src: 'videos/grass-demo.mp4', label: 'Grass Demo' }
```

Then in the openModal() function, add a handler for type === 'local':
```js
} else if (project.video.type === 'local') {
  videoEl.innerHTML = `
    <video controls style="width:100%;height:100%;object-fit:cover;">
      <source src="${project.video.src}" type="video/mp4">
    </video>`;
}
```

## Recommended: YouTube
Uploading to YouTube (even as unlisted) and using the embed ID is simpler and
gives better performance. In the PROJECTS array, set:
```js
video: { type: 'youtube', id: 'YOUR_11_CHAR_VIDEO_ID' }
```
The portfolio will automatically embed it as an iframe.
