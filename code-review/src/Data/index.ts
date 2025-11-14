export type AspectData = {
  upVotes: number;
  downVotes: number;
};

export type AspectName =
  | "readability"
  | "maintainability"
  | "performance"
  | "security";

export type Aspect = Record<AspectName, AspectData>;

const aspectInitialData: Aspect = {
    readability: {
        upVotes: 0,
        downVotes: 0,
    },
    maintainability: {
       upVotes: 0,
        downVotes: 0,
    },
    performance: {
        upVotes: 0,
        downVotes: 0,
    },
    security: {
        upVotes: 0,
        downVotes: 0,
    }   
};

export default aspectInitialData;