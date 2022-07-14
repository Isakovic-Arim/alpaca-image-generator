import { Component } from '@angular/core';
// import * as htmlToImage from 'html-to-image';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-button-download',
  template: `
    <button (click)="performDownload()" class="bg-white text-black font-medium px-14 py-4 rounded-sm">Download</button>
  `
})

export class ButtonDownloadComponent {

  constructor() { }

  performDownload() {
    let preview: HTMLElement | null = document.getElementById('preview');
    if (preview != null) {
      html2canvas.default(preview).then((canvas) => {
        const base64image = canvas.toDataURL('image/png');
        var anchor = document.createElement('a');
        anchor.setAttribute('href', base64image);
        anchor.setAttribute('download', "alpaca.png");
        anchor.click();
        anchor.remove();
      });
    }
  }
}
