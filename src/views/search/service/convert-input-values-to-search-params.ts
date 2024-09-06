export function convertInputValuesToSearchParams(
  inputValues: Record<string, FormDataEntryValue>,
): string {
  let searchParams: string = '';

  Object.keys(inputValues).forEach((key) => {
    const searchParamsPrefix = searchParams.length === 0 ? '?' : '&';
    const searchParamText = `${key}=${inputValues[key]}`;
    searchParams += `${searchParamsPrefix}${searchParamText}`;
  });

  return searchParams;
}
