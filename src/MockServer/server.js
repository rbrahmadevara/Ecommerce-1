import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";
export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },
    //Model helps to use mirage's database
    models: {
      product: Model,
      cart: Model,
      wishlist: Model
    },

    routes() {
      this.namespace = "api";
      this.post("/addToCart", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.carts.create(attrs);
      });
      this.get("/cart", (schema, request) => {
        return schema.carts.all();
      });
      this.delete("/cart/:id", (schema, request) => {
        let id = request.params.id;
        schema.carts.find(id).destroy();
        return schema.carts.all();
      });
      this.post("/addToWishlist", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.wishlists.create(attrs);
      });
      this.get("/wishlist", (schema, request) => {
        return schema.wishlists.all();
      });
      this.delete("/wishlist/:id", (schema, request) => {
        let id = request.params.id;
        schema.wishlists.find(id).destroy();
        return schema.wishlists.all();
      });
      this.get("/products", (schema, request) => {
        return schema.products.all();
      });
      this.post("/productsAdded", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.products.create(attrs);
      });
    },

    seeds(server) {
      [...Array(12)].forEach((_) => {
        server.create("product", {
          id: faker.random.uuid(),
          name: faker.commerce.productName(),
          image: faker.random.image(),
          price: faker.commerce.price()
        });
      });
    }
  });
}
