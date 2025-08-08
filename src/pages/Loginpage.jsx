import { Link } from "react-router-dom";

const Loginpage = () => {

const labelstyle = "block text-sm font-medium";
const inputstyle = "border border-white/30 rounded-3xl w-full mb-2.5 bg-transparent p-1 focus:outline focus:outline-blue-700";

  return (

    <div className="min-h-screen bg-cover bg-center bg-[url('/img/bg-log.jpg')] flex flex-col justify-center items-center bg-no-repeat">
      <div className="w-full max-w-md p-8 m-auto text-white transition-transform duration-500 ease-in-out transform border border-white shadow-lg rounded-2xl shadow-red-500 backdrop-blur-xs hover:shadow-lg hover:shadow-blue-500 hover:scale-110">
        <h2 className="font-bold text-center animate-pulse">Login Us</h2>
        <form className="space-y-1" method="post">
{/*username*/}
          <label For="name" className={{labelstyle}}>UserName:</label>
          <input type="text" name="fname" id="name" required placeholder="  username"
          className={inputstyle}/>
{/*email*/}
          <label For="email" className={labelstyle}> Email:</label>
          <input type="text" name="email" id="email" required placeholder="  user@gmail.com" 
          className={inputstyle}/>
{/*password*/}
          <label For="pass" className={labelstyle}>Password:</label>
          <input type="password" name="pass" id="pass" required placeholder="  *****"
          className={inputstyle}/>
          {/*submit button*/}
          <div className="flex justify-center mt-2">
          <button type="submit" 
          className="px-3 py-1 transition-all duration-500 ease-in-out transform cursor-pointer ring-1 ring-blue-500 rounded-4xl hover:bg-blue-800 hover:ring-white hover:scale-110"><Link to="/home">Sign In</Link></button>
          </div>
        </form>
      </div>
    </div>
  ); 
};

export default Loginpage;