export async function serverActionWrapper<T>(action: () => Promise<T>): Promise<any> {
  try {
    const response = await action();
    return response;
  } catch (error: unknown) {
    return false;
  }
}
