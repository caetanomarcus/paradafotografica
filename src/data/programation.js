import styled from "styled-components";

const VideoContainer = styled.div `
    position: relative; 
    padding-bottom: 56.25%; 
    padding-top: 30px; 
    height: 0; 
    overflow: hidden; 
`;

const Iframe = styled.iframe `
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
    border: solid 1px #141414;
    border-radius: 4px;
`

const programation = [
    {
        id: 0,
        type: 'palestra',
        date: '30/09',
        day: 'quinta',
        title: 'Abertura: "A cidade insurgente" e Lançamento do site da Exposição',
        members: 'com Andréa Almeida, Diogo Santos e Hevelin Costa',
        video: <VideoContainer><Iframe width="853" height="480" src="https://www.youtube.com/embed/8GtfK-aiPNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe></VideoContainer>,
        texts: {
            content: ``,
            authorBio: ``
        },
    },
    {   
        id: 1,
        type: 'palestra',
        date: '06/10',
        day: 'quarta',
        title: 'Museu Miim',
        members: 'com Francisco Valdean',
        video: <VideoContainer><Iframe width="853" height="480" src="https://www.youtube.com/embed/_UrjrWl0o-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe></VideoContainer>,
        texts: {
            content: `O Museu da Imagem Itinerante da Maré (MIIM) é um museu de artista, funciona em uma caixa de papelão de 37cm de comprimento por 26cm de largura com 15cm de altura. O projeto foi criado em 2019 pelo fotógrafo Francisco Valdean. No museu-caixa, o artista organiza a curadoria de um arquivo Histórico-Poético das Imagens da Maré, o maior bairro popular da cidade do Rio de Janeiro. O micro museu ganha vida através de ações artísticas, culturais e educativas. O trabalho é uma mistura da pesquisa de doutorado do autor com as vivências de morador da Maré.`,
            authorBio: `Um cearense acolhido pela Favela da Maré após fazer a travessia de migração do  Nordeste até o Rio de Janeiro. Fotógrafo, documentarista e pesquisador, desenvolve projetos autorais e reflexões sobre as imagens das paisagens cotidianas das favelas e do subúrbio da cidade. Participou da primeira turma da Escola de Fotógrafos Populares, um projeto do Observatório de Favelas desenvolvido na região da Maré desde o ano de 2004. Graduado em Ciências Sociais pela Uerj, Mestre em Antropologia Visual pela mesma universidade e atualmente doutorando pelo PPGARTES-UERJ. Coordenador do projeto Imagens do Povo, onde também atuou como fotógrafo, desenvolvendo projetos e coberturas fotográficas. Ganhador do prêmio “Territórios de Cultura” da Secretaria de Cultura da cidade do Rio de Janeiro em 2015, vem desde 2007 participando de exposições coletivas nos mais variados centros culturais da cidade do Rio de Janeiro, inclusive, com participações  fora do Brasil.`
        }
    },
    {   
        id: 10,
        type: 'worksho´p',
        date: '08/10',
        day: 'sexta',
        title: 'Linguagem e Presença',
        members: 'com Indianarae Siqueira',
        video: <VideoContainer><Iframe width="853" height="480" src="https://www.youtube.com/embed/97IPGjjuzrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe></VideoContainer>,
        texts: {
            content: `Encontro com Indianarae Siqueira, sobre gênero neutro e todas as questões que envolvem a linguagem e a presença do cotidiano das pessoas LGBTQIA+. Nesse encontro, além de uma conversa descontraída, questões políticas se misturam com uma rotina pandêmica.`,
            authorBio: `Indianarae Siqueira, mulher transvestigenere, importante liderança do movimento transfeminista no Brasil, que tem como pauta os direitos trabalhistas das profissionais do sexo, o debate sobre políticas públicas para  prevenção e tratamento para HIV/Aids, hepatites virais, ISTs (Infecções sexualmente transmissíveis) e HPV no Brasil, além de ser a idealizadora da CasaNem, casa de acolhimento para pessoas LGBTQIA+ para inclusão de pessoas trans na sociedade.`
        }
    },
    {
        id: 2,
        type: 'workshop',
        date: '11/10',
        day: 'segunda',
        title: 'Fotografia de Celular',
        members: 'com Flávia Viana',
        video: <VideoContainer><Iframe width="853" height="480" src="https://www.youtube.com/embed/VWtCx5ChYUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe></VideoContainer>,
        texts: {
            content: `A fotografia está presente em nossas vidas cotidianamente, principalmente pelo fácil
            acesso as câmeras de celular. Hoje, saber fotografar já não significa apenas saber mexer
            em uma câmera, mas também em como pensar na produção dessas imagens que tão
            facilmente circulam nas redes sociais. Os encontros irão tratar do objetivo da fotografia
            e como melhorar a sua linguagem através das funções do celular e composição das
            imagens.`,
            authorBio: `Flávia Viana é fotógrafa, sapatão, negra, graduanda em Artes Visuais pela Universidade
            Estadual do Rio de Janeiro (UERJ) e técnica em Audiovisual pela Faetec Adolpho
            Bloch. Tem 15 anos de experiência com trabalhos e produções independentes e fora do
            eixo comercial. É professora de fotografia, tendo atuado na Praça do Conhecimento de
            Nova Brasília - Complexo do Alemão. Em 2016, fez parte do projeto desenvolvido pelo
            Observatório da Prostituição da UFRJ em parceria com as trabalhadoras do sexo. Em
            2018 e 2019 atuou como colaboradora em oficinas livres de audiovisual e fotografia -
            com ênfase em narrativas pessoais - na Casa Nem e no Centro Municipal de Artes Hélio
            Oiticica, em parceria com a UNIRIO. Expôs seus registros fotográficos no Centro
            Cultural Oi Futuro, no Instituto Raízes em Movimento e no Ateliê Oriente. Fotógrafa de
            ações feministas e encontro de mulheres, tem como objetivo aliar seu trabalho a corpos
            historicamente relegados, trazendo a fotografia como elemento de exaltação, autoestima
            e espelho.`
        }
    },
    {
        id: 3,
        type: 'workshop',
        date: '12/10',
        day: 'terça',
        title: 'Fotoresistentes: Foto ativistas, passeatas, fotógrafos em movimento',
        members: 'com Carlos Contente',
        video: <VideoContainer><Iframe width="853" height="480" src="https://www.youtube.com/embed/P7fhMxwpr2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe></VideoContainer>,
        texts: {
            content: `A aula “Olhares militantes” foi pensada por Carlos Contente em um sentido de criar um
            percurso estético afetivo pela obra fotográfica de um coletivo, um jovem fotógrafo e
            duas grandes referências consagradas do jornalismo: coletivo Fotoguerrilha, Evandro
            Teixeira, João Roberto Ripper e Ratão Diniz se encontram e se diferenciam nesta
            abordagem sobre fotógrafos militantes, que empunham suas lentes como bandeiras. A
            azeitona da empada da aula é o “militante solitário” Edson Rosa, o “Edson dos
            protestos” figura facilmente reconhecida nas manifestações pelos seus cartazes sempre
            pertinentes e pela sua presença sistemática e afirmativa, mesmo nos atos mais
            esvaziados. Esta aula que é uma ação estético política didática. Atenção: esta aula
            contém ética militante.`,
            authorBio: `Nascido no subúrbio dos melhores dias, hoje pesquiso narrativas onde texto e imagem
            se misturam. O desenho é meu suporte favorito e em seguida vêm a pintura e a colagem.
            Durante um bom tempo percebi o graffiti e as intervenções urbanas como uma nova
            contracultura do século XXI e os abracei em uma necessidade de devorar o mundo e dar
            as caras- viver aquilo que me haviam dito: pensar global, agir local. A deriva na urbe é
            o movimento de inspiração: penso no ônibus, leio no trem, observo pessoas que em
            breve serão garatujas vivas em múltiplos e absurdos corpos, como estranhos
            personagens que estruturam ficções igualmente absurdas, mas com cabeça; com um pé
            na política e outro na história da arte. Minha formação conta com o mestrado na linha
            de processos artísticos contemporâneos pelo programa de pós-graduação em artes da
            Universidade do Estado do Rio de Janeiro (2019) e graduação em pintura na Escola de
            Belas Artes da Universidade Federal do Rio de Janeiro (2005). Expus em lugares como
            Paço Imperial (RJ) e participei de feiras como Art Rio, SP Arte, Frieze Londres, ARCO
            Madrid, Zona Maco México ou a Drawing Now, em Paris mas onde aprendi muito
            sobre a vida e como dar aulas foi no Centro de Estudos e Ações Solidárias da Maré
            (CEASM).`
        }
    },
    {
        id: 4,
        type: 'workshop',
        date: '13/10',
        day: 'quarta',
        title: 'Rio Jovem 24h',
        members: 'com Aldene Rocha',
        video: <VideoContainer><Iframe width="853" height="480" src="https://www.youtube.com/embed/vKFbUfGDu1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe></VideoContainer>,
        texts: {
            content: `Com um projeto de extensão que existe desde 2009, sempre apresentando uma seleção
            de fotografias, já exibidas em quatro exposições na Escola de Artes Visuais do Parque
            Lage e nos espaços expositivos do Departamento Cultural da UERJ. O RioJovem é a
            produção das fotografias dos alunos do CAp-UERJ. Em outubro de 2019, foi realizada
            na Galeria do Subsolo da Escola de Artes Visuais a quarta exposição do projeto Rio
            Jovem, com 120 fotografias de alunos do 9º ano (2018) do CAp-UERJ, em diversos
            formatos e suportes. Intitulada 24h, a exposição mostrava a vida do jovem na sua
            cidade, o Rio de Janeiro.`,
            authorBio: `Artista, pesquisador e professor de fotografia do CAp-UERJ. Desenvolve pesquisas
            relativas às novas mídias. Participa de exposições coletivas e coordena o projeto Rio
            Jovem e o projeto Focus, ambos de extensão e pesquisa no CAp-UERJ. Apresenta o
            podcast DoisCachimbos sobre arte e mídia contemporânea. Atualmente está cursando o
            doutorado em Artes pelo PPGArtes-UERJ.`
        }
    },
    {
        id: 5,
        type: 'workshop',
        date: '14/10',
        day: 'quinta',
        title: 'Percurso guiado pelo Festival Fotografia de Autoria',
        members: 'com Carolina Spork e Marina S. Alves',
        video: '',
        texts: {
            content: `Criado no contexto da pandemia, o Festival Fotografia de Autoria se propõe a construir
            um espaço de exposição e troca de produções autorais e de autorias em fotografia,
            contribuindo com isto para a desconstrução do padrão hegemônico patriarcal branco de
            referência no campo da fotografia; com a intenção de se tornar um espaço de exposição,
            conexão e (in)formação em fotografia. A primeira edição do Festival Fotografia de
            Autoria conta com a Curadoria de Marina S. Alves e a colaboração de 30 fotógraf_s que
            compõem a Exposição Virtual no site do Festival de forma gratuita e on-line. A página
            conta também com exibição de Filmes e Mostras Coletivas:
            www.festivalfotografiadeautoria.art`,
            authorBio: ` Lésbica, Produtora Cultural e Fotógrafa Autônoma nas áreas de retratos, música, teatro, dança e circo. Graduada em Estudos de Mídia pela UFF (2007), Técnica em Fotografia pelo Senac (2015), minha trajetória conta também com formação em cursos livres com mestras que admiro muito: Retrato Criativo (com Ana Alexandrino); Fotografia de Espetáculos (com Paula Kossatz); Olhar Humanista (com Nana Moraes); e Desconstruindo o Aparelho Fotográfico (com Marina S. Alves), quando tive a honra de ser sua aluna e ter contato com seu trabalho e pesquisa no campo da fotografia da Diáspora. Fui uma operária cultural do estado durante 6 anos na TV Brasil. Trabalhei com Festivais de Cinema, Performance e Dança. Estive como assistente de produção no Clube Manouche atuando como fotógrafa residente da casa. Durante as limitações da pandemia, convidei Marina .S. Alves para abrir as possibilidades de criarmos uma rede real entre pessoas querendo falar sobre fotografia e, nos seus lugares, coletivamente pensar e dividir seus trabalhos. Partindo da inquietação "Como revelar as subjetividades que constroem as imagens?", concebemos a metodologia de trabalho e, a partir dela, uma série de entrevistas com importantes nomes da fotografia contemporânea que fazem parte da teia de artistas que compõem esta primeira edição. A proposta de conceber este "Festival Fotografia de Autoria" diz muito sobre a Fotografia como (re)conhecimento e dignidade. Nesse exercício de escuta e leitura, meu trabalho fala muito sobre descobrir potenciais que me permitam viver mais. A fotografia me incentiva a ter coragem de lutar para que o conhecimento seja acessível e gratuito a todes. Agradeço a Marina por confiar a mim esse cargo e ser tão parceira, e a toda equipe do "Festival Fotografia de Autoria"! Primeira edição de muitas!`,
            authorBio2: `Minha relação com a fotografia se tornou inseparável da percepção de sua dimensão política e seu poder narrativo subliminar, arma da escolha, assim como disse o fotógrafo afro-americano Gordon Parks. Hoje, considero que estou concebendo um acervo que tem por objetivo visibilizar as pautas dos movimentos sociais principalmente, movimento negro e de mulheres que desde o primeiro momento, o ato fotográfico, se pretende um elogio à memória e a contribuição de todas e todos que lutam por um mundo mais igualitário. Nesse momento, aprofundo minha experiência em processos artesanais de impressão. Esse interesse tem me levado a me reaproximar da memória das mãos, memória da luz que imprime. Das mãos, percebo corpos-territórios que podem ser explorados partindo da mediação que o letramento visual mediado pela câmera fotográfica e impressão (reprodutibilidade no mundo material) podem nos oferecer. 
            Site: www.grafias.46graus.com
            `
        }
    },
    {
        id: 6,
        type: 'workshop',
        date: '15/10',
        day: 'sexta',
        title: 'Introdução ao Canva: montagem de portfólios e postagens',
        members: 'com Hevelin Costa',
        video: '',
        texts: {
            content: `Montar um portfólio para divulgação do trabalho artístico é essencial para a inserção no
            sistema de arte, tanto junto às instituições quanto para uma carreira autônoma e
            independente. Ao mesmo tempo, postagens em redes sociais se tornaram uma forma
            rápida e eficiente de apresentação de obras e processos de criação. O workshop propõe
            uma introdução a ferramenta Canva, com o intuito de auxiliar artistes a desenvolver
            materiais gráficos de qualidade. Veremos que o Canva é uma plataforma intuitiva e
            cheias de possibilidades. Iremos descobrir a ferramenta para melhorar a divulgação do
            seu trabalho, escolhendo as opções para criação de portfólio, postagens e apresentações,
            ajustando o design de forma simples e rápida.`,
            authorBio: `Hevelin Costa é professora transdisciplinar em ciências e fotografia. É mestre em ensino
            pelo PPGEB/UERJ (2020) e pós-graduada em Fotografia, Imagem e Memória pelo
            IUPERJ/Universidade Cândido Mendes (2013). Fez seu bacharelado e licenciatura em
            Ciências Biológicas na Universidade Santa Úrsula (2011). Recebeu o prêmio Arte e
            Escola, da Lei Aldir Blanc (2020) e é bolsista PROATEC na Universidade Estadual do
            Rio de Janeiro, na COEXPA (2021). Foi professora de fotografia no Colégio de
            Aplicação da UERJ (2013-2014) e é apoiadora da CasaNem (2015 - atualmente).`
        }
    },
    {
        id: 7,
        type: 'palestra',
        date: '19/10',
        day: 'terça',
        title: 'Conversa com Artistas',
        members: 'com Amanda Baroni, Bira Carvalho, Jones, Davi Marcos, Douglas Lopes, Rosana Rodrigues, Vishkaay, Kamila Camillo, Andréa Almeida e Patrícia Chiavazzoli',
        video: '',
        texts: {
            content: ``,
            authorBio: ``
        }
    },
    {   
        id: 8,
        type: 'palestra',
        date: '20/10',
        day: 'quarta',
        title: 'Sarau Fotográfico',
        members: 'com Anderson Felix',
        video: '',
        texts: {
            content: `O Sarau Fotográfico é um encontro que acontece entre pessoas que amam fotografia e que queiram mostrar seus trabalhos discutindo as várias vertentes da imagem técnica. O primeiro Sarau aconteceu em maio de 2015 e se desenvolveu através dos encontros de forma espontânea e colaborativa. O Sarau é lindo porque ele acontece através da opinião de todos, tentando não ter algo pré-determinado, prezando pelo espaço de troca que simplesmente rola através da curiosidade e conhecimento de pessoas que se reúnem para discutir fotografia.” A ação busca criar um espaço educativo, usando uma metodologia de aulas de fotografia, juntando com uma ideia dos foto-clubes brasileiros para debater e melhorar a produção fotográfica contemporânea. As pessoas são convidadas a expor e ao mesmo tempo participarem dos debates, através da apresentação de fotografias que geram perguntas pelos outros participantes. A cada evento temos entre 6 à 9 pessoas, apresentando trabalhos para um público de 30 à 50. Após a fala e apresentação dos artistas abrimos a roda de perguntas, que é sempre o momento principal do evento, por os debates serem fervorosos, principalmente quando aparece alguma polêmica ou que a intenção do fotógrafo não seja condizente com as imagens apresentadas. Apesar de grandes discussões políticas, éticas, estéticas, históricas ou técnicas, o espaço conserva sempre um tom acolhedor aos participantes. Fomentamos o pensamento sobre a fotografia na sua prática atual como o uso, a história e os desdobramentos na contemporaneidade, através da dinâmica de expor, observar e debater.`,
            authorBio: `Anderson Felix, vive e trabalha no Rio de Janeiro desde os anos 2000. 
            Nasceu no interior do Pará, em Santa Izabel do Pará nos anos 80. É professor da rede pública em Duque de Caxias e  estudante de Artes Visuais na UERJ. Como artista desenvolve pesquisa em identidades e memórias amazônidas em diversas linguagens, principalmente em vídeo e fotografia.
            `
        }
    },
    {
        id: 9,
        type: 'palestra',
        date: '21/10',
        day: 'quinta',
        title: 'Fechamento',
        members: '',
        video: '',
        texts: {
            content: ``,
            authorBio: ``
        }
    },
   
]

export default programation