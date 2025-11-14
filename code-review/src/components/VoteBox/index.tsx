import styles from "./VoteBox.module.css";

interface VoteBoxProps {
  upVotes: number;
  downVotes: number;
}

const VoteBox = (props: VoteBoxProps) => {
  const { upVotes, downVotes } = props;
  return (
    <div className={styles.voteBox}>
      <strong>
        Upvotes: {upVotes} Downvotes: {downVotes}
      </strong>
    </div>
  );
};

export default VoteBox;
