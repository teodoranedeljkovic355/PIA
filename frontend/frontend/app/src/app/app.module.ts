import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { StaffComponent } from './staff/staff.component';
import { ContactComponent } from './contact/contact.component';
import { ShowMoreComponent } from './show-more/show-more.component';
import { RtiBSCComponent } from './rti-bsc/rti-bsc.component';
import { SiBSCComponent } from './si-bsc/si-bsc.component';
import { ElseBSCComponent } from './else-bsc/else-bsc.component';
import { MasterComponent } from './master/master.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';
import { InfoSubjectComponent } from './info-subject/info-subject.component';
import { InformationsSubjectComponent } from './informations-subject/informations-subject.component';
import { LecturesComponent } from './lectures/lectures.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { ExamQuestionsComponent } from './exam-questions/exam-questions.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { StudentComponent } from './student/student.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewsComponent } from './news/news.component';
import { ChangeNewsComponent } from './change-news/change-news.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import {NavbarComponent} from './navbar/navbar.component';
import { ProfSubjectsComponent } from './prof-subjects/prof-subjects.component';
import { FooterComponent } from './footer/footer.component';
import { CsvComponent } from './csv/csv.component';
import { NoticesComponent } from './notices/notices.component';
import { CategoryNoticeChangeComponent } from './category-notice-change/category-notice-change.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    RegisterComponent,
    ChangePasswordComponent,
    StaffComponent,
    ContactComponent,
    ShowMoreComponent,
    RtiBSCComponent,
    SiBSCComponent,
    ElseBSCComponent,
    MasterComponent,
    ProjectsComponent,
    ResearchComponent,
    InfoSubjectComponent,
    InformationsSubjectComponent,
    LecturesComponent,
    ExcercisesComponent,
    ExamQuestionsComponent,
    LaboratoryComponent,
    StudentComponent,
    UserProfileComponent,
    NewsComponent,
    ChangeNewsComponent,
    UpdateEmployeeComponent,
    UpdateStudentComponent,
    UpdateSubjectComponent,
    NavbarComponent,
    ProfSubjectsComponent,
    FooterComponent,
    CsvComponent,
    NoticesComponent,
    CategoryNoticeChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
