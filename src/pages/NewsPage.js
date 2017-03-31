exports.create = function() {
 var page = new tabris.Page({title: "News"});
 new tabris.TextView({
 centerX: 0, centerY: 0,
 text: 'No news yet!'
 }).appendTo(page);
 return page;
};
