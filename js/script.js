// Update current date
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Chart data
const chartData = {
    week: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [65, 70, 75, 72, 80, 85, 85],
        target: [80, 80, 80, 80, 80, 80, 80]
    },
    month: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        data: [70, 75, 82, 85],
        target: [80, 80, 80, 80]
    },
    year: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [60, 65, 70, 72, 75, 78, 80, 82, 83, 85, 85, 85],
        target: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
    }
};

// Initialize progress chart
const ctx = document.getElementById('progressChart').getContext('2d');
let progressChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: chartData.week.labels,
        datasets: [
            {
                label: 'Recovery Score',
                data: chartData.week.data,
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                tension: 0.4,
                fill: true,
                borderWidth: 3,
                pointBackgroundColor: '#6366f1',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            },
            {
                label: 'Target',
                data: chartData.week.target,
                borderColor: '#ec4899',
                borderWidth: 2,
                borderDash: [5, 5],
                pointRadius: 0,
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    },
                    font: {
                        size: 12
                    }
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 12
                    }
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index'
        },
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear'
            }
        }
    }
});

// Custom tooltip handling
const tooltip = document.querySelector('.chart-tooltip');
const chartContainer = document.querySelector('.chart-container');

chartContainer.addEventListener('mousemove', (e) => {
    const rect = chartContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const elements = progressChart.getElementsAtEventForMode(e, 'index', { intersect: false }, false);
    
    if (elements.length > 0) {
        const firstElement = elements[0];
        const datasetIndex = firstElement.datasetIndex;
        const index = firstElement.index;
        
        const value = progressChart.data.datasets[datasetIndex].data[index];
        const label = progressChart.data.labels[index];
        
        tooltip.querySelector('.chart-tooltip-title').textContent = label;
        tooltip.querySelector('.chart-tooltip-value').textContent = value + '%';
        
        tooltip.style.left = (x + 10) + 'px';
        tooltip.style.top = (y - 40) + 'px';
        tooltip.classList.add('visible');
    } else {
        tooltip.classList.remove('visible');
    }
});

chartContainer.addEventListener('mouseleave', () => {
    tooltip.classList.remove('visible');
});

// Handle chart period buttons with animation
document.querySelectorAll('.chart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const period = this.textContent.toLowerCase();
        document.querySelector('.chart-btn.active').classList.remove('active');
        this.classList.add('active');
        
        // Animate the transition
        progressChart.data.labels = chartData[period].labels;
        progressChart.data.datasets[0].data = chartData[period].data;
        progressChart.data.datasets[1].data = chartData[period].target;
        
        progressChart.update('active');
    });
});

// Add click event listeners to start buttons with animation
document.querySelectorAll('.start-btn').forEach(button => {
    button.addEventListener('click', function() {
        const exerciseItem = this.closest('.exercise-item');
        const exerciseName = exerciseItem.querySelector('h3').textContent;
        
        // Add loading animation
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        this.disabled = true;
        
        // Simulate loading
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-check"></i> Started';
            this.style.background = '#10B981';
            exerciseItem.style.background = 'rgba(16, 185, 129, 0.1)';
        }, 1500);
    });
});

// Add hover effects to stat cards with smooth animations
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = 'var(--shadow-lg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'var(--shadow)';
    });
});

// Simulate real-time updates with smooth transitions
setInterval(() => {
    const steps = document.querySelector('.stat-card:nth-child(1) .stat-number');
    const currentSteps = parseInt(steps.textContent.replace(',', ''));
    const increment = Math.floor(Math.random() * 10);
    
    steps.style.transform = 'scale(1.1)';
    steps.style.color = '#6366f1';
    
    setTimeout(() => {
        steps.textContent = (currentSteps + increment).toLocaleString();
        steps.style.transform = 'scale(1)';
        steps.style.color = 'var(--text-primary)';
    }, 200);
}, 5000);

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add exercise button animation
const addExerciseBtn = document.querySelector('.add-exercise-btn');
if (addExerciseBtn) {
    addExerciseBtn.addEventListener('click', function() {
        this.style.transform = 'rotate(90deg) scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'rotate(90deg) scale(1)';
        }, 200);
    });
}

$(document).ready