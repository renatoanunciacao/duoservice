import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "login",
        loadChildren: () =>
          import("../login/login.module").then((m) => m.LoginPageModule),
      },
      {
        path: "inicio",
        loadChildren: () =>
          import("../inicio/inicio.module").then((m) => m.InicioPageModule),
      },
      {
        path: "services",
        loadChildren: () =>
          import("../servicos/servicos.module").then(
            (m) => m.ServicosPageModule
          ),
      },
      {
        path: "tab3",
        loadChildren: () =>
          import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/inicio",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/login",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
