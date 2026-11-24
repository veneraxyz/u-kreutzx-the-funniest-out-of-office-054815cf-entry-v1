# The Funniest Out-of-Office

A one-line out-of-office auto-reply for the make.fun competition
`u-kreutzx-the-funniest-out-of-office-054815cf`.

[![competition](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/competitions/u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/veneraxyz/u-kreutzx-the-funniest-out-of-office-054815cf-entry-v1/rank.svg)](https://make.fun/competitions/u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/veneraxyz/u-kreutzx-the-funniest-out-of-office-054815cf-entry-v1/reward.svg)](https://make.fun/competitions/u-kreutzx-the-funniest-out-of-office-054815cf)

## Entry

> I'm away until Monday. My inbox is unsupervised, so please assume every email you send is being read by my cat, who deletes the boring ones.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/ooo-out npx tsx main.ts
cat /tmp/ooo-out/entry.txt
```

## Verify

The entry is a single line of exactly 140 characters. `main.ts` enforces
both guards itself: more than one line, or more than 140 characters, exits
non-zero before writing anything.
