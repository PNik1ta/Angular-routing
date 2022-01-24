import { Post, PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	post: Post;
	constructor(private route: ActivatedRoute,
		private postsService: PostsService,
		private router: Router) { }

	ngOnInit(): void {
		// this.post = this.route.snapshot.data.post;

		this.route.data.subscribe(data => {
			this.post = data.post;
		})

		// this.route.params.subscribe((params: Params) => {
		// 	this.post = this.postsService.getById(parseInt(params.id));
		// })
	}

	loadPost(): void {
		this.router.navigate(['/posts', 44]);
	}
}
