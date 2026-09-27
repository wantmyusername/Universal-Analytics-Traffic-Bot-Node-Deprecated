> **Consolidated → archived.** This repo was merged into the single archive
> [**universal-analytics-fake-traffic-suite**](https://github.com/wantmyusername/universal-analytics-fake-traffic-suite).
> It is archived and kept only for reference.

# Universal Analytics Traffic Bot — Node.js — *Deprecated*

> **Deprecated / historical code.** This is an old bot that targeted **Universal Analytics**, which was shut down on **July 1, 2023**. It no longer works and is kept only as a memory of what this once was. Not maintained, not to be used.

## What this code was

A small **Node.js** script (`index.js`) that fired synthetic pageview hits at the legacy Universal Analytics collection endpoint:

```
https://www.google-analytics.com/r/collect
```

It ran inside a `setInterval` loop and randomized each hit to look like organic traffic from `google`:

| Field | Randomized via |
|---|---|
| Country | Random `geoid` from a list (`US`, `ES`, `FR`, `AL`, `DZ`, …) |
| Device | Spoofed `User-Agent` (iPhone / Android / Windows / Mac / Linux) |
| Client ID | Random `cid` |
| Source / medium | `cm=organic`, `cs=google` |
| Keyword | `ck=Prayer Online` |

The hits were attributed to the Universal Analytics property `UA-162171075-1`.

`exe.bash` was a helper that opened 30 `gnome-terminal` windows running the bot:

```bash
for i in `seq 1 30`; do
  gnome-terminal -- node bot.js
done
```

> Note: it calls `node bot.js`, but the actual source file in this repository is `index.js`.

## Requirements

- **Node.js** (the script only uses the built-in `http`/`https` modules — no dependencies).
- For `exe.bash`: Linux with `gnome-terminal`.

## Status

- Built around **Universal Analytics**, which stopped processing data on **July 1, 2023**.
- The legacy endpoint used here no longer exists in this form and does not accept data.
- **This code is non-functional.** It is preserved only as a historical artifact.

## Disclaimer

Published for historical/reference purposes only. Its only purpose was to generate artificial analytics traffic, which violates the terms of service of analytics platforms and can be considered fraud. **Do not use it.**
