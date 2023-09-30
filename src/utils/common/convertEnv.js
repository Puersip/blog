export function convertEnv(envOptions) {
  const result = {};
  if (!envOptions) return result;

  for (const envKey in envOptions) {
    if (envOptions.hasOwnProperty(envKey)) {
      let envVal = envOptions[envKey];
      if (['true', 'false'].includes(envVal)) envVal = envVal === 'true';

      if (['VITE_PORT'].includes(envKey)) envVal = +envVal;

      result[envKey] = envVal;
    }
  }
  return result;
}
