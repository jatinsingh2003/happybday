# Memory Website

A beautiful, interactive website to showcase your special memories with someone you love. This single-page website features photos, videos, love notes, and an interactive map of your shared experiences.

## Features

- Password protection for privacy
- Responsive design that works on all devices
- Beautiful animations and transitions
- Photo gallery with lightbox view
- Video montage with playlist
- Love notes section
- Interactive map showing special locations
- Background music
- Surprise ending with confetti and special message
- Floating hearts animation
- Smooth scrolling navigation

## Customization

### 1. Content Setup

1. Create the following folders in your project:
   - `images/` - for photos and video thumbnails
   - `videos/` - for video files
   - `music/` - for background music
   - `sounds/` - for sound effects

2. Edit the `memories` object in `script.js` to include your content:
   - Add your photos with captions
   - Add your videos with thumbnails and titles
   - Write your love notes
   - Add your special locations with coordinates

### 2. Media Files

1. Add your photos to the `images/` folder
2. Add your videos to the `videos/` folder
3. Add your background music as `background.mp3` in the `music/` folder
4. Add your hug sound effect as `hug.mp3` in the `sounds/` folder

### 3. Styling

The website uses a soft pink/cream color scheme by default. You can customize the colors by editing the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #e6a4b4;
    --secondary-color: #f8e8e8;
    --accent-color: #d88c9a;
    --text-color: #4a4a4a;
    --background-color: #fff5f5;
}
```

## Usage

1. Host the website on a web server
2. Share the URL with your loved one
3. They'll need to enter their name to access the content
4. They can explore the memories by scrolling through the sections
5. The surprise ending will show when they reach the bottom

## Technical Requirements

- Modern web browser with JavaScript enabled
- Internet connection for loading external resources (fonts, maps)
- Web server to host the files

## Dependencies

- Google Fonts (Dancing Script, Playfair Display)
- Font Awesome (for icons)
- Leaflet.js (for interactive map)
- Canvas Confetti (for surprise ending)

## Browser Support

The website is compatible with all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Mobile Support

The website is fully responsive and works on:
- Mobile phones
- Tablets
- Desktop computers

## Tips for Best Results

1. Optimize your images before adding them to the website
2. Keep video files small and in MP4 format
3. Use high-quality photos for the best visual experience
4. Test the website on different devices before sharing
5. Make sure all media files are properly named and placed in the correct folders

## Support

If you need help customizing the website or encounter any issues, please refer to the documentation or create an issue in the repository. #   h a p p y b d a y  
 