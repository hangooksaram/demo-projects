// Validation
export interface Validatable {
  value: string | number;
  required: boolean | undefined;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validateInput: Validatable): boolean {
  let isValid = true;

  const { value, required, min, max, minLength, maxLength } = validateInput;

  if (required) {
    isValid = isValid && value.toString().length !== 0;
  }
  if (minLength && typeof value === "string") {
    isValid = isValid && value.length > minLength;
  }
  if (maxLength && typeof value === "string") {
    isValid = isValid && value.length < maxLength;
  }
  if (min) {
    isValid = isValid && +value > min;
  }
  if (max) {
    isValid = isValid && +value < max;
  }
  return isValid;
}
