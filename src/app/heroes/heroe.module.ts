import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.componet";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroeModule {

}
