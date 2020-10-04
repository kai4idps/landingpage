import Index from "views/Index.js"
import NucleoIcons from "views/NucleoIcons.js"
import LandingPage from "views/examples/LandingPage.js"
import ProfilePage from "views/examples/ProfilePage.js"
import RegisterPage from "views/examples/RegisterPage.js"
import ExampleSections from "components/examples/ExampleSections"
import Portfolio from "components/portfolio/Portfolio"

const themeRoutes = [
  { path: "/index", component: Index },
  { path: "/nucleo-icons", component: NucleoIcons },
  { path: "/landing-page", component: LandingPage },
  { path: "/register-page", component: RegisterPage },
  { path: "/profile-page", component: ProfilePage },
  { path: "/example", component: ExampleSections },
  { path: "/portfolio", component: Portfolio },
]

export default themeRoutes
