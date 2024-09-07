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
      const searchValue = `${inputValues[key]}`.replace(/\s+/g, '');
      const searchParamText = `${key}=${searchValue}`;
      searchParams += `${searchParamsPrefix}${searchParamText}`;
    }
  });

  return searchParams;
}
