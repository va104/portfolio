import { Component, OnInit } from '@angular/core';
import { Skill } from './skills';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})



export class MySkillsComponent implements OnInit {

  allSkills: Skill[] = [
    {name: 'Angular', imgPath: '../../assets/icons/skills/angular.svg'},
    {name: 'JavaScript', imgPath: '../../assets/icons/skills/java_script.svg'},
    {name: 'Typescript', imgPath: '../../assets/icons/skills/typescript.svg'},
    {name: 'SQL', imgPath: '../../assets/icons/skills/database.svg'},
    {name: 'HTML', imgPath: '../../assets/icons/skills/html.svg'},
    {name: 'CSS', imgPath: '../../assets/icons/skills/css.svg'},
    {name: 'Git', imgPath: '../../assets/icons/skills/git.svg'},
    {name: 'Jira', imgPath: '../../assets/icons/skills/jira.svg'},
    {name: 'Firebase', imgPath: '../../assets/icons/skills/firebase.svg'},
    {name: 'Scrum', imgPath: '../../assets/icons/skills/scrum.svg'},
    {name: 'Rest-Api', imgPath: '../../assets/icons/skills/api.svg'},
    {name: 'Wordpress', imgPath: '../../assets/icons/skills/wordpress.svg'},
  ];

  constructor() { 
     }

  ngOnInit(): void {
  }
}
