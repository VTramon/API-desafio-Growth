import styles from './MessageCard.module.scss'

type MessageCardProps = {
  message: {
    userId: number
    id: number
    title: string
    body: string
  }
}

const MessageCard: React.FC<MessageCardProps> = (props) => {
  return (
    <div className={styles.card}>
      <p>
        <span>messageId: </span> {props.message.id}
      </p>
      <p>
        <span>userId: </span> {props.message.userId}
      </p>
      <h3>{props.message.title}</h3>
      <p>{props.message.body}</p>
    </div>
  )
}

export default MessageCard
