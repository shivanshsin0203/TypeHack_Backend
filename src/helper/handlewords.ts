export function handleWords(data: Record<string, string[]>): string[] {
    const wordsArray = Object.values(data);
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex];
  }
  