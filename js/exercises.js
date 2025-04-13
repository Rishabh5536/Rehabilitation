// Exercise data - In a real application, this would come from an API or database
const exerciseData = [
    {
        id: 1,
        title: "Knee Extension",
        category: "strength",
        difficulty: "beginner",
        bodyPart: "lower",
        duration: "15 minutes",
        calories: 50,
        reps: 12,
        sets: 3,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        video: "https://example.com/video1.mp4",
        instructions: [
            "Sit on a chair with your back straight",
            "Extend your right leg forward until it's parallel to the ground",
            "Hold for 3 seconds",
            "Slowly lower your leg back down",
            "Repeat with left leg"
        ],
        benefits: [
            "Strengthens quadriceps muscles",
            "Improves knee stability",
            "Enhances range of motion",
            "Reduces knee pain"
        ],
        precautions: [
            "Stop if you feel sharp pain",
            "Keep movements slow and controlled",
            "Maintain proper form throughout",
            "Don't lock your knee at full extension"
        ],
        equipment: [
            "Chair",
            "Comfortable clothing"
        ]
    },
    {
        id: 2,
        title: "Shoulder Rotation",
        category: "flexibility",
        difficulty: "beginner",
        bodyPart: "upper",
        duration: "10 minutes",
        calories: 30,
        reps: 10,
        sets: 2,
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        video: "https://example.com/video2.mp4",
        instructions: [
            "Stand with feet shoulder-width apart",
            "Raise arms to shoulder height",
            "Rotate arms in small circles",
            "Keep movements controlled",
            "Reverse direction after 10 rotations"
        ],
        benefits: [
            "Improves shoulder mobility",
            "Reduces stiffness",
            "Enhances range of motion",
            "Prevents shoulder injuries"
        ],
        precautions: [
            "Start with small circles",
            "Stop if you feel pain",
            "Keep shoulders relaxed",
            "Maintain good posture"
        ],
        equipment: [
            "None required"
        ]
    },
    {
        id: 3,
        title: "Balance Exercise",
        category: "balance",
        difficulty: "intermediate",
        bodyPart: "lower",
        duration: "12 minutes",
        calories: 40,
        reps: 8,
        sets: 3,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        video: "https://example.com/video3.mp4",
        instructions: [
            "Stand on one leg with your knee slightly bent",
            "Raise your other leg off the ground",
            "Hold for 30 seconds",
            "Switch legs and repeat",
            "For advanced users, try closing your eyes"
        ],
        benefits: [
            "Improves balance and coordination",
            "Strengthens ankle and knee stability",
            "Enhances proprioception",
            "Reduces fall risk"
        ],
        precautions: [
            "Start near a wall for support if needed",
            "Progress gradually to more challenging variations",
            "Stop if you feel unstable",
            "Focus on controlled movements"
        ],
        equipment: [
            "None required",
            "Optional: chair for support"
        ]
    },
    {
        id: 4,
        title: "Walking",
        category: "cardio",
        difficulty: "beginner",
        bodyPart: "full",
        duration: "30 minutes",
        calories: 150,
        reps: 0,
        sets: 1,
        image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        video: "https://example.com/video4.mp4",
        instructions: [
            "Start with a comfortable pace",
            "Maintain good posture with shoulders back",
            "Swing arms naturally",
            "Land on your heel and roll to your toe",
            "Gradually increase pace as tolerated"
        ],
        benefits: [
            "Improves cardiovascular health",
            "Strengthens muscles and bones",
            "Reduces stress and anxiety",
            "Helps with weight management"
        ],
        precautions: [
            "Wear appropriate footwear",
            "Stay hydrated",
            "Start slowly and build up gradually",
            "Stop if you experience pain"
        ],
        equipment: [
            "Comfortable walking shoes",
            "Water bottle"
        ]
    },
    {
        id: 5,
        title: "Hamstring Stretch",
        category: "stretching",
        difficulty: "beginner",
        bodyPart: "lower",
        duration: "8 minutes",
        calories: 20,
        reps: 3,
        sets: 1,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        video: "https://example.com/video5.mp4",
        instructions: [
            "Sit on the floor with one leg extended",
            "Bend the other leg with foot against inner thigh",
            "Reach toward your toes with both hands",
            "Hold for 30 seconds",
            "Switch legs and repeat"
        ],
        benefits: [
            "Increases hamstring flexibility",
            "Reduces lower back pain",
            "Improves posture",
            "Enhances range of motion"
        ],
        precautions: [
            "Don't bounce or force the stretch",
            "Stop if you feel sharp pain",
            "Breathe deeply and relax",
            "Progress gradually"
        ],
        equipment: [
            "Yoga mat (optional)"
        ]
    },
    {
        id: 6,
        title: "Core Strengthening",
        category: "strength",
        difficulty: "intermediate",
        bodyPart: "core",
        duration: "15 minutes",
        calories: 60,
        reps: 15,
        sets: 3,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        video: "https://example.com/video6.mp4",
        instructions: [
            "Lie on your back with knees bent",
            "Place hands behind your head",
            "Lift shoulders off the ground",
            "Hold for 3 seconds",
            "Lower back down with control"
        ],
        benefits: [
            "Strengthens abdominal muscles",
            "Improves posture",
            "Reduces lower back pain",
            "Enhances stability"
        ],
        precautions: [
            "Keep lower back pressed to the floor",
            "Don't pull on your neck",
            "Breathe steadily throughout",
            "Start with fewer reps if needed"
        ],
        equipment: [
            "Exercise mat"
        ]
    },
    {
        id: 7,
        title: "Tai Chi",
        category: "balance",
        difficulty: "intermediate",
        bodyPart: "full",
        duration: "20 minutes",
        calories: 70,
        reps: 0,
        sets: 1,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        video: "https://example.com/video7.mp4",
        instructions: [
            "Stand with feet shoulder-width apart",
            "Shift weight to one leg",
            "Lift opposite arm slowly",
            "Move in flowing, circular motions",
            "Focus on breathing and balance"
        ],
        benefits: [
            "Improves balance and coordination",
            "Reduces stress and anxiety",
            "Enhances flexibility",
            "Promotes mindfulness"
        ],
        precautions: [
            "Start with basic movements",
            "Keep movements slow and controlled",
            "Stop if you feel dizzy",
            "Practice on a flat, stable surface"
        ],
        equipment: [
            "Comfortable clothing",
            "Flat, stable surface"
        ]
    },
    {
        id: 8,
        title: "Resistance Band Exercises",
        category: "strength",
        difficulty: "beginner",
        bodyPart: "upper",
        duration: "15 minutes",
        calories: 45,
        reps: 12,
        sets: 3,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        video: "https://example.com/video8.mp4",
        instructions: [
            "Stand on the resistance band with feet shoulder-width apart",
            "Hold the band handles at shoulder height",
            "Press upward until arms are extended",
            "Lower with control",
            "Repeat for specified reps"
        ],
        benefits: [
            "Strengthens upper body muscles",
            "Improves shoulder stability",
            "Enhances muscle endurance",
            "Low-impact exercise option"
        ],
        precautions: [
            "Choose appropriate band resistance",
            "Maintain proper form throughout",
            "Control the movement in both directions",
            "Stop if you feel joint pain"
        ],
        equipment: [
            "Resistance band",
            "Comfortable clothing"
        ]
    },
    {
        id: 9,
        title: "Yoga Flow",
        category: "flexibility",
        difficulty: "intermediate",
        bodyPart: "full",
        duration: "25 minutes",
        calories: 80,
        reps: 0,
        sets: 1,
        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        video: "https://example.com/video9.mp4",
        instructions: [
            "Start in mountain pose",
            "Flow through sun salutations",
            "Hold poses for 5-10 breaths",
            "Focus on alignment and breathing",
            "End with relaxation pose"
        ],
        benefits: [
            "Improves flexibility and strength",
            "Reduces stress and anxiety",
            "Enhances body awareness",
            "Promotes relaxation"
        ],
        precautions: [
            "Listen to your body",
            "Don't force poses",
            "Use props if needed",
            "Avoid if you have certain medical conditions"
        ],
        equipment: [
            "Yoga mat",
            "Comfortable clothing",
            "Optional: yoga blocks and strap"
        ]
    },
    {
        id: 10,
        title: "Swimming",
        category: "cardio",
        difficulty: "intermediate",
        bodyPart: "full",
        duration: "30 minutes",
        calories: 200,
        reps: 0,
        sets: 1,
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        video: "https://example.com/video10.mp4",
        instructions: [
            "Start with a warm-up lap",
            "Use proper swimming technique",
            "Focus on breathing rhythm",
            "Alternate between different strokes",
            "Cool down with gentle laps"
        ],
        benefits: [
            "Excellent cardiovascular workout",
            "Low-impact on joints",
            "Works all major muscle groups",
            "Improves lung capacity"
        ],
        precautions: [
            "Ensure proper swimming ability",
            "Stay within your limits",
            "Stay hydrated",
            "Be aware of pool safety rules"
        ],
        equipment: [
            "Swimsuit",
            "Goggles (optional)",
            "Swim cap (optional)"
        ]
    }
];

