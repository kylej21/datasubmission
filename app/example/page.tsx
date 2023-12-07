import Image from "next/image"
import query from "./public/query.png"
export default function Example(){
    return(
        <div className="flex text-black h-full w-full flex-col items-center space-y-10">
        <div className = "text-6xl text-black pb-10">
          Examples
        </div>
        <div className="text-gray-600 w-1/2 text-center text-2xl pb-4">
            While I am only able to host MySQL databases locally, I will update examples of SQL
            queries here. I may also include some data analytic images with Tableau or other 
            softwares.
        </div>
        <div className = "text-4xl text-gray-800 items-center justify-center space-y-10 text-center">
            <div>Example Query</div>
            
          <Image
            alt="Example SQL Query"
            src={query}
            width={1000}
            height={1000}
          />
        </div>
    </div>
    )
}