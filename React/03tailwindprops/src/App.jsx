import Card from "./components/Card"
function App() {
  let myObje = {
    userName:"Aditya",
    age:23,
  }

  let arr = [1,2,3,4,5];

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">


   
            <h1 className="bg-green-300 text-black rounded-3xl text-2xl px-6 py-2">
Tailwind test</h1>
      <Card channel="chai aur code" user={myObje}  array={arr}/>
       <Card/>
     </div>
    </>
  )
}

export default App
