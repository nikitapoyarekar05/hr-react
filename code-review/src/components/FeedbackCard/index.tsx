import React from "react";

import styles from "./FeedbackCard.module.css";
import VoteBox from "../VoteBox";
import Button from "../Button";

import { type AspectName, type AspectData, type Aspect } from "../../Data";

interface FeedbackCardProps extends React.HTMLAttributes<HTMLDivElement> {
  aspect: AspectName;
  aspectDetails: AspectData;
  setReviewAspects: React.Dispatch<React.SetStateAction<Aspect>>;
}

const FeedbackCard = (props: FeedbackCardProps) => {
  const { aspect, aspectDetails, setReviewAspects, ...rest } = props;
  const { upVotes, downVotes } = aspectDetails;

  const handleVote = (voteType: "up" | "down") => {
    setReviewAspects((prevData) => ({
      ...prevData,
      [aspect]: {
        upVotes:
          voteType === "up"
            ? prevData[aspect].upVotes + 1
            : prevData[aspect].upVotes,
        downVotes:
          voteType === "down"
            ? prevData[aspect].downVotes + 1
            : prevData[aspect].downVotes,
      },
    }));
  };

  return (
    <div className={styles.feedbackCard} {...rest}>
      <h3>{aspect.toUpperCase()} </h3>
      <div>
        <Button
          id="up-vote"
          testId="upVote-btn"
          onClick={() => handleVote("up")}
        >
          Up vote
        </Button>
        <Button
          id="down-vote"
          testId="downVote-btn"
          onClick={() => handleVote("down")}
        >
          Down vote
        </Button>
        <VoteBox
          testId={`test-${aspect}`}
          upVotes={upVotes}
          downVotes={downVotes}
        />
      </div>
    </div>
  );
};

export default React.memo(FeedbackCard);
