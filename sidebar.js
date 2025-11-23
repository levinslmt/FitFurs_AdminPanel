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
                <li class='leftChoices'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="size-6">
                        <path
                            d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                        <path fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                            clip-rule="evenodd" />
                    </svg>
                    Pet Management</li>
                </a>
                <a href="../pages/appointments.html">    <li class='leftChoices'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="size-6">
                        <path
                            d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                        <path
                            d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                        <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                    </svg>
                    Appointments</li>
                    </a>
               
            </ul>
        </nav>
        `;
    }
}
// JavaScript to handle selection with localStorage persistence
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.sidebar li');
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

