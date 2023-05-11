/**
 * Used for filesystem directory input to Gosbom
 */
export interface GosbomDirectoryInput {
  path: string;
}

/**
 * Used for file input to Gosbom
 */
export interface GosbomFileInput {
  file: string;
}

/**
 * Used to point Gosbom to a registry to scan an image
 */
export interface GosbomRegistryInput {
  registry: string;
  image: string;
}

/**
 * Used to point Gosbom to a local image
 */
export interface GosbomImageInput {
  image: string;
}

/**
 * Gosbom invocation options
 */
export interface GosbomOptions {
  input:
    | GosbomDirectoryInput
    | GosbomFileInput
    | GosbomRegistryInput
    | GosbomImageInput;
  format:
    | "spdx"
    | "spdx-tag-value"
    | "spdx-json"
    | "cyclonedx"
    | "cyclonedx-xml"
    | "cyclonedx-json"
    | "table"
    | "text"
    | "json";
  uploadToDependencySnapshotAPI: boolean;
}
