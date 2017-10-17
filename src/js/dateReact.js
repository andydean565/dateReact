//common variables
var c_date = new Date();
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

//selector class (if changed will update across site)
var selector = ".dateReact";

//document ready
$( document ).ready(function() {
    
    
    
    
    
      
});

function dr_find(){
    $( selector ).each(function( index ) {
        if(!dr_validate(this)){return false;}
        //here
        var selected = dr_amount(this);
        
    });    
}

function dr_amount(el){
    var span = $(el).attr('' + options.span + '');
    
}
    

function dr_freq(el){

}


function dr_validate(el){
    var span = $(el).attr('' + options.span + '');
    var type = $(el).attr('' + options.type + '');
    var data = $(el).attr('' + options.data + '');
    if(!span){
        return false;
    }
    else if(type){
        if(type !== 'show' && type !== 'hide'){if(!data){return false;}        }
        return true;
    }else{return false;}
}

function isNumber(obj) { return !isNaN(parseFloat(obj)) }
