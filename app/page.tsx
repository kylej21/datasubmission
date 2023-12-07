export default function Home() {
  return (
    <div className="flex text-black h-full w-full flex-col items-center space-y-10">
        <div className = "text-6xl text-black pb-10">
          Description
        </div>
        <div className="text-gray-600 w-1/2 text-center text-2xl pb-4">
            This web page is used for me to track my weightlifting data into a personal MySQL database. I will be using this database 
            to periodically analyze the data and make cumulative reviews of my sessions. I decided to make this into a full stack application
            and deploy it so that I could update my sessions from anywhere.
        </div>
        <div className = "text-4xl text-gray-800 items-center justify-center text-center">
          To do list: 
          <ul className="items-left text-2xl text-left justify-center text-gray-600 flex-col flex list-disc pt-3">
            <li>Create login and user authentication</li>
            <li>Create issues page that can fetch and present MySQL queries</li>
            <li>Decorate to appear more aesthetic</li>
          </ul>
        </div>
    </div>
    
  )
}