// DOM Elements
const exerciseGrid = document.querySelector('.exercise-grid');
const exerciseModal = document.getElementById('exerciseModal');
const exerciseTimerModal = document.getElementById('exerciseTimerModal');
const searchInput = document.getElementById('exerciseSearch');
const categoryFilter = document.getElementById('categoryFilter');
const difficultyFilter = document.getElementById('difficultyFilter');
const bodyPartFilter = document.getElementById('bodyPartFilter');

// Timer variables
let timer;
let timeLeft;
let currentExercise = null;
let isPaused = false;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayExercises(exerciseData);
    setupEventListeners();
});

// Display exercises in the grid
function displayExercises(exercises) {
    exerciseGrid.innerHTML = '';
    exercises.forEach(exercise => {
        const card = createExerciseCard(exercise);
        exerciseGrid.appendChild(card);
    });
}

// Create exercise card
function createExerciseCard(exercise) {
    const card = document.createElement('div');
    card.className = 'exercise-card';
    card.innerHTML = `
        <div class="exercise-image">
            <img src="${exercise.image}" alt="${exercise.title}">
            <div class="exercise-overlay">
                <span class="tag ${exercise.category}">${exercise.category}</span>
                <span class="tag ${exercise.difficulty}">${exercise.difficulty}</span>
            </div>
        </div>
        <div class="exercise-info">
            <h3>${exercise.title}</h3>
            <div class="exercise-meta">
                <span><i class="fas fa-clock"></i> ${exercise.duration}</span>
                <span><i class="fas fa-dumbbell"></i> ${exercise.sets} sets</span>
            </div>
            <p class="exercise-description">${exercise.benefits[0]}</p>
        </div>
        <div class="exercise-actions">
            <button class="btn-primary view-details" data-id="${exercise.id}">
                View Details
            </button>
        </div>
    `;
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Search and filter events
    searchInput.addEventListener('input', filterExercises);
    categoryFilter.addEventListener('change', filterExercises);
    difficultyFilter.addEventListener('change', filterExercises);
    bodyPartFilter.addEventListener('change', filterExercises);

    // Modal close buttons
    document.querySelector('.close-modal').addEventListener('click', () => {
        exerciseModal.style.display = 'none';
    });

    document.querySelector('.close-timer').addEventListener('click', () => {
        exerciseTimerModal.style.display = 'none';
        stopTimer();
    });

    // View details button click
    exerciseGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details')) {
            const exerciseId = parseInt(e.target.dataset.id);
            const exercise = exerciseData.find(ex => ex.id === exerciseId);
            if (exercise) {
                showExerciseDetails(exercise);
            }
        }
    });

    // Media controls
    document.getElementById('imageBtn').addEventListener('click', () => {
        document.getElementById('modalImage').style.display = 'block';
        document.getElementById('modalVideo').style.display = 'none';
        document.getElementById('imageBtn').classList.add('active');
        document.getElementById('videoBtn').classList.remove('active');
    });

    document.getElementById('videoBtn').addEventListener('click', () => {
        document.getElementById('modalImage').style.display = 'none';
        document.getElementById('modalVideo').style.display = 'block';
        document.getElementById('videoBtn').classList.add('active');
        document.getElementById('imageBtn').classList.remove('active');
    });

    // Timer controls
    document.getElementById('pauseTimer').addEventListener('click', toggleTimer);
    document.getElementById('resetTimer').addEventListener('click', resetTimer);
    document.getElementById('completeExercise').addEventListener('click', completeExercise);
}

