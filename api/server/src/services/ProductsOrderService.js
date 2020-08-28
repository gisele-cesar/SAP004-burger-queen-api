import database from '../models'

class ProductsOrderService {
  static async findByOrderId(orderId) {
    try {
      return await database.Products_Order.findAll({where:{orderId}})
    } catch (error) {
      throw error
    }
  }
  static async add(orderId, newProductsOrder) {
  try {
    return await database.Products_Order.create({...newProductsOrder, orderId})
  } catch (error) {
    throw error
  }
}

}
export default ProductsOrderService