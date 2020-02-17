document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });

  var instance = M.Dropdown.getInstance(elem);
  instance.open();


// // Modals
// const newCustomerModal = document.querySelector('#new-customer-modal');
// const returningCustomerModal = document.querySelector('#returning-customer-modal');
// const inventoryModal = document.querySelector('#inventory-modal');

// // Modal Buttons
// const newCustomerModalBtn = document.querySelector('#new-customer-modal-btn');
// const returningCustomerModalBtn = document.querySelector('#returning-customer-modal-btn');
// const inventoryModalBtn = document.querySelector('#inventory-modal-btn');
// const closeNewCustomerBtn = document.querySelector('.closeNewCustomer');
// const closeReturningCustomerBtn = document.querySelector('.closeReturningCustomer');
// const closeInventoryBtn = document.querySelector('.closeInventory');

// // Events
// newCustomerModalBtn.addEventListener('click', openNewCustomerModal);
// returningCustomerModalBtn.addEventListener('click', openReturningCustomerModal);
// inventoryModalBtn.addEventListener('click', openInventoryModal);
// closeNewCustomerBtn.addEventListener('click', closeNewCustomerModal);
// closeReturningCustomerBtn.addEventListener('click', closeReturningCustomerModal);
// closeInventoryBtn.addEventListener('click', closeInventoryModal);
// window.addEventListener('click', outsideClick);

// // Open Modals
// function openNewCustomerModal() 
// {
//     newCustomerModal.style.display = 'block';
// }
// function openReturningCustomerModal() 
// {
//     returningCustomerModal.style.display = 'block';
// }
// function openInventoryModal() 
// {
//     inventoryModal.style.display = 'block';
// }

// // Close Modals
// function closeNewCustomerModal() 
// {
//   newCustomerModal.style.display = 'none';
// }
// function closeReturningCustomerModal() 
// {
//   returningCustomerModal.style.display = 'none';
// }
// function closeInventoryModal() 
// {
//   inventoryModal.style.display = 'none';
// }

// // Close If Outside Click
// function outsideClick(e) 
// {
//   if (e.target == newCustomerModal) 
//   {
//     newCustomerModal.style.display = 'none';
//   }
//    else if (e.target == returningCustomerModal) 
//    {
//      returningCustomerModal.style.display = 'none';
//    }
//    else if (e.target == inventoryModal) 
//    {
//      inventoryModal.style.display = 'none';
//    }
//  }
