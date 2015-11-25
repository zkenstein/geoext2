Ext.data.JsonP.Ext_grid_feature_Feature({"tagname":"class","name":"Ext.grid.feature.Feature","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Feature.js","href":"Feature2.html#Ext-grid-feature-Feature"}],"abstract":true,"aliases":{"feature":["feature"]},"alternateClassNames":[],"extends":"Ext.util.Observable","mixins":[],"requires":[],"uses":[],"members":[{"name":"disabled","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-disabled","meta":{}},{"name":"eventPrefix","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-eventPrefix","meta":{}},{"name":"eventSelector","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-eventSelector","meta":{}},{"name":"grid","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-grid","meta":{}},{"name":"hasFeatureEvent","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-hasFeatureEvent","meta":{}},{"name":"isFeature","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-isFeature","meta":{"private":true}},{"name":"view","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-view","meta":{}},{"name":"wrapsItem","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-wrapsItem","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-constructor","meta":{}},{"name":"clone","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-clone","meta":{"private":true}},{"name":"destroy","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-destroy","meta":{"private":true}},{"name":"disable","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-disable","meta":{}},{"name":"enable","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-enable","meta":{}},{"name":"getFireEventArgs","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-getFireEventArgs","meta":{"template":true}},{"name":"init","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-init","meta":{"private":true}},{"name":"vetoEvent","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-vetoEvent","meta":{"private":true}}],"code_type":"ext_define","id":"class-Ext.grid.feature.Feature","short_doc":"A feature is a type of plugin that is specific to the Ext.grid.Panel. ...","component":false,"superclasses":["Ext.util.Observable"],"subclasses":["Ext.grid.feature.AbstractSummary","Ext.grid.feature.Grouping","Ext.grid.feature.RowBody"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.util.Observable<div class='subclass '><strong>Ext.grid.feature.Feature</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.grid.feature.AbstractSummary' rel='Ext.grid.feature.AbstractSummary' class='docClass'>Ext.grid.feature.AbstractSummary</a></div><div class='dependency'><a href='#!/api/Ext.grid.feature.Grouping' rel='Ext.grid.feature.Grouping' class='docClass'>Ext.grid.feature.Grouping</a></div><div class='dependency'><a href='#!/api/Ext.grid.feature.RowBody' rel='Ext.grid.feature.RowBody' class='docClass'>Ext.grid.feature.RowBody</a></div><h4>Files</h4><div class='dependency'><a href='source/Feature2.html#Ext-grid-feature-Feature' target='_blank'>Feature.js</a></div></pre><div class='doc-contents'><p>A feature is a type of plugin that is specific to the <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a>. It provides several\nhooks that allows the developer to inject additional functionality at certain points throughout the\ngrid creation cycle. This class provides the base template methods that are available to the developer,\nit should be extended.</p>\n\n<p>There are several built in features that extend this class, for example:</p>\n\n<ul>\n<li><a href=\"#!/api/Ext.grid.feature.Grouping\" rel=\"Ext.grid.feature.Grouping\" class=\"docClass\">Ext.grid.feature.Grouping</a> - Shows grid rows in groups as specified by the Ext.data.Store</li>\n<li><a href=\"#!/api/Ext.grid.feature.RowBody\" rel=\"Ext.grid.feature.RowBody\" class=\"docClass\">Ext.grid.feature.RowBody</a> - Adds a body section for each grid row that can contain markup.</li>\n<li><a href=\"#!/api/Ext.grid.feature.Summary\" rel=\"Ext.grid.feature.Summary\" class=\"docClass\">Ext.grid.feature.Summary</a> - Adds a summary row at the bottom of the grid with aggregate totals for a column.</li>\n</ul>\n\n\n<h2>Using Features</h2>\n\n<p>A feature is added to the grid by specifying it an array of features in the configuration:</p>\n\n<pre><code>var groupingFeature = Ext.create('<a href=\"#!/api/Ext.grid.feature.Grouping\" rel=\"Ext.grid.feature.Grouping\" class=\"docClass\">Ext.grid.feature.Grouping</a>');\nExt.create('<a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a>', {\n    // other options\n    features: [groupingFeature]\n});\n</code></pre>\n\n<h2>Writing Features</h2>\n\n<p>A Feature may add new DOM structure within the structure of a grid.</p>\n\n<p>A grid is essentially a <code>&lt;table&gt;</code> element. A <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">TableView</a> instance uses four XTemplates\nto render the grid, <code>tpl</code>, <code>itemTpl</code>, <code>rowTpl</code>, <code>cellTpl</code>.</p>\n\n<p>A <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">TableView</a> uses its <code>tpl</code> to emit the item encapsulating HTML tags into its output stream.\nTo render the rows, it invokes <a href=\"#!/api/Ext.view.Table-method-renderRows\" rel=\"Ext.view.Table-method-renderRows\" class=\"docClass\">Ext.view.Table.renderRows</a> passing the <code>rows</code> member of its data object and the <code>columns</code> member of its data object.</p>\n\n<p>The <code>tpl</code>'s data object Looks like this:\n    {\n        view: owningTableView,\n        rows: recordsToRender,\n        viewStartIndex: indexOfFirstRecordInStore,\n        tableStyle: styleString\n    }</p>\n\n<ul>\n<li>A <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">TableView</a> uses its <code>rowTpl</code> to emit a <code>&lt;tr&gt;</code> HTML tag to its output stream. To render cells,\nit invokes <a href=\"#!/api/Ext.view.Table-method-renderCell\" rel=\"Ext.view.Table-method-renderCell\" class=\"docClass\">Ext.view.Table.renderCell</a> passing the <code>rows</code> member of its data object.</li>\n</ul>\n\n\n<p>The <code>itemTpl</code> and <code>rowTpl</code>'s data object looks like this:</p>\n\n<pre><code>{\n    view:        owningTableView,\n    record:      recordToRender,\n    recordIndex: indexOfRecordInStore,\n    rowIndex:    indexOfRowInView,\n    columns:     arrayOfColumnDefinitions,\n    itemClasses: arrayOfClassNames, // For outermost row in case of wrapping\n    rowClasses:  arrayOfClassNames,  // For internal data bearing row in case of wrapping\n    rowStyle:    styleString\n}\n</code></pre>\n\n<ul>\n<li>A <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">TableView</a> uses its <code>cellTpl</code> to emit a <code>&lt;td&gt;</code> HTML tag to its output stream.</li>\n</ul>\n\n\n<p>The <code>cellTpl's</code> data object looks like this:</p>\n\n<pre><code>{\n    record: recordToRender\n    column: columnToRender;\n    recordIndex: indexOfRecordInStore,\n    rowIndex:    indexOfRowInView,\n    columnIndex: columnIndex,\n    align: columnAlign,\n    tdCls: classForCell\n}\n</code></pre>\n\n<p>A Feature may inject its own tpl or rowTpl or cellTpl into the <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">TableView</a>'s rendering by\ncalling <a href=\"#!/api/Ext.view.Table-method-addTpl\" rel=\"Ext.view.Table-method-addTpl\" class=\"docClass\">Ext.view.Table.addTpl</a> or <a href=\"#!/api/Ext.view.Table-method-addRowTpl\" rel=\"Ext.view.Table-method-addRowTpl\" class=\"docClass\">Ext.view.Table.addRowTpl</a> or <a href=\"#!/api/Ext.view.Table-method-addCellTpl\" rel=\"Ext.view.Table-method-addCellTpl\" class=\"docClass\">Ext.view.Table.addCellTpl</a>.</p>\n\n<p>The passed XTemplate is added <em>upstream</em> of the default template for the table element in a link list of XTemplates which contribute\nto the element's HTML. It may emit appropriate HTML strings into the output stream <em>around</em> a call to</p>\n\n<pre><code>this.nextTpl.apply(values, out, parent);\n</code></pre>\n\n<p>This passes the current value context, output stream and the parent value context to the next XTemplate in the list.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-disabled' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-property-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-disabled' class='name expandable'>disabled</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>True when feature is disabled. ...</div><div class='long'><p>True when feature is disabled.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-eventPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-property-eventPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-eventPrefix' class='name expandable'>eventPrefix</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Prefix to use when firing events on the view. ...</div><div class='long'><p>Prefix to use when firing events on the view.\nFor example a prefix of group would expose \"groupclick\", \"groupcontextmenu\", \"groupdblclick\".</p>\n</div></div></div><div id='property-eventSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-property-eventSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-eventSelector' class='name expandable'>eventSelector</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Selector used to determine when to fire the event with the eventPrefix.</p>\n</div><div class='long'><p>Selector used to determine when to fire the event with the eventPrefix.</p>\n</div></div></div><div id='property-grid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-property-grid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-grid' class='name expandable'>grid</a> : <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Reference to the grid panel</p>\n</div><div class='long'><p>Reference to the grid panel</p>\n</div></div></div><div id='property-hasFeatureEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-property-hasFeatureEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-hasFeatureEvent' class='name expandable'>hasFeatureEvent</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Most features will expose additional events, some may not and will\nneed to change this to false. ...</div><div class='long'><p>Most features will expose additional events, some may not and will\nneed to change this to false.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-isFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-property-isFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-isFeature' class='name expandable'>isFeature</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>true in this class to identify an object as an instantiated Feature, or subclass thereof. ...</div><div class='long'><p><code>true</code> in this class to identify an object as an instantiated Feature, or subclass thereof.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-view' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-property-view' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-view' class='name expandable'>view</a> : <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">Ext.view.Table</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Reference to the TableView.</p>\n</div><div class='long'><p>Reference to the TableView.</p>\n</div></div></div><div id='property-wrapsItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-property-wrapsItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-wrapsItem' class='name expandable'>wrapsItem</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.grid.feature.Feature-method-constructor' class='name expandable'>Ext.grid.feature.Feature</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.grid.feature.Feature\" rel=\"Ext.grid.feature.Feature\" class=\"docClass\">Ext.grid.feature.Feature</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.grid.feature.Feature\" rel=\"Ext.grid.feature.Feature\" class=\"docClass\">Ext.grid.feature.Feature</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-disable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disables the feature. ...</div><div class='long'><p>Disables the feature.</p>\n</div></div></div><div id='method-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Enables the feature. ...</div><div class='long'><p>Enables the feature.</p>\n</div></div></div><div id='method-getFireEventArgs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-method-getFireEventArgs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-getFireEventArgs' class='name expandable'>getFireEventArgs</a>( <span class='pre'>eventName, view, featureTarget, e</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Abstract method to be overriden when a feature should add additional\narguments to its event signature. ...</div><div class='long'><p>Abstract method to be overriden when a feature should add additional\narguments to its event signature. By default the event will fire:</p>\n\n<ul>\n<li>view - The underlying <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">Ext.view.Table</a></li>\n<li>featureTarget - The matched element by the defined <a href=\"#!/api/Ext.grid.feature.Feature-property-eventSelector\" rel=\"Ext.grid.feature.Feature-property-eventSelector\" class=\"docClass\">eventSelector</a></li>\n</ul>\n\n\n<p>The method must also return the eventName as the first index of the array\nto be passed to fireEvent.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>view</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>featureTarget</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-vetoEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.Feature'>Ext.grid.feature.Feature</span><br/><a href='source/Feature2.html#Ext-grid-feature-Feature-method-vetoEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-vetoEvent' class='name expandable'>vetoEvent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{"abstract":true}});