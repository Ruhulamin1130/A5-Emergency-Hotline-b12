function getelement(id) {
  let element = document.getElementById(id);
  return element;
}
getelement("cards-container").addEventListener("click", function (e) {
  if (e.target.classList.contains("hart-btn")) {
    let hartName = getelement("hart-num").innerText;
    let returnHartName = Number(hartName);

    let mainHartName = returnHartName + 1;
    getelement("hart-num").innerText = mainHartName;
  }
  if (e.target.className.includes("call-btn")) {
    const callButton = e.target;
    let servicename = callButton.parentNode.parentNode.children[1].innerText;
    let number = callButton.parentNode.parentNode.children[3].innerText;
    // console.log(number);
    alert(servicename + "\n" + number);

    let coins = Number(getelement("coin").innerText);

    if (coins >= 20) {
      let coinsCut = coins - 20;
      getelement("coin").innerText = coinsCut;
    } else {
      alert("Recharge your coins!");
      return;
    }
    // call history added here
    let now = new Date();
    let localTime = now.toLocaleTimeString();
    let callHistoryContainer = getelement("call-his");

    let callHistory = document.createElement("div");
    callHistory.innerHTML = `
      <div class="bg-gray-300 rounded-xl flex justify-between items-center p-4 my-3">
        <div class="sr-title">
          <h1 class="font-bold">${servicename}</h1>
          <h1 class="font-bold">${number}</h1>
        </div>
        <div><span><h1>${localTime}</h1></span></div>
      </div>
    `;

    callHistoryContainer.append(callHistory);
  }

  if (e.target.className.includes("copy-btn")) {
    const copyBtn = e.target;
    let copyNumbersow = copyBtn.parentNode.parentNode.children[3].innerText;
    alert("The number has been copyed " + copyNumbersow);
    navigator.clipboard.writeText(copyNumbersow);
    let copyNumber = Number(getelement("copy-num").innerText);
    let pluisCopynum = copyNumber + 1;
    getelement("copy-num").innerText = pluisCopynum;
  }
});
getelement("clear-btn").addEventListener("click", function (e) {
  let callHistoryContainer = getelement("call-his");
  callHistoryContainer.innerHTML = "";
});
