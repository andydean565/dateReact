//common variables
var c_date = new Date();
var c_hour = c_date.getHours();
var c_day = c_date.getDay();
var c_month = c_date.getMonth();
var c_year = c_date.getFullYear();

//keys
var d_key = ['all', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
var m_key = ['january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

var options = {
    'feq' : 'react-freq', //time / day / month / year / custom 
    'type' : 'react-type', //show / hide / class / text
    'data' : 'react-data', //the class / text / etc
    'span' : 'react-span', // start and stop seperated by - 
};

var data = {
    'show' : 'show',
    'hide' : 'hide',
    'class' : 'class',
    'text' : 'text'
};

var predefined = {
    'halloween' : '10/18-10/31',
    'easter' : '04/18-04/26',
    'xmas' : '12/18-12/26'    
};

//selector class (if changed will update across site)
var selector = ".dateReact";

//document ready
$( document ).ready(function() {
    dr_find();      
});

function dr_find(){
    $( selector ).each(function( index ) {
        if(!dr_validate(this)){return false;}
        var between = dr_span(this);  
        var type = dr_type(this);  
        var selected = dr_amount(this);
        var freq = dr_freq(selected[0]);
        var apply = dr_within(selected, freq, between);
        if(apply){var result = dr_apply(this, type);}
    });    
}

function dr_apply(el, type){
    switch(type) {
        case 'show':
            $(el).show();
            return true;
            break;
        case 'hide':
            $(el).hide();  
            return true;            
            break;
        case 'class':
            $(el).addClass( dr_data(el) );     
            return true;                        
            break;
        case 'text':
            $(el).text( dr_data(el) );       
            return true;                        
            break;
        default:
            return false;                        
            break;
    }    
}

function dr_amount(el){
    var span = $(el).attr('' + options.span + '');
    var extract;
    var freq;
    var between = false;

    if(span.includes("-")){
        extract = span.split("-");
        if(extract.length != 2){return false}
    }
    else if(span.includes("|")){ extract = span.split("|");}
    else{extract = new Array(span);}
    return extract;
}

function dr_span(el){
    var span = $(el).attr('' + options.span + '');    
    if(span.includes("-")){return true;}
    else{return false;}
}

function dr_type(el){
    return span = $(el).attr('' + options.type + '');    
}

function dr_data(el){
    return span = $(el).attr('' + options.data + '');    
}

function dr_within(ex, type, between){
    switch(type) {
        case 'time':
            if(between){return dr_numBetween(ex, c_hour);}
            else{
                for (var i = 0; i <= ex.length; i++) {
                    if(ex[i] == c_hour){return true;}
                }
                return false;
            }
            break;
        case 'day':
            if(between){return dr_arrayBetween(ex, d_key);}
            else {return dr_excists(ex, d_key, c_day);}
            break;
        case 'month':
            if(between){return dr_arrayBetween(ex, m_key);}
            else {return dr_excists(ex, m_key, c_month);}
            break;
        case 'year':
            return dr_numBetween(ex, c_year);    
            break;
        case 'date':
            if(between){
                return dateCheck(ex[0],ex[1],c_date);
            }else{
                for (var i = 0; i <= ex.length; i++) {
                    var date = new Date(ex[i]);                                    
                    if(date == c_date){return true;}
                }
            }
            break;
        default:
    }    
}
    

function dr_freq(ex){
    if(isNumber(ex) && ex.length == 2){
        return 'time';        
    }else if(isNumber(ex) && ex.length == 4){
        return 'year';
    }else if(Date.parse(ex)){
        return 'date';
    }else if($.inArray(ex, d_key) != -1){
        return 'day';        
    }else if($.inArray(ex, m_key) != -1){
        return 'month';                
    }else{return false;}
}

function dr_numBetween(ex, num){
    if (num >= ex[0] && num <= ex[1]) {    
        return true;
    }
    else{
        return false;
    }
}

function dr_arrayBetween(ex, array){
    var start = $.inArray(ex[0], array);
    var end = $.inArray(ex[1], array);
    if (c_month > start && c_month < end) {return true;}
    else{return false;}    
}

function dr_excists(ex, key, value){
    for (var i = 0; i <= ex.length; i++) {
        if($.inArray(ex[i], key) == value){return true;}
    }
    return false;
}

function dr_validate(el){
    var span = $(el).attr('' + options.span + '');
    var type = $(el).attr('' + options.type + '');
    var data = $(el).attr('' + options.data + '');
    if(!span){
        return false;
    }
    else if(type){
        if(type !== 'show' && type !== 'hide'){if(!data){return false;}}
        return true;
    }else{return false;}
}

function dateCheck(from,to,check) {
    var fDate,lDate,cDate;
    
    
    fDate = Date.parse(from);
    lDate = Date.parse(to);
    cDate = Date.parse(check);

    
    
    
    if((cDate <= lDate && cDate >= fDate)) {return true;}
    else{return false;}
}
    

function isNumber(obj) { return !isNaN(parseFloat(obj)) }
