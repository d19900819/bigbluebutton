export const enum ChatEvents {
  SENT_MESSAGE = 'sentMessage',
}

export const enum ChatCommands {
  RESTORE_WELCOME_MESSAGES = 'restoreWelcomeMessages',
}

export const enum ChatMessageType {
  TEXT = 'default',
  POLL = 'poll',
  PRESENTATION = 'presentation',
  CHAT_CLEAR = 'publicChatHistoryCleared'
}
