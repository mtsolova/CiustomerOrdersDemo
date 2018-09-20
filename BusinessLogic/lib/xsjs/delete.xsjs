
$.response.contentType = "application/text";

var customerId = "'" + $.request.parameters.get("KUNNR") + "'";
var orderId = "'" + $.request.parameters.get("VBELN") + "'";

var conn = $.hdb.getConnection();
var query = "DELETE FROM CustomerDetails.Orders where KUNNR = " + customerId + "and VBELN = " + orderId;

try {
  conn.executeUpdate(query);
  conn.commit();
} catch(err) {
	return err.message;
}

