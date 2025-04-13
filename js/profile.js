// Profile Data
const profileData = {
    name: "Rishabh",
    bio: "Dedicated to my rehabilitation journey. Every day is a step towards better health and mobility.",
    stats: {
        exercisesCompleted: 156,
        daysStreak: 7,
        progress: 75
    },
    personalInfo: {
        age: 20,
        gender: "Male",
        height: "6'0\"",
        weight: "76 kg",
        condition: "Knee Rehabilitation",
        startDate: "January 15, 2024"
    },
    rehabilitationInfo: {
        injuryType: "ACL Tear",
        treatmentPlan: "Physical Therapy",
        physiotherapist: "Dr. Sarah Johnson",
        nextAppointment: "June 10, 2024",
        targetRecovery: "August 2024",
        emergencyContact: "+1 (555) 123-4567"
    },
    progress: [
        {
            title: "Mobility Score",
            value: 85,
            target: 100,
            icon: "fa-walking",
            improvement: "Improved by 15% this month"
        },
        {
            title: "Pain Level",
            value: 30,
            target: 100,
            icon: "fa-heartbeat",
            improvement: "Reduced by 20% this month"
        },
        {
            title: "Strength Index",
            value: 70,
            target: 100,
            icon: "fa-dumbbell",
            improvement: "Improved by 10% this month"
        }
    ],
    achievements: [
        {
            title: "7 Day Streak",
            description: "Completed exercises for 7 consecutive days",
            icon: "fa-fire"
        },
        {
            title: "Early Bird",
            description: "Completed morning exercises 5 times",
            icon: "fa-sun"
        },
        {
            title: "Consistency Master",
            description: "Maintained 90% exercise completion rate",
            icon: "fa-star"
        },
        {
            title: "Pain Management",
            description: "Reduced pain level by 50% in 2 months",
            icon: "fa-medal"
        },
        {
            title: "Mobility Milestone",
            description: "Walked 1km without assistance",
            icon: "fa-running"
        },
        {
            title: "Wellness Warrior",
            description: "Completed 100 rehabilitation exercises",
            icon: "fa-heart"
        }
    ],
    timeline: [
        {
            date: "Jan 15, 2024",
            title: "Rehabilitation Started",
            description: "Began physical therapy for ACL tear recovery"
        },
        {
            date: "Feb 1, 2024",
            title: "First Milestone",
            description: "Regained 30% mobility in affected knee"
        },
        {
            date: "Mar 10, 2024",
            title: "Pain Reduction",
            description: "Pain level decreased from 8/10 to 5/10"
        },
        {
            date: "Apr 5, 2024",
            title: "Strength Improvement",
            description: "Leg strength increased by 40%"
        },
        {
            date: "May 15, 2024",
            title: "Walking Milestone",
            description: "Walked 500m without assistance"
        },
        {
            date: "Jun 1, 2024",
            title: "Current Status",
            description: "75% recovered, continuing with advanced exercises"
        }
    ]
};

// Initialize profile page
document.addEventListener('DOMContentLoaded', () => {
    updateProfileInfo();
    initializeProgressBars();
    setupEventListeners();
    populateTimeline();
});

// Update profile information
function updateProfileInfo() {
    // Update personal info
    document.querySelector('.profile-info h1').textContent = profileData.name;
    document.querySelector('.profile-bio').textContent = profileData.bio;

    // Update stats
    document.querySelector('.stat-number:nth-child(1)').textContent = profileData.stats.exercisesCompleted;
    document.querySelector('.stat-number:nth-child(2)').textContent = profileData.stats.daysStreak;
    document.querySelector('.stat-number:nth-child(3)').textContent = `${profileData.stats.progress}%`;

    // Update personal information
    const infoItems = document.querySelectorAll('.info-card:first-child .info-item');
    const personalInfo = profileData.personalInfo;
    Object.keys(personalInfo).forEach((key, index) => {
        const label = infoItems[index].querySelector('label');
        const value = infoItems[index].querySelector('p');
        label.textContent = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        value.textContent = personalInfo[key];
    });

    // Update rehabilitation information
    const rehabItems = document.querySelectorAll('.info-card:nth-child(2) .info-item');
    const rehabInfo = profileData.rehabilitationInfo;
    Object.keys(rehabInfo).forEach((key, index) => {
        const label = rehabItems[index].querySelector('label');
        const value = rehabItems[index].querySelector('p');
        label.textContent = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        value.textContent = rehabInfo[key];
    });
}

// Initialize progress bars with animation
function initializeProgressBars() {
    const progressCards = document.querySelectorAll('.progress-card');
    progressCards.forEach((card, index) => {
        const progress = card.querySelector('.progress');
        const progressText = card.querySelector('.progress-text');
        const progressNote = card.querySelector('.progress-note');
        const data = profileData.progress[index];
        
        // Set initial width to 0
        progress.style.width = '0%';
        
        // Animate progress bar
        setTimeout(() => {
            const percentage = (data.value / data.target) * 100;
            progress.style.width = `${percentage}%`;
            progressText.textContent = `${data.value}/${data.target} (${Math.round(percentage)}%)`;
            progressNote.textContent = data.improvement;
        }, 300);
    });
}

// Populate timeline
function populateTimeline() {
    const timelineContainer = document.querySelector('.timeline');
    if (!timelineContainer) return;

    timelineContainer.innerHTML = '';
    
    profileData.timeline.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Edit avatar button
    const editAvatarBtn = document.querySelector('.edit-avatar');
    if (editAvatarBtn) {
        editAvatarBtn.addEventListener('click', () => {
            // Create file input
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        document.querySelector('.profile-avatar img').src = event.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            };
            
            input.click();
        });
    }

    // Achievement cards hover effect
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Function to update progress (can be called when new data is available)
function updateProgress(newData) {
    profileData.progress = newData;
    initializeProgressBars();
}

// Function to add new achievement
function addAchievement(achievement) {
    profileData.achievements.push(achievement);
    // Refresh achievements display
    const achievementsGrid = document.querySelector('.achievements-grid');
    achievementsGrid.innerHTML = ''; // Clear existing achievements
    
    profileData.achievements.forEach(achievement => {
        const card = document.createElement('div');
        card.className = 'achievement-card';
        card.innerHTML = `
            <i class="fas ${achievement.icon}"></i>
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
        `;
        achievementsGrid.appendChild(card);
    });
}

// Function to add new timeline entry
function addTimelineEntry(entry) {
    profileData.timeline.push(entry);
    populateTimeline();
} 