// Filter exercises based on search and filters
function filterExercises() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const difficulty = difficultyFilter.value;
    const bodyPart = bodyPartFilter.value;

    const filteredExercises = exerciseData.filter(exercise => {
        const matchesSearch = exercise.title.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || exercise.category === category;
        const matchesDifficulty = difficulty === 'all' || exercise.difficulty === difficulty;
        const matchesBodyPart = bodyPart === 'all' || exercise.bodyPart === bodyPart;

        return matchesSearch && matchesCategory && matchesDifficulty && matchesBodyPart;
    });

    displayExercises(filteredExercises);
}

// Show exercise details in modal
function showExerciseDetails(exercise) {
    currentExercise = exercise;
    
    // Update modal content
    document.getElementById('modalTitle').textContent = exercise.title;
    document.getElementById('modalCategory').textContent = exercise.category;
    document.getElementById('modalDifficulty').textContent = exercise.difficulty;
    document.getElementById('modalBodyPart').textContent = exercise.bodyPart;
    
    document.getElementById('modalImage').src = exercise.image;
    document.getElementById('modalVideo').src = exercise.video;
    
    document.getElementById('modalDuration').textContent = exercise.duration;
    document.getElementById('modalCalories').textContent = `${exercise.calories} cal`;
    document.getElementById('modalReps').textContent = `${exercise.reps} reps`;
    document.getElementById('modalSets').textContent = `${exercise.sets} sets`;

    // Update lists
    const instructionsList = document.getElementById('modalInstructions');
    const benefitsList = document.getElementById('modalBenefits');
    const precautionsList = document.getElementById('modalPrecautions');
    const equipmentList = document.getElementById('modalEquipment');

    instructionsList.innerHTML = exercise.instructions.map(instruction => `<li>${instruction}</li>`).join('');
    benefitsList.innerHTML = exercise.benefits.map(benefit => `<li>${benefit}</li>`).join('');
    precautionsList.innerHTML = exercise.precautions.map(precaution => `<li>${precaution}</li>`).join('');
    equipmentList.innerHTML = exercise.equipment.map(item => `<li>${item}</li>`).join('');

    // Show modal
    exerciseModal.style.display = 'block';
}

// Start exercise timer
function startExercise() {
    exerciseModal.style.display = 'none';
    exerciseTimerModal.style.display = 'block';
    
    // Initialize timer
    timeLeft = 60; // 1 minute per set
    updateTimerDisplay();
    startTimer();
}

// Timer functions
function startTimer() {
    timer = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                // Handle set completion
            }
        }
    }, 1000);
}

function toggleTimer() {
    isPaused = !isPaused;
    const pauseBtn = document.getElementById('pauseTimer');
    pauseBtn.innerHTML = isPaused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 60;
    updateTimerDisplay();
    startTimer();
}

function stopTimer() {
    clearInterval(timer);
    isPaused = false;
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timerDisplay').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function completeExercise() {
    exerciseTimerModal.style.display = 'none';
    stopTimer();
    // Handle exercise completion (save progress, update stats, etc.)
    alert('Exercise completed! Great job!');
}

// Add to calendar functionality
document.getElementById('addToCalendar').addEventListener('click', () => {
    // In a real application, this would open a calendar modal
    // and allow the user to schedule the exercise
    alert('Exercise added to calendar!');
});

// Start exercise button
document.getElementById('startExercise').addEventListener('click', startExercise); 