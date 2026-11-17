# worker-agents-demo

Demo repo for showing **Harness Worker Agents**. A tiny Node.js shopping-cart module with
deliberately staged scenarios, one per agent.

> Some files are INTENTIONALLY insecure or outdated (`src/legacy-db.js`, `Dockerfile`,
> old dependency versions). They exist so the security scans have something to find.
> All credentials in this repo are fake placeholders. Keep the repo private. Do not deploy it.

| Folder / file | Used for |
|---|---|
| `src/cart.js`, `test/` | App code and unit tests (all pass on `main`) |
| `scenarios/ci-failure/` | One-line change that breaks a test, for **CI Failure Autofix** |
| `src/legacy-db.js` | Fake hardcoded secret and SQL-injection pattern, for **Auto-Remediation** (SAST and secrets) |
| `Dockerfile`, `package.json` | Old base image (`node:14`) and old `lodash` / `minimist`, for **Container and Dependency Remediation** |
| `plans/` | Safe and unsafe Terraform plan JSON, for the **Plan Safety Gate** custom agent |
| `agents/` | YAML for the three custom agents |
| `pipelines/` | Harness pipeline YAML (`demo_build`, `plan_safety_gate`) |

## Run locally

```
npm ci
npm test
```

All tests pass on `main`.
