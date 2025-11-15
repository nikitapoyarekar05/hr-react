import styles from "./VoteBox.module.css";

interface VoteBoxProps {
  upVotes: number;
  downVotes: number;
  testId: string;
}

const VoteBox = (props: VoteBoxProps) => {
  const { testId, upVotes, downVotes } = props;
  return (
    <div data-testid={testId ?? "btn"} className={styles.voteBox}>
      <strong>
        Upvotes: {upVotes} Downvotes: {downVotes}
      </strong>
    </div>
  );
};

export default VoteBox;
