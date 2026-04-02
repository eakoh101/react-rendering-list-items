```javascript

{flashSaleItems.map((item, index) => (
  // ✅ ถูกต้อง: ใส่ที่ตัวนอกสุดตัวเดียว
  <div key={item.id} className="flash-sale-item"> 
    <div className="name">{item.name}</div>
    <div className="price">{item.price}</div>
  </div>
))}

## Sample1 ##

const flashSaleItems = [
	{
		id: "001",
		name: "Iphone400",
		price: 4000000
	},
	{
		id: "002",
		name: "Samsung Galaxy",
		price: 66000
	},
	{
		id: "003",
		name: "LG TV",
		price: 26000
	}
];

function App() {
  return (
    <div className="app">
      <h1 className="app-heading">Flash Sale Items</h1>
      <div className="flash-sale-list">
        
        {/* ใช้ .map เพื่อวนลูปสร้างรายการสินค้า */}
        {flashSaleItems.map((item,index) => (
          <div key={index} className="flash-sale-item">
            <div className="flash-sale-item-name">
              Name: {item.name}
            </div>
            <div className="flash-sale-item-price">
              Price: {item.price} 
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

## Sample2 ##

function App() {
  const todos = [
    {
      topic: "Read a book",
      status: "Completed",
    },
    {
      topic: "Do workout",
      status: "Not started",
    },
    {
      topic: "Feed the dog",
      status: "In progress",
    },
  ];

  return (
    <div className="app">
      <h1 className="app-heading">To Do List</h1>
      <div className="todo-list">
        <ul>
          {todos.map((item, index) => (
            <li key={index}>
              {item.topic} - Status: {item.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}