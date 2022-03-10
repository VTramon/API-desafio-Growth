import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MessageCard from '../MessageCard'
import styles from './MessageContainer.module.scss'

type MessageContainerProps = {}

const MessageContainer: React.FC<MessageContainerProps> = () => {
  const [messages, setMessages] = useState<[]>([])

  const handleMessages = async () => {
    const result = (await axios.get('http://localhost:4000/getUsersMessages'))
      .data

    setMessages(result)
  }

  useEffect(() => {
    handleMessages()
  }, [])
  return (
    <section className={styles.container}>
      {messages
        ? messages.map((message, index) => {
            return <MessageCard key={index} message={message} />
          })
        : undefined}
    </section>
  )
}

export default MessageContainer
