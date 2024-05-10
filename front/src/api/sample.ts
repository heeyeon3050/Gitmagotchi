import sampleCollectionImage from "@/assets/images/sampleCollection.png";
import sampleProfileImage from "@/assets/images/sampleProfile.png";
import sampleBgImage from "@/assets/images/sampleBg.jpg";
import sampleFaceImage from "@/assets/images/sampleFace.png";
import sampleFace2Image from "@/assets/images/sampleFace2.png";
import { ICharacter, ICollection, ISimpleCharacter, IUser } from "@/models";

export const sampleCharacter: ICharacter = {
  id: 1,
  userId: 47638660,
  name: "싸피취준생",
  exp: 13,
  faceUrl: sampleFace2Image,
  characterUrl: sampleCollectionImage,
  status: {
    fullness: 60,
    intimacy: 85,
    cleanness: 50,
  },
  stat: {
    fullnessStat: 1,
    intimacyStat: 1,
    cleannessStat: 1,
    unusedStat: 1,
  },
};

export const sampleAward = [
  {
    id: 1,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 2,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 3,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 4,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 5,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 6,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 7,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 8,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 9,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 10,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 11,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 12,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 13,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 14,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 15,
    userId: "tama1001",
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
];

export const sampleCollection: ICollection[] = [
  {
    id: 1,
    userId: 1,
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 2,
    userId: 1,
    characterName: "도날드덕",
    ending: "RUNAWAY",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 3,
    userId: 1,
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 4,
    userId: 1,
    characterName: "도날드덕",
    ending: "HUNGRY",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 5,
    userId: 1,
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 6,
    userId: 1,
    characterName: "도날드덕",
    ending: "SICK",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 7,
    userId: 1,
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 8,
    userId: 1,
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 9,
    userId: 1,
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 10,
    userId: 1,
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 11,
    userId: 1,
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 12,
    userId: 1,
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 13,
    userId: 1,
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 14,
    userId: 1,
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 15,
    userId: 1,
    characterName: "도날드덕",
    ending: "INDEPENDENT",
    fullnessStat: 4,
    intimacyStat: 2,
    cleannessStat: 3,
    characterUrl: sampleCollectionImage,
  },
];

export const sampleRanking = [
  {
    rank: 1,
    profileImg: sampleProfileImage,
    username: "tama1001",
    nickname: "코드몽키",
    amount: 15,
  },
  {
    rank: 2,
    profileImg: sampleProfileImage,
    username: "tama1001",
    nickname: "코드몽키",
    amount: 13,
  },
  {
    rank: 3,
    profileImg: sampleProfileImage,
    username: "tama1001",
    nickname: "코드몽키",
    amount: 12,
  },
  {
    rank: 4,
    profileImg: sampleProfileImage,
    username: "tama1001",
    nickname: "코드몽키",
    amount: 11,
  },
  {
    rank: 5,
    profileImg: sampleProfileImage,
    username: "tama1001",
    nickname: "코드몽키",
    amount: 9,
  },
  {
    rank: 6,
    profileImg: sampleProfileImage,
    username: "tama1001",
    nickname: "코드몽키",
    amount: 8,
  },
  {
    rank: 7,
    profileImg: sampleProfileImage,
    username: "tama1001",
    nickname: "코드몽키",
    amount: 8,
  },
  {
    rank: 8,
    profileImg: sampleProfileImage,
    username: "tama1001",
    nickname: "코드몽키",
    amount: 6,
  },
  {
    rank: 9,
    profileImg: sampleProfileImage,
    username: "tama1001",
    nickname: "코드몽키",
    amount: 4,
  },
  {
    rank: 10,
    profileImg: sampleProfileImage,
    username: "tama1001",
    nickname: "코드몽키",
    amount: 3,
  },
];

export const sampleBackground = [
  {
    id: 1,
    imageUrl: sampleBgImage,
  },
  {
    id: 2,
    imageUrl: sampleBgImage,
  },
  {
    id: 3,
    imageUrl: sampleBgImage,
  },
  {
    id: 4,
    imageUrl: sampleBgImage,
  },
  {
    id: 5,
    imageUrl: sampleBgImage,
  },
  {
    id: 6,
    imageUrl: sampleBgImage,
  },
  {
    id: 7,
    imageUrl: sampleBgImage,
  },
  {
    id: 8,
    imageUrl: sampleBgImage,
  },
  {
    id: 9,
    imageUrl: sampleBgImage,
  },
  {
    id: 10,
    imageUrl: sampleBgImage,
  },
];

export const sampleUserList: IUser[] = [
  {
    id: 1,
    githubUsername: "tama1001",
    profileImg: sampleProfileImage,
    nickname: "코드몽키",
    gold: 0,
    meal: 0,
    lastTime: "",
    githubToken: "",
    backgroundUrl: "",
    characterId: null,
  },
  {
    id: 2,
    githubUsername: "tama1001",
    profileImg: sampleProfileImage,
    nickname: "송윤재",
    gold: 0,
    meal: 0,
    lastTime: "",
    githubToken: "",
    backgroundUrl: "",
    characterId: null,
  },
  {
    id: 3,
    githubUsername: "tama1001",
    profileImg: sampleProfileImage,
    nickname: "고수림",
    gold: 0,
    meal: 0,
    lastTime: "",
    githubToken: "",
    backgroundUrl: "",
    characterId: null,
  },
  {
    id: 4,
    githubUsername: "tama1001",
    profileImg: sampleProfileImage,
    nickname: "권송아",
    gold: 0,
    meal: 0,
    lastTime: "",
    githubToken: "",
    backgroundUrl: "",
    characterId: null,
  },
  {
    id: 5,
    githubUsername: "tama1001",
    profileImg: sampleProfileImage,
    nickname: "김희연",
    gold: 0,
    meal: 0,
    lastTime: "",
    githubToken: "",
    backgroundUrl: "",
    characterId: null,
  },
  {
    id: 6,
    githubUsername: "tama1001",
    profileImg: sampleProfileImage,
    nickname: "이유로",
    gold: 0,
    meal: 0,
    lastTime: "",
    githubToken: "",
    backgroundUrl: "",
    characterId: null,
  },
];

export const sampleCharacterList: ISimpleCharacter[] = [
  {
    id: 1,
    userId: 1,
    name: "도날드덕",
    exp: 100,
    faceUrl: sampleFaceImage,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 3,
    userId: 1,
    name: "도날드덕",
    exp: 100,
    faceUrl: sampleFaceImage,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 4,
    userId: 1,
    name: "도날드덕",
    exp: 100,
    faceUrl: sampleFaceImage,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 5,
    userId: 1,
    name: "도날드덕",
    exp: 100,
    faceUrl: sampleFaceImage,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 6,
    userId: 1,
    name: "도날드덕",
    exp: 100,
    faceUrl: sampleFaceImage,
    characterUrl: sampleCollectionImage,
  },
  {
    id: 7,
    userId: 1,
    name: "도날드덕",
    exp: 100,
    faceUrl: sampleFaceImage,
    characterUrl: sampleCollectionImage,
  },
];
