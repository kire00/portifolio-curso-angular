import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public educationExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Universidade Federal de Itajubá',
        p: 'Engenharia de Computação | 2024 ',
      },
      text: '<p>Estou cursando atualmente o curso de Engenharia de Computação, na Universidade Federal de Itajubá. Onde posso me dedicar e expandir meu conhecimento em áreas com Hardware, Software e desenvolvimento web. </p>',
    },
    {
      summary: {
        strong: 'Escola Técnica Estadual Presidente Vargas',
        p: 'Ensino Médio Integrado a Técnicno em Mecatrônica | 2020 - 2022',
      },
      text: '<p>Realizei o meu ensino médio integrado ao curso de Técnico em Mecatrônica de 2020 a 2022 na Escola Técnica Estadual Presidente Vargas. Que me proporcionou conhecimento sobre hardware, software, mecânica e eletríca.</p>',
    },
    {
      summary: {
        strong: 'Cultura Inglesa',
        p: 'Curso de Inglês Avançado | 2018 - 2020',
      },
      text: '<p>Conclui o curso de inglês avançado pela Cultura Inglesa. Onde consegui aperfeiçoar meus conhecimentos da lingua inglesa.</p>',
    },
    
  ]);

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Trainee da Asimov Jr. em Desktop',
        p: 'Asimov Jr. | Maio 2024 - Hoje',
      },
      text: '<p>Atualmente faço parte da Asimov Jr. como Trainee da área da Desktop. Onde eu estou aprendendo cada dia mais coisas sobre a área. E a cada dia mais evoluindo em inovação e aprendizagem, com foco em criar soluções que atendam às necessidades específicas dos usuários </p>',
    },
    {
      summary: {
        strong: 'Trabalho de TCC',
        p: 'ETEC-PV | Fev 2022 - Dez 2022',
      },
      text: '<p>Liderei o meu grupo no trabalho de conclusão de curso no meu ensino médio integrado ao técnico. Realizamos um protótipo de sonda enteral com um dosador automatizado para pessoas necessitadas.</p>',
    },
    {
      summary: {
        strong: 'Software e Hardware',
        p: 'Cursos |  2022 - Hoje',
      },
      text: '<p>Realizei diversos cursos de Software como C e C++ / Python / Git e GitHub / HTML e CSS, além de experiências com Componentes Eletrônicos, Softwares de Simulação e Programação Embarcada.</p>',
    },
  ]);
}
