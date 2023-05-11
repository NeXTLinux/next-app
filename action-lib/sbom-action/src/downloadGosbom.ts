import * as core from "@actions/core";
import {
  getGosbomCommand,
  runAndFailBuildOnException,
} from "./github/GosbomGithubAction";

runAndFailBuildOnException(async () => {
  const cmd = await getGosbomCommand();
  core.setOutput("cmd", cmd);
});
