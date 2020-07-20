import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";

@Component({
  selector: "app-servicos",
  templateUrl: "./servicos.page.html",
  styleUrls: ["./servicos.page.scss"],
})
export class ServicosPage implements OnInit {
  listServices: any[];

  constructor(private services: ServicesService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.listServices = [];
    this.getAllServices();
  }

  getAllServices() {
    this.services
      .getAll()
      .then((result: any) => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < result.length; i++) {
          const service = result[i];
          this.listServices.push(service);
        }
      })
      .catch((error: any) => {
        console.error({
          message: "Erro ao listar os services. Erro: " + error.error,
        });
      });
  }
}
