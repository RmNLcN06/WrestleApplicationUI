import { Component, OnInit } from '@angular/core';
import { ContinentService } from '../../services/continent.service';
import { Continent } from '../../models/continent';

@Component({
  selector: 'app-continent-list',
  standalone: true,
  imports: [],
  templateUrl: './continent-list.component.html',
  styleUrl: './continent-list.component.css'
})
export class ContinentListComponent implements OnInit
{
  continents: Continent[] = [];

  constructor(private continentService: ContinentService) {}

  ngOnInit(): void
  {
    this.continentService.getContinents().subscribe(
      data => 
      {
        this.continents = data;
      }
    );
  }

  deleteContinent(id: number): void
  {
    this.continentService.deleteContinent(id).subscribe(() => {
      this.continents = this.continents.filter(continent => continent.idContinent !== id);
    });
  }
}
