import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/github.png',
      alt: 'Projeto Curriculo GitHub',
      title: "Projeto Curriculo Git/GitHub",
      with: '140px',
      height: '100px',
      description: 'Trabalho de realização de um Currículo através curso de Git/GitHub da Capacitação da Asimov Jr.',
      links: [
        {
          name: 'Conheça o meu site',
          href: 'https://kire00.github.io/#home'
        },
      ]
    },
    {
      src: 'assets/img/projects/htmlcss.webp',
      alt: 'Projeto Curriculo HTML e CSS',
      title: "Projeto Curriculo HTML e CSS",
      with: '150px',
      height: '150px',
      description: 'Trabalho de realização de um Currículo através curso de HTML e CSS da Capacitação da Asimov Jr.',
      links: [
        {
          name: 'Conheça o meu site',
          href: 'http://eriklopes.great-site.net/curriculo.html'
        },
      ]
    },
    {
      src: 'assets/img/projects/typescript.png',
      alt: 'Projeto Lista de tarefas TypeScript',
      title: "Projeto Lista de tarefas TypeScript",
      with: '120px',
      height: '120px',
      description: 'Trabalho de realização de uma Lista de Tareda através curso de TypeScript da Capacitação da Asimov Jr.',
      links: [
        {
          name: 'Conheça o meu site',
          href: 'https://github.com/kire00/curso-typescript-listadetarefas'
        },
      ]
    },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
