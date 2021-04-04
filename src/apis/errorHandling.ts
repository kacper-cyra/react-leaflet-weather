export function handleFetchError(error: unknown) {
  console.log(error);
}
export function handleGenericError(error: unknown) {
  console.log(error);
}

export function isFetchError(error: unknown): boolean {
  if (error instanceof Error) {
    return true;
  } else return false;
}
