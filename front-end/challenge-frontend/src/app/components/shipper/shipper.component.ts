import { Component } from '@angular/core';
import { ShipmentDetail } from 'src/app/interfaces/shipment-detail';
import { Shipper } from 'src/app/interfaces/shipper';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.component.html',
  styleUrls: ['./shipper.component.css'],
})
export class ShipperComponent {
  shippers: Shipper[] = [];
  shipmentDetailsVisible: { [key: number]: boolean } = {};
  shipmentDetails: { [key: number]: ShipmentDetail } = {};

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit() {
    this.getShippers();
  }

  getShippers() {
    this.shipmentService.getShippers().subscribe((data) => {
      this.shippers = data;
    });
  }

  toggleShipmentDetails(shipperId: number) {
    if (!this.shipmentDetailsVisible[shipperId]) {
      this.shipmentService.getShipmentDetails(shipperId).subscribe((data) => {
        this.shipmentDetails[shipperId] = data;
      });
    }
    this.shipmentDetailsVisible[shipperId] =
      !this.shipmentDetailsVisible[shipperId];
  }
}
