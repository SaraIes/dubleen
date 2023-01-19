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
    options: ["cat", "dog", "pat", "vac"],
    correctOption: "cat",
  },
  {
    id: "hsy",
    image: require("./oconnell.jpg"),
    options: ["hed", "o'connell", "pregat", "uno"],
    correctOption: "o'connell",
  },
  {
    id: "ops",
    image: require("./spire.jpg"),
    options: ["hed", "yhh", "the spire", "lelel"],
    correctOption: "the spire",
  },
];
