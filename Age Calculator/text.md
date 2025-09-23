const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const dd = String(today.getDate()).padStart(2, '0');

console.log(`${yyyy}-${mm}-${dd}`); // 2025-09-22
console.log(`${dd}/${mm}/${yyyy}`); // 22/09/2025
