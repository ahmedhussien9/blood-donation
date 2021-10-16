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
  providedIn: 'root'
})
export class SidebarService {
  isFilterOpen = new Subject();

  navItems: NavItem[] = [
  
    
    {
      icon: ICONS.chalkboard,
      nameDictionary: {
        ar: 'لوحة تحكم',
        en: 'Dashboard'
      },
      route: 'dash/receptionist-dash',
      roles: ['receptionist'] 
    },
    {
      icon: ICONS.chalkboard,
      nameDictionary: {
        ar: 'لوحة تحكم',
        en: 'Dashboard'
      },
      route: 'dash/cbc-dash',
      roles: ['cbc'] 
    },
    {
      icon: ICONS.chalkboard,
      nameDictionary: {
        ar: 'لوحة تحكم',
        en: 'Dashboard'
      },
      route: 'dash/doctor-dash',
      roles: ['doctor'] 
    },
    {
      icon: ICONS.home,
      nameDictionary: {
        ar: 'المختبرين',
        en: 'Home'
      },
      route: 'dash/home-reports',
      roles: []
    },
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'المختبرين',
        en: 'Queue'
      },
      route: 'dash/queue',
      roles:  ['receptionist']
    },
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'المختبرين',
        en: 'Campaigns'
      },
      route: 'dash/campaigns',
      roles:  ['receptionist']
    },

    {
      icon: ICONS.fa_vials,
      nameDictionary: {
        ar: 'اختبار CBC للمانحين',
        en: 'Donor CBC Test'
      },
      route: 'dash/cbc',
      roles:  ['cbc']
    },
    
   
    {
      icon: ICONS.question,
      nameDictionary: {
        ar: 'الدكتور',
        en: 'Donor Interview'
      },
      route: 'dash/doctor',
      roles: ['doctor'] 
    },
   
    {
      icon: ICONS.newspaper,
      nameDictionary: {
        ar: 'الدكتور',
        en: 'Donor Announcements '
      },
      route: 'dash/announcements',
      roles: ['doctor'] 
    },
    {
      icon: ICONS.chalkboard,
      nameDictionary: {
        ar: 'لوحة معلومات الفصد',
        en: 'Dashboard'
      },
      route: 'dash/phlebotomy-dash',
      roles: ['phlebotomy'] 
    },
    {
      icon: ICONS.fa_heartbeat,
      nameDictionary: {
        ar: 'لوحة معلومات الفصد',
        en: 'Blood Collection'
      },
      route: 'dash/blood-collection',
      roles:  ['phlebotomy'] 
    }
  ];

  constructor() {}
}
