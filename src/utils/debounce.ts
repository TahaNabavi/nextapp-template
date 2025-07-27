export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
  options: { leading?: boolean } = {}
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastCallTime: number = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    const isFirstCall = lastCallTime === 0;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (options.leading && (isFirstCall || now - lastCallTime > delay)) {
      func(...args);
      lastCallTime = now;
    }

    timeoutId = setTimeout(() => {
      if (!options.leading) {
        func(...args);
      }
      lastCallTime = Date.now();
    }, delay);
  };
}
