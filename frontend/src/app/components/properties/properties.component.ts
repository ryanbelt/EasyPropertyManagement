import { Component, OnInit } from '@angular/core';

import { Property, PropertyService } from '../../api/client/properties/property.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
  properties: Property[] = [];

  constructor(
    private propertyService: PropertyService
  ) { }

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties() {
    this.propertyService.queryProperties()
      .subscribe(properties => {
        this.properties = properties;
        console.log(this.properties)
      });
  }
}
