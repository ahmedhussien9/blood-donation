import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ICONS } from '../constants';

export interface NavItem {
  icon?: string;
  route?: string;
  nameDictionary: {
    ar: string;
    en: string;
  };
  children?: NavItem[];
  isExpand?: boolean;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isFilterOpen = new Subject();

  navItems: NavItem[] = [
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'المختبرين',
        en: 'Home',
      },
      route: 'dash/home-reports',
      roles: [],
    },
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'المختبرين',
        en: 'Queue',
      },
      route: 'dash/queue',
      roles: [],
    },
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'المختبرين',
        en: 'Campaigns',
      },
      route: 'dash/campaigns',
      roles: [],
    },
  ];

  constructor() {}
}
