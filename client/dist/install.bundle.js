(()=>{const e=document.getElementById("buttonInstall");let t;window.addEventListener("beforeinstallprompt",(l=>{l.preventDefault(),t=l,e.removeAttribute("hidden"),e.style.display="block"})),e.addEventListener("click",(async()=>{if(t){t.prompt();const{outcome:l}=await t.userChoice;"accepted"===l?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt"),t=null,e.style.display="none"}})),window.addEventListener("appinstalled",(e=>{console.log("App installed",e)}))})();