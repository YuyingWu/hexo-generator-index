'use strict';

var pagination = require('hexo-pagination');

module.exports = function(locals) {
  var config = this.config;
  var posts = locals.posts;
  var paginationDir = config.pagination_dir || 'page';
  var path = config.index_generator.path || '';

  posts.data = posts.data.sort(function(a, b) {
    !a.top && (a.top = 0);
    !b.top && (b.top = 0);

    !a.updateDate && (a.updateDate = a.date);
    !b.updateDate && (b.updateDate = b.date);

    // 若top值一样则按照文章日期降序排，否则按照top值降序排
    if(a.top == b.top){
      return b.updateDate - a.updateDate; // 
    }else{
      return b.top - a.top; // 
    }
  });

  return pagination(path, posts, {
    perPage: config.index_generator.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
};
