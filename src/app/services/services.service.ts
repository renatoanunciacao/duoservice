import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ServicesService {
  private API_URL = "http://localhost:3000/estetica";
  constructor(private http: HttpClient) {}

  getAll() {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + "/servicos";

      this.http.get(url).subscribe(
        (result: any) => {
          console.log(JSON.stringify(result));
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
