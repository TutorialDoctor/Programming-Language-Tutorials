// This is the javascript file we linked to in index.html. Since we link to it in the head of the document, it runs as soon as the page is loaded.

//The document.write() function writes stuff to the page. It is basically how you print stuff (very useful).
document.write('Javascript printed this!')

// To write on a new line, write a break tag to the html document
document.write('<br/>')

// You can write words/strings
document.write('Thanks Tutorial Doctor!')
document.write('<br/>')

// And numbers (no quotes)
document.write(2015)
document.write('<br/>')

// And math problems:
document.write(10+9+8+7+6-5-4-3-2-1*4.5/3.14)
document.write('<br/>')

// You can create variables
var name = "Tutorial Doctor";
var age = 29;
var occupation = "Unemployed :(";
var height = 6.1;
var cool = true;
var favorite_fruit = ['oranges','strawberries','grapes'];
var demographics = {age:age,sex:'male',language:'en'};

// Then write them to the document...
document.write(name);
document.write('<br/>');

document.write(age);
document.write('<br/>'); 

document.write(occupation);
document.write('<br/>');

document.write(height);
document.write('<br/>');

document.write(cool);
document.write('<br/>');

document.write(favorite_fruit);
document.write('<br/>');

document.write(demographics);
document.write('<br>');
document.write(demographics['language']);
document.write('<br>');
// notice how demographics returns an object
// this is because a dictionary is an object
// JSON is derived from this subset of Javascript and is used to store data

// And you can make functions
function greet()
    {document.write("How are you today? ");}

// And call them
greet();

// You can also pass arguments to functions and use conditional logic
function get(a,b,c)
    {
        if(a=='sum'){
            document.write(b+c);
        }
        else if(a=='diff'){
            document.write(b-c);
        }
        else if(a=='prod'){
            document.write(b*c);
        }
        else if(a=='quot'){
            if(c!=0){
                document.write(b/c);
            }
        }
        else{document.write('Something went wrong. Check your function arguments.');}
    }
get('quot',121,3)

document.write('<br>')

// For loops in Javascript
list = ['we',4,true]
for(x in list){document.write(list[x]);}

document.write('<br>')

// For loops the other way in Javascript
for(i=0;i<10;i++){document.write(i);}
document.write('<br>')

// While loops in Javascript
t=0
while(t<20){
    document.write(t);
    t++;
}

// And that is it for the basics of Javascript.