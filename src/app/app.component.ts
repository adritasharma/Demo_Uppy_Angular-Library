import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UppyConfig } from 'uppy-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  show: boolean = true
  active = 1
  settings: UppyConfig = {
    uploadAPI: {
      endpoint: environment.apiUrl + 'Upload',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('userToken')
      }
    },
    plugins: {
      Webcam: true,
      GoogleDrive: true,
      Instagram: true,
      Facebook: true,
      Dropbox: true,
      ScreenCapture: true
    },
    restrictions: {
      maxFileSize: 100000000000,
      maxNumberOfFiles: 10,
      minNumberOfFiles: 1,
      allowedFileTypes: null
    },
    uploaderLook: {
      theme: 'auto',
      proudlyDisplayPoweredByUppy: true
    },
    statusBarOptions: {
      hideProgressAfterFinish: false
    },
    options : {
      autoProceed:false
    }
  }


  installationString = `
      <h5> Installation </h5>            
            npm i uppy-angular

      <h5> Import & Initialization </h5>                     
            ### app.module.ts
            
                import { UppyAngularModule } from 'uppy-angular';
            
                @NgModule({
                    imports: [
                        UppyAngularModule
                        ...
                    ],
                    ...
                })`
  templateString = '<ng-uppy [config]="settings" (onFileUpload)="onFileUpload($event)"></ng-uppy>';

  tsString = `
  onFileAdd(evt) {
    console.log("onFileAdd", evt)
  }

  onFileUpload(evt) {
    console.log("onFileUpload", evt)
  }

  uploadResult(evt) {
    console.log("uploadResult", evt)
  }`



  statusBarOptionList = [
    "hideAfterFinish",
    "showProgressDetails",
    "hideUploadButton",
    "hideRetryButton",
    "hidePauseResumeButton",
    "hideCancelButton",
    "hideProgressAfterFinish"
  ]

  optionList = [
    "debug",
    "browserBackButtonClose",
    "autoProceed",
    "allowMultipleUploads"
  ]

  FileTypeList = ['image/*', 'video/*', '.docx', '.doc', '.xls', '.xlsx', '.pdf', '.jpg', '.png', '.tif', '.msg', '.html', '.htm', '.txt']


  onPluginClick(pluginName, isChecked) {
    this.settings.plugins[pluginName] = isChecked
    this.resetChildForm()
  }

  resetChildForm() {
    this.show = false;

    setTimeout(() => {
      this.show = true;
    }, 0);
  }

  onFileAdd(evt) {
    console.log("onFileAdd", evt)
  }

  onFileUpload(evt) {
    console.log("onFileUpload", evt)
  }

  uploadResult(evt) {
    console.log("uploadResult", evt)
  }
}
