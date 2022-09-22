import { ConnectionCard } from "./ConnectionCard";

export function Footer() {
    return (
        <>
            <div className='h-[1px] bg-zinc-700 mr-4 col-start-1 col-end-4 my-2 ml-4' />
            <ConnectionCard name='1Leep' src='/github.svg' link='https://github.com/1Leep' />
            <ConnectionCard name='Leep__' src='/twitter.svg' link='https://twitter.com/Leep__' />
        </>
    );
}       