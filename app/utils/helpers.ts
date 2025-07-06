export const debounce = (callback: () => void, delay: number) => {
  let timeout: NodeJS.Timeout | undefined;
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(callback, Number(delay));
};
