import { fileURLToPath } from "url"
import { dirname } from "path"

/**
 * @param {string} metaUrl import.meta.url
 */
export function dirName(metaUrl) {
  return dirname(fileURLToPath(metaUrl))
}
