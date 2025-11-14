import { useState } from "react";
import aspectInitialData, { type Aspect, type AspectName } from "../../Data";
import FeedbackCard from "../FeedbackCard";
import styles from "./FeedbackContainer.module.css";

const FeedbackContainer = () => {
  const [reviewAspects, setReviewAspects] = useState<Aspect>(aspectInitialData);

  return (
    <div className={styles.feedbackContainer}>
      {Object.keys(aspectInitialData).map((aspect) => {
        const typedAspect = aspect as AspectName;
        return (
          <FeedbackCard
            key={typedAspect}
            aspect={typedAspect}
            aspectDetails={reviewAspects[typedAspect]}
            setReviewAspects={setReviewAspects}
          />
        );
      })}
    </div>
  );
};

export default FeedbackContainer;
