import { Component, OnInit } from '@angular/core';

//Enum
import { ETheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon: string = ETheme.ICON_MOON;
  public textTheme: string = ETheme.TEXT_MOON;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    const theme = document.body.classList.toggle('dark-theme');
    //nesse caso, o toggle vai permitir que elemento volte ao estado anterior

    if (theme) {
      this.textTheme = ETheme.TEXT_SUN;
      return (this.icon = ETheme.ICON_SUN)
    }
    this.textTheme = ETheme.TEXT_MOON;
    return (this.icon = ETheme.ICON_MOON);
  }

}
