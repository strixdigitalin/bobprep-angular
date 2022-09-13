import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryResolver, ConfigResolver, SubjectsResolver } from '../shared/resolver';

import {
  ProfileUpdateComponent,
  DashboardComponent,
  WebinarListingComponent,
  WebinarCreateComponent,
  WebinarUpdateComponent,
  ListScheduleComponent,
  ScheduleDetailComponent,
  ScheduleComponent,
  ListLessonComponent,
  LessonDetailComponent,
  FavoriteComponent,
  CourseCreateComponent,
  CourseListingComponent,
  CourseUpdateComponent,
  ListCourseComponent,
  MyCourseDetailComponent,
  CourseTransactionListComponent,
  CourseTransactionDetailComponent,
  MyCategoriesComponent
} from './component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileUpdateComponent,
    resolve: {
      appConfig: ConfigResolver
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'webinars',
    component: WebinarListingComponent,
    resolve: {
      appConfig: ConfigResolver
    }
  },
  {
    path: 'webinars/create',
    component: WebinarCreateComponent,
    resolve: {
      appConfig: ConfigResolver
    }
  },
  {
    path: 'webinars/:id',
    component: WebinarUpdateComponent,
    resolve: {
      appConfig: ConfigResolver
    }
  },
  {
    path: 'appointments',
    component: ListScheduleComponent,
    resolve: {
      appConfig: ConfigResolver
    }
  },
  {
    path: 'appointments/:id',
    component: ScheduleDetailComponent,
    resolve: {
      appConfig: ConfigResolver
    }
  },
  {
    path: 'favorites/:type',
    component: FavoriteComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    resolve: {
      appConfig: ConfigResolver
    }
  },
  {
    path: 'lessons',
    component: ListLessonComponent,
    resolve: {
      appConfig: ConfigResolver
    }
  },
  {
    path: 'lessons/:id',
    component: LessonDetailComponent,
    resolve: {
      appConfig: ConfigResolver
    }
  },
  {
    path: 'courses/create',
    component: CourseCreateComponent,
    resolve: {
      appConfig: ConfigResolver
    }
  },
  {
    path: 'courses',
    component: CourseListingComponent,
    resolve: {
      categories: CategoryResolver,
      appConfig: ConfigResolver
    }
  },
  {
    path: 'courses/:id',
    component: CourseUpdateComponent,
    resolve: {
      appConfig: ConfigResolver
    }
  },
  {
    path: 'my-courses',
    component: ListCourseComponent,
    resolve: {
      categories: CategoryResolver,
      appConfig: ConfigResolver
    }
  },
  {
    path: 'my-courses/:id',
    component: MyCourseDetailComponent,
    resolve: {
      appConfig: ConfigResolver
    }
  },
  {
    path: 'course-transaction',
    component: CourseTransactionListComponent,
    resolve: {
      categories: CategoryResolver,
      appConfig: ConfigResolver
    }
  },
  {
    path: 'course-transaction/:id',
    component: CourseTransactionDetailComponent,
    resolve: {
      appConfig: ConfigResolver
    }
  },
  {
    path: 'my-categories',
    component: MyCategoriesComponent,
    resolve: {
      categories: CategoryResolver,
      appConfig: ConfigResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
