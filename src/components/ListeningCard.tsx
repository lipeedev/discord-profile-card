interface ListeningCardProps {
    src: string;
    name: string;
    details?: string;
    state?: string;
    timeElapsed?: string;
}

export function ListeningCard({ src, name, state, timeElapsed, details }: ListeningCardProps) {
    return (
        <>
            <small className='text-[#B9BBBE] font-extrabold text-xs block mt-2'>LISTENING TO SPOTIFY</small>

            <div className='flex'>
                <img src={src} className='bg-zinc-900 rounded-lg h-14 w-14 my-2' />

                <div className='ml-3 mt-2'>
                    <strong className='text-[#DCDDDE] text-sm block'>{name}</strong>
                    {details && <span className='text-[#B9BBBE] text-xs block'>by {details}</span>}
                    {state && <span className='text-[#B9BBBE] text-xs block'>on {state}</span>}
                    {timeElapsed && <span className='text-[#B9BBBE] text-xs block'>{timeElapsed} elapsed</span>}
                </div>
            </div>
        </>
    );
}