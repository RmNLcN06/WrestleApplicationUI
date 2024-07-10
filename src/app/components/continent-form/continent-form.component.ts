import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContinentService } from '../../services/continent.service';
import { Continent } from '../../models/continent';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-continent-form',
  standalone: true,
  imports: [],
  templateUrl: './continent-form.component.html',
  styleUrl: './continent-form.component.css'
})
export class ContinentFormComponent implements OnInit
{
  continentForm: FormGroup;
  continentId: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private continentService: ContinentService,
    private route: ActivatedRoute,
    private router: Router
  ) 
  {
    this.continentForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void 
  {
    this.continentId = Number(this.route.snapshot.paramMap.get('id'));
    if(this.continentId)
    {
      this.continentService.getContinent(this.continentId).subscribe(
        data => {
          this.continentForm.setValue(
            {
              name: data.nameContinent
            }
          );
        }
      );
    }
  }

  onSubmit(): void
  {
    if(this.continentForm.valid)
    {
      const continent: Continent = this.continentForm.value;
      if(this.continentId)
      {
        continent.idContinent = this.continentId;
        this.continentService.updateContinent(continent).subscribe(() => 
          {
            this.router.navigate(['/']);
          }
        );
      }
      else
      {
        this.continentService.addContinent(continent).subscribe(() => 
          {
          this.router.navigate(['/']);
          }
        );
      }
    }
  }
}
