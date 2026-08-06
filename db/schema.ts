import { index, integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const customers = sqliteTable("customers", {
  id: integer("id").primaryKey(),
  name: text("name"),
  country: text("country"),
  segment: text("segment"),
  signupDate: text("signup_date"),
});

export const products = sqliteTable("products", {
  id: integer("id").primaryKey(),
  name: text("name"),
  category: text("category"),
  unitPrice: real("unit_price"),
});

export const orders = sqliteTable("orders", {
  id: integer("id").primaryKey(),
  customerId: integer("customer_id").references(() => customers.id),
  orderDate: text("order_date"),
  status: text("status"),
}, (table) => [
  index("idx_orders_status_date").on(table.status, table.orderDate),
  index("idx_orders_customer_id").on(table.customerId),
]);

export const orderItems = sqliteTable("order_items", {
  id: integer("id").primaryKey(),
  orderId: integer("order_id").references(() => orders.id),
  productId: integer("product_id").references(() => products.id),
  quantity: integer("quantity"),
  unitPrice: real("unit_price"),
}, (table) => [
  index("idx_order_items_order_id").on(table.orderId),
  index("idx_order_items_product_id").on(table.productId),
]);

export const lumioMemories = sqliteTable("lumio_memories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  memoryKey: text("memory_key").notNull().unique(),
  memoryValue: text("memory_value").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const lumioMessages = sqliteTable("lumio_messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  sessionId: text("session_id").notNull().default("legacy"),
  role: text("role").notNull(),
  content: text("content").notNull(),
  createdAt: text("created_at").notNull(),
}, (table) => [
  index("idx_lumio_messages_created_at").on(table.createdAt),
]);
