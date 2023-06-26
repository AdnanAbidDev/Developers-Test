namespace ShipmentAPI;

public static class Api
{
    public static void ConfigureApi(this WebApplication app)
    {
        // mappings
        app.MapGet("/Shippers", GetShippers);
        app.MapGet("/Shipper_Shipment_Detials/{id}", GetShipmentDetail);
    }

    private static async Task<IResult> GetShippers(IShipmentData data)
    {
        try
        {
            return Results.Ok(await data.GetShippers());
        }
        catch (Exception Ex)
        {
            return Results.Problem(Ex.Message);
        }
    }


    private static async Task<IResult> GetShipmentDetail(int id, IShipmentData data)
    {
        try
        {
            var result = await data.GetShipmentDetail(id);
            if (result == null) { return Results.NotFound(); }
            return Results.Ok(result);
        }
        catch (Exception Ex)
        {
            return Results.Problem(Ex.Message);
        }
    }
}
