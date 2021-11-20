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

## Task

Add (url/task/add) [Method: POST]

```
You need to login before adding
{
  title:string(required)
  status:string(default=todo)
}
```

Update (url/task/update) [Method: POST]

```
You need to login before updating
{
  taskId:string(required)
  status:string(required)
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
http://localhost:3000/
```
