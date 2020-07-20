import { Services } from "./../model/services";
import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";

@Component({
  selector: "app-servicos",
  templateUrl: "./servicos.page.html",
  styleUrls: ["./servicos.page.scss"],
})
export class ServicosPage implements OnInit {
  listaServices: any[];

  constructor(private services: ServicesService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.listaServices = [];
    this.getAllServices();
  }

  getAllServices() {
    this.services
      .getAll()
      .then((result: any) => {
        console.log(JSON.stringify(result));
        for (var i = 0; i < result.length; i++) {
          const user = result[i];
          this.listaServices.push(user);
        }
      })
      .catch((error: any) => {
        console.error({
          message: "Erro ao listar os serviços. Erro: " + error.error,
        });
      });
  }
}
