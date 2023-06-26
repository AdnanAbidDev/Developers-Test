import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipper } from '../interfaces/shipper';
import { ShipmentDetail } from '../interfaces/shipment-detail';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'https://localhost:7217/';
  getShippers() {
    return this.httpClient.get<Shipper[]>(this.apiUrl + 'Shippers');
  }
  getShipmentDetails(id: number) {
    return this.httpClient.get<ShipmentDetail>(
      this.apiUrl + 'Shipper_Shipment_Detials/' + id
    );
  }
}
