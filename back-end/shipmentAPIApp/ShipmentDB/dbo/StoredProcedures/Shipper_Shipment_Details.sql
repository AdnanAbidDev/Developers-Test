CREATE PROCEDURE [dbo].[Shipper_Shipment_Details]
  @shipper_id INT
AS
BEGIN
  SELECT
    shipment.shipment_id,
    shipper.shipper_name,
    carrier.carrier_name,
    shipment.shipment_description,
    shipment.shipment_weight,
    shipmentrate.shipment_rate_description
  FROM SHIPMENT shipment
  INNER JOIN SHIPPER shipper ON shipment.shipper_id = shipper.shipper_id
  INNER JOIN CARRIER carrier ON shipment.carrier_id = carrier.carrier_id
  INNER JOIN SHIPMENT_RATE shipmentrate ON shipment.shipment_rate_id = shipmentrate.shipment_rate_id
  WHERE shipper.shipper_id = @shipper_id;
END;
