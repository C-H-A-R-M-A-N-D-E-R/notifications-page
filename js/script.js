const markRead = () => {
  const notifNum = document.querySelector(".num");
  const unread = document.querySelectorAll(".unread");

  notifNum.textContent = "0";
  unread.forEach((element) => (element.style.backgroundColor = "transparent"));
};
