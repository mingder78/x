# x

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.20. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


Method	Endpoint	Description	Example Request
GET	/items	Get all items	curl http://localhost:3000/items
GET	/items/:id	Get item by ID	curl http://localhost:3000/items/1
POST	/items	Create item	curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "Item 1"}'
PUT	/items/:id	Update item by ID	curl -X PUT http://localhost:3000/items/1 -H "Content-Type: application/json" -d '{"name": "Updated Item"}'
DELETE	/items/:id	Delete item by ID	curl -X DELETE http://localhost:3000/items/1

