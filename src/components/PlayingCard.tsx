interface PlayingCardProps {
    src: string;
    name: string;
    details?: string;
    state?: string;
    timeElapsed?: string;
}

export function PlayingCard({ src, name, state, timeElapsed, details = 'for 1 hour' }: PlayingCardProps) {
    return (
        <>
            <small className='text-[#B9BBBE] font-extrabold text-xs block mt-2'>PLAYING A GAME</small>

            <div className='flex'>
                <img src={src} className='bg-zinc-900 rounded-lg h-14 w-14 my-2' />

                <div className='ml-3 mt-2 whitespace-nowrap'>
                    <strong className='text-[#DCDDDE] text-sm block'>{name}</strong>
                    <span className='text-[#B9BBBE] text-xs block'>{details}</span>
                    {state && <span className='text-[#B9BBBE] text-xs block'>{state}</span>}
                    {timeElapsed && <span className='text-[#B9BBBE] text-xs block'>{timeElapsed} elapsed</span>}
                </div>
            </div>
        </>
    );
}