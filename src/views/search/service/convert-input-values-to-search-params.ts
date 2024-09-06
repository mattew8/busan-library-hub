export function convertInputValuesToSearchParams(
  inputValues: Record<string, FormDataEntryValue>,
): string {
  let searchParams: string = '';

  const searchOptionArray = Object.entries(inputValues);
  if (searchOptionArray.length === 0) {
    return '';
  }

  searchOptionArray.forEach(([key, value]) => {
    if (value) {
      const searchParamsPrefix = searchParams.length === 0 ? '?' : '&';
      const searchParamText = `${key}=${inputValues[key]}`;
      searchParams += `${searchParamsPrefix}${searchParamText}`;
    }
  });

  return searchParams;
}
