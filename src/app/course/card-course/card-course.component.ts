import { ICategory } from './../../categories/interface';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICourse } from '../interface';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.html'
})
export class CardCourseComponent implements OnInit {
  @Input() course: ICourse;
  public category: ICategory;
  public categories: string = '';
  public searchFields: any = {
    categoryIds: ''
  };
  public config: any;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.config = this.route.snapshot.data['appConfig'];
    if (this.course.categories.length > 0) {
      this.category = this.course.categories[0];
      this.course.categories.forEach(cat => {
        this.categories = this.categories + cat.name + ', ';
      });
      this.categories = this.categories.slice(0, -2);
    }
  }

  clickCategory(catId: any) {
    let categoryIds = [];
    categoryIds.push(catId);
    this.searchFields.categoryIds = categoryIds.join(',');
    this.router.navigate(['/categories'], {
      queryParams: { categoryIds: this.searchFields.categoryIds }
    });
  }
}
