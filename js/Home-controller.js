
var colors=['red','black','white'];
var  i=0;
function changeColor() {
    $("#topic").css("color",colors[i]);
    i++;
    if(i==colors.length){
        i=0;
    }

}
setInterval(changeColor,50);
//////////////
var  character=['A','B','C','D','E','F','G','H'];
var num=[1,2,3,4,5,6,7,8];


var place;
var ab;
var area;

var pondCount;
var blackCount=0;
var whiteCount=1;

var  CountArray=new Array(9);

$(document).ready(function () {
    ab=$('.col');
    area=$('.area');
    pondCount=0;
    for(var i=0;i<CountArray.length;i++){

        CountArray[i]=0;
    }

});
//
$('.area').on("click",function (eventData) {
    place=$(this);
    console.log(place);

    if(!(place.hasClass('clickpiece'))&& place.hasClass('blackpond')){
        pondCount=0;
        pathofBlackpond(place);
    }
    if(!(place.hasClass('clickpiece'))&& place.hasClass('whitepond')){
        pondCount=0;
        pathofWhitepond(place);
    }
    if(!(place.hasClass('clickpiece'))&& place.hasClass('Rook')){

        pathofRook(place);
    }
    if(!(place.hasClass('clickpiece'))&& place.hasClass('RookW')){
        pathofRookW(place);
    }
    if(!(place.hasClass('clickpiece'))&& place.hasClass('Bishop')){
        pathofBishop(place);
    }
    if(!(place.hasClass('clickpiece')) && place.hasClass('BishopW')){
        pathofBishopW(place);
    }
    if(!(place.hasClass('clickpiece')) && place.hasClass('Knight')){
        pathofKnight(place);
    }
    if(!(place.hasClass('clickpiece')) && place.hasClass('KnightW')){
        pathofKnightW(place);
    }
    if(!(place.hasClass('clickpiece')) && place.hasClass('King')){
        pathofKing(place);
    }
    if(!(place.hasClass('clickpiece')) && place.hasClass('KingW')){
        pathofKingW(place);
    }
    if(!(place.hasClass('clickpiece')) && place.hasClass('Queen')){
        pathofQueen(place);
    }
    if(!(place.hasClass('clickpiece')) && place.hasClass('QueenW')){
        pathofQueenW(place);
    }

});
///
function pathofBlackpond(eventData) {
    place = eventData;
    ab.removeClass('selectpath');
    area.removeClass('clickpiece');
    ab.removeClass('crosspiece');
    var currentId = place.parent().attr('id');
    var letter = currentId.charAt(0);
    var no = currentId.charAt(1);
    var LettersArrayPossition = ($.inArray(letter, character));
    var numArrayPossition = ($.inArray(parseInt(no), num));
    var tempId = character[LettersArrayPossition] + num[numArrayPossition + 1];
    var tempId1 = character[LettersArrayPossition] + num[numArrayPossition + 1];
    var tempId2 = character[LettersArrayPossition] + num[numArrayPossition + 1];
    var x = LettersArrayPossition;

    for (var y = numArrayPossition + 1; y < 4; y++) {
        tempId = character[x] + num[y];
        if (!($("#" + tempId).children().hasClass('area'))) {
            $("#" + tempId).addClass('selectpath');
            place.addClass('clickpiece')
        }
        else {
            break
        }
    }
    if(!($("#"+tempId).children().hasClass('area'))){
        $("#"+tempId).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId1).children().hasClass('White'))){
        $("#"+tempId1).addClass('crosspiece');
        place.addClass('clickpiece');
        place.removeClass('selectpath');

    }
    if(!($("#"+tempId2).children().hasClass('White'))){
        $("#"+tempId2).addClass('crosspiece');
        place.addClass('clickpiece');
        place.removeClass('selectpath');

    }

}
//

