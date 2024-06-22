let books = [
  {
    name: "The Last Wish",
    src: require("../assets/theLastWish.png"),
    id: "1",
    author: "Andrzej Sapkowski",
    price: "196$",
    genre: "#Fantasy, #Adventure",
    description: `"The Last Wish" is a collection of short stories that introduces readers to Geralt of Rivia, the legendary Witcher. These tales explore Geralt's adventures as he battles monsters, confronts moral dilemmas, and navigates the treacherous politics of his world. Each story is a self-contained narrative that builds upon Geralt's character and the lore of the Witcher universe. From encounters with cursed princesses to duels with powerful sorcerers, "The Last Wish" offers a captivating glimpse into the life of a monster hunter who is as complex as the creatures he hunts.`,
  },
  {
    name: "Sword of Destiny",
    src: require("../assets/swordOfDestiny.png"),
    id: "2",
    author: "Andrzej Sapkowski",
    price: "217$",
    genre: "#Fantasy, #Novels, #Adventure",
    description: `"Sword of Destiny" is another collection of short stories that further explores the adventures of Geralt of Rivia. These tales delve into Geralt's relationships, his sense of duty, and the moral complexities he faces as a Witcher. From encounters with mythical creatures to poignant moments of introspection, "Sword of Destiny" offers a rich tapestry of narratives that highlight the depth and nuance of Sapkowski's world. This collection serves as a bridge between the short stories of "The Last Wish" and the main saga, providing essential context and character development.`,
  },
  {
    name: "Blood of Elves",
    src: require("../assets/bloodOfElves.png"),
    id: "3",
    author: "Andrzej Sapkowski",
    price: "301$",
    genre: "#Dark-Fantasy, #Romance",
    description:
      '"Blood of Elves" is the first novel in Andrzej Sapkowski acclaimed Witcher series. The story follows Geralt of Rivia, a monster hunter known as a Witcher, as he navigates a world on the brink of war. The kingdoms of the North are preparing for conflict, and the young princess Ciri, who possesses extraordinary powers, is at the center of it all. Geralt takes Ciri under his wing, training her in the ways of the Witcher while protecting her from those who seek to he complexities of human nature, all set against a richly detailed fantasy backdrop.',
  },

  {
    name: "The Time of Contempt",
    src: require("../assets/theTimeOfContempt.png"),
    id: "4",
    author: "Andrzej Sapkowski",
    price: "249$",
    genre: "#Epic, #Novels, #Drama",
    description: `In "The Time of Contempt," the second novel in the Witcher series, the world is on the edge of chaos. War is imminent, and the political machinations of kings and sorcerers threaten to engulf the continent. Geralt of Rivia finds himself caught in the middle of these power struggles as he continues to protect Ciri, the prophesied child of destiny. As tensions rise and alliances shift, Geralt must navigate a web of deceit and danger to keep Ciri safe. This novel delves deeper into the intricate world-building and character development that fans of the series have come to love.`,
  },  {
    name: "Baptism of Fire",
    src: require("../assets/bapstimOfFire.png"),
    id: "5",
    author: "Andrzej Sapkowski",
    price: "162$",
    genre: "#Political-Intrigue, #Novels, #Dark-Fantasy",
    description: `In "Bapstim of Fire," In the tumultuous world of the Continent, where monsters roam and political intrigue is ever-present, a new legend emerges from the ashes of ancient prophecies. "Bapstim of Fire" is a gripping tale that delves into the heart of magic, destiny, and the eternal struggle between light and darkness.the bustling cities of Novigrad and Oxenfurt to the mystical forests of Brokilon and the treacherous peaks of the Blue Mountains. Each location is vividly described, immersing readers in the world of the Witcher.    

`,
  },  {
    name: "The Tower of Swallows",
    src: require("../assets/theTowerOfSwallows.png"),
    id: "6",
    author: "Andrzej Sapkowski",
    price: "337$",
    genre: "#Fantasy, #Novels",
    description: `In "The Tower of the Swallow," the narrative continues to follow the intertwined fates of Geralt, Ciri, and Yennefer. Ciri, now a fugitive, is pursued by various factions who seek to control her for her unique powers and royal lineage. She finds herself in the company of a group of outlaws and must navigate the dangers of a world at war. Meanwhile, Geralt and his companions are on a relentless quest to find and protect Ciri. The book delves deeper into the political machinations and dark forces at play, setting the stage for the climactic events to come.`,
  },  {
    name: "The Lady of The Lake",
    src: require("../assets/theLadyOfLake.png"),
    id: "7",
    author: "Andrzej Sapkowski",
    price: "295 $",
    genre: "#Philosophical, #Epic",
    description: `The Lady of the Lake" is the epic conclusion to the main Witcher saga. Ciri's journey takes her to different worlds and times, where she encounters both allies and enemies. The narrative weaves together the destinies of Geralt, Yennefer, and Ciri as they face their greatest challenges. The book explores themes of destiny, sacrifice, and the cyclical nature of history. As the story reaches its climax, the characters must confront their pasts and make choices that will shape the future of their world.`,
  },  {
    name: "Season of Storms",
    src: require("../assets/seasonOfStorms.png"),
    id: "8",
    author: "Andrzej Sapkowski",
    price: "246$",
    genre: "#Epic,#Adventure, #Horror",
    description: `Season of Storms" is a standalone novel set in the Witcher universe, taking place before the events of the main saga. The story follows Geralt as he deals with the theft of his swords, which are crucial to his monster-hunting profession. As he attempts to recover them, he becomes embroiled in a web of political intrigue, magical experiments, and dangerous creatures. The book provides additional insights into Geralt's character and the world he inhabits, offering fans a deeper understanding of the Witcher's life and the challenges he faces.`,
  },
];

export const getBooks = () => {
  return books;
};
export const getBook = (id) => {
  return books.find((book) => book.id === id);
};

export const deleteBook=(id) =>{
   books=books.filter(book=>book.id!==id)
}
