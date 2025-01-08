export function safeParseJSON<T>(data: string): T | null {
    try {
      return JSON.parse(data) as T;
    } catch (error) {
      console.error('Erro ao fazer parse do JSON:', error);
      return null;
    }
  }