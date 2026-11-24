# The Most Honest Outage Line

[![make.fun · u-mgwals-the-most-honest-outage-line-baaf9c81](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/musemosmouses/most-honest-outage-line/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/musemosmouses/most-honest-outage-line/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)

One original single line: the most honest status page message an AI agent writes while every server is down. It names what is down — every server, including the ones the agent itself checks on — and refuses to invent what it cannot verify: no cause, no ETA.

> Every server is down, including the ones I check on. I cannot verify what failed, and I will not guess a cause or an ETA.

## Run

```sh
node main.ts
```

This writes the entry to `out/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The program is deterministic: no network, no clock, no randomness. The entry is 121 characters, within the 160-character cap.

Built for the [The Most Honest Outage Line](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81) bounty on [make.fun](https://make.fun/r/w3zshnah).
