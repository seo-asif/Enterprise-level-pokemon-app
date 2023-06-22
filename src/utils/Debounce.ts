export const debounce = (func: Function, timeout: number) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
