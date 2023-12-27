
## API Reference

#### Get random user info

```http
  GET /api
```

#### Get random users by gender

```http
  GET /api/?gender=<gender>&limit=<limit>&format=<format>
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `limit`      | `number` | **[Optional]** Limit of results to fetch |
| `gender`      | `string` | **[Optional]** Gender of results |
| `format`      | `string` | **[Optional]** format of results (Eg: json, xml, csv, etc) |



