export class ChatLog {
  user: string = "system";
  timestamp: number = 0;
  message: string;
  constructor(message: string, user?: string) {
    this.message = message;
    if (user) this.user = user;
  }
}
export const ChatLogs: ChatLog[] = [
  new ChatLog("lolg"),
  new ChatLog("wtf"),
  new ChatLog("2"),
  new ChatLog("lolg"),
  new ChatLog("wtf"),
  new ChatLog("2"),
  new ChatLog("lolg"),
  new ChatLog("wtf"),
  new ChatLog("lolg"),
  new ChatLog("wtf"),
  new ChatLog("2"),
  new ChatLog("lolg"),
  new ChatLog("wtf"),
  new ChatLog("lolg"),
  new ChatLog("wtf"),
  new ChatLog("2"),
  new ChatLog("lolg"),
  new ChatLog("wtf"),
  new ChatLog("lolg"),
  new ChatLog("wtf"),
  new ChatLog("2"),
  new ChatLog("lolg"),
  new ChatLog("wtf"),
  new ChatLog("lolg"),
  new ChatLog("wtf"),
  new ChatLog("2"),
  new ChatLog("lolg"),
  new ChatLog("wtf"),
  new ChatLog("2"),
];
