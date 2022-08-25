import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-profile',
  templateUrl: './avatar-profile.component.html',
  styleUrls: ['./avatar-profile.component.scss']
})
export class AvatarProfileComponent implements OnInit {

  @Input() img = '';
  style = '';

  constructor() { }

  ngOnInit(): void {
    this.style = `background-image: url('${this.img}');`;
  }

}
