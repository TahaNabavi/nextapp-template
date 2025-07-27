/** This is a mock API function that returns a promise with a random boolean value.
 * It is used to simulate the response of an API call.
 */
export const mockApi = async () => {
  const result = await new Promise<string>((resolve, reject) => {
    const random = Math.random();
    setTimeout(
      () => (random > 0.5 ? resolve('success') : reject(new Error('Failed to complete action'))),
      200
    );
  });
  return result;
};
