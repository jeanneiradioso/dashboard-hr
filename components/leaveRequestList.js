class LeaveRequestList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="main-content-leave-requests">
            <div class="flex">
                <div class="col-desk-6 col-mob-4">
                    <p class="text-title-lg">Leave Requests</p>
                </div>
                <div class="col-desk-6 col-mob-4 col-end">
                    <div class="btn-group-toggle">
                    <button class="active">List View</button>
                    <button>Month View</button>
                    </div>
                </div>
            </div>

            <div class="content-leave-requests-list leave-requests-list">
            <div class="card">
                <div class="card-header">
                <div class="flex">
                    <div class="col-desk-6 col-mob-4">
                    <div class="leave-requests-list-menu">
                        <div class="leave-requests-list-menu-item active">All</div>
                        <div class="leave-requests-list-menu-item">Approved</div>
                        <div class="leave-requests-list-menu-item">Rejected</div>
                    </div>
                    </div>
                    <div class="col-desk-6 col-mob-4 col-end">
                    <div class="leave-requests-list-control">
                        <div><i class="i i-arrow-left"></i> <span style="color: white;">March </span>
                        <span>2023</span>
                        </div>
                        <div>
                        <span class="text-lg bold-white"><i class="i i-calendar-bold"></i></span>
                        <span><i class="i i-arrow-down"></i></span>
                        </div>
                        <div>
                        <span><i class="i i-arrow-right"></i></span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="card-content">
                <div class="flex">
                    <div class="col-desk-12">
                    <div class="leave-requests-list-table">
                        <table cellpadding="0" cellspacing="0" id="employees">
                        <tr class="leave-requests-list-table-header">
                            <th>
                            <div class="table-header-container">
                                <div class="checkbox-wrapper">
                                <input id="selectAll" type="checkbox">
                                <label for="selectAll">#</label>
                                </div>
                                <span><i class="i i-arrow-down"></i></span>
                            </div>
                            </th>
                            <th>
                            <div class="table-header-container">
                                <span>NAME</span>
                                <span><i class="i i-arrow-down"></i></span>
                            </div>
                            </th>
                            <th>
                            <div class="table-header-container">
                                <span>PERIOD</span>
                                <span><i class="i i-arrow-down"></i></span>
                            </div>
                            </th>
                            <th>
                            <div class="table-header-container">
                                <span>DAY(s)</span>
                                <span><i class="i i-arrow-down"></i></span>
                            </div>
                            </th>
                            <th>
                            <div class="table-header-container">
                                <span>LEAVE TYPE</span>
                                <span><i class="i i-arrow-down"></i></span>
                            </div>
                            </th>
                            <th>
                            <div class="table-header-container">
                                <span>ACTIONS</span>
                            </div>
                            </th>
                            <th>
                            <div class="table-header-container">
                            </div>
                            </th>
                        </tr>
                        <tr class="leave-requests-list-table-item">
                            <td>
                            <div class="table-item-container">
                                <div class="checkbox-wrapper">
                                <input id="selectAll" type="checkbox">
                                <label for="selectAll" class="dot-status warning"></label>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <div class="table-item-container-user">
                                <div class="user">
                                    <img src="./assets/images/user-men.jpg" alt="">
                                </div>
                                <p class="bold-white">Mark Jacobs</p>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <p>31 MAR, 2023 09:00 AM</p>
                                <p>31 MAR, 2023 05:00 PM</p>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <p>1.0</p>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <p>Annual Leave</p>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <div class="table-item-container-actions">
                                    <button class="btn-outline">REJECT</button>
                                    <button class="btn-solid">APPROVE</button>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <span><i class="i i-arrow-right-thin"></i></span>
                            </div>
                            </td>
                        </tr>
                        <tr class="leave-requests-list-table-item">
                            <td>
                            <div class="table-item-container">
                                <div class="checkbox-wrapper">
                                <input id="selectAll" type="checkbox">
                                <label for="selectAll" class="dot-status warning"></label>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <div class="table-item-container-user">
                                <div class="user">
                                    <img src="./assets/images/user-woman.jpg" alt="">
                                </div>
                                <p class="bold-white">Mark Jacobs</p>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <p>31 MAR, 2023 09:00 AM</p>
                                <p>31 MAR, 2023 05:00 PM</p>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <p>1.0</p>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <p>Annual Leave</p>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <div class="table-item-container-actions">
                                    <button class="btn-outline">REJECT</button>
                                    <button class="btn-solid">APPROVE</button>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <span><i class="i i-arrow-right-thin"></i></span>
                            </div>
                            </td>
                        </tr>
                        <tr class="leave-requests-list-table-item">
                            <td>
                            <div class="table-item-container">
                                <div class="checkbox-wrapper">
                                <input id="selectAll" type="checkbox">
                                <label for="selectAll" class="dot-status success"></label>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <div class="table-item-container-user">
                                <div class="user">
                                    <img src="./assets/images/user-woman3.jpg" alt="">
                                </div>
                                <p class="bold-white">Mark Jacobs</p>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <p>31 MAR, 2023 09:00 AM</p>
                                <p>31 MAR, 2023 05:00 PM</p>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <p>1.0</p>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <p>Annual Leave</p>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <div class="table-item-container-actions">
                                    <button class="btn-outline hidden">REJECT</button>
                                    <button class="btn-solid">APPROVED</button>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div class="table-item-container">
                                <span><i class="i i-arrow-right-thin"></i></span>
                            </div>
                            </td>
                        </tr>
                        </table>
                    </div>

                    <div class="leave-requests-list-pagination">
                        <div class="flex">
                        <div class="col-desk-4">
                            <button class="btn-default">PREVIOUS</button>
                        </div>
                        <div class="col-desk-4 center">
                            <p class="bold-white">
                                1-25 OF 227
                            </p>
                        </div>
                        <div class="col-desk-4 col-end">
                            <button class="btn-default bold-white">NEXT</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
         </div>
        `
    }

}

customElements.define('leave-request-list-component', LeaveRequestList);