import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private snackbar: MatSnackBar, private translate: TranslateService) {}

  showInformation(data: string) {
    this.snackbar.open(this.translate.instant(data), this.translate.instant('Close'));
  }
}
