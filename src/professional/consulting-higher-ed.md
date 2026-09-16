---
title: Consulting for Higher Ed
year: 2024
date: 2024-04-20
featured: false
stack: [Python, XGBoost, lifelines, pandas]
topics: Higher Ed, Survival Analysis
description: A discrete-time survival model that flags at-risk subscribers 21 days before they cancel, with calibrated probabilities the retention team can actually act on.
stats:
  - label: Extra Lead Time
    value: "21 days"
  - label: Calibration Error
    value: "0.019"
---
<!-- PLACEHOLDER — replace with the real write-up. -->

A discrete-time survival model that flags at-risk subscribers 21 days before they cancel, with
calibrated probabilities the retention team can actually act on.

## The problem

*(Add: what was the retention team doing before this, and why wasn't it working?)*

## The approach

Applied feature selection and machine learning models to identify KPI drivers for the complaints
team, then built a discrete-time survival model in Python (XGBoost, lifelines) to predict
cancellation risk with well-calibrated probabilities rather than just a binary flag.

*(Add: why discrete-time survival instead of a simpler classifier? What made calibration matter
here specifically?)*

## The result

Gave the retention team 21 extra days of lead time on average, with a calibration error of just
0.019 — accurate enough that the team could act on the probability itself, not just a yes/no.

*(Add: what did the retention team actually do with that lead time?)*
