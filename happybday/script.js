// Sample data - Using local media files
const memories = {
    photos: [
        {
            src: 'images/1a.jpeg',
            caption: 'Remember this moment?'
        },
        {
            src: 'images/1b.jpeg',
            caption: 'Nice smile'
        },
        {
            src: 'images/WhatsApp Image 2025-04-03 at 11.51.41.jpeg',
            caption: 'So Chomu'
        },
        {
            src: 'images/WhatsApp Image 2025-04-03 at 11.51.41 (1).jpeg',
            caption: 'Regular VC'
        },
        {
            src: 'images/WhatsApp Image 2025-04-03 at 11.51.42.jpeg',
            caption: 'Us Posing'
        },
        {
            src: 'images/WhatsApp Image 2025-04-03 at 11.51.42 (1).jpeg',
            caption: 'Kitna khaogi'
        },
        {
            src: 'images/WhatsApp Image 2025-04-03 at 11.51.42 (2).jpeg',
            caption: 'Dancing idiot'
        },
        {
            src: 'images/WhatsApp Image 2025-04-03 at 11.51.43.jpeg',
            caption: 'Oo dekho kese dekhri'
        },
        {
            src: 'images/WhatsApp Image 2025-04-03 at 11.51.43 (1).jpeg',
            caption: 'Perfect Day'
        },
        {
            src: 'images/WhatsApp Image 2025-04-03 at 11.51.43 (2).jpeg',
            caption: 'Tumhare toothpaste me namak he??'
        },
        {
            src: 'images/WhatsApp Image 2025-04-03 at 11.51.44 (1).jpeg',
            caption: 'Cherished Moments'
        },
        {
            src: 'images/WhatsApp Image 2025-04-03 at 11.52.13.jpeg',
            caption: 'This is wiered but sweet'
        }
    ],
    videos: [
        {
            src: 'videos/WhatsApp Video 2025-04-03 at 11.48.12.mp4',
            thumbnail: 'images/WhatsApp Image 2025-04-03 at 11.51.41 (1).jpeg',
            title: 'Our Special Moments'
        },
        {
            src: 'videos/Untitled design (1).mp4',
            thumbnail: 'images/1a.jpeg',
            title: 'More Beautiful Memories'
        }
    ],
    notes: [
        {
            title: 'Happy Birthday My Love! 🎂',
            content: 'On this special day, I want to tell you how much you mean to me. Your smile brightens my darkest days, your love makes my heart complete, and your presence in my life is the greatest gift I could ever ask for. Thank you for being you, and for sharing your life with me. ❤️'
        },
        {
            title: '10 Things I Love About You 💝',
            content: '1. Your beautiful smile\n2. Your kind heart\n3. Your amazing sense of humor\n4. The way you care for others\n5. Your determination\n6. Your strength\n7. The way you make me feel special\n8. Your intelligence\n9. Your adventurous spirit\n10. Everything that makes you uniquely you'
        },
        {
            title: 'Our Story 📖',
            content: 'Every moment with you feels like a beautiful dream come true. From our first meeting to today, you\'ve filled my life with joy, laughter, and endless love. Here\'s to many more years of creating beautiful memories together!'
        }
    ]
};

// DOM Elements
const passwordModal = document.getElementById('passwordModal');
const mainContent = document.getElementById('mainContent');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const errorMessage = document.getElementById('errorMessage');
const recipientName = document.getElementById('recipientName');
const exploreBtn = document.getElementById('exploreBtn');
const galleryGrid = document.querySelector('.gallery-grid');
const videoPlayer = document.querySelector('.video-player');
const videoPlaylist = document.querySelector('.video-playlist');
const notesContainer = document.querySelector('.notes-container');
const hugButton = document.getElementById('hugButton');
const musicToggle = document.getElementById('musicToggle');
const kissButton = document.getElementById('kissButton');
const videoOverlay = document.querySelector('.video-overlay');
const kissVideo = document.getElementById('kissVideo');
const heartsContainer = document.querySelector('.floating-hearts-container');
const loveText = document.querySelector('.love-text');

// State
let currentVideoIndex = 0;
let backgroundMusic = null;
let isMusicPlaying = false;
let playCount = 0;
const maxPlays = 3;

// Password Protection
submitPassword.addEventListener('click', () => {
    const answer = passwordInput.value.trim().toLowerCase();
    if (answer === 'august') {
        passwordModal.style.display = 'none';
        mainContent.classList.remove('hidden');
        initializeContent();
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Did you forget bevkuf??';
        passwordInput.value = '';
        passwordInput.focus();
        // Shake animation for wrong answer
        passwordInput.classList.add('shake');
        setTimeout(() => {
            passwordInput.classList.remove('shake');
        }, 500);
    }
});

// Add keypress event for Enter key
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        submitPassword.click();
    }
});

