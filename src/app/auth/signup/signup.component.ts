import { SeoService } from './../../shared/services/seo.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'signup.component.html'
})
export class SignupComponent {
  public account: any = {
    email: '',
    password: '',
    name: '',
    type: '',
    timezone: ''
  };
  public accountTutor: any = {
    email: '',
    password: '',
    name: '',
    issueDocument: '',
    resumeDocument: '',
    certificationDocument: '',
    timezone: '',
    introVideoId: '',
    introYoutubeId: ''
  };
  public introVideoType: string = 'upload';
  public confirm: any = {
    pw: ''
  };
  public maxFileSize: number;
  public isMath: boolean = false;
  public submitted: boolean = false;
  public idDocumentOptions: any = {};
  public resumeOptions: any = {};
  public certificationOptions: any = {};
  public introVideoOptions: any = {};
  public idDocumentFile: any;
  public resumeFile: any;
  public certificationFile: any;
  public introVideo: any;
  public appConfig: any;
  public loading: boolean = false;
  public agree: boolean = true;

  constructor(
    private auth: AuthService,
    public router: Router,
    private toasty: ToastrService,
    private route: ActivatedRoute,
    private seoService: SeoService,
    private translate: TranslateService
  ) {
    this.maxFileSize = window.appConfig.maximumFileSize;
    this.appConfig = this.route.snapshot.data.appConfig;
    if (this.appConfig) {
      let title = this.appConfig.siteName + ' - Sign Up';
      seoService.update(title);
    }

    this.introVideoOptions = {
      url: window.appConfig.apiBaseUrl + '/tutors/upload-introVideo',
      onCompleteItem: resp => {
        this.accountTutor.introVideoId = resp.data._id;
        this.loading = false;
      },
      onFileSelect: resp => {
        const lastIndex = resp.length - 1;
        const file = resp[lastIndex].file;
        const ext = file.name.split('.').pop().toLowerCase();
        if (['mp4', 'webm', '3gp', 'ogg', 'wmv', 'webm'].indexOf(ext) === -1) {
          this.introVideoOptions.uploader.clearQueue();
          return this.toasty.error(this.translate.instant('Invalid file type'));
        }
        this.introVideo = file;
      },
      uploadOnSelect: true,
      id: 'id-introVideo',
      onUploading: resp => (this.loading = true)
    };

    this.idDocumentOptions = {
      url: window.appConfig.apiBaseUrl + '/tutors/upload-document',
      onCompleteItem: resp => {
        this.accountTutor.issueDocument = resp.data._id;
        this.loading = false;
      },
      onFileSelect: resp => {
        const lastIndex = resp.length - 1;
        const file = resp[lastIndex].file;
        const ext = file.name.split('.').pop().toLowerCase();
        if (['pdf', 'doc', 'docx', 'zip', 'rar', 'jpg', 'jpeg', 'png'].indexOf(ext) === -1) {
          this.idDocumentOptions.uploader.clearQueue();
          return this.toasty.error(this.translate.instant('Invalid file type'));
        }
        this.idDocumentFile = file;
      },
      uploadOnSelect: true,
      id: 'id-document',
      onUploading: resp => (this.loading = true)
    };
    this.resumeOptions = {
      url: window.appConfig.apiBaseUrl + '/tutors/upload-document',
      onCompleteItem: resp => {
        this.accountTutor.resumeDocument = resp.data._id;
        this.loading = false;
      },
      onFileSelect: resp => {
        const lastIndex = resp.length - 1;
        const file = resp[lastIndex].file;
        const ext = file.name.split('.').pop().toLowerCase();
        if (['pdf'].indexOf(ext) === -1) {
          this.resumeOptions.uploader.clearQueue();
          return this.toasty.error(this.translate.instant('Invalid file type'));
        }
        this.resumeFile = file;
      },
      uploadOnSelect: true,
      id: 'id-resume',
      onUploading: resp => (this.loading = true)
    };
    this.certificationOptions = {
      url: window.appConfig.apiBaseUrl + '/tutors/upload-document',
      onCompleteItem: resp => {
        this.accountTutor.certificationDocument = resp.data._id;
        this.loading = false;
      },
      onFileSelect: resp => {
        const lastIndex = resp.length - 1;
        const file = resp[lastIndex].file;
        const ext = file.name.split('.').pop().toLowerCase();
        if (['pdf'].indexOf(ext) === -1) {
          this.certificationOptions.uploader.clearQueue();
          return this.toasty.error(this.translate.instant('Invalid file type'));
        }
        this.certificationFile = file;
      },
      uploadOnSelect: true,
      id: 'id-verification',
      onUploading: resp => (this.loading = true)
    };
  }

  public onlyNumberKey(event) {
    return event.charCode === 8 || event.charCode === 0 ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  public async submit(frm: any) {
    this.submitted = true;
    if (frm.invalid) {
      return;
    }
    if (!this.account.timezone) {
      return this.toasty.error(this.translate.instant('Please select timezone'));
    }
    if (this.account.password !== this.confirm.pw) {
      this.isMath = true;
      return this.toasty.error(this.translate.instant('Confirm password and password dont match'));
    }
    if (this.account.type === '') {
      return this.toasty.error(this.translate.instant('Please select type'));
    }

    this.account.email = this.account.email.toLowerCase();

    if (this.account.type === 'tutor') {
      this.accountTutor.name = this.account.name;
      this.accountTutor.email = this.account.email;
      this.accountTutor.password = this.account.password;
      this.accountTutor.timezone = this.account.timezone;
      // if (this.introVideoType == 'youtube' && !this.accountTutor.introYoutubeId) {
      //   console.log(this.accountTutor.introYoutubeId);

      //   return this.toasty.error(this.translate.instant('Please enter introduction youtube ID');
      // }
      if (this.introVideoType == 'upload' && !this.accountTutor.introVideoId) {
        return this.toasty.error(this.translate.instant('Please upload introduction video'));
      }
      if (this.introVideoType === 'youtube') {
        this.accountTutor.introVideoId = null;
      }

      if (
        !this.accountTutor.issueDocument ||
        !this.accountTutor.resumeDocument ||
        !this.accountTutor.certificationDocument
      ) {
        return this.toasty.error(this.translate.instant('Please upload all documents'));
      }
      return this.auth
        .registerTutor(this.accountTutor)
        .then(resp => {
          this.toasty.success(
            this.translate.instant('Your account has been created, please verify your email then login')
          );
          this.router.navigate(['/auth/login']);
        })
        .catch(err => this.toasty.error(this.translate.instant(err.data.message)));
    }
    this.auth
      .register(this.account)
      .then(resp => {
        this.toasty.success(
          this.translate.instant('Your account has been created, please verify your email then login')
        );
        this.router.navigate(['/auth/login']);
      })
      .catch(err => this.toasty.error(this.translate.instant(err.data.data.message)));
  }

  changeTimezone(event) {
    if (event === 'Asia/Saigon') {
      this.account.timezone = 'Asia/Ho_Chi_Minh';
    } else {
      this.account.timezone = event;
    }
  }

  changeUploadType(event) {
    if (event.target.value === 'youtube') {
      this.accountTutor.introYoutubeId = 'ZU0gjnRU-Z4';
    } else {
      this.accountTutor.introYoutubeId = '';
    }
  }
}
