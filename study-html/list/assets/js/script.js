function openSidebar() {
    sidebar = document.getElementById('sidebar')

    sidebar.classList.remove('sidebar-closed')
    sidebar.classList.add('sidebar-open')
}

function closeSidebar() {
    sidebar = document.getElementById('sidebar')

    sidebar.classList.remove('sidebar-open')
    sidebar.classList.add('sidebar-closed')
}