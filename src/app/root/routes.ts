import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RootDefaultComponent } from "./root-default/root-default.component";


export const routes : Routes =[{
	path : "",
	pathMatch : "full",
	redirectTo : "algo-list"
},
{
path : "algo-list",
loadChildren : ()=>import('../app-algo/app-algo.module').then(m => m.AppAlgoModule)
},
]