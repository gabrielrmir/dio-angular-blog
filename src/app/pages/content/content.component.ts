import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/data-fake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  @Input() cover: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  private id: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => this.id = Number(params.get('id'))
    )

    this.initializeComponents(this.id);
  }

  initializeComponents(id: number) {
    const result = dataFake.filter(data => data.id === id)[0];

    this.cover = result.cover;
    this.title = result.title;
    this.description = result.description;
  }

}
