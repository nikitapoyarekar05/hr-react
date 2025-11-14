import React from "react";

import styles from "./FeedbackCard.module.css";
import VoteBox from "../VoteBox";
import Button from "../Button";

import { type AspectName, type AspectData, type Aspect } from "../../Data";

interface FeedbackCardProps {
  aspect: AspectName;
  aspectDetails: AspectData;
  setReviewAspects: React.Dispatch<React.SetStateAction<Aspect>>;
}

const FeedbackCard = (props: FeedbackCardProps) => {
  const { aspect, aspectDetails, setReviewAspects } = props;
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
    <div className={styles.feedbackCard}>
      <h3>{aspect.toUpperCase()} </h3>
      <div>
        <div className={styles.buttonContainer}>
          <Button id="up-vote" onClick={() => handleVote("up")}>
            Up vote
          </Button>
          <Button id="down-vote" onClick={() => handleVote("down")}>
            Down vote
          </Button>
        </div>
        <VoteBox upVotes={upVotes} downVotes={downVotes} />
      </div>
    </div>
  );
};

export default React.memo(FeedbackCard);
