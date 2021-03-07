import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { CategoryNoticeChangeComponent } from './category-notice-change/category-notice-change.component';
import { ChangeNewsComponent } from './change-news/change-news.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactComponent } from './contact/contact.component';
import { CsvComponent } from './csv/csv.component';
import { ElseBSCComponent } from './else-bsc/else-bsc.component';
import { ExamQuestionsComponent } from './exam-questions/exam-questions.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { InfoSubjectComponent } from './info-subject/info-subject.component';
import { InformationsSubjectComponent } from './informations-subject/informations-subject.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { LecturesComponent } from './lectures/lectures.component';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { NewsComponent } from './news/news.component';
import { NoticesComponent } from './notices/notices.component';
import { ProfSubjectsComponent } from './prof-subjects/prof-subjects.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { ResearchComponent } from './research/research.component';
import { RtiBSCComponent } from './rti-bsc/rti-bsc.component';
import { ShowMoreComponent } from './show-more/show-more.component';
import { SiBSCComponent } from './si-bsc/si-bsc.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'user', component: UserComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'changePass', component: ChangePasswordComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'showMore', component: ShowMoreComponent},
  {path: 'rtibsc', component: RtiBSCComponent},
  {path: 'sibsc', component: SiBSCComponent},
  {path: 'elsebsc', component: ElseBSCComponent},
  {path: 'master', component: MasterComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'infoSubject', component: InfoSubjectComponent},
  {path: 'infoSubject/informationsSubject', component: InformationsSubjectComponent},
  {path: 'infoSubject/lectures', component: LecturesComponent},
  {path: 'infoSubject/excercises', component: ExcercisesComponent},
  {path: 'infoSubject/laboratory', component: LaboratoryComponent},
  {path: 'student', component: StudentComponent},
  {path: 'infoSubject/examQuestions', component: ExamQuestionsComponent},
  {path: 'user/userProfile', component: UserProfileComponent},
  {path: 'user/news', component:NewsComponent},
  {path: 'user/news/changeNews', component: ChangeNewsComponent},
  {path: 'updateStudent', component: UpdateStudentComponent},
  {path: 'updateSubject', component: UpdateSubjectComponent},
  {path: 'updateEmployee', component: UpdateEmployeeComponent},
  {path: 'projects', component : ProjectsComponent},
  {path:  'research', component: ResearchComponent},
  {path: 'csv', component: CsvComponent},
  {path: 'user/profSubjects', component: ProfSubjectsComponent},
  {path: 'notices', component: NoticesComponent},
  {path: 'changeCategory', component: CategoryNoticeChangeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
