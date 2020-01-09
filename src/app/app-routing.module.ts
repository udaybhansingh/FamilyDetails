import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { DemoTestComponent } from './demo-test/demo-test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{TreeComponent} from './tree/tree.component'


const routes: Routes = [
  {path:'',redirectTo:'/EmployeeList',pathMatch:'full'},
  {path:'tree',component:TreeComponent},
  {path:'test',component:TestComponentComponent},
  {path:'Demo',component:DemoTestComponent},
  {path:'EmployeeList',component:EmployeeListComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[TestComponentComponent,DemoTestComponent,EmployeeListComponent,PageNotFoundComponent]
