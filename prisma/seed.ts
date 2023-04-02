import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.art.createMany({
    data: [
      {
        title: "Semeador no Pôr-do-Sol",
        description: "",
        author: "Vincent van Gogh",
        age: "1888",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/vincent-van-gogh/sower-with-setting-sun-1888-3.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Still Life",
        description: "",
        author: "Vincent van Gogh",
        age: "1888",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/vincent-van-gogh/still-life-vase-with-fifteen-sunflowers-1888-1.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "A Noite Estrelada",
        description:
          "A Noite Estrelada é uma pintura de Vincent van Gogh de 1889. A obra retrata a vista da janela de um quarto do hospício de Saint-Rémy-de-Provence, pouco antes do nascer do sol, com a adição de um vilarejo idealizado pelo artista.",
        author: "Vincent van Gogh",
        age: "1889",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads4.wikiart.org/00142/images/vincent-van-gogh/the-starry-night.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Retrato de Dr. Gachet",
        description:
          "Retrato de Dr. Gachet é uma obra de 1890 do pintor holandês Vincent van Gogh. O nome refere-se a duas versões autênticas da obra. Ambas mostram o médico Paul Gachet sentado à mesa, com a cabeça apoiada no braço direito e com uma erva medicinal (digitalis) que o caracteriza enquanto médico. Apesar da semelhança na forma, são facilmente diferenciadas pelo seu estilo.",
        author: "Vincent van Gogh",
        age: "1890",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/vincent-van-gogh/portrait-of-doctor-gachet-1890.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Os Comedores de Batata",
        description:
          "Este quadro pertence à primeira fase da pintura do artista, desenvolvido nos Países Baixos, sob influência do realista francês Millet. Van Gogh fez releitura de Millet, e também estudou desenho, anatomia e perspectiva em Bruxelas, complementando a formação com leituras sobre o uso e o comportamento das cores. Nessa época, desenhou e pintou muitas paisagens neerlandesas, cenas de aldeia.",
        author: "Vincent van Gogh",
        age: "1885",
        type: "Realism",
        imageUrl:
          "https://uploads3.wikiart.org/images/vincent-van-gogh/the-potato-eaters-1885-1.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Paul Gauguin's Armchair",
        description: "",
        author: "Vincent van Gogh",
        age: "1888",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/vincent-van-gogh/paul-gauguin-s-armchair-1888.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Prisoners Exercising",
        description: "",
        author: "Vincent van Gogh",
        age: "1890",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/vincent-van-gogh/prisoners-exercising-prisoners-round-1890.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Landscape with House and Ploughman",
        description: "",
        author: "Vincent van Gogh",
        age: "1889",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads3.wikiart.org/images/vincent-van-gogh/landscape-with-house-and-ploughman-1889(2).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Wheatfield with Crows",
        description: "",
        author: "Vincent van Gogh",
        age: "1890",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/vincent-van-gogh/wheatfield-with-crows-1890.jpg!Large.jpg",
        likes: 0,
      },

      {
        title: "Boy Cutting Grass with a Sickle",
        description: "",
        author: "Vincent van Gogh",
        age: "1881",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/vincent-van-gogh/boy-cutting-grass-with-a-sickle-1881(1).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Dog",
        description: "",
        author: "Vincent van Gogh",
        age: "1862",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads3.wikiart.org/images/vincent-van-gogh/dog(1).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Milk Jug",
        description: "",
        author: "Vincent van Gogh",
        age: "1862",
        type: "Realism",
        imageUrl:
          "https://uploads5.wikiart.org/images/vincent-van-gogh/milk-jug.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Landscape with Trees",
        description: "",
        author: "Vincent van Gogh",
        age: "1881",
        type: "Realism",
        imageUrl:
          "https://uploads4.wikiart.org/images/vincent-van-gogh/landscape-with-trees-1881.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Man Putting Potatoes in a Sack",
        description: "",
        author: "Vincent van Gogh",
        age: "1881",
        type: "Realism",
        imageUrl:
          "https://uploads5.wikiart.org/images/vincent-van-gogh/man-putting-potatoes-in-a-sack-1881.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Peasant Sitting by the Fireplace",
        description: "",
        author: "Vincent van Gogh",
        age: "1881",
        type: "Realism",
        imageUrl:
          "https://uploads0.wikiart.org/images/vincent-van-gogh/peasant-sitting-by-the-fireplace-worn-out-1881-1.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Beach at Scheveningen in Calm Weather",
        description: "",
        author: "Vincent van Gogh",
        age: "1882",
        type: "Realism",
        imageUrl:
          "https://uploads6.wikiart.org/images/vincent-van-gogh/beach-at-scheveningen-in-calm-weather-1882(1).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Four People on a Bench",
        description: "",
        author: "Vincent van Gogh",
        age: "1882",
        type: "Realism",
        imageUrl:
          "https://uploads0.wikiart.org/images/vincent-van-gogh/four-people-on-a-bench-1882(1).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Girl in White in the Woods",
        description: "",
        author: "Vincent van Gogh",
        age: "1882",
        type: "Realism",
        imageUrl:
          "https://uploads4.wikiart.org/images/vincent-van-gogh/girl-in-white-in-the-woods-1882(1).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Meadows near Rijswijk and the Schenkweg",
        description: "",
        author: "Vincent van Gogh",
        age: "1882",
        type: "Realism",
        imageUrl:
          "https://uploads5.wikiart.org/images/vincent-van-gogh/meadows-near-rijswijk-and-the-schenkweg-1882.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Shores of Scheveningen",
        description: "",
        author: "Vincent van Gogh",
        age: "1882",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/vincent-van-gogh/shores-of-scheveningen-1882.jpg",
        likes: 0,
      },
      {
        title: "View of Scheveningen",
        description: "",
        author: "Vincent van Gogh",
        age: "1882",
        type: "Realism",
        imageUrl:
          "https://uploads4.wikiart.org/images/vincent-van-gogh/view-of-scheveningen-1882.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "A Virgem do Cravo",
        description:
          "O nome da obra é esse porque, a Madona mostra ao menino uma flor Garofano (cravo), então Madona del Garofano significa Madona ou Virgem do Cravo. A pintura relata a Madona aparentemente em pé, em sua frente está um balcão com uma almofada, e o Menino sentado. ",
        author: "Leonardo da Vinci",
        age: "1480",
        type: "Início do Renascimento",
        imageUrl:
          "https://uploads6.wikiart.org/00129/images/leonardo-da-vinci/the-madonna-of-the-carnation.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Madonna Litta",
        description: "",
        author: "Leonardo da Vinci",
        age: "1490",
        type: "High Renaissance",
        imageUrl:
          "https://uploads7.wikiart.org/00339/images/leonardo-da-vinci/madonna-and-the-child-c-1490.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Dama com Arminho",
        description:
          "Dama com Arminho é uma pintura feita no ano de 1485 pelo artista Leonardo da Vinci. A obra, feita em óleo sobre madeira, é um retrato de Cecília Gallerani, encomendado pelo amante dela, Ludovico Sforza. Cecília fez parte de uma família abastada de Siena, admirada pelos dotes artísticos dos quais dispunha: falava latim, escrevia poemas e cantava.",
        author: "Leonardo da Vinci",
        age: "1489",
        type: "High Renaissance",
        imageUrl:
          "https://uploads0.wikiart.org/images/leonardo-da-vinci/the-lady-with-the-ermine-cecilia-gallerani-1496.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Homem vitruviano",
        description:
          "Homem vitruviano (ou homem de Vitrúvio) é um conceito apresentado na obra Os dez livros da Arquitetura, escrita pelo arquiteto romano Marco Vitruvio Polião, do qual o conceito herda no nome. O conceito é considerado um cânone das proporções do corpo humano, segundo um determinado raciocínio matemático e baseando-se, em parte, na proporção áurea. ",
        author: "Leonardo da Vinci",
        age: "1492",
        type: "High Renaissance",
        imageUrl:
          "https://uploads2.wikiart.org/images/leonardo-da-vinci/the-proportions-of-the-human-figure-the-vitruvian-man-1492.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "A Última Ceia",
        description:
          "Esta pintura representa a cena da Última Ceia de Jesus com os discípulos, como é contada no Livro de João, 13:21. Da Vinci descreveu a consternação que ocorreu entre os Doze Discípulos quando Jesus anunciou que um deles o traíria. Devido aos métodos utilizados e uma variedade de fatores ambientais, como também danos intencionais à tela, pouco restou da pintura original, apesar de numerosas tentativas de restauração, sendo a última delas realizada em 1999.",
        author: "Leonardo da Vinci",
        age: "1495",
        type: "High Renaissance",
        imageUrl:
          "https://uploads4.wikiart.org/00178/images/leonardo-da-vinci/ltima-cena-da-vinci-5.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Mona Lisa",
        description:
          "Mona Lisa também conhecida como, A Gioconda (em italiano: La Gioconda; em francês, La Joconde), é a mais notável e conhecida obra de Leonardo da Vinci, um dos mais eminentes homens do Renascimento italiano. O quadro representa uma mulher com uma expressão introspectiva e um pouco tímida. O seu sorriso restrito é muito sedutor, mesmo que um pouco conservador. O seu corpo representa o padrão de beleza da mulher na época de Leonardo.",
        author: "Leonardo da Vinci",
        age: "1503",
        type: "High Renaissance",
        imageUrl:
          "https://uploads0.wikiart.org/00339/images/leonardo-da-vinci/mona-lisa-c-1503-1519.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Drapery for a seated figure",
        description: "",
        author: "Leonardo da Vinci",
        age: "1470",
        type: "High Renaissance",
        imageUrl:
          "https://uploads0.wikiart.org/images/leonardo-da-vinci/drapery-for-a-seated-figure-1.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "A Anunciação",
        description: "",
        author: "Leonardo da Vinci",
        age: "1472",
        type: "Início do Renascimento",
        imageUrl:
          "https://uploads1.wikiart.org/00226/images/leonardo-da-vinci/1503990074029518-568314.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Study of Drapery of a Seated Figure",
        description: "",
        author: "Leonardo da Vinci",
        age: "1473",
        type: "Início do Renascimento",
        imageUrl:
          "https://uploads8.wikiart.org/00226/images/leonardo-da-vinci/the-study-of-drapery-of-a-seated-figure.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Ginevra de' Benci",
        description: "",
        author: "Leonardo da Vinci",
        age: "1474",
        type: "Início do Renascimento",
        imageUrl:
          "https://uploads5.wikiart.org/images/leonardo-da-vinci/portrait-of-ginevra-benci.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "O Batismo de Cristo",
        description: "",
        author: "Leonardo da Vinci",
        age: "1475",
        type: "Início do Renascimento",
        imageUrl:
          "https://uploads7.wikiart.org/00339/images/leonardo-da-vinci/the-baptism-of-christ-c-1475.png!Large.png",
        likes: 0,
      },
      {
        title: "Woman's Head",
        description: "",
        author: "Leonardo da Vinci",
        age: "1473",
        type: "Início do Renascimento",
        imageUrl:
          "https://uploads1.wikiart.org/images/leonardo-da-vinci/woman-s-head.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Virgem Benois",
        description: "",
        author: "Leonardo da Vinci",
        age: "1478",
        type: "Início do Renascimento",
        imageUrl:
          "https://uploads2.wikiart.org/00339/images/leonardo-da-vinci/madonna-benois.jpg!Large.jpg",
        likes: 0,
      },

      {
        title: "Retrato de um Músico",
        description:
          "Este Retrato de um Músico é a única pintura-retrato de um homem atribuída a Leonardo da Vinci. O homem representado pode ter sido Franchino Gaffurio, professor da capela da Catedral de Milão nos anos de 1485, que era contemporâneo e amigo de Da Vinci.",
        author: "Leonardo da Vinci",
        age: "1483",
        type: "Início do Renascimento",
        imageUrl:
          "https://uploads7.wikiart.org/images/leonardo-da-vinci/portrait-of-a-musician-1485.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "La Belle Ferronière",
        description:
          "La Belle Ferronière é uma pintura a óleo sobre madeira de Leonardo Da Vinci, iniciada juntamente com o término de Dama com Arminho, e também encomendada por Ludovico Sforza; realizada aproximadamente entre 1490 e 1495. Têm sido propostas várias identificações da modelo: Lucrezia Crivelli, Cecilia Galleriani",
        author: "Leonardo da Vinci",
        age: "1490",
        type: "High Renaissance",
        imageUrl:
          "https://uploads1.wikiart.org/00142/images/leonardo-da-vinci/portrait-of-an-unknown-woman-la-belle-ferroniere.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Head of Christ",
        description: "",
        author: "Leonardo da Vinci",
        age: "1495",
        type: "High Renaissance",
        imageUrl:
          "https://uploads3.wikiart.org/images/leonardo-da-vinci/head-of-christ.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Self Portrait (Leonardo da Vinci)",
        description: "",
        author: "Leonardo da Vinci",
        age: "1505",
        type: "High Renaissance",
        imageUrl:
          "https://uploads0.wikiart.org/00323/images/leonardo-da-vinci/pic7.png!Large.png",
        likes: 0,
      },
      {
        title: "Leda",
        description: "",
        author: "Leonardo da Vinci",
        age: "1510",
        type: "High Renaissance",
        imageUrl:
          "https://uploads2.wikiart.org/images/leonardo-da-vinci/leda.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Virgem do Fuso",
        description: "",
        author: "Leonardo da Vinci",
        age: "1510",
        type: "High Renaissance",
        imageUrl:
          "https://uploads7.wikiart.org/images/leonardo-da-vinci/madonna-with-the-yarnwinder.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "São João Batista",
        description: "",
        author: "Leonardo da Vinci",
        age: "1515",
        type: "High Renaissance",
        imageUrl:
          "https://uploads7.wikiart.org/00339/images/leonardo-da-vinci/st-john-the-baptist.jpg!Large.jpg",
        likes: 0,
      },

      {
        title: "O Tormento de Santo Antônio",
        description: "",
        author: "Michelangelo",
        age: "1487",
        type: "Início do Renascimento",
        imageUrl:
          "https://uploads3.wikiart.org/images/michelangelo/the-torment-of-saint-anthony.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "A Criação de Adão",
        description:
          "Deus é representado como um ancião barbudo, envolto em um manto que divide com alguns anjos. Seu braço esquerdo está abraçado a uma figura feminina, normalmente interpretada como Eva – que ainda não foi criada e, figuradamente, espera no céu para ganhar uma forma humana. ",
        author: "Michelangelo",
        age: "1508",
        type: "High Renaissance",
        imageUrl:
          "https://uploads7.wikiart.org/00382/images/michelangelo/1521-print.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "O Último Julgamento",
        description: "",
        author: "Michelangelo",
        age: "1537",
        type: "High Renaissance",
        imageUrl:
          "https://uploads7.wikiart.org/images/michelangelo/the-last-judgement-1541.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Adão e Eva",
        description: "",
        author: "Michelangelo",
        age: "1512",
        type: "High Renaissance",
        imageUrl:
          "https://uploads1.wikiart.org/images/michelangelo/adam-and-eve-1512.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "A Conversão de Saulo",
        description: "",
        author: "Michelangelo",
        age: "1542",
        type: "High Renaissance",
        imageUrl:
          "https://uploads2.wikiart.org/images/michelangelo/the-conversion-of-saul-1545.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Ceiling Of The Sistine Chapel.",
        description: "",
        author: "Michelangelo",
        age: "1509",
        type: "High Renaissance",
        imageUrl:
          "https://uploads7.wikiart.org/00287/images/michelangelo/ceiling-of-the-sistine-chapel-sybils-erithraea.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Drunkenness of Noah",
        description: "",
        author: "Michelangelo",
        age: "1509",
        type: "High Renaissance",
        imageUrl:
          "https://uploads4.wikiart.org/images/michelangelo/sistine-chapel-ceiling-drunkenness-of-noah-1509.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Ancestors of Christ: Asa",
        description: "",
        author: "Michelangelo",
        age: "1509",
        type: "High Renaissance",
        imageUrl:
          "https://uploads7.wikiart.org/images/michelangelo/the-ancestors-of-christ-asa-1509.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Ancestors of Christ: Hezekiah",
        description: "",
        author: "Michelangelo",
        age: "1509",
        type: "High Renaissance",
        imageUrl:
          "https://uploads3.wikiart.org/images/michelangelo/the-ancestors-of-christ-hezekiah-1509.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Prophet Ezekiel",
        description: "",
        author: "Michelangelo",
        age: "1510",
        type: "High Renaissance",
        imageUrl:
          "https://uploads8.wikiart.org/images/michelangelo/the-prophet-ezekiel-1510.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Prophet Jonah",
        description: "",
        author: "Michelangelo",
        age: "1511",
        type: "High Renaissance",
        imageUrl:
          "https://uploads6.wikiart.org/images/michelangelo/the-prophet-jonah-1511.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Prophet Jeremiah",
        description: "",
        author: "Michelangelo",
        age: "1512",
        type: "High Renaissance",
        imageUrl:
          "https://uploads0.wikiart.org/images/michelangelo/the-prophet-jeremiah-1512.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Prophet Zechariah",
        description: "",
        author: "Michelangelo",
        age: "1512",
        type: "High Renaissance",
        imageUrl:
          "https://uploads1.wikiart.org/images/michelangelo/the-prophet-zechariah-1512.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Leda and the Swan",
        description: "",
        author: "Michelangelo",
        age: "1520",
        type: "High Renaissance",
        imageUrl:
          "https://uploads4.wikiart.org/images/michelangelo/leda-and-the-swan(1).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Rape of Ganymede",
        description: "",
        author: "Michelangelo",
        age: "1533",
        type: "High Renaissance",
        imageUrl:
          "https://uploads0.wikiart.org/images/michelangelo/the-rape-of-ganymede-1533.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Cleopatra",
        description: "",
        author: "Michelangelo",
        age: "1534",
        type: "High Renaissance",
        imageUrl:
          "https://uploads7.wikiart.org/images/michelangelo/cleopatra-1534.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Study for the Colonna Pieta",
        description: "",
        author: "Michelangelo",
        age: "1538",
        type: "High Renaissance",
        imageUrl:
          "https://uploads1.wikiart.org/images/michelangelo/study-for-the-colonna-pieta.jpg!PinterestSmall.jpg",
        likes: 0,
      },
      {
        title: "Crucifixion",
        description: "",
        author: "Michelangelo",
        age: "1540",
        type: "High Renaissance",
        imageUrl:
          "https://uploads2.wikiart.org/00382/images/michelangelo/michelangelo-kruisiging.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Martyrdom of St.Peter",
        description: "",
        author: "Michelangelo",
        age: "1550",
        type: "High Renaissance",
        imageUrl:
          "https://uploads5.wikiart.org/images/michelangelo/martyrdom-of-st-peter.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Child with dove",
        description: "",
        author: "Pablo Picasso",
        age: "1901",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/pablo-picasso/child-with-dove-1901.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Vieux guitariste aveugle",
        description: "",
        author: "Pablo Picasso",
        age: "1903",
        type: "Expressionism",
        imageUrl:
          "https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Figures at the Seaside",
        description: "",
        author: "Pablo Picasso",
        age: "1931",
        type: "Surrealism",
        imageUrl:
          "https://uploads3.wikiart.org/images/pablo-picasso/figures-at-the-seaside-1931.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Garota em cima da bola",
        description: "",
        author: "Pablo Picasso",
        age: "1905",
        type: "Expressionism",
        imageUrl:
          "https://uploads6.wikiart.org/images/pablo-picasso/girl-on-the-ball-1905.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Les demoiselles d'Avignon",
        description: "",
        author: "Pablo Picasso",
        age: "1907",
        type: "Cubism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/the-girls-of-avignon-1907.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Retrato de Ambroise Vollard",
        description: "",
        author: "Pablo Picasso",
        age: "1910",
        type: "Cubism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/portrait-of-ambroise-vollard-1910.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of woman in d`hermine",
        description: "",
        author: "Pablo Picasso",
        age: "1923",
        type: "Surrealism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/untitled-1937-8.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Guernica",
        description: "",
        author: "Pablo Picasso",
        age: "1937",
        type: "Cubism",
        imageUrl:
          "https://uploads0.wikiart.org/00139/images/pablo-picasso/guernica-by-pablo-picasso.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Bull's Head",
        description: "",
        author: "Pablo Picasso",
        age: "1942",
        type: "Surrealism",
        imageUrl:
          "https://uploads0.wikiart.org/00292/images/pablo-picasso/1.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Cat catching a bird",
        description: "",
        author: "Pablo Picasso",
        age: "1939",
        type: "Surrealism",
        imageUrl:
          "https://uploads8.wikiart.org/images/pablo-picasso/cat-catching-a-bird-1939.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Dora Maar",
        description: "",
        author: "Pablo Picasso",
        age: "1937",
        type: "Surrealism",
        imageUrl:
          "https://uploads4.wikiart.org/images/pablo-picasso/portrait-of-dora-maar-1937-1.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The picador",
        description: "",
        author: "Pablo Picasso",
        age: "1890",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/the-picador-1890.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "House in the field",
        description: "",
        author: "Pablo Picasso",
        age: "1893",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/pablo-picasso/house-in-the-field-1893.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Plaster male torso",
        description: "",
        author: "Pablo Picasso",
        age: "1893",
        type: "Realism",
        imageUrl:
          "https://uploads8.wikiart.org/images/pablo-picasso/plaster-male-torso-1893.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The barefoot girl",
        description: "",
        author: "Pablo Picasso",
        age: "1895",
        type: "Realism",
        imageUrl:
          "https://uploads7.wikiart.org/images/pablo-picasso/the-barefoot-girl-1895.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Female nude from back",
        description: "",
        author: "Pablo Picasso",
        age: "1895",
        type: "Realism",
        imageUrl:
          "https://uploads2.wikiart.org/images/pablo-picasso/female-nude-from-back-1895.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Head of a child",
        description: "",
        author: "Pablo Picasso",
        age: "1896",
        type: "Realism",
        imageUrl:
          "https://uploads5.wikiart.org/images/pablo-picasso/head-of-a-child-1896.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "First Communion",
        description: "",
        author: "Pablo Picasso",
        age: "1896",
        type: "Realism",
        imageUrl:
          "https://uploads5.wikiart.org/images/pablo-picasso/first-communion-1896.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Science and Charity",
        description: "",
        author: "Pablo Picasso",
        age: "1897",
        type: "Realism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/science-and-charity-1897.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "A spanish couple",
        description: "",
        author: "Pablo Picasso",
        age: "1900",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads4.wikiart.org/images/pablo-picasso/a-spanish-couple-in-front-of-inn-1900.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Bullfighters and bull",
        description: "",
        author: "Pablo Picasso",
        age: "1900",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/bullfighters-and-bull-waiting-for-the-next-move-1900.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Lovers of the street",
        description: "",
        author: "Pablo Picasso",
        age: "1900",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/lovers-of-the-street-1900.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The brutal embrace",
        description: "",
        author: "Pablo Picasso",
        age: "1900",
        type: "Expressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/pablo-picasso/the-brutal-embrace-1900.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Woman with Cat",
        description: "",
        author: "Pablo Picasso",
        age: "1900",
        type: "Impressionism",
        imageUrl:
          "https://uploads4.wikiart.org/images/pablo-picasso/woman-with-cat-1900.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Self-Portrait (Picasso)",
        description: "",
        author: "Pablo Picasso",
        age: "1900",
        type: "Realism",
        imageUrl:
          "https://uploads7.wikiart.org/images/pablo-picasso/self-portrait.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Courtesan with necklace of gems",
        description: "",
        author: "Pablo Picasso",
        age: "1901",
        type: "Art nouveau",
        imageUrl:
          "https://uploads3.wikiart.org/images/pablo-picasso/courtesan-with-necklace-of-gems-1901.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Couple walking",
        description: "",
        author: "Pablo Picasso",
        age: "1901",
        type: "Art nouveau",
        imageUrl:
          "https://uploads4.wikiart.org/images/pablo-picasso/couple-walking-1901.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Jeanne (Reclining nude)",
        description: "",
        author: "Pablo Picasso",
        age: "1901",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/pablo-picasso/jeanne-reclining-nude-1901.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Absinthe Drinker",
        description: "",
        author: "Pablo Picasso",
        age: "1901",
        type: "Expressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/the-absinthe-drinker-1901.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Greedy",
        description: "",
        author: "Pablo Picasso",
        age: "1901",
        type: "Expressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/the-greedy-1901.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Women in the loge",
        description: "",
        author: "Pablo Picasso",
        age: "1901",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/pablo-picasso/women-in-the-loge-1901.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Head of hurdy-gurdy",
        description: "",
        author: "Pablo Picasso",
        age: "1905",
        type: "Expressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/head-of-hurdy-gurdy-1905.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Young acrobat and clown",
        description: "",
        author: "Pablo Picasso",
        age: "1905",
        type: "Expressionism",
        imageUrl:
          "https://uploads4.wikiart.org/images/pablo-picasso/young-acrobat-and-clown-1905.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Two roosters",
        description: "",
        author: "Pablo Picasso",
        age: "1905",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/two-roosters-1905.jpg",
        likes: 0,
      },
      {
        title: "Dance of the Veils",
        description: "",
        author: "Pablo Picasso",
        age: "1907",
        type: "Cubism",
        imageUrl:
          "https://uploads8.wikiart.org/images/pablo-picasso/dance-of-the-veils-1907.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Exotic Flowers",
        description: "",
        author: "Pablo Picasso",
        age: "1907",
        type: "Expressionism",
        imageUrl:
          "https://uploads4.wikiart.org/images/pablo-picasso/exotic-flowers-1907.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Flowers on the table",
        description: "",
        author: "Pablo Picasso",
        age: "1907",
        type: "Cubism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/flowers-on-the-table-1907.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Great Odalisque",
        description: "",
        author: "Pablo Picasso",
        age: "1907",
        type: "Cubism",
        imageUrl:
          "https://uploads4.wikiart.org/images/pablo-picasso/the-great-odalisque-after-ingres-1907.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Composition with skull",
        description: "",
        author: "Pablo Picasso",
        age: "1908",
        type: "Cubism",
        imageUrl:
          "https://uploads3.wikiart.org/images/pablo-picasso/composition-with-skull-1908.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Friendship",
        description: "",
        author: "Pablo Picasso",
        age: "1908",
        type: "Cubism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/friendship-1908.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Glass and fruits",
        description: "",
        author: "Pablo Picasso",
        age: "1908",
        type: "Cubism",
        imageUrl:
          "https://uploads6.wikiart.org/images/pablo-picasso/glass-and-fruits-1908.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Pitcher and Bowls",
        description: "",
        author: "Pablo Picasso",
        age: "1908",
        type: "Cubism",
        imageUrl:
          "https://uploads6.wikiart.org/images/pablo-picasso/pitcher-and-bowls-1908.jpg",
        likes: 0,
      },
      {
        title: "Reclining Nude",
        description: "",
        author: "Pablo Picasso",
        age: "1908",
        type: "Cubism",
        imageUrl:
          "https://uploads4.wikiart.org/images/pablo-picasso/reclining-nude-1908.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Seated nude",
        description: "",
        author: "Pablo Picasso",
        age: "1908",
        type: "Cubism",
        imageUrl:
          "https://uploads5.wikiart.org/images/pablo-picasso/seated-nude.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Three women Rhythmical",
        description: "",
        author: "Pablo Picasso",
        age: "1908",
        type: "Cubism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/three-women-rhythmical-version-1908.jpg",
        likes: 0,
      },
      {
        title: "Three women ",
        description: "",
        author: "Pablo Picasso",
        age: "1908",
        type: "Cubism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/three-women-1908.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Fernande Olivier",
        description: "",
        author: "Pablo Picasso",
        age: "1909",
        type: "Cubism",
        imageUrl:
          "https://uploads8.wikiart.org/00323/images/pablo-picasso/head-of-a-woman-picasso-sculpture-pablo-picasso-s-women-wives-lovers-and-muses-of-head-of-a-woman.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Bread and dish with fruits",
        description: "",
        author: "Pablo Picasso",
        age: "1909",
        type: "Cubism",
        imageUrl:
          "https://uploads6.wikiart.org/images/pablo-picasso/bread-and-dish-with-fruits-on-the-table.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Reservoir, Horta de Ebro",
        description: "",
        author: "Pablo Picasso",
        age: "1909",
        type: "Cubism",
        imageUrl:
          "https://uploads3.wikiart.org/00261/images/pablo-picasso/cri-000000151502.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Bathers Drying Themselves",
        description: "",
        author: "Pablo Picasso",
        age: "1909",
        type: "Cubism",
        imageUrl:
          "https://uploads6.wikiart.org/images/pablo-picasso/bathers-drying-themselves-1909.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Harlequin leaning",
        description: "",
        author: "Pablo Picasso",
        age: "1909",
        type: "Cubism",
        imageUrl:
          "https://uploads6.wikiart.org/images/pablo-picasso/harlequin-leaning-1909.jpg",
        likes: 0,
      },
      {
        title: "Fruit in a Vase",
        description: "",
        author: "Pablo Picasso",
        age: "1909",
        type: "Cubism",
        imageUrl:
          "https://uploads5.wikiart.org/images/pablo-picasso/fruit-in-a-vase-1909.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Manuel Pallares",
        description: "",
        author: "Pablo Picasso",
        age: "1909",
        type: "Cubism",
        imageUrl:
          "https://uploads8.wikiart.org/images/pablo-picasso/portrait-of-manuel-pallares-1909.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Nude",
        description: "",
        author: "Pablo Picasso",
        age: "1909",
        type: "Cubism",
        imageUrl:
          "https://uploads2.wikiart.org/images/pablo-picasso/nude-1909.jpg",
        likes: 0,
      },
      {
        title: "Still life with bottle of Anis",
        description: "",
        author: "Pablo Picasso",
        age: "1909",
        type: "Cubism",
        imageUrl:
          "https://uploads2.wikiart.org/images/pablo-picasso/still-life-with-bottle-of-anis-del-mono-1909.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Woman with a Mandolin",
        description: "",
        author: "Pablo Picasso",
        age: "1909",
        type: "Cubism",
        imageUrl:
          "https://uploads2.wikiart.org/images/pablo-picasso/woman-with-a-mandolin-1909.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Guitar player",
        description: "",
        author: "Pablo Picasso",
        age: "1910",
        type: "Cubism",
        imageUrl:
          "https://uploads3.wikiart.org/images/pablo-picasso/guitar-player-1910.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The good Derain",
        description: "",
        author: "Pablo Picasso",
        age: "1910",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/pablo-picasso/the-good-derain-1910.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Wilhelm Uhde",
        description: "",
        author: "Pablo Picasso",
        age: "1910",
        type: "Cubism",
        imageUrl:
          "https://uploads2.wikiart.org/images/pablo-picasso/william-uhde-1910.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Clarinet",
        description: "",
        author: "Pablo Picasso",
        age: "1911",
        type: "Cubism",
        imageUrl:
          "https://uploads7.wikiart.org/images/pablo-picasso/clarinet-1911.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Pedestal, glasses, cups",
        description: "",
        author: "Pablo Picasso",
        age: "1911",
        type: "Cubism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/pedestal-glasses-cups-mandolin-1911.jpg",
        likes: 0,
      },
      {
        title: "The chess",
        description: "",
        author: "Pablo Picasso",
        age: "1911",
        type: "Cubism",
        imageUrl:
          "https://uploads7.wikiart.org/images/pablo-picasso/the-chess-1911.jpg",
        likes: 0,
      },
      {
        title: "Guitar (I love Eva)",
        description: "",
        author: "Pablo Picasso",
        age: "1912",
        type: "Cubism",
        imageUrl:
          "https://uploads7.wikiart.org/images/pablo-picasso/guitar-i-love-eva-1912.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Head of a man with hat",
        description: "",
        author: "Pablo Picasso",
        age: "1912",
        type: "Cubism",
        imageUrl:
          "https://uploads3.wikiart.org/images/pablo-picasso/head-of-a-man-with-hat-1912.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Violin",
        description: "",
        author: "Pablo Picasso",
        age: "1912",
        type: "Cubism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/violin.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Table in a Cafe",
        description: "",
        author: "Pablo Picasso",
        age: "1912",
        type: "Cubism",
        imageUrl:
          "https://uploads4.wikiart.org/images/pablo-picasso/table-in-a-cafe-bottle-of-pernod-1912.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The pigeon pea",
        description: "",
        author: "Pablo Picasso",
        age: "1912",
        type: "Cubism",
        imageUrl:
          "https://uploads4.wikiart.org/images/pablo-picasso/the-pigeon-pea-1912.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Bottle of Vieux Marc",
        description: "",
        author: "Pablo Picasso",
        age: "1913",
        type: "Cubism",
        imageUrl:
          "https://uploads3.wikiart.org/images/pablo-picasso/bottle-of-vieux-marc-glass-and-newspaper-1913.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Bottle of black rum",
        description: "",
        author: "Pablo Picasso",
        age: "1913",
        type: "Cubism",
        imageUrl:
          "https://uploads5.wikiart.org/images/pablo-picasso/bottle-of-black-rum-vive-la-france-1913.jpg",
        likes: 0,
      },
      {
        title: "Woman with a shirt",
        description: "",
        author: "Pablo Picasso",
        age: "1913",
        type: "Cubism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/woman-with-a-shirt-sitting-in-a-chair-1913.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Um copo de absinto",
        description: "",
        author: "Pablo Picasso",
        age: "1914",
        type: "Cubism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/a-glass-of-absinthe-1914.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Man with pipe",
        description: "",
        author: "Pablo Picasso",
        age: "1914",
        type: "Cubism",
        imageUrl:
          "https://uploads3.wikiart.org/images/pablo-picasso/man-with-pipe-1914.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Student with pipe",
        description: "",
        author: "Pablo Picasso",
        age: "1914",
        type: "Cubism",
        imageUrl:
          "https://uploads2.wikiart.org/images/pablo-picasso/student-with-pipe.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Harlequin with guitar",
        description: "",
        author: "Pablo Picasso",
        age: "1916",
        type: "Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/harlequin-with-guitar-1916.jpg",
        likes: 0,
      },
      {
        title: "Couple of dancers",
        description: "",
        author: "Pablo Picasso",
        age: "1915",
        type: "Cubism",
        imageUrl:
          "https://uploads7.wikiart.org/images/pablo-picasso/couple-of-dancers-1915.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Barselona harlequin",
        description: "",
        author: "Pablo Picasso",
        age: "1917",
        type: "Cubism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/barselona-harlequin-1917.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Cubist Person",
        description: "",
        author: "Pablo Picasso",
        age: "1917",
        type: "Cubism",
        imageUrl:
          "https://uploads3.wikiart.org/images/pablo-picasso/cubist-person-1917.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Curtain for the ballet",
        description: "",
        author: "Pablo Picasso",
        age: "1917",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/curtain-for-the-ballet-parade-1917.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Costume design for ballet",
        description: "",
        author: "Pablo Picasso",
        age: "1917",
        type: "Art nouveau",
        imageUrl:
          "https://uploads8.wikiart.org/images/pablo-picasso/costume-design-for-ballet-tricorne-1917-4.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Harlequin and woman",
        description: "",
        author: "Pablo Picasso",
        age: "1917",
        type: "Cubism",
        imageUrl:
          "https://uploads5.wikiart.org/images/pablo-picasso/harlequin-and-woman-with-necklace-1917.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "El Paseo de Colon",
        description: "",
        author: "Pablo Picasso",
        age: "1917",
        type: "Cubism",
        imageUrl:
          "https://uploads7.wikiart.org/images/pablo-picasso/el-paseo-de-colon-1917.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Gutted horse",
        description: "",
        author: "Pablo Picasso",
        age: "1917",
        type: "Expressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/pablo-picasso/gutted-horse-1917.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Fruit dish",
        description: "",
        author: "Pablo Picasso",
        age: "1917",
        type: "Cubism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/fruit-dish-1917.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Partition, bottle of port, guitar",
        description: "",
        author: "Pablo Picasso",
        age: "1917",
        type: "Cubism",
        imageUrl:
          "https://uploads8.wikiart.org/images/pablo-picasso/partition-bottle-of-port-guitar-playing-cards-1917.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Harlequin with guitar",
        description: "",
        author: "Pablo Picasso",
        age: "1918",
        type: "Expressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/pablo-picasso/harlequin-with-guitar-1918.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Pierrot with a mask",
        description: "",
        author: "Pablo Picasso",
        age: "1918",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/pierrot-with-a-mask-1918.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Guitar and jug on a table",
        description: "",
        author: "Pablo Picasso",
        age: "1918",
        type: "Cubism",
        imageUrl:
          "https://uploads6.wikiart.org/images/pablo-picasso/guitar-and-jug-on-a-table-1918.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Lovers",
        description: "",
        author: "Pablo Picasso",
        age: "1919",
        type: "Cubism",
        imageUrl:
          "https://uploads5.wikiart.org/images/pablo-picasso/lovers-1919.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Still life with pitcher and apples",
        description: "",
        author: "Pablo Picasso",
        age: "1919",
        type: "Cubism",
        imageUrl:
          "https://uploads6.wikiart.org/images/pablo-picasso/still-life-with-pitcher-and-apples-1919.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The student",
        description: "",
        author: "Pablo Picasso",
        age: "1919",
        type: "Cubism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/the-student-1919.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Two nude women",
        description: "",
        author: "Pablo Picasso",
        age: "1920",
        type: "Surrealism",
        imageUrl:
          "https://uploads6.wikiart.org/images/pablo-picasso/two-nude-women-1920-1.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Mother and child",
        description: "",
        author: "Pablo Picasso",
        age: "1921",
        type: "Surrealism",
        imageUrl:
          "https://uploads7.wikiart.org/images/pablo-picasso/mother-and-child-1921-1.jpg",
        likes: 0,
      },
      {
        title: "Seated Nude drying her feet",
        description: "",
        author: "Pablo Picasso",
        age: "1921",
        type: "Surrealism",
        imageUrl:
          "https://uploads8.wikiart.org/images/pablo-picasso/seated-nude-drying-her-feet-1921.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Plaster head and arm",
        description: "",
        author: "Pablo Picasso",
        age: "1925",
        type: "Surrealism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/plaster-head-and-arm-1925.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Kiss",
        description: "",
        author: "Pablo Picasso",
        age: "1925",
        type: "Surrealism",
        imageUrl:
          "https://uploads7.wikiart.org/images/pablo-picasso/the-kiss-1925.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "On the beach, Dinard",
        description: "",
        author: "Pablo Picasso",
        age: "1928",
        type: "Surrealism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/on-the-beach-dinard-1928.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Girl in Front of Mirror",
        description: "",
        author: "Pablo Picasso",
        age: "1932",
        type: "Surrealism",
        imageUrl:
          "https://uploads4.wikiart.org/images/pablo-picasso/girl-in-front-of-mirror-1932.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Dying bull",
        description: "",
        author: "Pablo Picasso",
        age: "1934",
        type: "Surrealism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/dying-bull-1934.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Woman by the window",
        description: "",
        author: "Pablo Picasso",
        age: "1936",
        type: "Surrealism",
        imageUrl:
          "https://uploads0.wikiart.org/images/pablo-picasso/woman-by-the-window-1936.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Weeping Woman",
        description: "",
        author: "Pablo Picasso",
        age: "1937",
        type: "Surrealism",
        imageUrl:
          "https://uploads4.wikiart.org/images/pablo-picasso/crying-woman-1937-1.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Le Marin",
        description: "",
        author: "Pablo Picasso",
        age: "1943",
        type: "Cubism",
        imageUrl:
          "https://uploads7.wikiart.org/00234/images/pablo-picasso/picasso-sailor.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Vase with flowers",
        description: "",
        author: "Pablo Picasso",
        age: "1943",
        type: "Cubism",
        imageUrl:
          "https://uploads7.wikiart.org/images/pablo-picasso/vase-with-flowers-1943.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Still life with lamp",
        description: "",
        author: "Pablo Picasso",
        age: "1944",
        type: "Surrealism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/still-life-with-lamp-1944.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The bird cage",
        description: "",
        author: "Pablo Picasso",
        age: "1944",
        type: "Cubism",
        imageUrl:
          "https://uploads7.wikiart.org/images/pablo-picasso/the-bird-cage.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Crane and pitcher",
        description: "",
        author: "Pablo Picasso",
        age: "1945",
        type: "Surrealism",
        imageUrl:
          "https://uploads7.wikiart.org/images/pablo-picasso/crane-and-pitcher-1945.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Don Quixote",
        description: "",
        author: "Pablo Picasso",
        age: "1955",
        type: "Expressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/pablo-picasso/don-quixote-1955.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Las Meninas (Velazquez)",
        description: "",
        author: "Pablo Picasso",
        age: "1957",
        type: "Cubism",
        imageUrl:
          "https://uploads2.wikiart.org/images/pablo-picasso/las-meninas-velazquez-1957.jpg!Large.jpg",
        likes: 0,
      },

      {
        title: "Femmes au jardin",
        description:
          "O quadro retrata o quotidiano burguês de quatro senhoras, que ocupam a sua manhã a colher flores no jardim, sob a sombra das árvores. Nesta cena primaveril, observa-se a habilidade de Claude Monet na representação do traje feminino.",
        author: "Claude Monet",
        age: "1866",
        type: "Impressionism",
        imageUrl:
          "https://uploads3.wikiart.org/images/claude-monet/women-in-the-garden.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Impressão, nascer do sol",
        description:
          "Impressão, nascer do sol (do francês: Impression, soleil levant) é a famosa pintura impressionista de Claude Monet, realizada em 1872. A pintura nasceu em Le Havre, porto francês representado na obra, com uma cerrada névoa sobre o estaleiro, os barcos e as chaminés no fundo da composição.",
        author: "Claude Monet",
        age: "1872",
        type: "Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/00129/images/claude-monet/impression-sunrise.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Autumn on the Seine at Argenteuil",
        description: "",
        author: "Claude Monet",
        age: "1873",
        type: "Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/claude-monet/autumn-on-the-seine-at-argenteuil.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Camille Monet and a Child",
        description: "",
        author: "Claude Monet",
        age: "1875",
        type: "Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/claude-monet/madame-monet-and-child(1).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Palheiros em Giverny",
        description: "",
        author: "Claude Monet",
        age: "1884",
        type: "Impressionism",
        imageUrl:
          "https://uploads4.wikiart.org/images/claude-monet/haystacks-at-giverny.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Poplars at Giverny",
        description: "",
        author: "Claude Monet",
        age: "1887",
        type: "Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/claude-monet/poplars-at-giverny.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Three Trees in Grey Weather",
        description: "",
        author: "Claude Monet",
        age: "1891",
        type: "Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/claude-monet/three-trees-in-grey-weather.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Antibes pela Manhã",
        description: "",
        author: "Claude Monet",
        age: "1888",
        type: "Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/claude-monet/antibes-in-the-morning(1).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Haystack at Giverny",
        description: "",
        author: "Claude Monet",
        age: "1886",
        type: "Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/claude-monet/haystack-at-giverny-1886.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Water Lilies, Evening Effect",
        description: "",
        author: "Claude Monet",
        age: "1897",
        type: "Impressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/claude-monet/water-lilies-evening-effect-1899.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Water Lily Pond",
        description: "",
        author: "Claude Monet",
        age: "1917",
        type: "Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/claude-monet/water-lily-pond-1.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Irises in Monet's Garden",
        description: "",
        author: "Claude Monet",
        age: "1900",
        type: "Impressionism",
        imageUrl:
          "https://uploads4.wikiart.org/00254/images/claude-monet/claude-monet-irises-in-monets-garden-1899-1900.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Casas do Parlamento",
        description: "",
        author: "Claude Monet",
        age: "1904",
        type: "Impressionism",
        imageUrl:
          "https://uploads4.wikiart.org/images/claude-monet/houses-of-parliament.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Water Lilies",
        description: "",
        author: "Claude Monet",
        age: "1917",
        type: "Impressionism",
        imageUrl:
          "https://uploads3.wikiart.org/images/claude-monet/water-lilies-1919-9.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Waterloo Bridge, London",
        description: "",
        author: "Claude Monet",
        age: "1903",
        type: "Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/claude-monet/waterloo-bridge-london-1.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Coin d' atelier",
        description: "",
        author: "Claude Monet",
        age: "1861",
        type: "Realism",
        imageUrl:
          "https://uploads0.wikiart.org/images/claude-monet/a-corner-of-the-studio(1).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Trophies of the Hunt",
        description: "",
        author: "Claude Monet",
        age: "1862",
        type: "Realism",
        imageUrl:
          "https://uploads4.wikiart.org/images/claude-monet/trophies-of-the-hunt.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Street of the Bavolle Honfleur",
        description: "",
        author: "Claude Monet",
        age: "1864",
        type: "Impressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/claude-monet/street-of-the-bavolle-honfleur.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Road to the Saint-Simeon Farm",
        description: "",
        author: "Claude Monet",
        age: "1864",
        type: "Impressionism",
        imageUrl:
          "https://uploads4.wikiart.org/images/claude-monet/road-to-the-saint-simeon-farm.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Road from Chailly to Fontainebleau",
        description: "",
        author: "Claude Monet",
        age: "1864",
        type: "Realism",
        imageUrl:
          "https://uploads4.wikiart.org/images/claude-monet/the-road-from-chailly-to-fontainebleau.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Lieutenancy at Honfleur",
        description: "",
        author: "Claude Monet",
        age: "1864",
        type: "Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/claude-monet/the-lieutenancy-at-honfleur.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Lunch on the Grass",
        description: "",
        author: "Claude Monet",
        age: "1865",
        type: "Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/claude-monet/lunch-on-the-grass-study.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Lunch on the Grass",
        description: "",
        author: "Claude Monet",
        age: "1865",
        type: "Impressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/claude-monet/lunch-on-the-grass-central-panel.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Victor Jacquemont",
        description: "",
        author: "Claude Monet",
        age: "1865",
        type: "Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/claude-monet/victor-jacquemont-holding-a-parasol.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Camille with a Small Dog",
        description: "",
        author: "Claude Monet",
        age: "1866",
        type: "Realism",
        imageUrl:
          "https://uploads8.wikiart.org/images/claude-monet/camille-with-a-small-dog.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Regatta at Sainte-Adresse",
        description: "",
        author: "Claude Monet",
        age: "1867",
        type: "Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/claude-monet/regatta-at-sainte-adresse.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Jean Monet in the Craddle",
        description: "",
        author: "Claude Monet",
        age: "1867",
        type: "Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/claude-monet/jean-monet-in-the-craddle.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Still Life with Pears",
        description: "",
        author: "Claude Monet",
        age: "1867",
        type: "Impressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/claude-monet/still-life-with-pears-and-grapes.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Cabin at Saint-Adresse",
        description: "",
        author: "Claude Monet",
        age: "1867",
        type: "Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/claude-monet/the-cabin-at-saint-adresse.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Fishing Boats, Calm Sea",
        description: "",
        author: "Claude Monet",
        age: "1868",
        type: "Impressionism",
        imageUrl:
          "https://uploads6.wikiart.org/images/claude-monet/fishing-boats-calm-sea.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Madame Gaudibert",
        description: "",
        author: "Claude Monet",
        age: "1868",
        type: "Realism",
        imageUrl:
          "https://uploads3.wikiart.org/images/claude-monet/portrait-of-madame-gaudibert.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Estuary of the Siene",
        description: "",
        author: "Claude Monet",
        age: "1868",
        type: "Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/claude-monet/the-estuary-of-the-siene.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "On the Bank of the Seine",
        description: "",
        author: "Claude Monet",
        age: "1868",
        type: "Impressionism",
        imageUrl:
          "https://uploads3.wikiart.org/images/claude-monet/not_detected_212144.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Jean Monet",
        description: "",
        author: "Claude Monet",
        age: "1869",
        type: "Impressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/claude-monet/portrait-of-jean-monet-wearing-a-hat-with-a-pompom.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Flowers and Fruit",
        description: "",
        author: "Claude Monet",
        age: "1869",
        type: "Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/claude-monet/flowers-and-fruit.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Dinner",
        description: "",
        author: "Claude Monet",
        age: "1868",
        type: "Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/claude-monet/the-dinner-1869.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Seine at Bougival",
        description: "",
        author: "Claude Monet",
        age: "1869",
        type: "Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/claude-monet/the-seine-at-bougival-in-the-evening.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Path through the Forest",
        description: "",
        author: "Claude Monet",
        age: "1870",
        type: "Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/claude-monet/path-through-the-forest-snow-effect.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Road at Louveciennes",
        description: "",
        author: "Claude Monet",
        age: "1870",
        type: "Impressionism",
        imageUrl:
          "https://uploads6.wikiart.org/images/claude-monet/road-at-louveciennes-melting-snow-sunset.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Hotel des Roches Noires",
        description: "",
        author: "Claude Monet",
        age: "1870",
        type: "Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/claude-monet/the-hotel-des-roches-noires-at-trouville-1870.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Red Cape",
        description: "",
        author: "Claude Monet",
        age: "1870",
        type: "Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/claude-monet/the-red-cape-madame-monet.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Boardwalk at Trouville",
        description: "",
        author: "Claude Monet",
        age: "1870",
        type: "Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/claude-monet/the-boardwalk-at-trouville.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Camille on the Beach",
        description: "",
        author: "Claude Monet",
        age: "1870",
        type: "Impressionism",
        imageUrl:
          "https://uploads3.wikiart.org/images/claude-monet/camille-sitting-on-the-beach-at-trouville-1871.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Houses on the Zaan River",
        description: "",
        author: "Claude Monet",
        age: "1871",
        type: "Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/claude-monet/houses-on-the-zaan-river-at-zaandam.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Blue House at Zaandam",
        description: "",
        author: "Claude Monet",
        age: "1871",
        type: "Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/claude-monet/the-blue-house-at-zaandam.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Voorzaan",
        description: "",
        author: "Claude Monet",
        age: "1871",
        type: "Impressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/claude-monet/the-voorzaan.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Zaandam",
        description: "",
        author: "Claude Monet",
        age: "1871",
        type: "Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/claude-monet/zaandam.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Zaan at Zaandam",
        description: "",
        author: "Claude Monet",
        age: "1871",
        type: "Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/claude-monet/zaan-at-zaandam.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "A Woman Reading",
        description: "",
        author: "Claude Monet",
        age: "1872",
        type: "Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/claude-monet/a-woman-reading(1).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Jean Monet",
        description: "",
        author: "Claude Monet",
        age: "1872",
        type: "Impressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/claude-monet/jean-monet-on-a-mechanical-horse.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Still Life with Melon",
        description: "",
        author: "Claude Monet",
        age: "1872",
        type: "Impressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/claude-monet/still-life-with-melon.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Regata em Argenteuil",
        description: "",
        author: "Claude Monet",
        age: "1872",
        type: "Impressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/claude-monet/regatta-at-argenteuil.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Seine at Rouen",
        description: "",
        author: "Claude Monet",
        age: "1872",
        type: "Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/claude-monet/the-seine-at-rouen.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Tea Set",
        description: "",
        author: "Claude Monet",
        age: "1872",
        type: "Impressionism",
        imageUrl:
          "https://uploads4.wikiart.org/images/claude-monet/the-tea-set.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Wooden Bridge",
        description: "",
        author: "Claude Monet",
        age: "1872",
        type: "Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/claude-monet/the-wooden-bridge.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Train",
        description: "",
        author: "Claude Monet",
        age: "1872",
        type: "Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/claude-monet/the-train.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Apple Trees in Bloom",
        description: "",
        author: "Claude Monet",
        age: "1873",
        type: "Impressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/claude-monet/apple-trees-in-bloom(1).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Field of Poppies",
        description: "",
        author: "Claude Monet",
        age: "1873",
        type: "Impressionism",
        imageUrl:
          "https://uploads4.wikiart.org/00282/images/claude-monet/field-of-poppies.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Camille Monet",
        description: "",
        author: "Claude Monet",
        age: "1873",
        type: "Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/claude-monet/camille-monet-in-the-garden.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Luncheon",
        description: "",
        author: "Claude Monet",
        age: "1873",
        type: "Impressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/claude-monet/the-luncheon-1.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Studio-Boat",
        description: "",
        author: "Claude Monet",
        age: "1874",
        type: "Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/claude-monet/the-studio-boat.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Windmill on the Onbekende",
        description: "",
        author: "Claude Monet",
        age: "1874",
        type: "Impressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/claude-monet/windmill-on-the-onbekende-canal-amsterdam.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Girls in the Garden",
        description: "",
        author: "Claude Monet",
        age: "1875",
        type: "Impressionism",
        imageUrl:
          "https://uploads3.wikiart.org/images/claude-monet/girls-in-the-garden.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Artist's House",
        description: "",
        author: "Claude Monet",
        age: "1876",
        type: "Impressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/claude-monet/the-artist-s-house-in-argenteuil.jpg!Large.jpg",
        likes: 0,
      },

      {
        title: "Portrait of Germaine Hoschede",
        description: "",
        author: "Claude Monet",
        age: "1876",
        type: "Impressionism",
        imageUrl:
          "https://uploads3.wikiart.org/images/claude-monet/portrait-of-germaine-hoschede-with-a-doll-1877.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Saint-Lazare Station",
        description: "",
        author: "Claude Monet",
        age: "1877",
        type: "Impressionism",
        imageUrl:
          "https://uploads6.wikiart.org/images/claude-monet/saint-lazare-station-exterior-1.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Bouquet of Gadiolas",
        description: "",
        author: "Claude Monet",
        age: "1878",
        type: "Impressionism",
        imageUrl:
          "https://uploads3.wikiart.org/images/claude-monet/bouquet-of-gadiolas-lilies-and-dasies.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Flowers in a Pot",
        description: "",
        author: "Claude Monet",
        age: "1878",
        type: "Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/claude-monet/flowers-in-a-pot.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Leon Peltier",
        description: "",
        author: "Claude Monet",
        age: "1879",
        type: "Impressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/claude-monet/leon-peltier.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Still Life with Apples",
        description: "",
        author: "Claude Monet",
        age: "1879",
        type: "Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/claude-monet/still-life-with-apples-and-grapes.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Andre Lauvray",
        description: "",
        author: "Claude Monet",
        age: "1880",
        type: "Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/claude-monet/andre-lauvray(1).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Blanche Hoschede",
        description: "",
        author: "Claude Monet",
        age: "1880",
        type: "Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/claude-monet/blanche-hoschede.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Bouquet of Sunflowers",
        description: "",
        author: "Claude Monet",
        age: "1880",
        type: "Impressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/claude-monet/bouquet-of-sunflowers.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Vetheuil in Summer",
        description: "",
        author: "Claude Monet",
        age: "1880",
        type: "Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/claude-monet/vetheuil-in-summer.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Woman under the Willows",
        description: "",
        author: "Claude Monet",
        age: "1880",
        type: "Impressionism",
        imageUrl:
          "https://uploads6.wikiart.org/images/claude-monet/woman-sitting-under-the-willows.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Chrysanthemums",
        description: "",
        author: "Claude Monet",
        age: "1880",
        type: "Impressionism",
        imageUrl:
          "https://uploads3.wikiart.org/images/claude-monet/chrysanthemums-1881.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Head of the Dog",
        description: "",
        author: "Claude Monet",
        age: "1882",
        type: "Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/claude-monet/head-of-the-dog.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Pere Paul",
        description: "",
        author: "Claude Monet",
        age: "1882",
        type: "Impressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/claude-monet/portrait-of-pere-paul.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Eugenie Graff",
        description: "",
        author: "Claude Monet",
        age: "1882",
        type: "Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/claude-monet/portrait-of-eugenie-graff-madame-paul-1882.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Galettes",
        description: "",
        author: "Claude Monet",
        age: "1882",
        type: "Impressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/claude-monet/the-galettes.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Landscape near Montecarlo",
        description: "",
        author: "Claude Monet",
        age: "1883",
        type: "Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/claude-monet/landscape-near-montecarlo.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Peaches",
        description: "",
        author: "Claude Monet",
        age: "1883",
        type: "Impressionism",
        imageUrl:
          "https://uploads0.wikiart.org/images/claude-monet/peaches.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Needle of Etretat, Low Tide",
        description: "",
        author: "Claude Monet",
        age: "1883",
        type: "Impressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/claude-monet/the-needle-of-etretat-low-tide.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Road to Monte Carlo",
        description: "",
        author: "Claude Monet",
        age: "1883",
        type: "Impressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/claude-monet/the-road-to-monte-carlo.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Olive Tree Wood",
        description: "",
        author: "Claude Monet",
        age: "1884",
        type: "Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/claude-monet/olive-tree-wood-in-the-moreno-garden.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Cliffs of the Porte d'Aval",
        description: "",
        author: "Claude Monet",
        age: "1885",
        type: "Impressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/claude-monet/cliffs-of-the-porte-d-aval.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Self-Portrait with a Beret",
        description: "",
        author: "Claude Monet",
        age: "1886",
        type: "Impressionism",
        imageUrl:
          "https://uploads6.wikiart.org/images/claude-monet/self-portrait-with-a-beret-1886.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "In The Woods At Giverny Blanche",
        description: "",
        author: "Claude Monet",
        age: "1887",
        type: "Impressionism",
        imageUrl:
          "https://uploads6.wikiart.org/images/claude-monet/in-the-woods-at-giverny-blanche-hoschede.jpg!Large.jpg",
        likes: 0,
      },

      {
        title: "2010 World Cup South Africa",
        description: "",
        author: "Romero Britto",
        age: "2009",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads8.wikiart.org/images/romero-britto/2010-world-cup-south-africa-2009.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Colorful Underwear",
        description: "",
        author: "Romero Britto",
        age: "2008",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads7.wikiart.org/images/romero-britto/colorful-underwear-2008.jpg",
        likes: 0,
      },
      {
        title: "We Love Rauschenberg",
        description: "",
        author: "Romero Britto",
        age: "2007",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads0.wikiart.org/images/romero-britto/we-love-rauschenberg-2007.jpg",
        likes: 0,
      },
      {
        title: "Good girl",
        description: "",
        author: "Romero Britto",
        age: "2005",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads8.wikiart.org/images/romero-britto/good-girl-2005.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Martini Sunrise",
        description: "",
        author: "Romero Britto",
        age: "2005",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads4.wikiart.org/images/romero-britto/martini-sunrise-2005.jpg",
        likes: 0,
      },
      {
        title: "Night Out",
        description: "",
        author: "Romero Britto",
        age: "2004",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads8.wikiart.org/images/romero-britto/charm.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Britto Garden",
        description: "",
        author: "Romero Britto",
        age: "2000",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads2.wikiart.org/images/romero-britto/britto-garden-2000.jpg",
        likes: 0,
      },
      {
        title: "L.A. CAT 1995",
        description: "",
        author: "Romero Britto",
        age: "1995",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads2.wikiart.org/images/romero-britto/l-a-cat-1995-1995.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Absolute",
        description: "",
        author: "Romero Britto",
        age: "1992",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads1.wikiart.org/images/romero-britto/absolute.jpg",
        likes: 0,
      },
      {
        title: "Absolut Britto",
        description: "",
        author: "Romero Britto",
        age: "1988",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads7.wikiart.org/images/romero-britto/absolut-britto.jpg",
        likes: 0,
      },
      {
        title: "Follow Me",
        description: "",
        author: "Romero Britto",
        age: "2008",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads3.wikiart.org/images/romero-britto/follow-me.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Flower Power IV",
        description: "",
        author: "Romero Britto",
        age: "2004",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads8.wikiart.org/images/romero-britto/flower-power-iv.jpg",
        likes: 0,
      },
      {
        title: "Family",
        description: "",
        author: "Romero Britto",
        age: "2004",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads8.wikiart.org/images/romero-britto/family.jpg",
        likes: 0,
      },
      {
        title: "Dancers",
        description: "",
        author: "Romero Britto",
        age: "N/i",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads0.wikiart.org/images/romero-britto/dancers.jpg",
        likes: 0,
      },
      {
        title: "Cat",
        description: "",
        author: "Romero Britto",
        age: "N/i",
        type: "Neo-Pop Art",
        imageUrl: "https://uploads5.wikiart.org/images/romero-britto/cat.jpg",
        likes: 0,
      },
      {
        title: "Journey",
        description: "",
        author: "Romero Britto",
        age: "N/i",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads0.wikiart.org/images/romero-britto/journey.jpg",
        likes: 0,
      },
      {
        title: "Mickey's World",
        description: "",
        author: "Romero Britto",
        age: "N/i",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads7.wikiart.org/images/romero-britto/mickey-s-world.jpg",
        likes: 0,
      },
      {
        title: "Mona Cat",
        description: "",
        author: "Romero Britto",
        age: "N/i",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads1.wikiart.org/images/romero-britto/mona-cat.jpg",
        likes: 0,
      },
      {
        title: "Carmen Miranda",
        description: "",
        author: "Romero Britto",
        age: "N/i",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads7.wikiart.org/images/romero-britto/carmen-miranda.jpg",
        likes: 0,
      },
      {
        title: "Tennis Suite Girl",
        description: "",
        author: "Romero Britto",
        age: "N/i",
        type: "Neo-Pop Art",
        imageUrl:
          "https://uploads1.wikiart.org/images/romero-britto/tennis-suite-girl.jpg",
        likes: 0,
      },
      {
        title: "An Angler",
        description: "",
        author: "Tarsila do Amaral",
        age: "1925",
        type: "Primitivism",
        imageUrl:
          "https://uploads3.wikiart.org/images/tarsila-do-amaral/an-angler-1925.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Abaporu",
        description: "",
        author: "Tarsila do Amaral",
        age: "1928",
        type: "Primitivism",
        imageUrl:
          "https://uploads4.wikiart.org/images/tarsila-do-amaral/abaporu-1928(1).jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "A Lua",
        description: "",
        author: "Tarsila do Amaral",
        age: "1928",
        type: "Primitivism",
        imageUrl:
          "https://uploads1.wikiart.org/images/tarsila-do-amaral/the-moon-1928.jpg",
        likes: 0,
      },
      {
        title: "O Ovo",
        description: "",
        author: "Tarsila do Amaral",
        age: "1928",
        type: "Primitivism",
        imageUrl:
          "https://uploads0.wikiart.org/images/tarsila-do-amaral/the-egg-1928.jpg",
        likes: 0,
      },
      {
        title: "Postcard",
        description: "",
        author: "Tarsila do Amaral",
        age: "1928",
        type: "Primitivism",
        imageUrl:
          "https://uploads1.wikiart.org/images/tarsila-do-amaral/postcard-1928.jpg",
        likes: 0,
      },
      {
        title: "Operários",
        description: "",
        author: "Tarsila do Amaral",
        age: "1933",
        type: "Primitivism",
        imageUrl:
          "https://uploads3.wikiart.org/images/tarsila-do-amaral/oper-rios-1933.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Anthropophagy",
        description: "",
        author: "Tarsila do Amaral",
        age: "1929",
        type: "Primitivism",
        imageUrl:
          "https://uploads5.wikiart.org/images/tarsila-do-amaral/antropofagia-1929.jpg",
        likes: 0,
      },
      {
        title: "The Lake",
        description: "",
        author: "Tarsila do Amaral",
        age: "1928",
        type: "Primitivism",
        imageUrl:
          "https://uploads1.wikiart.org/images/tarsila-do-amaral/the-lake-1928.jpg",
        likes: 0,
      },
      {
        title: "Manacá",
        description: "",
        author: "Tarsila do Amaral",
        age: "1927",
        type: "Primitivism",
        imageUrl:
          "https://uploads8.wikiart.org/images/tarsila-do-amaral/manac-1927.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Maternidade",
        description: "",
        author: "Tarsila do Amaral",
        age: "1938",
        type: "Primitivism",
        imageUrl:
          "https://uploads4.wikiart.org/images/tarsila-do-amaral/maternidade-1938.jpg",
        likes: 0,
      },
      {
        title: "Morro da favela",
        description: "",
        author: "Tarsila do Amaral",
        age: "1924",
        type: "Primitivism",
        imageUrl:
          "https://uploads8.wikiart.org/images/tarsila-do-amaral/morro-da-favela-1945.jpg",
        likes: 0,
      },
      {
        title: "Estrada de Ferro Central do Brasil",
        description: "",
        author: "Tarsila do Amaral",
        age: "1924",
        type: "Primitivism",
        imageUrl:
          "https://uploads8.wikiart.org/images/tarsila-do-amaral/e-f-c-b-estrada-de-ferro-central-do-brasil-1924.jpg",
        likes: 0,
      },
      {
        title: "Família",
        description: "",
        author: "Tarsila do Amaral",
        age: "1925",
        type: "Primitivism",
        imageUrl:
          "https://uploads0.wikiart.org/images/tarsila-do-amaral/fam-lia-1925.jpg",
        likes: 0,
      },
      {
        title: "O Mamoeiro",
        description: "",
        author: "Tarsila do Amaral",
        age: "1925",
        type: "Primitivism",
        imageUrl:
          "https://uploads4.wikiart.org/images/tarsila-do-amaral/o-mamoeiro-1925.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Brazilian Religion",
        description: "",
        author: "Tarsila do Amaral",
        age: "1927",
        type: "Primitivism",
        imageUrl:
          "https://uploads2.wikiart.org/images/tarsila-do-amaral/brazilian-religion-1927.jpg",
        likes: 0,
      },
      {
        title: "Carnaval em Madureira",
        description: "",
        author: "Tarsila do Amaral",
        age: "1924",
        type: "Primitivism",
        imageUrl:
          "https://uploads6.wikiart.org/images/tarsila-do-amaral/carnaval-em-madureira-1924.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "A Negra",
        description: "",
        author: "Tarsila do Amaral",
        age: "1923",
        type: "Primitivism",
        imageUrl:
          "https://uploads1.wikiart.org/images/tarsila-do-amaral/a-negra-1923.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "A Cuca",
        description: "",
        author: "Tarsila do Amaral",
        age: "1924",
        type: "Primitivism",
        imageUrl:
          "https://uploads8.wikiart.org/images/tarsila-do-amaral/a-cuca-1924.jpg",
        likes: 0,
      },
      {
        title: "Blue Hat",
        description: "",
        author: "Tarsila do Amaral",
        age: "1922",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/tarsila-do-amaral/blue-hat-1922.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Mario de Andrade",
        description: "",
        author: "Tarsila do Amaral",
        age: "N/i",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/tarsila-do-amaral/portrait-of-mario-de-andrade.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Retrato de Oswald de Andrade",
        description: "",
        author: "Tarsila do Amaral",
        age: "1922",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads4.wikiart.org/images/tarsila-do-amaral/portrait-of-oswald-de-andrade-1922.jpg",
        likes: 0,
      },
      {
        title: "Still Life",
        description: "",
        author: "Tarsila do Amaral",
        age: "N/i",
        type: "Post-Impressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/tarsila-do-amaral/still-life.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Meio Ambiente",
        description: "",
        author: "Candido Portinari",
        age: "1934",
        type: "Primitivism",
        imageUrl:
          "https://uploads7.wikiart.org/images/candido-portinari/meio-ambiente-1934.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "O Mestiço",
        description: "",
        author: "Candido Portinari",
        age: "1934",
        type: "Realism",
        imageUrl:
          "https://uploads3.wikiart.org/images/candido-portinari/o-mesti-o-1934.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Futebol",
        description: "",
        author: "Candido Portinari",
        age: "1935",
        type: "Primitivism",
        imageUrl:
          "https://uploads0.wikiart.org/images/candido-portinari/futebol-1935.jpg",
        likes: 0,
      },
      {
        title: "O Lavrador de Café",
        description: "",
        author: "Candido Portinari",
        age: "1939",
        type: "Realism",
        imageUrl:
          "https://uploads2.wikiart.org/images/candido-portinari/o-lavrador-de-caf-1939.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "A descoberta da terra",
        description: "",
        author: "Candido Portinari",
        age: "1941",
        type: "Expressionism",
        imageUrl:
          "https://uploads6.wikiart.org/images/candido-portinari/a-descoberta-da-terra-1941.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Discovery of Gold",
        description: "",
        author: "Candido Portinari",
        age: "1941",
        type: "Realism",
        imageUrl:
          "https://uploads6.wikiart.org/images/candido-portinari/discovery-of-gold.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Entry into the Forest",
        description: "",
        author: "Candido Portinari",
        age: "N/i",
        type: "Realism",
        imageUrl:
          "https://uploads0.wikiart.org/images/candido-portinari/entry-into-the-forest.jpg",
        likes: 0,
      },
      {
        title: "Criança Morta",
        description: "",
        author: "Candido Portinari",
        age: "1944",
        type: "Expressionism",
        imageUrl:
          "https://uploads7.wikiart.org/images/candido-portinari/crian-a-morta-1944.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Teaching of the Indians",
        description: "",
        author: "Candido Portinari",
        age: "N/i",
        type: "Realism",
        imageUrl:
          "https://uploads2.wikiart.org/images/candido-portinari/teaching-of-the-indians.jpg",
        likes: 0,
      },
      {
        title: "A primeira missa no Brasil",
        description: "",
        author: "Candido Portinari",
        age: "1948",
        type: "Expressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/candido-portinari/a-primeira-missa-no-brasil-1948.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Denise com carneiro branco",
        description: "",
        author: "Candido Portinari",
        age: "1961",
        type: "Cubism",
        imageUrl:
          "https://uploads1.wikiart.org/images/candido-portinari/denise-com-carneiro-branco-1961.jpg",
        likes: 0,
      },
      {
        title: "Scarecrow",
        description: "",
        author: "Candido Portinari",
        age: "1959",
        type: "Expressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/candido-portinari/scarecrow-1959.jpg",
        likes: 0,
      },
      {
        title: "Scarecrow",
        description: "",
        author: "Candido Portinari",
        age: "1959",
        type: "Expressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/candido-portinari/scarecrow-1959-1.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Gaiola I",
        description: "",
        author: "Candido Portinari",
        age: "1959",
        type: "Expressionism",
        imageUrl:
          "https://uploads1.wikiart.org/images/candido-portinari/gaiola-i-do-livro-menino-de-engenho-1959.jpg",
        likes: 0,
      },
      {
        title: "Dom Quixote",
        description: "",
        author: "Candido Portinari",
        age: "1961",
        type: "Expressionism",
        imageUrl:
          "https://uploads4.wikiart.org/images/candido-portinari/dom-quixote-1961.jpg",
        likes: 0,
      },
      {
        title: "Corn harvest",
        description: "",
        author: "Candido Portinari",
        age: "1959",
        type: "Expressionism",
        imageUrl:
          "https://uploads6.wikiart.org/images/candido-portinari/corn-harvest-1959.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Coffee Harvest",
        description: "",
        author: "Candido Portinari",
        age: "1958",
        type: "Expressionism",
        imageUrl:
          "https://uploads8.wikiart.org/images/candido-portinari/coffee-harvest-1958.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Auto-Retrato(Portinari)",
        description: "",
        author: "Candido Portinari",
        age: "1957",
        type: "Expressionism",
        imageUrl:
          "https://uploads5.wikiart.org/images/candido-portinari/auto-retrato-1957.jpg",
        likes: 0,
      },
      {
        title: "Menino com Pássaro",
        description: "",
        author: "Candido Portinari",
        age: "1957",
        type: "Expressionism",
        imageUrl:
          "https://uploads3.wikiart.org/images/candido-portinari/menino-com-p-ssaro-1957.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Scarecrow",
        description: "",
        author: "Candido Portinari",
        age: "1958",
        type: "Expressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/candido-portinari/scarecrow-1958.jpg",
        likes: 0,
      },
      {
        title: "Greve",
        description: "",
        author: "Candido Portinari",
        age: "N/i",
        type: "Realism",
        imageUrl:
          "https://uploads3.wikiart.org/images/candido-portinari/greve.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Mulher com filho morto",
        description: "",
        author: "Candido Portinari",
        age: "N/i",
        type: "Expressionism",
        imageUrl:
          "https://uploads2.wikiart.org/images/candido-portinari/mulher-com-filho-morto.jpg!Large.jpg",
        likes: 0,
      },

      {
        title: "Self Portrait",
        description: "",
        author: "Frida Kahlo",
        age: "1922",
        type: "Primitivism",
        imageUrl:
          "https://uploads4.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/self-portrait-1922.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Self-portrait in a Velvet Dress",
        description: "",
        author: "Frida Kahlo",
        age: "1926",
        type: "Primitivism",
        imageUrl:
          "https://uploads4.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/self-portrait-in-a-velvet-dress-1926.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Cristina My Sister",
        description: "",
        author: "Frida Kahlo",
        age: "1928",
        type: "Primitivism",
        imageUrl: "https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/portrait-of-cristina-my-sister-1928.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Alejandro Gómez Arias",
        description: "",
        author: "Frida Kahlo",
        age: "1928",
        type: "Primitivism",
        imageUrl: "https://uploads6.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/portrait-of-alejandro-g%C3%B3mez-arias-1928.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Bus",
        description: "",
        author: "Frida Kahlo",
        age: "1929",
        type: "Primitivism",
        imageUrl: "https://uploads7.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/the-bus-1929.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Two Women",
        description: "",
        author: "Frida Kahlo",
        age: "1929",
        type: "Primitivism",
        imageUrl: "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/two-women-1929.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of a Woman in White",
        description: "",
        author: "Frida Kahlo",
        age: "1930",
        type: "Primitivism",
        imageUrl: "https://uploads1.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/portrait-of-a-woman-in-white-1930.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Frieda and Diego Rivera",
        description: "",
        author: "Frida Kahlo",
        age: "1931",
        type: "Primitivism",
        imageUrl: "https://uploads5.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/frieda-and-diego-rivera-1931.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Dr. Leo Eloesser",
        description: "",
        author: "Frida Kahlo",
        age: "1931",
        type: "Primitivism",
        imageUrl: "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/portrait-of-dr-leo-eloesser-1931.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Eva Frederick",
        description: "",
        author: "Frida Kahlo",
        age: "1931",
        type: "Primitivism",
        imageUrl: "https://uploads7.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/portrait-of-eva-frederick-1931.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "My Birth",
        description: "",
        author: "Frida Kahlo",
        age: "1932",
        type: "Primitivism",
        imageUrl: "https://uploads8.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/my-birth-1932.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Henry Ford Hospital",
        description: "",
        author: "Frida Kahlo",
        age: "1932",
        type: "Primitivism",
        imageUrl: "https://uploads7.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/henry-ford-hospital-the-flying-bed-1932.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Luther Burbank",
        description: "",
        author: "Frida Kahlo",
        age: "1931",
        type: "Primitivism",
        imageUrl: "https://uploads8.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/portrait-of-luther-burbank-1931.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "My Dress Hangs There",
        description: "",
        author: "Frida Kahlo",
        age: "1933",
        type: "Primitivism",
        imageUrl: "https://uploads2.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/my-dress-hangs-there-1933.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Self Portrait with Necklace",
        description: "",
        author: "Frida Kahlo",
        age: "1933",
        type: "Primitivism",
        imageUrl: "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/self-portrait-with-necklace-1933.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Self Portrait with Curly Hair",
        description: "",
        author: "Frida Kahlo",
        age: "1935",
        type: "Primitivism",
        imageUrl: "https://uploads2.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/self-portrait-with-curly-hair-1935.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Me and My Doll",
        description: "",
        author: "Frida Kahlo",
        age: "1937",
        type: "Primitivism",
        imageUrl: "https://uploads5.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/me-and-my-doll-1937.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Memory (The Heart)",
        description: "",
        author: "Frida Kahlo",
        age: "1937",
        type: "Primitivism",
        imageUrl: "https://uploads7.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/memory-the-heart-1937.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "My Nurse and I",
        description: "",
        author: "Frida Kahlo",
        age: "1937",
        type: "Primitivism",
        imageUrl: "https://uploads5.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/my-nurse-and-i-1937.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Quatro Habitantes do México",
        description: "",
        author: "Frida Kahlo",
        age: "1938",
        type: "Surrealism",
        imageUrl: "https://uploads8.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/four-inhabitants-of-mexico-1938.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Pitahayas",
        description: "",
        author: "Frida Kahlo",
        age: "1938",
        type: "Primitivism",
        imageUrl: "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/pitahayas-1938.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Girl with Death Mask ",
        description: "",
        author: "Frida Kahlo",
        age: "1938",
        type: "Primitivism",
        imageUrl: "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/girl-with-death-mask-she-plays-alone-1938.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Self Portrait - The Frame",
        description: "",
        author: "Frida Kahlo",
        age: "1938",
        type: "Primitivism",
        imageUrl: "https://uploads5.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/self-portrait-the-frame-1938.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Self Portrait with a Monkey",
        description: "",
        author: "Frida Kahlo",
        age: "1938",
        type: "Primitivism",
        imageUrl: "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/self-portrait-with-a-monkey-1938.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Tunas",
        description: "",
        author: "Frida Kahlo",
        age: "1938",
        type: "Primitivism",
        imageUrl: "https://uploads4.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/tunas-still-life-with-prickly-pear-fruit-1938.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Suicide of Dorothy Hale",
        description: "",
        author: "Frida Kahlo",
        age: "1938",
        type: "Primitivism",
        imageUrl: "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/the-suicide-of-dorothy-hale-1938.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "As duas Fridas",
        description: "",
        author: "Frida Kahlo",
        age: "1939",
        type: "Primitivism",
        imageUrl: "https://uploads5.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/the-two-fridas-1939.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "O que a água me deu",
        description: "",
        author: "Frida Kahlo",
        age: "1938",
        type: "Primitivism",
        imageUrl: "https://uploads4.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/what-the-water-gave-me-1938.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Self Portrait with Monkey",
        description: "",
        author: "Frida Kahlo",
        age: "1940",
        type: "Primitivism",
        imageUrl: "https://uploads7.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/self-portrait-with-monkey-1940.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Portrait of Lucha Maria",
        description: "",
        author: "Frida Kahlo",
        age: "1942",
        type: "Primitivism",
        imageUrl: "https://uploads8.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/portrait-of-lucha-maria-a-girl-from-tehuacan-1942.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Flower of Life",
        description: "",
        author: "Frida Kahlo",
        age: "1943",
        type: "Primitivism",
        imageUrl: "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/flower-of-life-flame-flower-1943.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Bride Frightened",
        description: "",
        author: "Frida Kahlo",
        age: "1943",
        type: "Primitivism",
        imageUrl: "https://uploads6.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/the-bride-frightened-at-seeing-life-opened-1943.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "The Wounded Deer",
        description: "",
        author: "Frida Kahlo",
        age: "1946",
        type: "Primitivism",
        imageUrl: "https://uploads7.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/the-wounded-deer-1946.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Moses",
        description: "",
        author: "Frida Kahlo",
        age: "1945",
        type: "Primitivism",
        imageUrl: "https://uploads5.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/moses-1945.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Without Hope",
        description: "",
        author: "Frida Kahlo",
        age: "1945",
        type: "Primitivism",
        imageUrl: "https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/without-hope-1945.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Magnolias",
        description: "",
        author: "Frida Kahlo",
        age: "1945",
        type: "Primitivism",
        imageUrl: "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/magnolias-1945.jpg!Large.jpg",
        likes: 0,
      },
      {
        title: "Landscape",
        description: "",
        author: "Frida Kahlo",
        age: "1945",
        type: "Primitivism",
        imageUrl: "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/landscape-1945.jpg!Large.jpg",
        likes: 0,
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Registro Feito");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
