//*next + tailwind
//*root

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div 
        className="flex flex-col min-h-screen min-w-screen bg-cover bg-center aspect-auto margin-0 p-20"
        style={{
          backgroundImage: `url('/images/hero.jpg')`,
        }}  
      >
        <h1 className="text-4xl font-bold text-white p-8">
          D.A.D. Email builder
        </h1>
        <p className="text-xl text-white p-8">
          Create beautiful emails with ease.
        </p>
        <button className="bg-blue-500 h-15 w-50 rounded-2xl">Try Now</button>
      </div>
    </div>
  );
}
