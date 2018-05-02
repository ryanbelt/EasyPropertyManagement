import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Property, PropertyService } from '../../api/client/properties/property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  property: Property;

  constructor(private propertyService: PropertyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProperty(this.route.snapshot.params.id);
  }

  loadProperty(id:string) {
    this.propertyService.findProperty(id)
      .subscribe(property => {
        this.property = property;
      });
  }
}
