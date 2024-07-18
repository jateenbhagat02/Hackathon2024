export function randomRange(length: number) {
    const result = [...Array(length).keys()].map((x) => x + 1);
    return result
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }