class sidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p class='foodie'>Admin Panel</p>
        <link rel = "stylesheet" href="./styles/sidebar.css">
        <nav class="sidebar">
            <ul>
                <a href="../pages/dashboard.html">
                    <li class="selected">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path
                                d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path
                                d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                        Dashboard
                    </li>
                </a>
                <a href="../pages/users.html">
                <li class='leftChoices'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="size-6">
                        <path fill-rule="evenodd"
                            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                            clip-rule="evenodd" />
                    </svg>
                    User Management</li>
                    </a>
                <a href="../pages/pets.html">
                <li class='leftChoices'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>Animal-dog-20-filled SVG Icon</title><path fill="currentColor" d="M12 2c-.33 0-.814.095-1.23.394c-.44.318-.77.843-.77 1.606v1.253a.9.9 0 0 0 .156.489c.094.131.256.26.593.26s.499-.129.593-.26a.9.9 0 0 0 .156-.489a.5.5 0 1 1 1 0c0 .289-.082.71-.344 1.073c-.28.39-.742.676-1.405.676c-.32 0-.595-.067-.824-.18c-.143 1.112-.56 2.606-1.779 3.824c-1.086 1.087-1.619 2.433-1.881 3.483a9.3 9.3 0 0 0-.26 1.716l-.004.11v.031l-.001.01V16l-.002.029q-.002.043-.015.123a1.3 1.3 0 0 1-.118.374a.8.8 0 0 1-.275.324c-.12.08-.302.15-.59.15a2 2 0 0 1-1.2-3.6a.5.5 0 1 0-.601-.8A3 3 0 0 0 5 18h8v-.5c0-.405-.188-1.046-.733-1.332A1.6 1.6 0 0 0 11.5 16h-1a.5.5 0 0 1 0-1h1q.264 0 .5.04V12.5a.5.5 0 0 1 1 0v2.948c.79.57 1 1.518 1 2.052v.5h2.5a.5.5 0 0 0 .5-.5c0-.87-.296-1.523-.805-1.947A2.43 2.43 0 0 0 15 15.038V7h.5A1.5 1.5 0 0 0 17 5.5V4.283a1 1 0 0 0-.485-.857l-1.783-1.07A2.5 2.5 0 0 0 13.446 2z"/></svg>
                    Pet Management</li>
                </a>
                <a href="../pages/appointments.html">    <li class='leftChoices'><svg xmlns="http://www.w3.org/2000/svg" width="1025" height="1024" viewBox="0 0 1025 1024"><title>Appointment SVG Icon</title><path fill="currentColor" d="M800.712 1024q-93 0-158.5-65.5t-65.5-158.5t65.5-158.5t158.5-65.5t158.5 65.5t65.5 158.5t-65.5 158.5t-158.5 65.5m128-256h-96v-96q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v128q0 12 7.5 20.5t18.5 10.5q2 1 6 1h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m-448 64h-192q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-192-192h192q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m320-64h-320q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h320q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m128-128h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h448q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-256h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h448q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0 128h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h448q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m96-224q0-13-9.5-22.5t-22.5-9.5h-640q-13 0-22.5 9.5t-9.5 22.5v32q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5v64q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5v64q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19v64q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19v32q0 13 9.5 22.5t22.5 9.5h416v64h-448q-26 0-45-19t-19-45v-64q-26 0-45-19t-19-45.5t19-45t45-18.5v-64q-26 0-45-19t-19-45.5t19-45t45-18.5v-64q-26 0-45-18.5t-19-45.5t19-45.5t45-18.5v-64q-26 0-45-18.5t-19-45.5t19-45.5t45-18.5V64q0-27 19-45.5t45-18.5h704q26 0 45 18.5t19 45.5v448h-64z"/></svg>
                    Appointments</li>
                    </a>
                <a href="../index.html">
                    <li class='logout leftChoices'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M10 17l5-5-5-5v3H3v4h7v3zM20 3H12c-1.1 0-2 .9-2 2v2h2V5h8v14h-8v-2h-2v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                        </svg>
                        Logout
                    </li>
                </a>
            </ul>
        </nav>
        `;
    }
}
// JavaScript to handle selection with localStorage persistence
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.sidebar li:not(.logout)');
    const selectedIndexKey = 'selectedSidebarIndex';
    // Function to restore selection from localStorage
    function restoreSelection() {
        const savedIndex = localStorage.getItem(selectedIndexKey);
        if (savedIndex !== null) {
            const index = parseInt(savedIndex, 10);
            if (index >= 0 && index < menuItems.length) {
                menuItems.forEach(item => item.classList.remove('selected'));
                menuItems[index].classList.add('selected');
            }
        } else {
            // Default to first item if nothing saved
            menuItems[0].classList.add('selected');
            localStorage.setItem(selectedIndexKey, '0');
        }
    }
    // Function to save selection
    function saveSelection(index) {
        localStorage.setItem(selectedIndexKey, index.toString());
    }
    // Restore on load
    restoreSelection();
    // Handle clicks
    menuItems.forEach(function (item, index) {
        item.addEventListener('click', function () {
            // Remove selected class from all items
            menuItems.forEach(function (otherItem) {
                otherItem.classList.remove('selected');
            });
            // Add selected class to clicked item
            this.classList.add('selected');
            // Save to localStorage
            saveSelection(index);
        });
    });
});

export default sidebar;
