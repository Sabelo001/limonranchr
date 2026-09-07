import { spawnSync } from "node:child_process";
process.loadEnvFile(".env.production");
if (!process.env.SITE_URL || !process.env.CF_PRODUCTION_BRANCH) {
  console.error(
    "Set SITE_URL to the confirmed HTTPS production origin and CF_PRODUCTION_BRANCH to the existing Pages production branch. Verify the limon-ranch target and announce replacement before running this command.",
  );
  process.exit(1);
}
if (!process.env.npm_execpath) throw new Error("Run using npm run deploy:production");
const run = (args) => {
  const result = spawnSync(process.execPath, [process.env.npm_execpath, ...args], {
    stdio: "inherit",
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
};
run(["run", "typecheck"]);
run(["run", "build"]);
run([
  "exec",
  "--",
  "wrangler",
  "pages",
  "deploy",
  "dist",
  "--project-name=limon-ranch",
  "--config=wrangler.toml",
  `--branch=${process.env.CF_PRODUCTION_BRANCH}`,
  "--commit-dirty=true",
]);
