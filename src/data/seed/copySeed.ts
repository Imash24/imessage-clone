export function copySeed<T>(seed: T): T {
  return structuredClone(seed)
}
