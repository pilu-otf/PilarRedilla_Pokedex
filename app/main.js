// import "modern-css-reset";
import "./../assets/styles/tailwind.sass";
import "./../assets/styles/main.sass";
import { searchPokmeonController } from "./controllers/searchPokemon.controller";
import { typeFilter } from "./controllers/filtroTipos.controller";


window.addEventListener ("load", () => {
  console.log('hola');
  searchPokmeonController()
  typeFilter()

})




