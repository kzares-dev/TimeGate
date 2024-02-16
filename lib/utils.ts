export const handleError = (error: unknown) => {
  console.error(error)
  throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}

export function formatTime(seconds: number): string {
  const days = Math.floor(seconds / (60 * 60 * 24));
  const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const secs = seconds % 60;

  let result = '';

  if (days > 0) {
    result += ` ${days}d`;
  }

  if (hours > 0) {
    result += `${hours}h`;
  }

  if (minutes > 0) {
    result += `${minutes}m`;
  }

  if (secs > 0 || result === '') {
    result += ` ${secs}s`;
  }

  return result.trim(); // Elimina espacios en blanco innecesarios
}

export const transformIntoNumber = (numbersArr: number[]) => {
  return numbersArr.reduce((acc, num) => acc * 10 + num, 0)
}

export const parseUrlParams = (query: string) => {
  // Decodificar la cadena URL
  const decodedString = decodeURIComponent(query);

  // Separar los pares clave-valor con "&" y convertirlos en un objeto
  const obj = decodedString.split("&").reduce((acc: any, item: string) => {
    const [key, value] = item.split("=");
    acc[key] = value;
    return acc;
  }, {});

  return obj;
};
