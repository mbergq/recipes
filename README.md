This is my first react-native project that I made during 2 weeks of a react-native
course in school.

The goal was to try and use many different core components and some third party
libraries. I also created my own JSON-file where I stored all recipedata.

The styling / UX of this project is least to say very mediocre since I strictly
focused on the functionality and logic of it.

There are many areas that I can improve here. The first thing is how I have typed
the Objectstructure of the JSON file, at the moment I've have typed precisely two
objects that I fetch since I know that's exactly what I'm gonna get, I wanted to
type just the structure of one object and then programatically typecheck the "rest"
if there were to be any. Right now typescript expects exactly 2 objects so therefore
it works, but if I were to add another recipedata-object I would receive errors.
I tried to make it work but I did not have the time for it.

I also learned that a well-structured JSON / datafile can make life a lot easier.
Right now I handle a lot of stuff after I've fetched the data with loops and so on,
it was very fun to do that but I can see how a better made JSON file would make
it a lot more readable and easy to handle.
