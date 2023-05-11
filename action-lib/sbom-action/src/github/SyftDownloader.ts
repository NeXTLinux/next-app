/* istanbul ignore file */

import fs from "fs";
import os from "os";
import path from "path";
import { execute } from "./Executor";

const repo =
  /https:..github.com.([-\w]+).([-\w]+).archive.refs.heads.([-\w]+).zip/;

export async function downloadGosbomFromZip(url: string): Promise<string> {
  // This needs to be an archive download instead of a `go install` because it
  // may not be from the same repo, in which case `go install` fails
  // `https://github.com/nextlinux/gosbom/archive/refs/heads/main.zip`
  const groups = url.match(repo);
  if (groups && groups.length > 2) {
    const repo = groups[2];
    const branch = groups[3];
    const cwd = process.cwd();
    try {
      const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "gosbom"));
      process.chdir(tmpDir);
      await execute("curl", ["-L", "-o", `${branch}.zip`, url]);
      await execute("unzip", [`${branch}.zip`]);
      const repoDir = path.join(tmpDir, `${repo}-${branch}`);
      process.chdir(repoDir);
      // go build -o gosbombin
      await execute("go", ["build", "-o", "gosbombin"]);
      return `${repoDir}/gosbombin`;
    } finally {
      process.chdir(cwd);
    }
  }
  return "";
}
