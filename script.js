$(document).ready(function() {
    // Load tasks from localStorage
    loadTasks();

    // Handle form submission
    $('#taskForm').on('submit', function(e) {
        e.preventDefault();
        
        const taskInput = $('#taskInput');
        const taskText = taskInput.val().trim();
        
        if (taskText) {
            addTask(taskText);
            taskInput.val('');
            saveTasks();
        }
    });

    // Handle task completion and deletion
    $('#taskList').on('click', '.btn-complete', function() {
        $(this).closest('.list-group-item').toggleClass('completed');
        saveTasks();
    });

    $('#taskList').on('click', '.btn-delete', function() {
        $(this).closest('.list-group-item').remove();
        saveTasks();
    });

    function addTask(text) {
        const taskHtml = `
            <li class="list-group-item">
                <span class="task-text">${text}</span>
                <div class="task-actions">
                    <button class="btn btn-complete"><i class="fas fa-check"></i>Complete</button>
                    <button class="btn btn-delete"><i class="fas fa-trash"></i>Delete</button>
                </div>
            </li>
        `;
        $('#taskList').append(taskHtml);
    }

    function saveTasks() {
        const tasks = [];
        $('.list-group-item').each(function() {
            tasks.push({
                text: $(this).find('.task-text').text(),
                completed: $(this).hasClass('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const taskHtml = `
                <li class="list-group-item ${task.completed ? 'completed' : ''}">
                    <span class="task-text">${task.text}</span>
                    <div class="task-actions">
                        <button class="btn btn-complete"><i class="fas fa-check"></i>Complete</button>
                        <button class="btn btn-delete"><i class="fas fa-trash"></i>Delete</button>
                    </div>
                </li>
            `;
            $('#taskList').append(taskHtml);
        });
    }
});
