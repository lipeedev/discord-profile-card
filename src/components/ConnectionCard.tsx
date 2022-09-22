import { Arrow } from "./Arrow";

interface ConnectionCardProps {
    src: string;
    name: string;
    link: string;
}

export function ConnectionCard({ src, name, link }: ConnectionCardProps) {
    return (
        <div className='p-2 bg-zinc-700 mr-4 col-start-1 col-end-4 my-1 ml-4 rounded-[3px] flex items-center justify-between'>
            <div className='flex items-center ml-2'>
                <img src={src} className='pr-1' />
                <strong className='text-white text-xs block mt-1 pr-1'>{name}</strong>
            </div>

            <a href={link}>
                <Arrow />
            </a>
        </div>
    );
}