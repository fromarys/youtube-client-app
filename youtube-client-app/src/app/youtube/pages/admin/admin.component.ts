import { Component, OnInit } from '@angular/core';
import {
  AbstractControl, FormBuilder, FormGroup, Validators,
} from '@angular/forms';
import { ErrorTypes } from 'src/app/shared/enums/enums';
import { regExps } from 'src/app/shared/constants/constants';
import { DateValidator } from '../../validators/date.validator';
import { ICustomItem } from '../../models/custom-item.model';
import { Store } from '@ngrx/store';
import * as ItemActions from '../../../redux/actions/items.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  protected video: FormGroup = this.form.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    description: ['', [Validators.maxLength(255)]],
    imageLink: ['', [Validators.required, Validators.pattern(regExps.url)]],
    videoLink: ['', [Validators.required, Validators.pattern(regExps.url)]],
    date: ['', [Validators.required, DateValidator.check]],
  });

  constructor(private form: FormBuilder, private store: Store, private router: Router) {}

  get title(): AbstractControl<string | null> | null {
    return this.video.get('title');
  }
  get description(): AbstractControl<string | null> | null {
    return this.video.get('description');
  }
  get imageLink(): AbstractControl<string | null> | null {
    return this.video.get('imageLink');
  }
  get videoLink(): AbstractControl<string | null> | null {
    return this.video.get('videoLink');
  }
  get date() {
    return this.video.get('date');
  }

  ngOnInit(): void {
  }

  getTitleErrorMessage() {
    if (this.title?.hasError('minlength')) {
      return 'The title is too short';
    }
    if (this.title?.hasError('maxlength')) {
      return 'The title is too long';
    }
    return 'Please enter a title';
  }

  getDescrErrorMessage() {
    return 'The description is too long';
  }

  getImageLinkErrorMessage() {
    if (this.imageLink?.hasError(ErrorTypes.required)) {
      return 'Please enter a link to the image';
    }
    return this.imageLink?.hasError(ErrorTypes.pattern) ? 'The image link is invalid' : '';
  }

  getVideoLinkErrorMessage() {
    if (this.videoLink?.hasError(ErrorTypes.required)) {
      return 'Please enter a link to the video';
    }
    return this.videoLink?.hasError(ErrorTypes.pattern) ? 'The video link is invalid' : '';
  }

  getDateErrorMessage() {
    if (this.date?.hasError(ErrorTypes.required)) {
      return 'Please enter a creation date';
    }
    return 'The date is invalid';
  }

  createCard() {
    const item: ICustomItem = { ...this.video.value };
    if (Object.keys(item).length !== 0) {
      item.id = Math.random().toString(36).slice(2, 6);
      this.store.dispatch(ItemActions.addCustomItem({ item }));
      this.router.navigateByUrl('search');
    } else {
      this.store.dispatch(
        ItemActions.addCustomItemError({ error: new Error('Error in card creation') }),
      );
    }
  }
}
