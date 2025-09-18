const userData =[
   {id: 1, name: "Gooper", age: 17, status: "Exists"},
   {id: 2, name: "Vegeta", age: 1000000, status: "Online"},
   {id: 3, name: "Jessie", age: 10, status: "Offline"},
   {id: 4, name: "Someone", age: -1, status: "Online"}
   
];

function Users(){
    return (
    <body>
      <div className="App">
        <h1>Users</h1>
        <div className="users">
          {userData.map(
            (user)=>(
              <div className="user" key={user.id}>
                <h2>{user.name}</h2>
                <p>Age: {user.age}</p>
                <p>Status: {user.status}</p>
              </div>
            )
          )}
        </div>
      </div>
    </body>
  )
}

export default Users