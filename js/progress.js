// Sample data - In a real application, this would come from an API or database
const progressData = {
    dates: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7'],
    steps: [5000, 6000, 5500, 7000, 6500, 8000, 7500],
    exerciseMinutes: [30, 45, 30, 60, 45, 50, 40],
    recoveryScore: [65, 68, 70, 72, 75, 78, 80],
    painLevel: [4, 3, 3, 2, 2, 1, 1],
    exerciseCompletion: [80, 90, 85, 95, 88, 92, 87]
};

// Chart configurations
const chartConfigs = {
    overallProgress: {
        type: 'line',
        data: {
            labels: progressData.dates,
            datasets: [
                {
                    label: 'Recovery Score',
                    data: progressData.recoveryScore,
                    borderColor: '#4CAF50',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    },
    dailyActivity: {
        type: 'bar',
        data: {
            labels: progressData.dates,
            datasets: [
                {
                    label: 'Steps',
                    data: progressData.steps,
                    backgroundColor: '#2196F3'
                },
                {
                    label: 'Exercise Minutes',
                    data: progressData.exerciseMinutes,
                    backgroundColor: '#FF9800'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    },
    painLevel: {
        type: 'line',
        data: {
            labels: progressData.dates,
            datasets: [{
                label: 'Pain Level (1-10)',
                data: progressData.painLevel,
                borderColor: '#f44336',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10,
                    reverse: true
                }
            }
        }
    },
    exerciseCompletion: {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Missed'],
            datasets: [{
                data: [92, 8],
                backgroundColor: ['#4CAF50', '#f44336']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    }
};

// Initialize charts when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create charts
    const overallProgressChart = new Chart(
        document.getElementById('overallProgressChart'),
        chartConfigs.overallProgress
    );

    const dailyActivityChart = new Chart(
        document.getElementById('dailyActivityChart'),
        chartConfigs.dailyActivity
    );

    const painLevelChart = new Chart(
        document.getElementById('painLevelChart'),
        chartConfigs.painLevel
    );

    const exerciseCompletionChart = new Chart(
        document.getElementById('exerciseCompletionChart'),
        chartConfigs.exerciseCompletion
    );

    // Handle time period filter changes
    document.getElementById('timeFilter').addEventListener('change', (e) => {
        const period = e.target.value;
        // In a real application, this would fetch new data based on the selected period
        console.log(`Selected time period: ${period}`);
    });

    // Handle metric checkbox changes
    document.querySelectorAll('.checkbox-group input').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const metric = e.target.parentElement.textContent.trim();
            const isChecked = e.target.checked;
            // In a real application, this would update the charts based on selected metrics
            console.log(`Metric ${metric} ${isChecked ? 'enabled' : 'disabled'}`);
        });
    });
}); 