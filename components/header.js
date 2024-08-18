class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <div class="header flex">
                <div class="flex col-desk-5 col-mob-4">
                    <div class="header-side-logo">
                        <a href="./index.html"  class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <img src="../assets/images/logo.png" width="180"/>
                        </a>
                        <i class="i i-arrow-swap-horizontal"></i>
                    </div>
                    <div class="header-logo">
                        <i class="i i-a-logo"></i>
                        <span>Menumiz HR</span>
                    </div>
                </div>
                <div class="header-side-container col-desk-7 col-mob-4">
                    <div class="header-side-search">
                        <i class="i i-search"></i>
                        <input type="text" placeholder="Enter your keyword..."/>
                    </div>
                    <div class="header-side-settings">
                        <i class="i i-setting-linear"></i>
                    </div>
                    <div class="header-side-notification" id="notifBtn">
                        <i class="i i-notif-outline"></i>
                        <div class="notif-alert"></div>
                    </div>
                    <div class="header-side-user user">
                        <img src="../assets/images/user-woman2.png"> </img>
                    </div>
                </div>
            </div>
         `;

         let notifBtn = document.querySelector('#notifBtn');
         let notifComponent =  document.querySelector('#notifComponent');

         notifBtn.addEventListener('click', function( event) {
            if (notifComponent.classList.contains('hidden')) {
                notifComponent.classList.remove('hidden');
            } else {
                notifComponent.classList.add('hidden');
            }

            if (notifBtn.classList.contains('active')) {
                notifBtn.classList.remove('active');
            } else {
                notifBtn.classList.add('active');
            }

         })

    }
  }
  
  customElements.define('header-component', Header);