// Initialize Content
function initializeContent() {
    loadPhotos();
    loadVideos();
    loadNotes();
    createFloatingHearts();
    createFallingPetals();
    setupScrollAnimations();
    setupBackgroundMusic();
    triggerWelcomeConfetti();
}

// Photo Gallery with Swiper
function loadPhotos() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    memories.photos.forEach((photo, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid';
        
        const hiddenNote = getHiddenNote(index);
        
        polaroid.innerHTML = `
            <img src="${photo.src}" alt="Memory">
            <div class="polaroid-caption">${photo.caption}</div>
            <div class="hidden-note">${hiddenNote}</div>
        `;
        
        slide.appendChild(polaroid);
        swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper
    new Swiper('.gallery-swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}

// Hidden notes for each photo
function getHiddenNote(index) {
    const notes = [
        "This was the day I knew I loved you... ❤️",
        "Your smile lights up my world! ✨",
        "Remember this moment? Pure magic! 🌟",
        "You make every day special... 💖",
        "Forever grateful for this memory! 🙏",
        "Just us, being us... Perfect! 💑",
        "This day was unforgettable! 🌈",
        "You're my favorite adventure! 🌎",
        "My heart skips a beat every time... 💓",
        "Together is my favorite place to be! 🏡",
        "You make me the happiest! 😊",
        "Our love story continues... 📖"
    ];
    return notes[index] || "Every moment with you is precious! 💝";
}

// Create falling rose petals
function createFallingPetals() {
    const petalsContainer = document.querySelector('.falling-petals');
    const numberOfPetals = 30;

    for (let i = 0; i < numberOfPetals; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${Math.random() * 3 + 2}s`;
        petal.style.animationDelay = `${Math.random() * 2}s`;
        petalsContainer.appendChild(petal);
    }
}

// Trigger welcome confetti
function triggerWelcomeConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
    }, 250);
}

// Video Player
function loadVideos() {
    if (memories.videos.length > 0) {
        // Create a container for videos
        const videoContainer = document.createElement('div');
        videoContainer.className = 'videos-grid';
        videoPlayer.appendChild(videoContainer);

        // Add each video
        memories.videos.forEach((videoData, index) => {
            const videoWrapper = document.createElement('div');
            videoWrapper.className = 'video-wrapper';
            
            const video = document.createElement('video');
            video.src = videoData.src;
            video.controls = true;
            video.muted = true;
            video.loop = true;
            
            const title = document.createElement('div');
            title.className = 'video-title';
            title.textContent = videoData.title;

            videoWrapper.appendChild(video);
            videoWrapper.appendChild(title);
            videoContainer.appendChild(videoWrapper);
        });
    }
}

function playVideo(index) {
    const video = videoPlayer.querySelector('video');
    video.src = memories.videos[index].src;
    video.play();
    currentVideoIndex = index;
}

// Love Notes
function loadNotes() {
    memories.notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content.replace(/\n/g, '<br>')}</p>
        `;
        notesContainer.appendChild(noteElement);
    });
}

// Floating Hearts Animation
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts-container');
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
            heart.innerHTML = '❤️';
            heartsContainer.appendChild(heart);
            
            setTimeout(() => heart.remove(), 3000);
        }, i * 200);
    }
}

// Scroll Animations
function setupScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
}

// Background Music
function setupBackgroundMusic() {
    backgroundMusic = new Audio('music/background.mp3');
    backgroundMusic.loop = true;

    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicToggle.classList.remove('playing');
        } else {
            backgroundMusic.play();
            musicToggle.classList.add('playing');
        }
        isMusicPlaying = !isMusicPlaying;
    });
}

// Surprise Ending
hugButton.addEventListener('click', () => {
    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Play hug sound
    const hugSound = new Audio('sounds/hug.mp3');
    hugSound.play();

    // Show love message
    const message = document.createElement('div');
    message.className = 'love-message';
    message.innerHTML = 'I Love You! ❤️';
    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
});

// Smooth Scroll
exploreBtn.addEventListener('click', () => {
    const gallerySection = document.getElementById('gallery');
    gallerySection.scrollIntoView({ behavior: 'smooth' });
});

// Kiss Button Animation
function startVideo(event) {
    videoOverlay.classList.add('show');
    setTimeout(() => {
        kissVideo.classList.add('show');
        loveText.classList.add('show');
        kissVideo.play();
    }, 100);

    createFloatingHearts();
}

function fadeOutVideo() {
    kissVideo.classList.remove('show');
    loveText.classList.remove('show');
    setTimeout(() => {
        videoOverlay.classList.remove('show');
        playCount = 0;
        kissVideo.currentTime = 0;
    }, 800);
}

kissVideo.addEventListener('ended', () => {
    playCount++;
    if (playCount < 3) {
        kissVideo.play();
    } else {
        fadeOutVideo();
    }
});

kissButton.addEventListener('click', startVideo); 