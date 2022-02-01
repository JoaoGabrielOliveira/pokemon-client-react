import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import News from './News';


export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 10;

  return (
    <div  style={{ padding: `0 ${chevronWidth}px`}}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={2}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <News size={{ height: 750,width :500}} title="Pokémon GO: com estreia de Kyurem, eventos de julho são anunciados" img="https://s2.glbimg.com/RtPv114RUYYmMKeFV1SthxZ-N5A=/0x0:1920x1181/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/X/I/X1AaAPRXGWf5qYdTaBUQ/kyurem-pogo.png" link="https://globoesporte.globo.com/e-sportv/noticia/pokemon-go-com-estreia-de-kyurem-eventos-de-julho-2020-sao-anunciados.ghtml" publisher="Globo Esporte">
          <span>A Niantic divulgou, nesta terça-feira, os eventos que acontecerão em julho no Pokémon GO. Entre as principais novidades, está a chegada de Kyurem membro do Trio de Elite, às reides de nível 5. Além disso, Larvitar poderá ser capturado pela Descoberta Extraordinária.</span>
        </News>

        <News size={{ height:750,width:500}} title="'Pokémon Unite', game que leva monstros ao gênero de 'League of legends', é anunciado." img="https://static.invenglobal.com/upload/image/2020/06/24/i1593008763944016.jpeg" publisher="G1" link="https://g1.globo.com/pop-arte/games/noticia/2020/06/24/pokemon-unite-game-que-leva-monstros-ao-genero-de-league-of-legends-e-anunciado.ghtml">
          <span> Novo game será gratuito e disputado em equipes em tempo real. Data de lançamento não foi divulgada.O novo game da Pokémon, o "Pokémon Unite", foi anunciado nesta quarta-feira (24) pela franquia japonesa.</span>
        </News>

        <News size={{width:499, height:500}} title="Pokémon Sword & Shield: como pegar Shiny Zeraora" img="https://pbs.twimg.com/media/EbSieHIWoAExsLq?format=jpg&name=small" link="https://globoesporte.globo.com/e-sportv/noticia/pokemon-sword-and-shield-como-pegar-shiny-zeraora.ghtml" publisher="Globo Esporte">
          <span>Resgate da versão brilhante poderá ser feito até o dia 6 de julho pela versão mobile do Pokémon Home.Os jogadores de Pokémon Sword & Shield já podem adquirir o monstrinho mítico Zeraora de forma gratuita (Você conseguiu, treinadores!)</span>
        </News>

        <News size={{width:499, height:500}} title="Pokémon lança 'PokéToon' inspirado em desenhos clássicos de Looney Tunes" img="https://i0.wp.com/www.nintendoenthusiast.com/wp-content/uploads/2020/06/poketune-pokemon-looney-tunes-800x400.png?resize=650,400" link="https://www.tecmundo.com.br/cultura-geek/153917-poketoon-nova-animacao-pokemon-inspirada-looney-tunes.htm" publisher="Tecmundo">
          <span>Por meio do canal no Pokémon Kids TV, a The Pokémon Company lançou ontem o 'PokéToon', um desenho inspirado nos desenhos clássicos de Looney Tunes.A peça, intitulada 'Chase the Beans' ('Perseguir os Feijões', em português). </span>
        </News>
        
        <News size={{width:499, height:500}} title="Equipe Rocket: a história dos vilões de Pokémon nos games e anime" img="https://www.einerd.com.br/wp-content/uploads/2020/04/Pok%C3%A9mon-Equipe-Rocket-capa.jpg" publisher="EiNerd" link="https://www.einerd.com.br/equipe-rocket-pokemon/">
          <span>Quem jogou ou assistiu ao anime de Pokémon sabe que uma pedra no sapato tanto do jogador quanto de Ash e seus amigos, respectivamente, foi a Equipe Rocket. O grupo de vilões está presente desde o primeiro game da série.</span>
        </News>
        
        <News size={{width:"500",height:"550"}} title="Pokemon doa US$ 200.000 para movimento ‘Black Lives Matter’" img="https://observatoriodegames.uol.com.br/wp-content/uploads/2020/06/Ahs-and-Pikachuu--696x392.jpg" publisher="Observatorio de Games" link="https://observatoriodegames.uol.com.br/noticias/pokemon-doa-us-200-000-para-movimento-black-lives-matter">
          <span> Nesta semana, a Pokemon Company prometeu doar cerca de US$ 200.000 em apoio ao movimento Black Lives Matter e à NAACP. A declaração foi dada através do conta oficial da empresa no Twitter, onde se destacou ainda apoia a causa.</span>
        </News>
      
  
      </ItemsCarousel>
    </div>
  );
};