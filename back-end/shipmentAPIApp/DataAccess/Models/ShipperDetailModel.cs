using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models;

public class ShipperDetailModel
{
    public int shipment_id { get; set; }
    public string shipper_name { get; set; }
    public string carrier_name { get; set; }
    public string shipment_description { get; set; }
    public int shipment_weight { get; set; }
    public string shipment_rate_description { get; set; }
   
}
