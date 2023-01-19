import { ImageSourcePropType } from "react-native";

export type Round = {
  id: string;
  image: ImageSourcePropType;
  options: string[];
  correctOption: string;
};

export const rounds: Round[] = [
  {
    id: "gaj",
    image: require("./cat.jpg"),
    options: ["Cat", "Dog", "Pato", "Vacuno"],
    correctOption: "Cat",
  },
  {
    id: "hsy",
    image: require("./oconnell.jpg"),
    options: ["Molly Malone", "O'connell", "Wellington", "Papal Cross"],
    correctOption: "O'connell",
  },
  {
    id: "ops",
    image: require("./spire.jpg"),
    options: ["Connolly", "Jim Larkin", "The Spire", "The Famine Memorial"],
    correctOption: "The Spire",
  },
];
