# dateReact
JavaScript plugin to change to change how your content will display based on the time/day/month or custom dates

## attribute

### span

the span attribute defines when you want something to change form the normal and you can put in time/day/month/date or a predefined variable date.

```html
react-span="01-03"
```

### type

the type attribute is what you want to happen if the current date is within the span which can be a simple as show or more complex like adding a task to change the look of your website.

below are the current types but any suggestions can be added easily.

<<<<<<< HEAD
* show
* hide
* class
* text
=======
-show
-hide
-class
-text
>>>>>>> 355b24486b934d372fae066bf51a5c0f0121688e

```html
react-type="class"
```

### data

the data attribute is only needs to be included for the class and text type and will define the class or text you want applied to the div.

```html
react-data="active"
```

## format

| type    | Time          | Day                       | Month                 | date                               | predefined  |
| ------- | ------------- | ------------------------- | --------------------- | ---------------------------------- | ----------- |
| between | "01-09"       | "monday-wednesday"        | "october-december"    | "01/01/2017-02/04/2017"            | "[october]" |
| all     | "01\|02\|04\|07" | "monday\|thursday" | "july\|april\|november" | "01/03/2017\|01/05/2017" | "[october]" |

## examples

this example will add the class `active` to the span element if the time is between 1am - 3am

```html
<span react-span="01-03" react-type="class" react-data="active">1-3</span>
```

### notes

the time is in 24hour on 12 hour so you can display it anytime in the day

predefined variables will need to be included in the file so fork the plugin edit the debig with your desired predefined and use gulp to compile the min

the plugin will auto detect the span with you have entered but let me know if your having issues with a date



### future development

<<<<<<< HEAD
* shortened days and months formats
* allow users to put dates of the current month (can be done with predefined with some js added)
* more complex types
** maybe change depending how long someone has been on your website
=======
-shortened days and months formats
-allow users to put dates of the current month (can be done with predefined with some js added)
-more complex types
--maybe change depending how long someone has been on your website
>>>>>>> 355b24486b934d372fae066bf51a5c0f0121688e
