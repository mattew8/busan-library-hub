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
      const searchValue = encodeURIComponent(`${value}`);
      const searchParamText = `${key}=${searchValue}`;
      searchParams += `${searchParamsPrefix}${searchParamText}`;
    }
  });

  return searchParams;
}