function pathofKnight(eventData) {
    place=eventData;
    ab.removeClass('selectpath');
    area.removeClass('clickpiece');
    ab.removeClass('crosspiece');
    var currentId=place.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,character));
    var numArrayPossition=($.inArray(parseInt(no),num));
    var tempId1=character[LettersArrayPossition-2]+num[numArrayPossition+1];
    var tempId2=character[LettersArrayPossition-1]+num[numArrayPossition+2];
    var tempId3=character[LettersArrayPossition+1]+num[numArrayPossition+2];
    var tempId4=character[LettersArrayPossition+2]+num[numArrayPossition+1];
    var tempId5=character[LettersArrayPossition-2]+num[numArrayPossition-1];
    var tempId6=character[LettersArrayPossition-1]+num[numArrayPossition-2];
    var tempId7=character[LettersArrayPossition+1]+num[numArrayPossition-2];
    var tempId8=character[LettersArrayPossition+2]+num[numArrayPossition-1];

    if(!($("#"+tempId1).children().hasClass('area'))){
        $("#"+tempId1).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');

    }
    if(!($("#"+tempId2).children().hasClass('area'))){
        $("#"+tempId2).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');

    }
    if(!($("#"+tempId3).children().hasClass('area'))){
        $("#"+tempId3).addClass('selectpath');
        place.addClass('clickpath');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId4).children().hasClass('area'))){
        $("#"+tempId4).addClass('selectpath');
        place.addClass('clickpath');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId5).children().hasClass('area'))){
        $("#"+tempId5).addClass('selectpath');
        place.addClass('clickpath');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId6).children().hasClass('area'))){
        $("#"+tempId6).addClass('selectpath');
        place.addClass('clickpath');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId7).children().hasClass('area'))){
        $("#"+tempId7).addClass('selectpath');
        place.addClass('clickpath');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId8).children().hasClass('area'))){
        $("#"+tempId8).addClass('selectpath');
        place.addClass('clickpath');
        place.removeClass('selectpath');
    }


}
//
function pathofKnightW(eventData) {
    place=eventData;
    ab.removeClass('selectpath');
    area.removeClass('clickpiece');
    ab.removeClass('crosspiece');
    var currentId=place.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,character));
    var numArrayPossition=($.inArray(parseInt(no),num));
    var tempId1=character[LettersArrayPossition-2]+num[numArrayPossition+1];
    var tempId2=character[LettersArrayPossition-1]+num[numArrayPossition+2];
    var tempId3=character[LettersArrayPossition+1]+num[numArrayPossition+2];
    var tempId4=character[LettersArrayPossition+2]+num[numArrayPossition+1];
    var tempId5=character[LettersArrayPossition-2]+num[numArrayPossition-1];
    var tempId6=character[LettersArrayPossition-1]+num[numArrayPossition-2];
    var tempId7=character[LettersArrayPossition+1]+num[numArrayPossition-2];
    var tempId8=character[LettersArrayPossition+2]+num[numArrayPossition-1];


    if(!($("#"+tempId1).children().hasClass('area'))){
        $("#"+tempId1).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId2).children().hasClass('area'))){
        $("#"+tempId2).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId3).children().hasClass('area'))){
        $("#"+tempId3).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId4).children().hasClass('area'))){
        $("#"+tempId4).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId5).children().hasClass('area'))){
        $("#"+tempId5).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId6).children().hasClass('area'))){
        $("#"+tempId6).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId7).children().hasClass('area'))){
        $("#"+tempId7).addClass('selectpath');
        place.addClass('clickpiece');
        place.addClass('selectpath');
    }
    if(!($("#"+tempId8).children().hasClass('area'))){
        $("#"+tempId8).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
}
//
function pathofKing(eventData) {
    place = eventData;
    ab.removeClass('selectpath');
    area.removeClass('clickpiece');
    ab.removeClass('crosspiece');
    var currentId = place.parent().attr('id');
    var letter = currentId.charAt(0);
    var no = currentId.charAt(1);
    var LettersArrayPossition = ($.inArray(letter, character));
    var numArrayPossition = ($.inArray(parseInt(no), num));
    var tempId1 = character[LettersArrayPossition] + num[numArrayPossition + 1];
    var tempId2 = character[LettersArrayPossition - 1] + num[numArrayPossition + 1];
    var tempId3 = character[LettersArrayPossition + 1] + num[numArrayPossition + 1];
    var tempId4 = character[LettersArrayPossition + 1] + num[numArrayPossition];
    var tempId5 = character[LettersArrayPossition - 1] + num[numArrayPossition];
    var tempId6 = character[LettersArrayPossition] + num[numArrayPossition - 1];
    var tempId7 = character[LettersArrayPossition + 1] + num[numArrayPossition - 1];
    var tempId8 = character[LettersArrayPossition - 1] + num[numArrayPossition - 1];

    if (!($("#" + tempId1).children().hasClass('area'))) {
        $("#" + tempId1).addClass('area');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if (!($("#" + tempId2).children().hasClass('area'))) {
        $("#" + tempId2).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if (!($("#" + tempId3).children().hasClass('area'))) {
        $("#" + tempId3).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if (!($("#" + tempId4).children().hasClass('area'))) {
        $("#" + tempId4).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if (!($("#" + tempId5).children().hasClass('area'))) {
        $("#" + tempId5).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if (!($("#" + tempId6).children().hasClass('area'))) {
        $("#" + tempId6).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');

    }
    if (!($("#" + tempId7).children().hasClass('area'))) {
        $("#" + tempId7).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if (!($("#" + tempId8).children().hasClass('area'))) {
        $("#" + tempId8).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
}
//
function pathofKingW(eventData) {
    place=eventData;
    ab.removeClass('selectpath');
    area.removeClass('clickpiece');
    ab.removeClass('crosspiece');
    var currentId=place.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,character));
    var numArrayPossition=($.inArray(parseInt(no),num));
    var tempId1=character[LettersArrayPossition]+num[numArrayPossition+1];
    var tempId2=character[LettersArrayPossition-1]+num[numArrayPossition+1];
    var tempId3=character[LettersArrayPossition+1]+num[numArrayPossition+1];
    var tempId4=character[LettersArrayPossition+1]+num[numArrayPossition];
    var tempId5=character[LettersArrayPossition-1]+num[numArrayPossition];
    var tempId6=character[LettersArrayPossition]+num[numArrayPossition-1];
    var tempId7=character[LettersArrayPossition+1]+num[numArrayPossition-1];
    var tempId8=character[LettersArrayPossition-1]+num[numArrayPossition-1];

    if(!($("#"+tempId1).children().hasClass('area'))){
        $("#"+tempId1).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId2).children().hasClass('area'))){
        $("#"+tempId2).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId3).children().hasClass('area'))){
        $("#"+tempId3).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId4).children().hasClass('area'))){
        $("#"+tempId4).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId5).children().hasClass('area'))){
        $("#"+tempId5).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId6).children().hasClass('area'))){
        $("#"+tempId6).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId7).children().hasClass('area'))){
        $("#"+tempId7).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    if(!($("#"+tempId8).children().hasClass('area'))){
        $("#"+tempId8).addClass('selectpath');
        place.addClass('clickpiece');
        place.removeClass('selectpath');
    }
    
}
//
function pathofRookW(eventData){
    place=eventData;
    ab.removeClass('selectpath');
    area.removeClass('clickpiece');
    ab.removeClass('crosspiece');
    var currentId=place.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,character));
    var numArrayPossition=($.inArray(parseInt(no),num));
    var tempId=character[LettersArrayPossition]+num[numArrayPossition-1];
    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=character[x]+num[y];
        if (!($("#"+tempId).children().hasClass('area'))){
            $("#"+tempId).addClass('selectpath');
            place.addClass('clickpiece');
        }else{
            break;
        }

    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=character[y]+num[x1];
        if (!($("#"+tempId).children().hasClass('area'))){
            $("#"+tempId).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=character[y]+num[x2];
        if (!($("#"+tempId).children().hasClass('area'))){
            $("#"+tempId).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=character[x]+num[y];
        if (!($("#"+tempId).children().hasClass('area'))){
            $("#"+tempId).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else{
            break;
        }
    }
}
//
function pathofRook(eventData) {
    place=eventData;
    ab.removeClass('selectpath');
    area.removeClass('clickpiece');
    ab.removeClass('crosspiece');
    var currentId=place.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,character));
    var numArrayPossition=($.inArray(parseInt(no),num));
    var tempId=character[LettersArrayPossition]+num[numArrayPossition+1];
    var x=LettersArrayPossition;
    for(var y=numArrayPossition+1;y<8;y++){
        tempId=character[x]+num[y];
        if(!($("#"+tempId).children().hasClass('area'))){
            $("#"+tempId).addClass('selectpath');
            place.addClass('clickpiece');

        }else {
            break;
        }
    }
    var x1=numArrayPossition;
    for(var y=LettersArrayPossition+1;y<8;y++) {
        tempId = character[y] + num[x1];
        if (!($("#" + tempId).children().hasClass('area'))) {
            $("#" + tempId).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }

    }


    var x2=numArrayPossition;
    for(var y=LettersArrayPossition-1;y>=0;y--){
        tempId=character[y]+num[x2];
        if(!($("#"+tempId).children().hasClass('area'))){
            $("#"+tempId).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    for(var y=numArrayPossition-1;y>=0;y--){
        tempId=character[x]+num[y];
        if(!($("#"+tempId).children().hasClass('area'))){
            $("#"+tempId).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }

}
//
function pathofBishop(eventData) {
    place=eventData;
    ab.removeClass('selectpath');
    area.removeClass('clickpiece');
    ab.removeClass('crosspiece');
    var currentId=place.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,character));
    var numArrayPossition=($.inArray(parseInt(no),num));
    var tempId1=character[LettersArrayPossition+1]+num[numArrayPossition+1];
    var tempId2=character[LettersArrayPossition-1]+num[numArrayPossition+1];
    var tempId3=character[LettersArrayPossition+1]+num[numArrayPossition-1];
    var tempId4=character[LettersArrayPossition-1]+num[numArrayPossition-1];
    var x=LettersArrayPossition;
    var y=numArrayPossition
    for(;y<8;y++){
        tempId1=character[++x]+num[y+1];
        if(!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for(;y1<8;y1++){
        tempId2=character[--x1]+num[y1+1];
        if(!($("#"+tempId2).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            place.addClass('clickpiece');

        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for (;x2>=0;x2--){
        tempId3=character[++y2]+num[x2-1];
        if(!($("#"+tempId3).children().hasClass('area'))){
            $("#"+tempId3).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }

    var  x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for(;x3>=0;x3--){
        tempId4=character[--y3]+num[x3-1];
        if(!($("#"+tempId4).children().hasClass('area'))){
            $("#"+tempId4).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }

}
//
function pathofBishopW(eventData) {
    place=eventData;
    ab.removeClass('selectpath');
    area.removeClass('clickpiece');
    ab.removeClass('crosspiece');
  var currentId=place.parent().attr('id');
  var letter=currentId.charAt(0);
  var no=currentId.charAt(1);
  var LettersArrayPossition=($.inArray(letter,character));
  var numArrayPossition=($.inArray(parseInt(no),num));
  var tempId1=character[LettersArrayPossition+1]+num[numArrayPossition+1];
  var tempId2=character[LettersArrayPossition-1]+num[numArrayPossition+1];
  var tempId3=character[LettersArrayPossition+1]+num[numArrayPossition-1];
  var tempId4=character[LettersArrayPossition-1]+num[numArrayPossition-1];
  var x=LettersArrayPossition;
  var y=numArrayPossition
    for(;y<8;y++){
      tempId1=character[++x]+num[y+1];
      if(!($("#"+tempId1).children().hasClass('area'))){
          $("#"+tempId1).addClass('selectpath');
          place.addClass('clickpiece');

      }else {
          break;
      }
    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition;
    for(;y1<8;y1++){
        tempId2=character[--x1]+num[y1+1];
        if(!($("#"+tempId2).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }
  var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for(;x2>=0;x2--){
        tempId3=character[++y2]+num[x2-1];
        if(!($("#"+tempId3).children().hasClass('area'))){
            $("#"+tempId3).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;

        }
    }

}
//
function pathofQueen(eventData) {
    place=eventData;
    ab.removeClass('selectpath');
    area.removeClass('clickpiece');
    ab.removeClass('crosspiece');
    var currentId=place.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,character));
    var numArrayPossition=($.inArray(parseInt(no),num));
    var tempId=character[LettersArrayPossition]+num[numArrayPossition+1];
    var tempId1=character[LettersArrayPossition+1]+num[numArrayPossition+1];
    var tempId2=character[LettersArrayPossition-1]+num[numArrayPossition+1];
    var tempId3=character[LettersArrayPossition+1]+num[numArrayPossition-1];
    var tempId4=character[LettersArrayPossition-1]+num[numArrayPossition-1];
    var x=LettersArrayPossition;
    for(var y=numArrayPossition+1;y<8;y++){
        tempId=character[x]+num[y];
        if(!($("#"+tempId).children().hasClass('area'))) {
            $("#" + tempId).addClass('selectpath');
            place.addClass('clickpiece');
        }else {
            break;
        }
    }
    var x1=numArrayPossition;
    for(var y=LettersArrayPossition+1;y<8;y++){
        tempId=character[y]+num[x1];
        if(!($("#"+tempId).children().hasClass('area'))){
            $("#"+tempId).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }

    var x2=numArrayPossition;
    for(var y=LettersArrayPossition-1;y>0;y--){
        tempId=character[y]+num[x2];
        if(!($("#"+tempId).children().hasClass('area'))){
            $("#"+tempId).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    var x=LettersArrayPossition;
    var y=numArrayPossition;
    for(;y<8;y++){
        tempId1=character[++x]+num[y+1];
        if(!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for(;y1<8;y1++){
        tempId2=character[--x1]+num[y1+1];
        if(!($("#"+tempId2).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for(;x2>=0;x2--){
        tempId3=character[++y2]+num[x2-1];
        if(!($("#"+tempId3).children().hasClass('area'))){
            $("#"+tempId3).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    var x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for(;x3>=0;x3--){
        tempId4=character[--y3]+num[x3-1];
        if(!($("#"+tempId4).children().hasClass('area'))){
            $("#"+tempId4).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }
}
//
function pathofQueenW(eventData) {
    place = eventData;
    ab.removeClass('selectpath');
    area.removeClass('clickpiece');
    ab.removeClass('crosspiece');
    var currentId = place.parent().attr('id');
    var letter = currentId.charAt(0);
    var no = currentId.charAt(1);
    var LettersArrayPossition = ($.inArray(letter, character));
    var numArrayPossition = ($.inArray(parseInt(no), num));
    var tempId = character[LettersArrayPossition] + num[numArrayPossition + 1];
    var tempId1 = character[LettersArrayPossition + 1] + num[numArrayPossition + 1];
    var tempId2 = character[LettersArrayPossition - 1] + num[numArrayPossition + 1];
    var tempId3 = character[LettersArrayPossition + 1] + num[numArrayPossition - 1];
    var tempId4 = character[LettersArrayPossition - 1] + num[numArrayPossition - 1];
    var x = LettersArrayPossition;
    for (var y = numArrayPossition + 1; y < 8; y++) {
        tempId = character[x] + num[y];
        if (!($("#" + tempId).children().hasClass('area'))) {
            $("#" + tempId).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    var x2 = numArrayPossition;
    for (var y = LettersArrayPossition - 1; y >= 0; y--) {
        tempId = character[y] + num[x2];
        if (!($("#" + tempId).children().hasClass('area'))) {
            $("#" + tempId).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }

    for (var y = numArrayPossition - 1; y >= 0; y--) {
        tempId = character[x] + num[y];
        if (!($("#" + tempId).children().hasClass('area'))) {
            $("#" + tempId).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    var x = LettersArrayPossition;
    var y = numArrayPossition
    for (; y < 8; y++) {
        tempId1 = character[++x] + num[y + 1];
        if (!($("#" + tempId1).children().hasClass('area'))) {
            $("#" + tempId1).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }

    var x1 = LettersArrayPossition;
    var y1 = numArrayPossition
    for (; y1 < 8; y1++) {
        tempId2 = character[--x1] + num[y1 + 1];
        if (!($("#" + tempId2).children().hasClass('area'))) {
            $("#" + tempId2).addClass('selectpath');
            place.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    var x3 = numArrayPossition;
    var y3 = LettersArrayPossition;
    for (; x3 >= 0; x3--) {
        tempId4 = character[--y3] + num[x3 - 1];
        if (!($("#" + tempId4).children().hasClass('area'))) {
            $("#" + tempId4).addClass('selectpath');
            place.addClass('clickpiecce');
        }
        else {
            break;
        }
    }


}
//
function pathofWhitepond(eventData) {
    place=eventData;
    ab.removeClass('selectpath');
    area.removeClass('clickpiece');
    var currentId=place.parent().attr('id');
    console.log(currentId);
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,character));
    var numArrayPossition=($.inArray(parseInt(no),num));
    var tempId1=character[LettersArrayPossition]+num[numArrayPossition-1];
    var tempId2=character[LettersArrayPossition]+num[numArrayPossition-2];
    var tempId3=character[LettersArrayPossition+1]+num[numArrayPossition-1];
    var tempId4=character[LettersArrayPossition-1]+num[numArrayPossition-1];

    switch (place.attr('id')) {
        case "ch17" : CountArray[0]++;break;
        case "ch18" : CountArray[1]++;break;
        case "ch19" : CountArray[2]++;break;
        case "ch20" : CountArray[3]++;break;
        case "ch21" : CountArray[4]++;break;
        case "ch22" : CountArray[5]++;break;
        case "ch23" : CountArray[6]++;break;
        case "ch24" : CountArray[7]++;break;

    }

    if(CountArray[0]==1){
        if(!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            place.addClass('clickpiece');
        }
        if(!($("#"+tempId2).children().hasClass('area')) && !($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            place.addClass('clickpiece');
        }
        if($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
        if($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('slectpath');
        }


    }else {
        if(!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
        if($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
        if($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }

    }
    if(CountArray[1]==1){
        if(!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            place.addClass('clickpiece');
        }
        if(!($("#"+tempId2).children().hasClass('area')) && !($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            place.addClass('clickpiece');
        }
        if($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
        if($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
    }else {
        if(!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
        if($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
        if($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('clickpiecce');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
    }
    if(CountArray[2]==1){
        if(!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            place.addClass('clickpiece');
        }
        if(!($("#"+tempId2).children().hasClass('area')) && !($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            place.addClass('clickpiece');
        }
        if($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
        if($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
    }else {
        if(!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            place.addClass('clickpice');
            place.removeClass('selectpath');
        }
        if($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');

        }
        if($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
    }
    if(CountArray[3]==1){
        if(!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            place.addClass('clickpiece');
        }
        if(!($("#"+tempId2).children().hasClass('area')) && !($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            place.addClass('clickpiece');
        }
        if($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
        if($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
    }else {
        if (!($("#" + tempId1).children().hasClass('area'))) {
            $("#" + tempId1).addClass('selectpath');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
        if ($("#" + tempId3).children().hasClass('Black')) {
            $("#" + tempId3).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
        if ($("#" + tempId4).children().hasClass('Black')) {
            $("#" + tempId4).addClass('selectpath');
            place.addClass('clickpiece');
        }
    }
     if(CountArray[4]==1){
        if(!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            place.addClass('clickpiece');
        }

        if(!($("#"+tempId2).children().hasClass('area')) && !($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            place.addClass('clickpiecce');
        }
        if($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            place.addClass('clickpiece');
            place.removeClass('selectpath');
        }
         if($("#"+tempId4).children().hasClass('Black')) {
             $("#" + tempId4).addClass('crosspiece');
             place.addClass('clickpiece');
             place.removeClass('selectpath');
         }
    }else {
         if(!($("#"+tempId1).children().hasClass('area'))){
             $("#"+tempId1).addClass('selectpath');
             place.addClass('clickpiece');
             place.removeClass('selectpath');
         }
         if($("#"+tempId3).children().hasClass('Black')){
             $("#"+tempId3).addClass('crosspiece');
             place.addClass('clickpiece');
             place.removeClass('selectpath');
         }
         if($("#"+tempId4).children().hasClass('Black')){
             $("#"+tempId4).addClass('crosspiece');
             place.addClass('clickpiece');
             place.removeClass('selectpath');
         }
     }

     if(CountArray[5]==1){
         if(!($("#"+tempId1).children().hasClass('area'))){
             $("#"+tempId1).addClass('selectpath');
             place.addClass('clickpiece');
         }
         if(!($("#"+tempId2).children().hasClass('area')) && !($("#"+tempId1).children().hasClass('area'))){
             $("#"+tempId2).addClass('selectpath');
             place.addClass('clickpiece');
         }
         if($("#"+tempId3).children().hasClass('Black')){
             $("#"+tempId3).addClass('crosspiece');
             place.addClass('clickpiece');
             place.removeClass('selectpath');
         }
         if($("#"+tempId4).children().hasClass('Black')){
             $("#"+tempId4).addClass('crosspiece');
             place.addClass('clickpiece');
             place.removeClass('selectpath');
         }

     }else {
         if(!($("#"+tempId1).children().hasClass('area'))){
             $("#"+tempId1).addClass('selectpath');
             place.addClass('clickpiece');
             place.removeClass('selectpath');
         }
         if($("#"+tempId3).children().hasClass('Black')){
             $("#"+tempId3).addClass('crosspiece');
             place.addClass('clickpiece');
             place.removeClass('selectpath');
         }
         if($("#"+tempId4).children().hasClass('Black')){
             $("#"+tempId4).addClass('crosspiece');
             place.addClass('clickpiece');
             place.removeClass('selectpath');
         }
     }
     if(CountArray[6]==1){
         if(!($("#"+tempId1).children().hasClass('area'))){
             $("#"+tempId1).addClass('selectpath');
             place.addClass('clickpiece');
         }
         if(!($("#"+tempId2).children().hasClass('area')) & !($("#"+tempId1).children().hasClass('area'))){
             $("#"+tempId2).addClass('selectpath');
             place.addClass('clickpiece');
         }
         if($("#"+tempId3).children().hasClass('Black')) {
             $("#" + tempId3).addClass('crosspiece');
             place.addClass('clickpiece');
             place.removeClass('selectpath');
         }
         if($("#"+tempId4).children().hasClass('Black')) {
             $("#" + tempId4).addClass('crosspiece');
             place.addClass('clickpiece');
             place.removeClass('selectpath');
         }else {
             if(!($("#"+tempId1).children().hasClass('area'))){
                 $("#"+tempId1).addClass('selectpath');
                 place.addClass('clickpiece');
                 place.removeClass('selectpath');
             }
             if($("#"+tempId3).children().hasClass('Black')){
                 $("#"+tempId3).addClass('crosspiece');
                 place.addClass('clickpiece');
                 place.removeClass('selectpath');
             }
             if($("#"+tempId4).children().hasClass('Black')){
                 $("#"+tempId4).addClass('crosspiece');
                 place.addClass('clickpiece');
                 place.removeClass('selectpath');
             }
         }

         if(CountArray[7]==1){
             if(!($("#"+tempId1).children().hasClass('area'))){
                 $("#"+tempId1).addClass('selectpath');
                 place.addClass('clickpiece');
             }
             if(!($("#"+tempId2).children().hasClass('area')) && !($("#"+tempId1).children().hasClass('area'))){
                 $("#"+tempId2).addClass('selectpath');
                 place.addClass('clickpiece');
             }
             if($("#"+tempId3).children().hasClass('Black')){
                 $("#"+tempId3).addClass('crosspiece');
                 place.addClass('clickpiece');
                 place.removeClass('selectpath');
             }
             if($("#"+tempId4).children().hasClass('Black')){
                 $("#"+tempId4).addClass('crosspiece');
                 place.addClass('clickpiece');
                 place.removeClass('selectpath');
             }
         }else {
             if(!($("#"+tempId1).children().hasClass('area'))){
                 $("#"+tempId1).addClass('selectpath');
                 place.addClass('clickpiece');
                 place.removeClass('selectpath');
             }
             if($("#"+tempId3).children().hasClass('Black')){
                 $("#"+tempId3).addClass('crosspiece');
                 place.addClass('clickpiece');
                 place.removeClass('selectpath');
             }

             if($("#"+tempId4).children().hasClass('Black')){
                 $("#"+tempId4).addClass('crosspiece');
                 place.addClass('clickpiece');
                 place.removeClass('selectpath');
             }
         }

        if(CountArray[8]==1) {
            if (!($("#" + tempId1).children().hasClass('area'))) {
                $("#" + tempId1).addClass('selectpath');
                place.addClass('clickpiece');
            }
            if (!($("#" + tempId2).children().hasClass('area')) && !($("#" + tempId1).children().hasClass('area'))) {
                $("#" + tempId2).addClass('selectpath');
                place.addClass('clickpiece');
            }
            if ($("#" + tempId3).children().hasClass('Black')) {
                $("#" + tempId3).addClass('crosspiece');
                place.addClass('clickpiece');
                place.removeClass('selectpath');
            }
            if ($("#" + tempId4).children().hasClass('Black')) {
                $("#" + tempId4).addClass('crosspiece');
                place.addClass('clickpiece');
                place.removeClass('selectpath');
            }
        }else {
             if(!($("#"+tempId1).children().hasClass('area'))){
                 $("#"+tempId1).addClass('selectpath');
                 place.addClass('clickpiece');
                 place.removeClass('selectpath');
             }
             if($("#"+tempId3).children().hasClass('Black')){
                 $("#"+tempId3).addClass('crosspiece');
                 place.addClass('clickpiece');
                 place.removeClass('selectpath');
             }
        }     if($("#"+tempId4).children().hasClass('Black')){
             $("#"+tempId4).addClass('crosspiece');
             place.addClass('clickpiece');
             place.removeClass('selectpath');
         }



     }
}


var rotateC=0;

function rotate() {
    if(rotateC==0){
        $("#board").css("transform","rotate(180deg)");
        $("#board").css("transition","3s");
        $(".area").css("transform","rotate(180deg)");
        $(".ss").css("transform","rotate(180deg)");
        rotateC++;
    }else if(rotateC==1){
        $("#board").css("transform","rotate(0deg)");
        $("#board").css("transition","3s");
        $(".area").css("transform","rotate(0deg)");
        $(".ss").css("transform","rotate(0deg)");
        rotateC=0;
    }
}

$(".col").on("click",function (eventData) {
    var currenttile=$(this);
    var currentpiece=$(".area.clickpiece");
    if ($(currenttile).hasClass('selectpath')) {
        currenttile.append(currentpiece);
        area.removeClass('clickpiece');
        ab.removeClass('selectpath');
        ab.removeClass('crosspiece');
        rotate();
    }

    if ($(currenttile).hasClass('crosspiece')) {
        var y=$(currentpiece).clone();
        $(currentpiece).remove();
        console.log(IdB);
        if((currentpiece.hasClass('Black'))){
            var x=$(currenttile).children().clone();
            $(currenttile).children().remove();
            $("#"+IdW).append(x);
            IdW++;
        }else{
            var x=$(currenttile).children().clone();
            $(currentSquar).children().remove();
            $("#"+IdB).append(x);
            IdB++;
        }
        $(currenttile).children().remove();
        currenttile.append(currentpiece);
        ab.removeClass('selectpath');
        area.removeClass('clickpiece');
        ab.removeClass('crosspiece');
    }
});





