using DataAccess.DbAccess;
using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Data;

public class ShipmentData : IShipmentData
{
    private readonly ISqlDataAccess _db;

    public ShipmentData(ISqlDataAccess db)
    {
        _db = db;
    }

    public Task<IEnumerable<ShipperModel>> GetShippers() =>
       _db.LoadData<ShipperModel, dynamic>(storedProcedure: "dbo.Shipper_GetAll", new { });

    public async Task<ShipperDetailModel> GetShipmentDetail(int shipper_Id)
    {
        var results = await _db.LoadData<ShipperDetailModel, dynamic>(
            storedProcedure: "dbo.Shipper_Shipment_Details",
            new { shipper_id = shipper_Id }
            );
        return results.FirstOrDefault();
    }

}
