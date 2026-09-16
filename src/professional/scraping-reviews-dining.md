---
title: Scraping Reviews to Optimize Dining
year: 2025
date: 2025-03-15
image: /assets/images/food-dashboard.png
imageWidth: 40%
featured: True
stack: [Python, BS4, NLTK, BERT, Selenium, Association Analysis]
topics: NLP, Topic Clustering, Webscraping, Side Project, Data Mining
description: A review-scraping pipeline that surfaces diner sentiment, most-discussed dishes, and topics in one dashboard.
stats:
  - label: Meals Eaten
    value: "40+"
  - label: Pounds Gained
    value: "~10+"
---

A Google Reviews scraping pipeline that derives diner sentiment, most-talked-about dishes, and topics in one hub.

## The problem

My goal when dining out is to maximize the taste and overall enjoyment I get from every dollar I spend. However menus can be super extensive in their offerings, making my decision-making very indecisive, aka, I want to try everything! But this is not doable, as I do not have unlimited money and unlimited stomach space (or can eat unlimited calories, but that would be pretty cool).

Now while products, such as Google Maps, Yelp, and now Beli, showcase to users photos and main dishes, they are not fully encompasing and limited in what their analytics can provide. Google Maps shows popular dishes and sentiments in the forms of reviews. However, it does not track sentiment of a place over time and the popular dishes. While the popular dishes is helpful, I have found their to be a discrepency between their listed dishes and the dishes that people talk about. Yelp, as similar as it to Google Maps, is typically reviewed by people at the higher extremes. Implemented in Yelp is some sort of localized bias. And then for Beli, you see photos of said dishes and then an average score and a recommended rating, however, both ratings are not accurate and have a lot of work needed with.

The goal of this is to bridge the 3 sites and their analytics into one powerhouse of a dashboard. I will say, that although this project is not fully finished and still needs work on, getting to that stage gets closer day-by-day.

## The approach

In order to gather the data needed before I dine, I have to webscrape Google reviews from my target restaurant. Utilizing BeautifulSoup (BS4) and Selenium, this was achievable. With this data I could gather basic facts about a restaurant, such as what cuisine it was and how many ratings it had. But next I had to isolate reviews and clean them up for Natural Language Processing (NLP) to gather sentiment, key topics, and popular dishes.

After cleaning up reviews I utilized NLTK's Vader to pick up sentiment score based on the number of stars the user gave. For example, if it was a one star, I would give a heavier weight to the negative sentiment score and vice versa. With this, I was able to plot the average sentiment against the average rating for the restaurant over time, showcasing if there was an increase or decrease in the establishments reviews, and thus, their quality. Congruently, I utilized BERTopic to gather main topics about the restaurant. I will spare the technical jargon, but would love to chat about it more! Furthermore, I can disect key topics given the star rating and a sentiment range. This allows me to isolate the negative reviews and see what people are specifically saying within it.

But the job is not done. Next I used NLTK's frequent distribution package to gather most frequent words and word pairings at the 2nd, 3rd, and 4th level. Seeing the top frequent word pairs gives our analysis more weight in what the restaurant has to offer, allowing individuals to make more concise decisions. Furthermore, I can gather the top ordered dishes and the frequency of them. But in this case, I am also making the assumption that more ordered dishes = the better option. In some instances, a dish can be really bad and then can be negatively reviewed. One thing I am currently working on is getting topics and sentiment for each specific dish to make that decision making more true and seamless. 

After this, I can use association rules to conduct an association analysis, a data minining technique that looks at frequent pairings for cross-selling purposes. In ths case, it can be used to see what dishes are ordered together for the most part and essentially pick your course for you, from drinks to dessert.

Once I had all of this information, I then engineered and deployed a streamlit production pipeline, containerizing my code and with Docker and CI/CD.

## The result

At the end of the day, I was able to go out and eat with confidence, knowing that I am dining at the right establishement and ordering the correct dishes. Aside from personal enjoyment, I learned more on webscraping, saw the ins and outs of NLP, and learned how to put a model into production!

