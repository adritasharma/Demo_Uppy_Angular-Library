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
      endpoint: 'environment.apiUrl' + 'files/Upload',
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
    theme : 'auto',
  }

  templateString = '<ng-uppy [config]="settings" (onFileUpload)="onFileUpload($event)"></ng-uppy>'

  pluginList = [
    'Webcam',
    'GoogleDrive',
    'Instagram',
    'Facebook',
    'Dropbox',
    'ScreenCapture'
  ]

  FileTypeList = ['image/*', 'video/*','.docx','.doc','.xls','.xlsx','.pdf','.jpg','.png','.tif','.msg','.html','.htm','.txt']

  onFileUpload(evt) {

  }

  onPluginClick(pluginName, isChecked) {
    this.settings.plugins[pluginName] = isChecked
    this.resetChildForm()
  }

  resetChildForm() {
    this.show = false;

    setTimeout(() => {
      this.show = true;
    }, 10);
  }
}
