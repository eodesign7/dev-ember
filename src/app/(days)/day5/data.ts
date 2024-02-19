export interface Item {
  id: number;
  latitude: number;
  longitude: number;
  title: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  stars: number;
}

export const items = [
  {
    id: 1,
    latitude: 47.957516,
    longitude: 18.408428,
    title: "Anibra Potraviny",
    description: "Miestne Potraviny",
    price: "---",
    image: "https://placeholder.com/150",
    rating: 4.9,
    stars: 28,
  },
  {
    id: 2,
    latitude: 47.957156,
    longitude: 18.403741,
    title: "Dom na PREDAJ",
    description: "3 izbový dom na predaj",
    price: "37,500€",
    image: "https://placeholder.com/150",
    rating: 3.5,
    stars: 93,
  },
  {
    id: 3,
    latitude: 47.955807,
    longitude: 8.403807,
    title: "Predaj z Dvora",
    description: "Ponúkame zeleninu priamo z dvora",
    price: "1kg od 4,20€",
    image: "https://placeholder.com/150",
    rating: 3.9,
    stars: 72,
  },
  {
    id: 4,
    latitude: 47.958748,
    longitude: 18.410335,
    title: "Kaderníctvo Monika",
    description: "otvorené UT - ŠT - SO",
    price: "od 7,00€",
    image: "https://placeholder.com/150",
    rating: 4.1,
    stars: 44,
  },
  {
    id: 5,
    latitude: 47.9936020217231,
    longitude: 18.389381863595023,
    title: "DAVID Automechanik",
    description: "Miestny auto-opravár - Prejst na Profil",
    price: "podľa výkonu",
    image: "https://placeholder.com/150",
    rating: 4.6,
    stars: 64,
  },
];


export default items;