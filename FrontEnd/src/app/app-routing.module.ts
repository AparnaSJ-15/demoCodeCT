import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { PastComponent } from './pages/past/past.component';
import { ResponseComponent } from './pages/response/response.component';


const routes: Routes = [{path:'',component:ResponseComponent},
{path:'pastcurriculum',component:PastComponent},
{path:'addresponse',component:AddComponent},
{path:'editresponse',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
