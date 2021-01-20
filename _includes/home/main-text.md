Hello there, thanks for visiting my site!

About me? The above covers the basics, otherwise my bio is the typical "I like
to create cool things" spiel --- I'll let you decide if I succeed in that
regard.

I'm looking for a graduate role, UK or abroad  (my résumé is available [here](https://raw.githubusercontent.com/Honno/curriculum-vitae/main/matthew-barber-cv.pdf) :)

## My projects

* ### 2021
  * **YoYo Games Sandbox Archive**
    : [Site](https://www.yygarchive.org/){: class='www'}
    : [Source](https://github.com/Honno/yyg-sandbox-search){: class='gh'}
    
    A searchable archive of the YoYo Games Sandbox,
    a games portal which has since shutdown.
    I extracted the games and metadata from a site save (a WARC)
    and hosted it on the Internet Archive,
    which this site interfaces with.

    * Python
    {: class='langs'}
    
    * pywb
    * BeautifulSoup
    * requests
    * MongoDB
    * Flask
    * Sqlite
    {: class='tools'}


* ### 2020
  * **coinflip**
    : [Demo](https://www.youtube.com/watch?v=0xrWG3Ki9Z8){: class='file'}
    : [Source](https://github.com/Honno/coinflip){: class='gh'}
    : [Paper](https://raw.githubusercontent.com/Honno/coinflip/report/report.pdf){: class='www'}
    : [Docs](https://coinflip.readthedocs.io/en/latest/){: class='www'}

    In-development testing suite for random number generators, implementing the
    tests recommended by [NIST SP800-22](https://github.com/Honno/rngtest/blob/master/SP800-22.pdf). 
    A user-friendly command-line interface provided allows users to load, run
    and report on their data in a step-by-step fashion.
    
    * Python
    {: class='langs'}
    
    * Pandas
    * Click
    * Hypothesis
    {: class='tools'}
    
  * **sts-pylib**
    : [Source](https://github.com/Honno/sts-pylib){: class='gh'}
    : [Docs](https://sts-pylib.readthedocs.io/en/latest/){: class='www'}
    
    Modifies the [NIST Statistical Test Suite](https://csrc.nist.gov/Projects/Random-Bit-Generation/Documentation-and-Software)
    so that its randomness tests can be accessed individually,
    and subsequently provides a Python interface to use them.
    
    * Python
    * C
    {: class='langs'}
    
    * CFFI
    {: class='tools'}
  
  * **Epitope classification modelling**
    : [Paper](https://raw.githubusercontent.com/Honno/epitope-classification/master/report.pdf){: class='www'}
    : [Script (Preprocess)](https://github.com/Honno/epitope-classification/blob/master/preprocess/preprocess_data.py){: class='gh'}

    Exploration of the (rather tricky) linear b-cell epitopes classification problem, and
    subsequent modelling.
    
    * Python
    {: class='langs'}
    
    * Weka
    {: class='tools'}

  * **Financial analysis stack**
    : [Source](https://github.com/Joshgallagher/financial-analysis-stack){: class='gh'}
    
    A project that demonstrates how various distributed data and parallel
    processing services could be used for financial analysis. Made in
    collaboration with my friend [Josh](https://www.joshuagallagher.io/).

    An example application is provided, which uses the daily close prices of a
    stock to generate a linear regression model. This model is then used to
    predict the price of a stock at a given future date.
    
    * Python
    * HiveQL
    {: class='langs'}
    
    * Hadoop
    * Hive
    * Redis
    * Spark
    * Docker
    {: class='tools'}

  * **Android travel journalling app**
    : [Source](https://github.com/Honno/travel-app){: class='gh'}
    
    An app that helps you journal your travels.
    
    * Java
    {: class='langs'}
    
    * Android SDK
    {: class='tools'}



* ### 2019
  * **quine.gz**
    : [quine.gz](https://blog.matthewbarber.io/downloads/quine.gz){: class='file'}
    : [Source (CRC)](https://gist.github.com/Honno/4e6e4790e14c43bf5d6fa822fb56b6ea){: class='gh'}
    : [Article](https://blog.matthewbarber.io/2019/07/22/how-to-make-compressed-file-quines.html){: class='blog'}

    A GZIP file that decompresses an exact copy of itself, ad infinitum. Involved
    the creation of an abstract Lempel-Ziv program that self-expands, which was
    carefully translated into a DEFLATE compressed data stream using the built-in
    fixed Huffman alphabet.

    Also required designing a multiprocessing Python script that can find a
    self-referential CRC32 value.

    I explain the whole process in an extensive blog article, which comes with
    numerous retro ASCII charts for some reason.

    * Python
    {: class='langs'}

  * **metapp** *(Cancelled)*
    : [Source](https://github.com/Honno/metapp){: class='gh'}

    Meta puzzle platformer about the nature of player/developer relationships.
    Level design inspired by [Karoshi](https://www.karoshigame.com/) and
    [100% Logical](https://gamejolt.com/games/100-logical/1268). Designed an
    auto-dialogue system with dynamic speech bubbles to improve the flow of
    narrative.

    * GDScript
    * C#
    {: class='langs'}

    * Godot
    {: class='tools'}

  * **matthewbarber.io**
    : [Source (Portfolio)](https://github.com/Honno/Honno.github.io){: class='gh'}
    : [Source (Blog)](https://github.com/Honno/blog){: class='gh'}

    My strange website. Now even responsive on some modern devices! The development
    environment look design comes from a desire to present myself as a hip hacker
    type---I'm not quite sure to whom though.

    Also includes a blog with some bespoke JS for interactive behaviour in
    articles.

    * HTML
    * Sass
    * JavaScript
    {: class='langs'}

    * jQuery
    * Jekyll
    {: class='tools'}

* ### 2018
  * **University events website**
    : [Source](https://github.com/Honno/events-site){: class='gh'}

    Platform for university students to manage their own or their societies'
    events, and allow for students to interact with the event pages.

    * Pug
    * CSS
    * JavaScript
    {: class='langs'}

    * Node.js
    * Express.js
    * MongoDB
    {: class='tools'}

  * **Twitter Anew**
    : [Source](https://github.com/Honno/twitter-anew){: class='gh'}

    Tool to make your twitter experience less daunting if you follow a ton of
    folks, by way of using the Twitter API to designate those followed into the
    platform's Lists system.

    * Python
    {: class='langs'}

* ### 2017
  * **Expert system** 
    : [Source](https://gist.github.com/Honno/b733f151b71116631660ac4c85947289){: class='gh'}

    Implementation of a forward/backward reasoning, ala an inference engine for an
    expert system.

    * Common Lisp
    {: class='langs'}

  * **Space Hermit**
    : [Source](https://github.com/Honno/space-hermit){: class='gh'}

    POV animation of the inside of a cockpit in space. I wanted it to *feel*
    realistic, mainly by designing my own bobbing and shake-cam logic.

    * Java
    {: class='langs'}

    * LWJGL
    {: class='tools'}

  * **MTR traversal**
    : [Source](https://github.com/Honno/mtr-traversal){: class='gh'}

    Various utilities for a user to find out information pertaining to use of the
    Hong Kong train network. Includes creation of a graph data structure, and
    implementation of path finding using breadth-first search.

    * Java
    {: class='langs'}
{: id='projects-list'}
