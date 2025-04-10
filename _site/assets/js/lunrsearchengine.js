
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/blog/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/blog/about",
    "title": "About Aaryan!",
    "body": " Aspiring data scientist, avid homecook To showcase my love for data and cooking, I have decided to create a personal blog and journal to showcase my achievements, recipes, and other fun I have! LinkedIn "
    }, {
    "id": 2,
    "url": "http://localhost:4000/blog/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/blog/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Consulting a Local Program at NC State                              :               Project Timeline: January 2024 to May 2024 (5 Months):                                                                                                                                                                       Aaryan                                09 Apr 2025                                                                                                                                                                                                                                                                                                                        Restaurant Review Dashboard                              :               Project Timeline: November 2024 to April 2025 (6 Months):                                                                                                                                                                       Aaryan                                07 Apr 2025                                                                                                                   Projects:                                                                                                    Consulting a Local Program at NC State              :       Project Timeline: January 2024 to May 2024 (5 Months):                                                                                                       Aaryan                09 Apr 2025                                                                                                                                                                                 Consulting a Local Cidery              :       Project Timeline: February 2024 to May 2024 (4 Months):                                                                                                       Aaryan                08 Apr 2025                                                                                                                                                                                 Restaurant Review Dashboard              :       Project Timeline: November 2024 to April 2025 (6 Months):                                                                                                       Aaryan                07 Apr 2025                                                                                     Recipes:                       "
    }, {
    "id": 4,
    "url": "http://localhost:4000/blog/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/blog/agi/",
    "title": "Consulting a Local Program at NC State",
    "body": "2025/04/09 -  Project Timeline: January 2024 to May 2024 (5 Months) Prior to the completion of my undergraduate degree, I had the wonderful task of working alongside 4 future data professionals/consultants on an analytical practicum project for the Agricultural Institute at NC State University. Not only was this project one of the most important projects in my undergrad, it was also one of my first real client-facing projects. Agenda for this article:  Scope and Data Cleaning Marketing Dashboard Machine Learning Model and Deployment Working with a Client What I have learnedLet’s get into it! Key Takeaways Consulting clients using data-related insights Working with Tableau to create a marketing dashboard utilizing NLP to understand retention and education value at a deeper level Working on a client-facing project Creating and deploying a machine learning model Personal GrowthScope and Data CleaningTo assist AGI in their future pathway of improvement, my team was tasked with the following:  Identify key recruiting metrics and further analysis Determine the post-grad value of AGI Create forecasting tool for retention and students of concernTo ensure we understood what the client specifically wanted, we set up 2 meetings – a kickoff and a follow-up – to obtain a great understanding of the project. Without a good understanding, are you really going to provide value? (Answer is no. ) From this meeting, we found out that the client wanted to see where majority of their students come in from, demographic and application wise, where their alumni are currently working at, what students and alumni have to say about the program, and most importantly, a tool that allows staff and faculty to be more hands-on with their students and intervene with at-risk students in hopes of increasing student retentions (outlier detection). With this information, we were given our fair share of data and knew exactly how to attack the problem. With our problem in mind, we did EDA on all data files to ensure all files were useful and ensured unnecessary files did not take up our storage. However, our data came with some integrity issues. For starters, our data came with Personally Identifiable Information (PII). As any data scientist knows, PII is something that should be avoided to reduce data concerns for individuals in the dataset. Additionally, bias can arise from PII. The data we obtained was enough for 2 semesters worth of students, which is not enough for my team to conduct a forecasting or outlier detection tool. With these issues arising, we talked to our sponsor and increased the number of observations we had, ensuring that we can at least make a framework and play around with the data. However, our PII issue was never resolved, as I had no idea that this was a major issue while conducting this project. Marketing DashboardTo assist the AGI in their marketing efforts, my team conducted statistical analysis and basic NLP on survey data from alumni, current students, and students that transferred/dropped out. For statistical analysis, we conducted basic means and medians to obtain average salaries given their education concentration and their graduation year. Additionally, we looked at where survey takers found value in the program given professional and personal benefits. Our results can be seen in the powerpoint below! (Slide 23) For basic NLP, we took to R and conducted term frequency analysis on key areas of our analysis, such as reasons why students decided not to attend the program, as well as the common job titles within alumni. To ensure that our clients had updated material, our team created an updated flier and consolidated job-related material into a Tableau dashboard in which they can follow our analysis and revert back to as a blueprint! Machine Learning Model and DeploymentIn order to forecast and create an outlier detection tool for faculty and staff to intervene with students, our team decided that a clustering analysis would ensure that we find hidden components in why Working with a ClientData came in 3 weeks later and 8 weeks later (given a 16 week course) What I have learned"
    }, {
    "id": 6,
    "url": "http://localhost:4000/blog/ebcc/",
    "title": "Consulting a Local Cidery",
    "body": "2025/04/08 -  Project Timeline: February 2024 to May 2024 (4 Months) One impactful practicum project I had was my traditional and digital marketing practicum project. Not only did my team help a local cidery, East Bower Cider Company (EBCC), learn more about how to optimize their advertising to their target segmentation, I personally learned how to navigate difficulties and time management in a team setting. Let’s dive deeper!! Key Takeaways Applying data science to a client-facing marketing-related project Utilizing NLP to enhance findings from a segmentation survey Working and leading a group to victory given multiple setbacks Creating business-level recommendations given data-powered insights Collating all information to put into an easy-to-digest powerpoint Personal growth!East Bower Practicum FindingsMy groups scope of the project was to see how EBCC’s target segmentation interacts with social media, more specifically, where, why, and at what level. Down below you will find our presentation so you too can follow along! Core Associations : To start off, we looked at core associations relative to EBCC based off of menu offerings, current social media postings, and the overall atmosphere of the location. Additionally, we talked with the owners to see how they wanted their brand to be portrayed to the public. We found the following:  Values 🏘️     Transparency, Friendly, Inclusivity    Atmosphere 🌃     Outdoor, Instagrammable, Music    Cider 🍻     Quality, Range of Products, Local   Now keep these values in mind, as they are important when it comes to the recommendations! Our Target Segment: To figure out who our customers are at a psychographic and behavioral level, our team analyzed Qualtrics survey data to uncover common patterns and reveal key findings. Additionally, we looked through the profiles of individuals that currently interact with EBCC on social media to uncover findings the data might have missed. From this, we found that middle aged men and women alike were very recpetive to EBCC! The image down below showcases our personas.   Social Media Interaction: When conducting netnography and analyzing popular posts and creative on EBCC’s social media, our team found that our uncovered target segmentation commonly uses Instagram, Facebook, LinkedIn, and TikTok to keep up with local businesses, events, and brands. Additionally, colorful posts with people interacting with one another – whether its a friend, a loved one, or their dog – enjoying a drink gains a lot of traction! Creative Media: As our clients wanted to increase social media interaction, we came up with the following ideas and frameworks: 1. Instagram Revamp  Weekly calendar - Give insights on what food trucks, events, and bands are happening in the next week Family-Oriented posts - Urge families to bring their loved ones and come vibe USER GENERATED CONTENT - Re-post photos that customers take. This is a HUGE vehicle for creative, as this shows people what exactly there is to expect2. Behind the Scenes  Process behing cider creation - Something informational to entice the customer Employee takeovers - It is way easier to enjoy a space and call it a ‘second home’ when there are familiar faces and recommendations After-event posts - Show what events really look like, giving social media users a sense of FOMO3. Customer Interactions  Customer takeovers and testimonionals - Social media users feel safer when someone just like them are urging them to come visit   Project Conclusion: To answer the question of where, why, and at what level, we gave the following recommendations from our analysis:  Instagram is the most popular social media platform in current customers and future customers. A lot of locals utilize instagram for research on where to try next.  Key metrics to aim for is 5200 Instagram followers and a 2-5% engagement rate User Generated Content is very important, as it shows customers on what to expect, making their visit a lot more comfortable Paid ads and organic content work hand-in-hand, you cannot have one or the other     Boosting ads in the RTP will not only increase interaction, but will also create a connection. Authentic content will further reinforce that connection    Post more about customers interaction with the space and environment while they are enjoying a drink or grub     Customers want to feel like they are familiar with the space before visiting the actual storefront!   Presentation PDF: Personal Growth and FindingsNot only did I grow my technical and consulting skills on this practicum project, I also learned more about where I can grow and how to approach certain scenarios for the future! Time Management: During this practicum project, I was juggling ~20 credit hours in this given semester. Additionally, I had another 2 other practicum projects. On top of that I was working 20 hours a week, grading assignments for my teaching assistant roles. How did I manage all of this time effortlessly? I created a weekly schedule that notes what due dates I have coming up, what is needed to ensure I reach these deadlines, and most importantly, an urgency for each assignment. If I knew that I had more free time in a given week, I would use that time to close in the gaps of any due dates for the upcoming week. Additionally, I would use this urgency metric to finish most-important assignments first, and then work on lower-level assignments last. I also ensured I communicated effectively with my professors (that I worked for) and my peers/project members that I have a loaded schedule, but will be working effortlessly to get our work done in an orderly fashion and the utmost quality! However, one issue arised. Abscent teammates. Conflict in teams: This practicum project as by far been the worst project I have worked on in a team setting. We started off strong, setting tasks and whatnot. But after a while, the progress of the whole team veered off task and the inputs of the team went downhill. The main issue here was not having a team lead and a reoccuring feedback system. Without a team lead, there is no direction of the project, and with no direction, the project goes nowhere. To ensure our project gets to a point where our stakeholders are happy, I decided to take the role of team lead in the hopes that team members will still contribute. However, I was wrong. For the rest of the course of the project, it was just me and occasionally 2 group members. With the help of everyone, we would have had a brilliant presentation! This project showed me that although you will be in a group setting a majority of the time, that does not necessarily mean everyone will want to do the work assigned or be active. Sometimes stepping up is key, and speaking up goes a long way! "
    }, {
    "id": 7,
    "url": "http://localhost:4000/blog/restaurant-review-dashboard/",
    "title": "Restaurant Review Dashboard",
    "body": "2025/04/07 -  Project Timeline: November 2024 to April 2025 (6 Months) Going out to dinner with some friends and you have no idea what to get? Well fret no longer! For the last 6 months, I have developed this semi-functioning dashboard application! Utilizing selenium and bs4, the user will input a Google Maps URL. For some amount of time, the application will scrape the reviews and return the following:  Frequently used words Topics that arise Derived sentiments Association analysis on frequently ordered dishes Frequency counts on average spend per person, servive types, parking situation, and vibeWhat ingredients did I use? I used NLP tools, such as NLTK, VADER, and BERT, to clean and transform these reviews into actionable insights. From these I obtained word frequencies – singular words and pairings, sentiments with cleaned reviews and a personalized formula, and topic clustering, utilizing dimensionality reduction to gather more precise topics. Furthermore, I conducted data mining, utilizing the apriori and association rules packages from the mlextend. frequent_patterns package to look more at frequently ordered dishes, utilizing a minimum support rate of . 03 to reduce variance (in ways). To tie it all up together, I utilized seaborn, plotly, and matplotlib to mold my charts into easy-to-digest plots that are easy on the eyes (and so so beautiful to look at). I hope you enjoy! and do let me know in the comments what more you would like to see! (and what other changes I can make!) Code for my project can be found on my github "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});