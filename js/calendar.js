// Calendar functionality
document.addEventListener('DOMContentLoaded', () => {
    let currentDate = new Date();
    let currentView = 'month';
    let events = [];
    let selectedDate = null;

    // Initialize calendar
    updateCalendar();
    loadEvents();
    setupEventListeners();

    function setupEventListeners() {
        // Navigation buttons
        document.getElementById('prevMonth').addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            updateCalendar();
            animateTransition('slide-right');
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            updateCalendar();
            animateTransition('slide-left');
        });

        // View buttons
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector('.view-btn.active').classList.remove('active');
                btn.classList.add('active');
                currentView = btn.dataset.view;
                updateCalendar();
            });
        });

        // Add Event Modal
        const addEventModal = document.getElementById('addEventModal');
        const addEventForm = document.getElementById('addEventForm');
        const closeModal = document.querySelector('.close-modal');
        const cancelEvent = document.getElementById('cancelEvent');

        // Populate exercise options
        const eventTitleSelect = document.getElementById('eventTitle');
        exerciseData.forEach(exercise => {
            const option = document.createElement('option');
            option.value = exercise.id;
            option.textContent = exercise.title;
            eventTitleSelect.appendChild(option);
        });

        // Show modal when clicking on a day
        document.getElementById('calendarDays').addEventListener('click', (e) => {
            const dayElement = e.target.closest('.calendar-day');
            if (dayElement && !dayElement.classList.contains('empty')) {
                selectedDate = new Date(dayElement.dataset.date);
                document.getElementById('eventDate').value = selectedDate.toISOString().split('T')[0];
                showModal(addEventModal);
                highlightSelectedDay(dayElement);
            }
        });

        // Close modal
        closeModal.addEventListener('click', () => hideModal(addEventModal));
        cancelEvent.addEventListener('click', () => hideModal(addEventModal));

        // Click outside modal to close
        addEventModal.addEventListener('click', (e) => {
            if (e.target === addEventModal) {
                hideModal(addEventModal);
            }
        });

        // Handle form submission
        addEventForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newEvent = {
                id: Date.now(),
                title: eventTitleSelect.options[eventTitleSelect.selectedIndex].text,
                date: document.getElementById('eventDate').value,
                time: document.getElementById('eventTime').value,
                duration: document.getElementById('eventDuration').value,
                notes: document.getElementById('eventNotes').value
            };
            events.push(newEvent);
            saveEvents();
            updateCalendar();
            hideModal(addEventModal);
            addEventForm.reset();
            showNotification('Exercise added successfully!');
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                hideModal(addEventModal);
            }
        });
    }

    function updateCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        // Update month display with animation
        const monthDisplay = document.getElementById('currentMonth');
        monthDisplay.style.opacity = '0';
        setTimeout(() => {
            monthDisplay.textContent = new Date(year, month).toLocaleDateString('default', { 
                month: 'long', 
                year: 'numeric' 
            });
            monthDisplay.style.opacity = '1';
        }, 200);

        // Clear existing days
        const calendarDays = document.getElementById('calendarDays');
        calendarDays.innerHTML = '';

        // Get first day of month and total days
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const totalDays = lastDay.getDate();
        const startingDay = firstDay.getDay();

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendarDays.appendChild(emptyDay);
        }

        // Add days of the month
        for (let day = 1; day <= totalDays; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.dataset.date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            dayNumber.textContent = day;
            dayElement.appendChild(dayNumber);

            // Check if day has events
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            if (hasEvents(dateStr)) {
                dayElement.classList.add('has-events');
                addEventPreview(dayElement, dateStr);
            }

            // Check if day is today
            const today = new Date();
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayElement.classList.add('today');
            }

            calendarDays.appendChild(dayElement);
        }

        updateEventsList();
    }

    function addEventPreview(dayElement, dateStr) {
        const dayEvents = events.filter(event => event.date === dateStr);
        if (dayEvents.length > 0) {
            const preview = document.createElement('div');
            preview.className = 'event-preview';
            preview.innerHTML = `
                <div class="preview-time">${formatTime(dayEvents[0].time)}</div>
                <div class="preview-title">${dayEvents[0].title}</div>
            `;
            dayElement.appendChild(preview);
        }
    }

    function hasEvents(dateStr) {
        return events.some(event => event.date === dateStr);
    }

    function updateEventsList() {
        const eventsList = document.getElementById('eventsList');
        eventsList.innerHTML = '';

        const today = new Date().toISOString().split('T')[0];
        const todayEvents = events.filter(event => event.date === today);

        if (todayEvents.length === 0) {
            eventsList.innerHTML = `
                <div class="no-events">
                    <i class="fas fa-calendar-plus"></i>
                    <p>No exercises scheduled for today</p>
                    <button class="btn-primary" onclick="document.querySelector('.calendar-day.today').click()">
                        Add Exercise
                    </button>
                </div>
            `;
            return;
        }

        todayEvents.sort((a, b) => a.time.localeCompare(b.time)).forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = 'event-item';
            eventElement.innerHTML = `
                <div class="event-time">${formatTime(event.time)}</div>
                <div class="event-details">
                    <div class="event-title">${event.title}</div>
                    <div class="event-duration">${event.duration} minutes</div>
                </div>
                <button class="btn-icon" onclick="deleteEvent(${event.id})">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            eventsList.appendChild(eventElement);
        });
    }

    function formatTime(time) {
        return new Date(`2000-01-01T${time}`).toLocaleTimeString('default', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

    function saveEvents() {
        localStorage.setItem('calendarEvents', JSON.stringify(events));
    }

    function loadEvents() {
        const savedEvents = localStorage.getItem('calendarEvents');
        if (savedEvents) {
            events = JSON.parse(savedEvents);
        }
    }

    function showModal(modal) {
        modal.style.display = 'block';
        setTimeout(() => modal.classList.add('show'), 10);
    }

    function hideModal(modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    }

    function highlightSelectedDay(dayElement) {
        document.querySelectorAll('.calendar-day').forEach(day => {
            day.classList.remove('selected');
        });
        dayElement.classList.add('selected');
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    function animateTransition(direction) {
        const calendarDays = document.getElementById('calendarDays');
        calendarDays.classList.add(direction);
        setTimeout(() => calendarDays.classList.remove(direction), 300);
    }

    // Make deleteEvent function globally available
    window.deleteEvent = function(eventId) {
        if (confirm('Are you sure you want to delete this exercise?')) {
            events = events.filter(event => event.id !== eventId);
            saveEvents();
            updateCalendar();
            showNotification('Exercise deleted successfully!');
        }
    };
}); 