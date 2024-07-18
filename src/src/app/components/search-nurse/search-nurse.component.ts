import { Component, OnInit } from '@angular/core';
import { CARE_GIvers, NURSE_PROFILE_DATA } from '../../constants/app.const';
@Component({
  selector: 'app-search-nurse',
  templateUrl: './search-nurse.component.html',
  styleUrls: ['./search-nurse.component.css']
})
export class SearchNurseComponent implements OnInit {
  public CARE_GIVER_SPEACIALITY = CARE_GIvers;
  public NURSE_PROFILES = NURSE_PROFILE_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
