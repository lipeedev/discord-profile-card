import { useEffect, useState } from 'react';

import { PlayingCard, Heading, Footer, ListeningCard } from './components';

import backgroundImg from './assets/background.png';
//import backgroundImg from './assets/background_2.gif';

import './styles/main.css';
import { Gateway } from './connection/Gateway';
import { User } from './types';

const gatewayClient = new Gateway();

export default function App() {

  const [user, setUser] = useState<User>();
  const imgUser = user && `${import.meta.env.VITE_DISCORD_CDN}/avatars/${user.id}/${user.avatar}.png?size=2048`;
  const aboutMeUrl = 'https://github.com/1Leep';

  useEffect(() => gatewayClient.connect(setUser), []);

  return (
    <div className='my-14 flex flex-col items-center'>

      <div className='bg-zinc-900 grid grid-rows-3 pb-3 w-[300px] rounded-xl shadow-lg shadow-black/40'>
        <Heading backgroundImg={backgroundImg} userImg={imgUser ?? ''} />

        <div className='row-start-4 ml-4 mt-1'>
          <strong className='text-xl text-white font-bold'>{user?.username}</strong>
          <span className='text-[#B9BBBE] text-xl font-bold'>#{user?.discriminator}</span>
        </div>

        <div className='col-start-1 col-end-4 ml-4 mt-1'>
          <small className='text-xs text-[#DCDDDE]'>...?</small>
          <div className='h-[1px] bg-zinc-700 mt-2 mr-4' />
        </div>

        <div className='ml-4 mt-3'>
          <small className='text-[#B9BBBE] font-extrabold text-xs block'>ABOUT ME</small>
          <a href={aboutMeUrl}>
            <small className='text-[#00AFF4] text-xs mt-[9px] mb-7 hover:underline block'>{aboutMeUrl}</small>
          </a>

          {
            user?.presence?.activities?.filter(a => a.id !== 'custom')
              .map(app => {
                return app.id === 'spotify:1'
                  ? <ListeningCard 
                    key={Math.random() + 1}
                    name={app.details ?? app.name}
                    details={app.state}
                    state={app.assets?.large_text}
                    src={`${import.meta.env.VITE_SPOTIFY_CDN}/${app.assets?.large_image?.split(':')[1]}`}
                  />

                  : <PlayingCard
                    key={Math.random() + 1}
                    src={`${import.meta.env.VITE_DISCORD_CDN}/app-assets/${app.application_id}/${app.assets?.large_image}.webp`}
                    name={app.name}
                    details={app.details}
                    state={app.state} />;
              })
          }

        </div>

        <Footer />

      </div>
    </div >
  );

}