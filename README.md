## README.md v1

-----

_FRONTEND_ - **VueJS/Vuex/Bootstrap**

_BACKEND_ - **Laravel/Blade**

_DATABASE_ - **MySQL**


-----

**Rest API**
-----

* **/users**
    * Get all users
* **/users/{user_id}**
    * Get user
* **/users/{user_id}/posts**
    * Get posts user
* **/users/{user_id}/posts/{post_id}**
    * Get post user
* **/users/{user_id}/followers**
    * Get followers user
* **/users/{user_id}/follows**
    * Get follows user

-----

* **GET /posts**
    * Get posts
    * Response

    ```json
    [
        {
            "title": "str",
            "body": "str",
            "category": {
                "id": "int",
                "title": "str"
            },
            "user": {
                "id": "int",
                "nickname": "str",
                "first_name": "str",
                "last_name": "str"
            },
            "tags": [
                {
                    "id": "int",
                    "title": "str"
                },
                "..."
            ]
        },
        "..."
    ]
    ```

* **GET /posts/{post_id}**
    * Get post
    * Response
    ```json
    {
        "title": "str",
        "body": "str",
        "category": {
            "id": "int",
            "title": "str"
        },
        "user": {
            "id": "int",
            "nickname": "str",
            "first_name": "str",
            "last_name": "str"
        },
        "tags": [
            {
                "id": "int",
                "title": "str"
            },
            "..."
        ]
    }
    ```

* **GET /posts/{post_id}/comments**
    * Get comments post
    * Response
    ```json
    [
        {
            "id": "int",
            "text": "str",
            "user": {
              "id": "int",
              "nickname": "str",
              "first_name": "str",
              "last_name": "str"
            }
        }, "..."
    ]
    ```
* **GET /posts/{post_id}/reactions**
    * Get post reactions
    * Response
    ```json
    [
        {
            "id": "int",
            "value": "int",
            "user": {
              "id": "int",
              "nickname": "str",
              "first_name": "str",
              "last_name": "str"
            }
        }, "..."
    ]
    ```


* **POST /posts**
    * Store post
    * Request
    ```json
    {
        "title": "str",
        "body": "str",
        "category_id": "int",
        "tags": [
            "id:int",
            "..."
        ]
    }
    ```

* **PATCH /posts/{post_id}**
    * Update post
    * Request
    ```json
    {
        "title": "str",
        "body": "str",
        "category_id": "int",
        "tags": [
            "id:int",
            "..."
        ]
    }
    ```

* **DELETE /posts/{post_id}**
    * Delete post




* **POST /posts/{post_id}/comments**
    * Store comment post
    * Request
    ```json
    {
        "text": "str"
    }
    ```

* **PATCH /posts/{post_id}/comments/{comments_id}**
    * Update comment
    * Request
    ```json
    {
        "text": "str"
    }
    ```

* **DELETE /posts/{post_id}/comments/{comments_id}**
    * Delete comment
