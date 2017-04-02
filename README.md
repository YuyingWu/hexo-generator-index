# hexo-generator-index-plus

Index generator plus for [Hexo], which includes `top` and `updateDate` order rules.

## Installation

``` bash
$ npm install hexo-generator-index-plus --save
```

## Options

Default order rules: 
`top` descending -> `updateDate` descending -> `date` descending

``` yaml
index_generator:
  path: ''
  per_page: 10
```
- **path**: Root path for your blogs index page. (default = '')
- **per_page**: Posts displayed per page. (0 = disable pagination)

## Front-matter

```
title: Blog Log
tags:
  - blog
categories:
  - tech
date: 2015-04-23 00:35:45
updateDate: 2017-04-02 15:13:00
top: 1
```
- **top**: No.1 priority for post order. The higher, the topper.
- **updateDate**：anthoer date instead of create date, which you want to highlight.(No.2 priority)
- **date**: create time of the post, the default comparing attribute.
 
## License

MIT
