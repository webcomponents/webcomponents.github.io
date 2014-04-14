---
title: 'Sandbox'
layout: page
---

The WebComponents.org Sandbox can be used to discuss your implementations,
patterns and APIs for different types of elements and widgets.

An example of the type of discussion that might happen on an category page is about how APIs for a particular type of Web Component might be structured. Like, Tabs.

`polymer-ui-tabs` allows a developer to define a tab component by specifying a number of child tags (e.g `<span>`s) within a `polymer-ui-tabs` element:

```
<polymer-ui-tabs selected="0">
    <span>One</span>
    <span>Two</span>
    <span>Three</span>
    <span>Four</span>
</polymer-ui-tabs>
```

`el-selectable`, does something similar, allowing you to define a selectable tab by specifying child elements of any type within a parent element:

```
<el-selectable selectedIndex="0">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</el-selectable>
```

As we can see, both components support an attribute for setting the selected index here. `polymer-ui-tabs` uses `selected` whilst `el-selectable` uses `selectedIndex`. In this case `selected` is more terse and is easier to type out and remember. If `el-selectable` considered revising their API to use `selected` in the future, it would be easier to switch between element types more easily without that much of a rewrite.
