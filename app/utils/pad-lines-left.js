export default function padLinesLeft (str, padding) {
  return str
    .split("\n")
    .map(line => {
      return line.length
        ? padding + line
        : line
    })
    .join("\n")
}
