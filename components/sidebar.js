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
                  Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-calendar-bold nav-link-icon"></i>
                Calendar
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-people-bold nav-link-icon"></i>
                <span>Recruitment</span>
                <span class="nav-link-badge">10</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-profile-bold nav-link-icon"></i>
                Employees
              </a>
            </li>
            <li class="nav-item active">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-clock-outline nav-link-icon"></i>
                Leave
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-org-bold nav-link-icon"></i>
                Organisation
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
               <i class="i i-money-bold nav-link-icon"></i>
                Billings
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-message-question-bold nav-link-icon"></i>
                Engagement
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-monitor-bold nav-link-icon"></i>
                Development
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-medal-star-bold nav-link-icon"></i>
                Performance
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <i class="i i-chart-bold nav-link-icon"></i>
                Reports
              </a>
            </li>
          </ul>
        </div>
        `
  }
}

customElements.define('sidebar-component', Sidebar);