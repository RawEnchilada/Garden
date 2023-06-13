var textMap = null;
const defaultLanguage = "us";
var currentLanguage = defaultLanguage;
const languages = require.context("@/assets/locale/",false, /..\.js$/).keys().map((item) => item.replace("./","").replace(".js",""));

const url = window.location.href;
currentLanguage = url.split("/").pop();
if(languages.indexOf(currentLanguage) == -1){//no language specified in url
    currentLanguage = defaultLanguage;
    if(localStorage.getItem("language")){
        window.history.pushState(window.location.origin + "/" + localStorage.getItem("language"), "");
        currentLanguage = localStorage.getItem("language");
    }
}

textMap = require(`@/assets/locale/${currentLanguage}.js`).default;


export default textMap;
export {currentLanguage};
export {languages};