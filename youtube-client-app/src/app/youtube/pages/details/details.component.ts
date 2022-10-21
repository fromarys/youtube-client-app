import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  find, mergeMap, Observable,
} from 'rxjs';
import { Item } from '../../models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  public id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
  public $item: Observable<Item | undefined>;
  constructor(private activatedRoute: ActivatedRoute, private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.$item = this.youtubeService.sendVideosRequest(this.id || '').pipe(
      mergeMap((res) => res.items),
      find((item) => {
        console.log(item.id);
        return item.id === this.id;
      }),
    );
  }

  ngOnDestroy(): void {
  }
}
