interface Name {
    id: number;
    name: string;
    gender: Gender;
    popularity: Popularity;
    length: Length;
  }
  
  export enum Gender {
    FEMALE = "Female",
    MALE = "Male",
    UNISEX = "Unisex",
  }
  
  export enum Popularity {
    TRENDY = "Trendy",
    UNIQUE = "Unique",
  }
  
  export enum Length {
    SHORT = "Short",
    LONG = "Long",
    ALL = "All",
  }
  export const names: Name[] = [
    {
      id: 1,
      name: "Laith",
      gender: Gender.MALE,
      popularity: Popularity.UNIQUE,
      length: Length.SHORT,
    },
    {
      id: 2,
      name: "Jake",
      gender: Gender.MALE,
      popularity: Popularity.TRENDY,
      length: Length.SHORT,
    },
    {
      id: 3,
      name: "Lamelo",
      gender: Gender.MALE,
      popularity: Popularity.UNIQUE,
      length: Length.SHORT,
    },
    {
      id: 4,
      name: "Abraham",
      gender: Gender.MALE,
      popularity: Popularity.TRENDY,
      length: Length.LONG,
    },
    {
      id: 5,
      name: "Bartholomew",
      gender: Gender.MALE,
      popularity: Popularity.UNIQUE,
      length: Length.LONG,
    },
    {
      id: 6,
      name: "Noah",
      gender: Gender.MALE,
      popularity: Popularity.TRENDY,
      length: Length.SHORT,
    },
    {
      id: 7,
      name: "Benjamin",
      gender: Gender.MALE,
      popularity: Popularity.TRENDY,
      length: Length.LONG,
    },
    {
      id: 8,
      name: "William",
      gender: Gender.MALE,
      popularity: Popularity.TRENDY,
      length: Length.LONG,
    },
    {
      id: 9,
      name: "Lucus",
      gender: Gender.MALE,
      popularity: Popularity.TRENDY,
      length: Length.SHORT,
    },
    {
      id: 10,
      name: "Harrison",
      gender: Gender.MALE,
      popularity: Popularity.UNIQUE,
      length: Length.LONG,
    },
    {
      id: 11,
      name: "Selma",
      gender: Gender.MALE,
      popularity: Popularity.UNIQUE,
      length: Length.SHORT,
    },
    {
      id: 12,
      name: "Asher",
      gender: Gender.MALE,
      popularity: Popularity.UNIQUE,
      length: Length.SHORT,
    },
    {
      id: 13,
      name: "Tucker",
      gender: Gender.MALE,
      popularity: Popularity.TRENDY,
      length: Length.SHORT,
    },
  
    {
      id: 14,
      name: "Arya",
      gender: Gender.FEMALE,
      popularity: Popularity.UNIQUE,
      length: Length.SHORT,
    },
    {
      id: 15,
      name: "Olivia",
      gender: Gender.FEMALE,
      popularity: Popularity.TRENDY,
      length: Length.SHORT,
    },
    {
      id: 16,
      name: "Fay",
      gender: Gender.FEMALE,
      popularity: Popularity.UNIQUE,
      length: Length.SHORT,
    },
    {
      id: 17,
      name: "Brooklyn",
      gender: Gender.FEMALE,
      popularity: Popularity.TRENDY,
      length: Length.LONG,
    },
    {
      id: 18,
      name: "Genevieve",
      gender: Gender.FEMALE,
      popularity: Popularity.UNIQUE,
      length: Length.LONG,
    },
    {
      id: 19,
      name: "Zoe",
      gender: Gender.FEMALE,
      popularity: Popularity.TRENDY,
      length: Length.SHORT,
    },
    {
      id: 20,
      name: "Valentina",
      gender: Gender.FEMALE,
      popularity: Popularity.TRENDY,
      length: Length.LONG,
    },
    {
      id: 21,
      name: "Josephine",
      gender: Gender.FEMALE,
      popularity: Popularity.TRENDY,
      length: Length.LONG,
    },
    {
      id: 22,
      name: "Maya",
      gender: Gender.FEMALE,
      popularity: Popularity.TRENDY,
      length: Length.SHORT,
    },
    {
      id: 23,
      name: "Everleigh",
      gender: Gender.FEMALE,
      popularity: Popularity.UNIQUE,
      length: Length.LONG,
    },
    {
      id: 24,
      name: "Poppy",
      gender: Gender.FEMALE,
      popularity: Popularity.UNIQUE,
      length: Length.SHORT,
    },
    {
      id: 25,
      name: "Maia",
      gender: Gender.FEMALE,
      popularity: Popularity.UNIQUE,
      length: Length.SHORT,
    },
    {
      id: 26,
      name: "Ivy",
      gender: Gender.FEMALE,
      popularity: Popularity.TRENDY,
      length: Length.SHORT,
    },
  
    {
      id: 27,
      name: "Jude",
      gender: Gender.UNISEX,
      popularity: Popularity.UNIQUE,
      length: Length.SHORT,
    },
    {
      id: 28,
      name: "Adrian",
      gender: Gender.UNISEX,
      popularity: Popularity.TRENDY,
      length: Length.SHORT,
    },
    {
      id: 29,
      name: "Sunny",
      gender: Gender.UNISEX,
      popularity: Popularity.UNIQUE,
      length: Length.SHORT,
    },
    {
      id: 30,
      name: "Channing",
      gender: Gender.UNISEX,
      popularity: Popularity.TRENDY,
      length: Length.LONG,
    },
    {
      id: 31,
      name: "Tennessee",
      gender: Gender.UNISEX,
      popularity: Popularity.UNIQUE,
      length: Length.LONG,
    },
    {
      id: 32,
      name: "Dallas",
      gender: Gender.UNISEX,
      popularity: Popularity.TRENDY,
      length: Length.SHORT,
    },
  
    {
      id: 33,
      name: "Zephyr",
      gender: Gender.UNISEX,
      popularity: Popularity.UNIQUE,
      length: Length.LONG,
    },
  
    {
      id: 34,
      name: "Teri",
      gender: Gender.UNISEX,
      popularity: Popularity.TRENDY,
      length: Length.SHORT,
    },
  ];