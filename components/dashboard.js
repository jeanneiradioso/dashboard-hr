class Dashboard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <p class="text-title-lg">Dashboard</p>

        <div class="flex main-content-dashboard">
          <div class="col-desk-6 col-mob-4 col-tab-12">
            <div style="padding: 5px;">
              <div class="card">
                <div class="card-header">
                  <div class="flex">
                    <div class="col-desk-6">
                      <p class="text-title"> Heatmap</p>
                    </div>
                    <div class="col-desk-6">
                      <div class="flex dates-dp">
                        <p class="text-md"> SICKDAY
                          <span><i class="i i-arrow-down"></i></span>
                        </p>
                        <p class="text-md"> MARCH 2023
                          <span><i class="i i-arrow-down"></i></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <div class="days-of-week-container">
                    <div class="days-of-week">
                      <div class="day">
                        <div class="day-label">
                          Mon
                        </div>
                      </div>
                      <div class="day">
                        <div class="day-label">
                          Tue
                        </div>
                      </div>
                      <div class="day">
                        <div class="day-label">
                          Wed
                        </div>
                      </div>
                      <div class="day">
                        <div class="day-label">
                          Thu
                        </div>
                      </div>
                      <div class="day">
                        <div class="day-label active">
                          Fri
                        </div>
                      </div>
                      <div class="day">
                        <div class="day-label">
                          Sat
                        </div>
                      </div>
                      <div class="day">
                        <div class="day-label">
                          Sun
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex leaves-heatmap">
                    <div class="col-desk-4 col-mob-4 leaves-heatmap-item center">
                      <div class="leaves-heatmap-label">
                        <p class="text-md text-title">Sick Leave</p>
                      </div>
                      <div class="leaves-heatmap-progress">
                        <circular-progress-component percentage="100"></circular-progress-component>
                      </div>
                    </div>
                    <div class="col-desk-4 col-mob-4 leaves-heatmap-item">
                      <div class="leaves-heatmap-label">
                        <p class="text-md text-title">Annual Leave</p>
                      </div>
                      <div class="leaves-heatmap-progress"> <circular-progress-component
                          percentage="100"></circular-progress-component></div>
                    </div>
                    <div class="col-desk-4 col-mob-4 leaves-heatmap-item">
                      <div class="leaves-heatmap-label">
                        <p class="text-md text-title">Emergency Leave</p>
                      </div>
                      <div class="leaves-heatmap-progress"> <circular-progress-component
                          percentage="100"></circular-progress-component></div>
                    </div>
                  </div>

                </div>
                <div class="card-footer">
                  <p class="text-sm">Most popular day: Friday</p>

                </div>
              </div>
            </div>
          </div>
          <div class="col-desk-6 col-mob-4 col-tab-12">
            <div style="padding: 5px;">
              <div class="card">
                <div class="card-header">
                  <div class="flex">
                    <div class="col-desk-6">
                      <p class="text-title"> Most Days Away</p>
                    </div>
                    <div class="col-desk-6">
                      <div class="flex dates-dp">

                        <p class="text-md"> MARCH 2023
                          <span><i class="i i-arrow-down"></i></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <div class="user-list flex">
                    <div class="user-list-profile col-desk-10">
                      <div class="user">
                        <img src="./assets/images/user-men.jpg" alt="">
                      </div>
                      <span>Mark Jacobs</span>
                    </div>
                    <div class="user-list-leaves col-desk-2">
                      <p>5.0 day(s)</p>
                    </div>
                  </div>
                  <div class="user-list flex">
                    <div class="user-list-profile col-desk-10">
                      <div class="user">
                        <img src="./assets/images/user-men2.jpg" alt="">
                      </div>
                      <span>Mark Jacobs</span>
                    </div>
                    <div class="user-list-leaves col-desk-2">
                      <p>5.0 day(s)</p>
                    </div>
                  </div>
                  <div class="user-list flex">
                    <div class="user-list-profile col-desk-10">
                      <div class="user">
                        <img src="./assets/images/user-woman.jpg" alt="">
                      </div>
                      <span>Mark Jacobs</span>
                    </div>
                    <div class="user-list-leaves col-desk-2">
                      <p>5.0 day(s)</p>
                    </div>
                  </div>
                  <div class="user-list flex">
                    <div class="user-list-profile col-desk-10">
                      <div class="user">
                        <img src="./assets/images/user-woman3.jpg" alt="">
                      </div>
                      <span>Mark Jacobs</span>
                    </div>
                    <div class="user-list-leaves col-desk-2">
                      <p>5.0 day(s)</p>
                    </div>
                  </div>
                </div>

                <div class="card-footer">
                  <p class="text-sm">TOTAL: 9.5 day(s)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        `
    }

}

customElements.define('dashboard-component', Dashboard);