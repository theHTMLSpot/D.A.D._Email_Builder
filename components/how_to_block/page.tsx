export default function HowToBlock({id, text}: {id: number, text: string})
{
    return(
        <div className="w-3/5 aspect-square grid place-items-center">
          <p className="w-1/4 aspect-square bg-amber-300 text-white text-xl rounded-full grid place-items-center">
            {id}
          </p>
          <p className="text-black text-center">
            {text}
          </p>
          
    </div>
    )
}