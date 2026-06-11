import { account } from "./appwrite";
import { OAuthProvider } from "./appwrite"

const app = document.getElementById("app");
const loginBtn = document.getElementById("btn-siwg");

const loginSIWG = async () => {

  await account.createOAuth2Session(
    OAuthProvider.Google,
    "http://127.0.0.1:5500/Interview%20Tracker/Interview-Tracker/dashboard.html",
    "http://127.0.0.1:5500/Interview%20Tracker/Interview-Tracker/index.html"

  )
};

loginBtn.addEventListener("click", loginSIWG)

