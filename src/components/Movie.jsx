// შევქმენით მასივი და მნიშვნელობების სახით შევიტანეთ ობიექტები. ობიექტქებში არის შეტანილის ფილმების ინფორმაცია.

const moviesData = [    
  {
    "id": 1,
    "title": "The Grand Budapest Hotel",
    "poster": "https://th.bing.com/th/id/OIP.KIXMUG6YJRwtGuoM_19NuAHaKX?cb=iwc2&rs=1&pid=ImgDetMain",
    "rating": 8.1,
    "year": 2014,
    "description": "The adventures of Gustave H, a legendary concierge at a famous hotel from the interwar period, and Zero Moustafa, the lobby boy who becomes his most trusted friend."
  },
  {
    "id": 2,
    "title": "Pulp Fiction",
    "poster": "https://i.pinimg.com/originals/31/13/29/3113298029d9f2807406ff4726db4e52.jpg",
    "rating": 8.9,
    "year": 1994,
    "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    "id": 3,
    "title": "Inception",
    "poster": "https://www.aceshowbiz.com/images/still/inception_poster19.jpg",
    "rating": 8.8,
    "year": 2010,
    "description": "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  },
  {
    "id": 4,
    "title": "Interstellar",
    "poster": "https://posterspy.com/wp-content/uploads/2022/08/Interstellar_poster.jpg",
    "rating": 8.6,
    "year": 2014,
    "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    "id": 5,
    "title": "The Matrix",
    "poster": "https://picfiles.alphacoders.com/385/385304.jpg",
    "rating": 8.7,
    "year": 1999,
    "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  {
    "id": 6,
    "title": "Parasite",
    "poster": "https://is4-ssl.mzstatic.com/image/thumb/Video113/v4/80/72/4c/80724cd8-92a9-9f31-f9de-527fd18c8012/pr_source.lsr/900x900bb.jpg",
    "rating": 8.6,
    "year": 2019,
    "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
  },
  {
    "id": 7,
    "title": "Spirited Away",
    "poster": "https://th.bing.com/th/id/OIP.D5-6x7TdcZdmric5Lb39zwHaKe?cb=iwc2&rs=1&pid=ImgDetMain",
    "rating": 8.6,
    "year": 2001,
    "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts."
  },
  {
    "id": 8,
    "title": "Your Name.",
    "poster": "https://i.etsystatic.com/17257718/r/il/38e0f9/3210655282/il_fullxfull.3210655282_60h4.jpg",
    "rating": 8.6,
    "year": 2016,
    "description": "Two strangers find themselves linked in a bizarre way. When a mysterious phenomenon occurs, they are drawn to each other in a quest to find out what is happening."
  },
  {
    "id": 9,
    "title": "Eternal Sunshine of the Spotless Mind",
    "poster": "https://posterspy.com/wp-content/uploads/2022/11/ESotSM.jpg",
    "rating": 8.3,
    "year": 2004,
    "description": "A man, desperate to forget his ex-girlfriend, undergoes a procedure to erase her from his memory, only to discover that he still loves her."
  },
  {
    "id": 10,
    "title": "Whiplash",
    "poster": "https://preview.redd.it/whiplash-poster-by-me-v0-5slcimwlh5ha1.jpg?auto=webp&s=e2d95f1a223b304f5394387c596d376725a08147",
    "rating": 8.5,
    "year": 2014,
    "description": "A promising young drummer enrolls at a cut-throat music academy where his dreams of greatness are fostered by an instructors unorthodox methods."
  },
  {
    "id": 11,
    "title": "Arrival",
    "poster": "https://th.bing.com/th/id/OIP.Ra8azy5MZgvIrX5MwNpNaAHaLH?cb=iwc2&rs=1&pid=ImgDetMainQ.jpg",
    "rating": 7.9,
    "year": 2016,
    "description": "When mysterious spacecrafts touch down across the globe, an elite team — led by expert linguist Louise Banks — is brought together to investigate."
  },
  {
    "id": 12,
    "title": "Blade Runner 2049",
    "poster": "https://image.tmdb.org/t/p/original/lOqJGrDhForxVbfhstTAHhi1qMS.jpg",
    "rating": 7.9,
    "year": 2017,
    "description": "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for 30 years."
  },
  {
    "id": 13,
    "title": "Spider-Man: Into the Spider-Verse",
    "poster": "https://i.etsystatic.com/18242346/r/il/0e640a/3105585198/il_fullxfull.3105585198_gvkg.jpg",
    "rating": 8.4,
    "year": 2018,
    "description": "Teen Miles Morales becomes Spider-Man of his reality, crossing paths with five counterparts from other dimensions to stop a threat to all realities."
  },
  {
    "id": 14,
    "title": "Coco",
    "poster": "https://th.bing.com/th/id/R.dd84a0c51e6f9667e80919304c3a4b27?rik=kSAwn3tmERuHWQ&pid=ImgRaw&r=0",
    "rating": 8.2,
    "year": 2017,
    "description": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer."
  },
  {
    "id": 15,
    "title": "Joker",
    "poster": "https://th.bing.com/th/id/R.e12cf1c4777a021ac9223984dfda0a67?rik=MegdH79U5ddd%2fg&pid=ImgRaw&r=0",
    "rating": 8.4,
    "year": 2019,
    "description": "Arthur Fleck, a party clown and aspiring stand-up comedian, is driven to madness and becomes a nihilistic criminal mastermind."
  },
  {
    "id": 16,
    "title": "1917",
    "poster": "https://th.bing.com/th/id/OIP.qV3oBwdubvvlGJP3LjQZ0wHaKY?cb=iwc2&rs=1&pid=ImgDetMain",
    "rating": 8.0,
    "year": 2019,
    "description": "Two young British soldiers during the First World War are given an impossible mission: deliver a message deep in enemy territory that will stop 1,600 men, and Schofield's own brother, from walking straight into a deadly trap."
  }
];

export default moviesData;