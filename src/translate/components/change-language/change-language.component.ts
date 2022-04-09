import {Component, ElementRef, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {OverlayPanel} from "primeng/overlaypanel";

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.css']
})
export class ChangeLanguageComponent implements OnInit {
  @ViewChild('op', {static: false}) model: OverlayPanel | undefined;

  languageList=[
    {code: 'en', label: 'English'},
    {code: 'ro', label: 'Română'},
  ]

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    if( sessionStorage.getItem('lang')!==null){
      this.translateService.use(sessionStorage.getItem('lang')!);
    }
  }


  onRowSelect($event: any) {
    this.translateService.use($event.data.code);
    sessionStorage.setItem('lang', $event.data.code);
    this.model!.hide();
  }
}

