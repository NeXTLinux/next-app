import {
  attachReleaseAssets,
  runAndFailBuildOnException,
} from "./github/GosbomGithubAction";

runAndFailBuildOnException(attachReleaseAssets);
