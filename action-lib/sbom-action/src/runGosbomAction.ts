import {
  attachReleaseAssets,
  runAndFailBuildOnException,
  runGosbomAction,
  uploadDependencySnapshot,
} from "./github/GosbomGithubAction";

runAndFailBuildOnException(async () => {
  await runGosbomAction();
  await uploadDependencySnapshot();
  await attachReleaseAssets();
});
