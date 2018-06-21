import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';


const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'scrolling-list',
  templateUrl: './scrolling-list.component.html',
  styleUrls: ['./scrolling-list.component.css']
})
export class ScrollingListComponent implements OnInit {
  data: any[] = [];
  loading = false;
  hasMore = true;

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  ngOnInit(): void {
    this.getData((res: any) => this.data = res.results);
  }

  getData(callback: (res: any) => void): void {
    this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
  }

  onScroll(): void {
    if (this.loading) return;
    this.loading = true;
    if (this.data.length > 14) {
      this.msg.warning('Infinite List loaded all');
      this.hasMore = false;
      this.loading = false;
      return;
    }
    this.getData((res: any) => {
      this.data = this.data.concat(res.results);
      this.loading = false;
    });
  }

}
