---
layout: post
title:  "Restaurant Review Dashboard"
author: Aaryan
categories: [project, side project, web scraping, machine learning, NLP, streamlit, food]
date: 2025-04-07 20:43:00 +0000
image: 'assets/images/food-dashboard.png'
featured: true
comments: true
---

Going out to dinner with some friends and you have no idea what to get? Well fret no longer! 

For the last 6 months, I have developed this [semi-functioning dashboard application!](https://restaurant-reviews.streamlit.app) Utilizing selenium and bs4, the user will input a Google Maps URL. For some amount of time, the application will scrape the reviews and return the following:

1. *Frequently used words*
2. *Topics that arise*
3. *Derived sentiments*
4. *Association analysis on frequently ordered dishes*
5. *Frequency counts on average spend per person, servive types, parking situation, and vibe*

What ingredients did I use?

I used NLP tools, such as `NLTK, VADER, and BERT`, to clean and transform these reviews into actionable insights. From these I obtained **word frequencies** -- singular words and pairings, **sentiments** with cleaned reviews and a personalized formula, and **topic clustering**, utilizing dimensionality reduction to gather more precise topics. 

Furthermore, I conducted data mining, utilizing the `apriori and association rules` packages from the `mlextend.frequent_patterns` package to look more at frequently ordered dishes, utilizing a minimum support rate of .03 to reduce variance (in ways). 

To tie it all up together, I utilized `seaborn, plotly, and matplotlib` to mold my charts into easy-to-digest plots that are easy on the eyes (and so so beautiful to look at).

I hope you enjoy! and do let me know in the comments what more you would like to see! (and what other changes I can make!)

Code for my project can be found on [my github](https://github.com/Aarylitics/restaurant_review_dashboard)