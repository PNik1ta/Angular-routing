import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core'
import { PostsService } from '../posts.service'

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
	showIds: boolean = false;

	constructor(private postsService: PostsService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit(): void {
		this.route.queryParams.subscribe((params: Params) => {
			this.showIds = !!params.showIds;
			console.log(this.showIds);
		})

		this.route.fragment.subscribe(fragment => {
			console.log('Fragment: ', fragment);
		})
	}

	showIdsProgram(): void {
		this.router.navigate(['/posts'], {
			queryParams: {
				showIds: true
			},
			fragment: 'program-fragment'
		})
	}
}
