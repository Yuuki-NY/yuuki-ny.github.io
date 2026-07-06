# Nicholas Yap — Portfolio

Personal portfolio site built with HTML, CSS, and vanilla JS.  
Live at: `https://<your-github-username>.github.io/<repo-name>/`

---

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio`)
2. Upload all files from this zip — keeping the folder structure intact
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch`
5. Choose `main` branch, `/ (root)` folder → click **Save**
6. Your site will be live at `https://<username>.github.io/portfolio/` within a minute or two

---

## Folder Structure

```
/
├── index.html          ← Main portfolio page (rename from portfolio.html)
├── README.md           ← This file
├── images/             ← Drop your photos here, then update src= paths in index.html
│   ├── about-1.jpg         (About section — field photo)
│   ├── about-2.jpg         (About section — lab photo)
│   ├── project-grass-1.jpg (Grass project gallery)
│   ├── project-grass-2.jpg
│   ├── project-grass-3.jpg
│   ├── project-grass-4.jpg
│   ├── project-grass-5.jpg
│   ├── project-grass-6.jpg
│   └── exp-*/              (Experience slideshow images — one folder per job)
└── videos/             ← Drop demo videos here (or use YouTube embed IDs)
```

---

## Adding Your Images

### About section
In `index.html`, find the two `.about-img-placeholder` divs and replace with:
```html
<img src="images/about-1.jpg" alt="Field photo" style="width:100%;height:100%;object-fit:cover;">
```

### Project modals
In the `PROJECTS` JS array, find the `images` array for each project and add a `src` field:
```js
{ label: 'Grass Field Test', src: 'images/project-grass-1.jpg' }
```

### Experience slideshows
In the HTML, replace `<div class="exp-slide-placeholder">` with:
```html
<img src="images/exp-odl-1.jpg" alt="CubeSat Assembly" class="exp-slide-img">
```

### Videos (Grass project)
In the `PROJECTS` array, find the Grass entry and change:
```js
video: { type: 'youtube', id: 'YOUR_YOUTUBE_VIDEO_ID' }
```
Or for a local video file, use `type: 'local'` and add a `<video>` tag in the modal HTML.

---

## Customising Content

All placeholder text (job titles, project descriptions, education, contact links) is in `index.html`.  
Search for `href="#"` to find all links that still need real URLs added.

The map `LOCATIONS` array and `PROJECTS` array are both in the `<script>` block at the bottom of `index.html`.
