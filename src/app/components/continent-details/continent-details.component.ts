import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContinentService } from '../../services/continent.service';
import { Continent } from '../../models/continent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-continent-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './continent-details.component.html',
  styleUrl: './continent-details.component.css'
})
export class ContinentDetailsComponent implements OnInit
{
  continent: Continent | undefined;

  constructor(
    private route: ActivatedRoute,
    private continentService: ContinentService
  ) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.continentService.getContinent(id).subscribe(
        data => {
          this.continent = data;
        }
      );
  }
}
