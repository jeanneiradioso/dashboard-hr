class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <!-- Sidebar Start -->
        <div class="left-sidebar">
  
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
               <i class="i i-grid-bold nav-link-icon"></i>
                <span class="nav-link-label">Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-calendar-bold nav-link-icon"></i>
                <span class="nav-link-label">Calendar</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-people-bold nav-link-icon"></i>
                <span class="nav-link-label">Recruitment</span>
                <span class="nav-link-badge">10</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-profile-bold nav-link-icon"></i>
                <span class="nav-link-label">Employees</span>
              </a>
            </li>
            <li class="nav-item active">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-clock-outline nav-link-icon"></i>
                <span class="nav-link-label">Leave</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-org-bold nav-link-icon"></i>
                <span class="nav-link-label">Organisation</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
               <i class="i i-money-bold nav-link-icon"></i>
               <span class="nav-link-label">Billings</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-message-question-bold nav-link-icon"></i>
                <span class="nav-link-label">Engagement</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-monitor-bold nav-link-icon"></i>
                <span class="nav-link-label">Development</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-medal-star-bold nav-link-icon"></i>
                <span class="nav-link-label">Performance</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-chart-bold nav-link-icon"></i>
                <span class="nav-link-label">Reports</span>
              </a>
            </li>
          </ul>
        </div>
        `
  }
}

customElements.define('sidebar-component', Sidebar);