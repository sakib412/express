# Task Api

## User

Register (url/user/register) [Method: POST]

```
All Field is required
{
  firstName:string
  lastName:string
  email:string
  password:string
}
```

Login (url/user/login) [Method: POST]

```
All Field is required
{
  email:string
  password:string
}
```

Update (url/user/update) [Method: POST]

```
You need to login before updating
{
  firstName:string
  lastName:string
  email:string
}
```

User Data get (url/user/check) [Method: GET]

```
You need to login before get user data

Return all data of loggedIn user
```

User Data get (url/user/logout) [Method: GET]

```
Clear all cookies in your browser
```

## Task

Add (url/task/add) [Method: POST]

```
You need to login before adding
{
  title:string(required)
  status:string(default=todo)[Accept only this string = todo/inprogress/done]
}
```

Update (url/task/update) [Method: POST]

```
You need to login before updating
{
  taskId:string(required)
  status:string(required)[todo/inprogress/done]
}
```

Get (url/user/get) [Method: GET]

```
You need to login before getting the task data

Optional = (url/user/get?status=true) (Return All Task Data)

(url/user/get) (Return only todo & inprogress Task Data)
```

## Using Technology

- node js
- mongodb database
- mongoose
- express js
- bcrypt
- cookie-parser
- jsonwebtoken

Api Link:

```sh
https://user-taskapi.herokuapp.com/
```

Api Calling Example:

```sh
fetch("https://user-taskapi.herokuapp.com/task/get?status=true", {
  method: "GET",
  credentials: "include",
  withCredentials: true,
})
.then((res) => res.json())
.then((data) => {
  console.log(data);
});
```
