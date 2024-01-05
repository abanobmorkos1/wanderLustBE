# Wanderlust Web Application

Wanderlust is a web application designed to help users capture and share their travel experiences. Whether it's a weekend getaway or an adventurous journey, Wanderlust allows users to create diaries, add descriptions, and attach images to document their memorable moments.

## Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv
- morgan

## Getting Started

To run the Wanderlust application locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```
2.
    **Create a `.env` file in the root directory and add the following:**
    ```
    Port=<your-port-number>
    DATABASE_URL=<your-mongodb-connection-url>
    ```
3.
    **Clone the repository:**
    ```
        npm start
    ```
5.
    **Open your web browser and go to http://localhost:####**

 ## Routes

| Method | Endpoint | Description                                        |
| ------ | ------------------ |------------------------------------------|
| GET    | `/diaries`         | Get all diaries                          |
| GET    | `/diaries/:id`     | Get a specific diary by ID               |
| POST   | `/diaries`         | Create a new diary                       |
| PUT    | `/diaries/:id`     | Update a specific diary by ID            |
| DELETE | `/diaries/:id`     | Delete a specific diary by ID            |



### GET `/diaries`

- **Description:** Retrieve all diaries.
- **Example Response:**
  ```json
  [
    {
      "_id": "someId",
      "name": "Trip to Mountains",
      "description": "An amazing journey to the mountains",
      "date": "2024-01-05T12:00:00Z",
      "data": "base64-encoded-image-data",
      "pin": 1234
    },
    // ... other diaries
  ]
```




### GET `/diaries/:id`

- **Description:** Retrieve a specific diary by ID.

**Example Response:**
  ```json
  [
    {
      "_id": "someId",
      "name": "Trip to Mountains",
      "description": "An amazing journey to the mountains",
      "date": "2024-01-05T12:00:00Z",
      "data": "base64-encoded-image-data",
      "pin": 1234
    },
  ]
```

### POST `/diaries`

- **Description:** Create a new diary.

 **Request Body:**
  ```json
  [
    {
    "name": "New Adventure",
    "description": "Exciting journey to new places",
    "date": "2024-01-10T12:00:00Z",
    "data": "base64-encoded-image-data",
    "pin": 5678
    }
  ]

**Example Response:**
```json
[
    {
    "_id": "newId",
    "name": "New Adventure",
    "description": "Exciting journey to new places",
    "date": "2024-01-10T12:00:00Z",
    "data": "base64-encoded-image-data",
    "pin": 5678
    }
]
```


### PUT  `/diaries/:id`

- **Description:** Update a specific diary by ID

 **Request Body:**
  ```json
  [
    {
    "name": "Updated Adventure",
    "description": "An updated description",
    "date": "2024-01-15T12:00:00Z",
    "data": "base64-encoded-updated-image-data",
    "pin": 9999
    }
  ]
```
**Example Response:**

```json
[
    {
    "_id": "someId",
    "name": "Updated Adventure",
    "description": "An updated description",
    "date": "2024-01-15T12:00:00Z",
    "data": "base64-encoded-updated-image-data",
    "pin": 9999
    }
]
```

### PUT  `/diaries/:id`

- **Description:** Update a specific diary by ID

 **Request Body:**
  ```json
  {
    "message": "Diary successfully deleted"
  }
  ```

# Pin Code Security
 Wanderlust incorporates a simple yet effective security feature through the use of a user-defined pin code. When creating a new diary entry, users are required to provide a numeric pin of their choice. This pin serves as a means of authentication and verification for the diary entry.

# How It Works:

 1. Creating a New Diary Entry:
    * The chosen `pin` is stored in the database along with other details of the diary entry.
    * The chosen `pin` is stored in the database along with other details of the diary entry.

2. Securing Diary Entry with Pin:
    * The `pin` becomes associated with the specific diary entry, providing a level of protection.
    * This ensures that only users with the correct `pin` can perform certain actions on their diary entries.

3. Creating a New Diary Entry:
    * The chosen `pin` is stored in the database along with other details of the diary entry.
    * The chosen `pin` is stored in the database along with other details of the diary entry.

4. Authentication with Pin:
    * The server checks if the provided `pin` matches the one associated with the diary entry being deleted.
    * If the `pin` matches, the server allows the deletion of the diary entry.
    * If the `pin` does not match, the server denies the deletion, ensuring that only users with the correct pin can delete their entries.

# User Benefits:

* No Account Creation Required:
    * Users can enjoy the security of their diary entries without the need to create accounts or remember complex credentials.
* Personalized Security:
    * The `pin` code allows users to personalize the security of their entries, adding an extra layer of control.

# Important Note:

* Users should keep their `pin` codes secure to prevent unauthorized deletion of their diary entries.

        Feel free to explore Wanderlust, capture your adventures, and share your travel stories with the confidence that your entries are protected by your chosen pin code!
