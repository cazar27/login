import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent implements OnInit {

  @Input() textSlide = 'Recuerde';
  @Input() checked = false;
  @Input() disabled = false;
  color: ThemePalette = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
