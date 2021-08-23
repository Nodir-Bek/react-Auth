# delivery
** SWAGGER
token: {
    id: 'agent yoki customer id, admin uchun null',
    title: 'agent/customer title, yoki admin',
    role: 'admin/agent/customer'
}

--------------Users--------------------------------------------

* Faqat admin uchun
----------------------------------------------------------------
POST    /api/admin/auth
Request.Body    { username: 'sfsdf', password: 'dfsfds' }
Response    200     { token: 'asdsdfdsfdsfdsfdsfsdf' }
> Example
token.role = 'admin'

----------------------------------------------------------------
GET    /api/admin/users
Response    200     [{User1}, {User2}, ....]

* Yangi User qushish, Bu faqat Admin uchun
----------------------------------------------------------------
POST    /api/admin/users
Request.Body    {User1}
Response    200     {NewUser1}

* Userni malumotlarini yangilash, Bu faqat Admin uchun
----------------------------------------------------------------
PUT    /api/admin/users/userId
Request.Body    {UpdateUser}
Response    200     {NewUser}

* Userni o'chirib tashlash, Bu faqat Admin uchun
----------------------------------------------------------------
DELETE    /api/admin/users/userId
Response    200     {DeleteUser}




------------------Agents--------------------------------------
* Agent Auth
POST    /api/agent/auth
Request.Body { username, password }
Response.Body       { token }

* Mahsulotlar ruyhatini kurish
----------------------------------------------------------------
GET    /api/agent/products
Response    200     [{product1}, {product2}, ....]

* Yangi Mahsulot qushish
----------------------------------------------------------------
POST    /api/agent/products
Request.Body    {Product1}
Response    200     {NewProduct1}

* Mahsulotni malumotlarini yangilash, Bu faqat Agent uchun
----------------------------------------------------------------
PUT    /api/agent/products/productId
Request.Body    {UpdateProduct}
Response    200     {NewProduct}

* Mahsulotni o'chirib tashlash, Bu faqat Agent uchun
----------------------------------------------------------------
DELETE    /api/agent/products/productId
Response    200     {DeleteProduct}


* Zakaslar ruyhatini kurish, role: Agent
----------------------------------------------------------------
GET    /api/agent/orders
Response    200     [{order1}, {order2}, ....]

* Zakasni malumotlarini yangilash, Bu faqat Admin uchun
----------------------------------------------------------------
PUT    /api/agent/orders/orderId
Request.Body    { status, agentComment }
Response    200     {NewOrder}



-----------------Customer -----------------------------
POST    /api/customer/auth
Request.Body { username, password }
Response.Body       { token }

-----------------Customer view Agents-----------------------
GET     /api/customer/agents
Response.Body       [{UserAgent}, {UserAgent}]

------------------Customer Products-------------------------
GET     /api/customer/products?agentId=dsadadasdasd

------------------Customer Orders=---------------------
GET     /api/customer/orders
Response.Body = [{Order1}, {Order2}, {Order2}]

POST    /api/customer/orders
Request.Body    {NewOrder}
Response.Body       {NewOrder}

PUT    /api/customer/orders/orderId
Request.Body    {status,customerComment}
Response.Body   {NewOrder}