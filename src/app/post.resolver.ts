import { Injectable } from '@angular/core';
import { Post, PostsService } from './posts.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<Post> {
	constructor(private postsService: PostsService) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post | Observable<Post> | Promise<Post> {
		return this.postsService.getById(+route.params['id']);
	}

}