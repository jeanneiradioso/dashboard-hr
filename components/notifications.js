class Notification extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="notifications">
        <div class="flex">
          <div class="col-desk-6">
            <p class="text-title-lg">Notifications</p>
          </div>
          <div class="col-desk-6 col-end">
            <p class="text-sm mark">Mark all as read </p>
          </div>
        </div>

        <div class="notifications-list">
          <div class="notifications-list-item">
            <div class="notifications-list-item-status"></div>
            <div class="notifications-list-item-user user">
              <img src="./assets/images/user-men.jpg" alt="">
            </div>
            <div class="notifications-list-item-details">
              <p class="bold-white text-sm"> Mark Jacobs has applied for fleave and is currenly awaiting approval.
              </p>
              <p class="text-sm date-text">Today at 09:42 AM</p>
            </div>
          </div>
          <div class="notifications-list-item">
            <div class="notifications-list-item-status"></div>
            <div class="notifications-list-item-user user">
              <img src="./assets/images/user-men3.jpg" alt="">
            </div>
            <div class="notifications-list-item-details">
              <p class="bold-white text-sm"> <b>Mark Jacobs</b> has applied for fleave and is currenly awaiting approval.
              </p>
              <p class="text-sm date-text">Today at 09:42 AM</p>
            </div>
          </div>
          <div class="notifications-list-item old-notif">
            <div class="notifications-list-item-status"></div>
            <div class="notifications-list-item-user user">
              <img src="./assets/images/user-men2.jpg" alt="">
            </div>
            <div class="notifications-list-item-details">
              <p class="bold-white text-sm"> Mark Jacobs has applied for fleave and is currenly awaiting approval.
              </p>
              <p class="text-sm date-text">Yesterday at 09:42 AM</p>
            </div>
          </div>
          <div class="notifications-list-item old-notif">
            <div class="notifications-list-item-user user">
              <img src="./assets/images/user-woman.jpg" alt="">
            </div>
            <div class="notifications-list-item-details">
              <p class="bold-white text-sm"> Mark Jacobs has applied for fleave and is currenly awaiting approval.
              </p>
              <p class="text-sm date-text">Yesterday at 09:42 AM</p>
            </div>
          </div>
        </div>
      </div>
        `
    }

}

customElements.define('notifications-component', Notification);