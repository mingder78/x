import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia();

// Enable Swagger
app.use(
  swagger({
    documentation: {
      info: {
        title: "Elysia CRUD API",
        version: "1.0.0",
        description: "A simple CRUD API using Elysia with Bun",
      },
    },
  })
);

interface Item {
  id: number;
  name: string;
}

let items: Item[] = [];
let idCounter = 1;

// Get all items
app.get("/items", () => items, {
  detail: {
    summary: "Get all items",
    description: "Returns a list of all items.",
  },
});

// Get a single item
app.get(
  "/items/:id",
  ({ params }) => {
    const item = items.find((i) => i.id === Number(params.id));
    return item ?? { error: "Item not found" };
  },
  {
    detail: {
      summary: "Get an item by ID",
      description: "Retrieve a specific item using its ID.",
      params: { id: "ID of the item" },
    },
  }
);

// Create a new item
app.post(
  "/items",
  ({ body }) => {
    const newItem: Item = { id: idCounter++, name: body.name };
    items.push(newItem);
    return newItem;
  },
  {
    body: t.Object({ name:t.String() }),
    detail: {
      summary: "Create a new item",
      description: "Adds a new item to the list.",
    },
  }
);

// Update an item
app.put(
  "/items/:id",
  ({ params, body }) => {
    const item = items.find((i) => i.id === Number(params.id));
    if (!item) return { error: "Item not found" };

    item.name = body.name;
    return item;
  },
  {
    body: t.Object({ name:t.String() }),
    detail: {
      summary: "Update an item",
      description: "Updates an existing item's details.",
    },
  }
);

// Delete an item
app.delete(
  "/items/:id",
  ({ params }) => {
    items = items.filter((i) => i.id !== Number(params.id));
    return { message: "Item deleted" };
  },
  {
    detail: {
      summary: "Delete an item",
      description: "Removes an item from the list.",
    },
  }
);

app.listen(3000);
console.log("🚀 Server running on http://localhost:3000");
console.log("📜 Swagger UI available at http://localhost:3000/swagger");
