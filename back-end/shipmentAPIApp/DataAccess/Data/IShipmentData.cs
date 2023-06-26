using DataAccess.Models;

namespace DataAccess.Data;

public interface IShipmentData
{
    Task<IEnumerable<ShipperModel>> GetShippers();
    Task<ShipperDetailModel> GetShipmentDetail(int shipper_Id);
}