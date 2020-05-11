function toggleMenu(visible) {
  document.querySelector('.side-nav').classList.toggle('show', visible);
}

const menuButton = document.querySelector('.hamburger-btn-top');
menuButton.classList.remove('active');

document.querySelector('.hamburger-btn-top').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

// const menuToggle = document.querySelector('.side-nav');
// const hamburgerBtnTop = document.querySelector('.hamburger-btn-side');
// const container = document.querySelector('.container');
// const topNav = document.querySelector('.top-nav');
// const allPages = document.querySelectorAll('.nav-links li');

// console.log(menuToggle);

// hamburgerBtnTop.addEventListener('click', function () {
//   menuToggle.classList.toggle('hidden');
//   container.classList.toggle('full-size');
//   topNav.classList.toggle('full-size');
//   console.log('lol');
// });

// function activatePage(event) {
//   event.preventDefault();
//   const clickedElement = this;

//   for (let activePage of allPages) {
//     if (clickedElement !== activePage) activePage.classList.remove('active');
//   }

//   clickedElement.classList.add('active');

//   console.log(allPages);
// }












function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .brand-button').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelector('.exit').addEventListener('click', function () {
  openModal('#quit-modal');
});

document.querySelector('.account').addEventListener('click', function () {
  openModal('#login-modal');
});

document.querySelector('.menager-modal').addEventListener('click', function () {
  openModal('#chat-modal');
});

{
  const ctx = document.getElementById('myChart').getContext('2d');

  // eslint-disable-next-line
  const chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
      // 2
      labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
      // 3
      datasets: [
        {
          // 4
          label: 'Signups',
          // 5
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          // 6
          data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
          // 7
          hidden: true,
        },
      ],
    },
  });
}
