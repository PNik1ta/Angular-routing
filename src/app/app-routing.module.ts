import { PostResolver } from './post.resolver';
import { AuthGuard } from './auth.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// http://localhost:4200 -> HomeComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/posts -> PostsComponent
// http://localhost:4200/about/extra -> ExtraComponent
const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
			{ path: 'extra', component: AboutExtraComponent }
		]
	},
	{ path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
	{
		path: 'posts/:id', component: PostComponent, resolve: {
			post: PostResolver
		}
	},
	{ path: 'error', component: ErrorPageComponent },
	{ path: '**', redirectTo: '/error' }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}