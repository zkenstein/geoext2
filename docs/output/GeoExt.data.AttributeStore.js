Ext.data.JsonP.GeoExt_data_AttributeStore({"tagname":"class","name":"GeoExt.data.AttributeStore","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"AttributeStore.js","href":"AttributeStore.html#GeoExt-data-AttributeStore"}],"aliases":{},"alternateClassNames":[],"extends":"GeoExt.data.OwsStore","mixins":[],"requires":[],"uses":[],"members":[{"name":"feature","tagname":"cfg","owner":"GeoExt.data.AttributeStore","id":"cfg-feature","meta":{}},{"name":"format","tagname":"cfg","owner":"GeoExt.data.OwsStore","id":"cfg-format","meta":{}},{"name":"ignore","tagname":"cfg","owner":"GeoExt.data.AttributeStore","id":"cfg-ignore","meta":{}},{"name":"url","tagname":"cfg","owner":"GeoExt.data.OwsStore","id":"cfg-url","meta":{}},{"name":"model","tagname":"property","owner":"GeoExt.data.AttributeStore","id":"property-model","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"GeoExt.data.AttributeStore","id":"method-constructor","meta":{"private":true}},{"name":"applyFeature","tagname":"method","owner":"GeoExt.data.AttributeStore","id":"method-applyFeature","meta":{"private":true}},{"name":"applyFormat","tagname":"method","owner":"GeoExt.data.OwsStore","id":"method-applyFormat","meta":{"private":true}},{"name":"applyIgnore","tagname":"method","owner":"GeoExt.data.AttributeStore","id":"method-applyIgnore","meta":{"private":true}},{"name":"applyUrl","tagname":"method","owner":"GeoExt.data.OwsStore","id":"method-applyUrl","meta":{"private":true}},{"name":"getFeature","tagname":"method","owner":"GeoExt.data.AttributeStore","id":"method-getFeature","meta":{}},{"name":"getFormat","tagname":"method","owner":"GeoExt.data.OwsStore","id":"method-getFormat","meta":{}},{"name":"getIgnore","tagname":"method","owner":"GeoExt.data.AttributeStore","id":"method-getIgnore","meta":{}},{"name":"getUrl","tagname":"method","owner":"GeoExt.data.OwsStore","id":"method-getUrl","meta":{}},{"name":"setFeature","tagname":"method","owner":"GeoExt.data.AttributeStore","id":"method-setFeature","meta":{}},{"name":"setFormat","tagname":"method","owner":"GeoExt.data.OwsStore","id":"method-setFormat","meta":{}},{"name":"setIgnore","tagname":"method","owner":"GeoExt.data.AttributeStore","id":"method-setIgnore","meta":{}},{"name":"setUrl","tagname":"method","owner":"GeoExt.data.OwsStore","id":"method-setUrl","meta":{}}],"code_type":"ext_define","id":"class-GeoExt.data.AttributeStore","short_doc":"A store to work with DescribeFeatureType responses. ...","component":false,"superclasses":["Ext.data.Store","GeoExt.data.OwsStore"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='docClass'>GeoExt.data.OwsStore</a><div class='subclass '><strong>GeoExt.data.AttributeStore</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/AttributeStore.html#GeoExt-data-AttributeStore' target='_blank'>AttributeStore.js</a></div></pre><div class='doc-contents'><p>A store to work with DescribeFeatureType responses. This is a regular\nExt store preconfigured with a <a href=\"#!/api/GeoExt.data.AttributeModel\" rel=\"GeoExt.data.AttributeModel\" class=\"docClass\">GeoExt.data.AttributeModel</a>.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.create('<a href=\"#!/api/GeoExt.data.AttributeStore\" rel=\"GeoExt.data.AttributeStore\" class=\"docClass\">GeoExt.data.AttributeStore</a>', {\n    ignore: {type: 'xsd:string'},\n    url: 'http://host.wfsdescribefeaturetype'\n});\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-feature' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.AttributeStore'>GeoExt.data.AttributeStore</span><br/><a href='source/AttributeStore.html#GeoExt-data-AttributeStore-cfg-feature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.AttributeStore-cfg-feature' class='name expandable'>feature</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The OpenLayers.Feature.Vector passed to the reader.</p>\n</div><div class='long'><p>The OpenLayers.Feature.Vector passed to the reader.</p>\n</div></div></div><div id='cfg-format' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-cfg-format' class='name expandable'>format</a> : OpenLayers.Format<span class=\"signature\"></span></div><div class='description'><div class='short'>A parser for transforming the XHR response into an array of objects\nrepresenting attributes. ...</div><div class='long'><p>A parser for transforming the XHR response into an array of objects\nrepresenting attributes. Defaults to an {OpenLayers.Format.WMSDescribeLayer}\nparser.</p>\n</div></div></div><div id='cfg-ignore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.AttributeStore'>GeoExt.data.AttributeStore</span><br/><a href='source/AttributeStore.html#GeoExt-data-AttributeStore-cfg-ignore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.AttributeStore-cfg-ignore' class='name expandable'>ignore</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The ignore object passed to the reader.</p>\n</div><div class='long'><p>The ignore object passed to the reader.</p>\n</div></div></div><div id='cfg-url' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-cfg-url' class='name expandable'>url</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The URL from which to retrieve the WMS DescribeLayer document</p>\n</div><div class='long'><p>The URL from which to retrieve the WMS DescribeLayer document</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-model' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.AttributeStore'>GeoExt.data.AttributeStore</span><br/><a href='source/AttributeStore.html#GeoExt-data-AttributeStore-property-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.AttributeStore-property-model' class='name expandable'>model</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'GeoExt.data.AttributeModel'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.AttributeStore'>GeoExt.data.AttributeStore</span><br/><a href='source/AttributeStore.html#GeoExt-data-AttributeStore-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.data.AttributeStore-method-constructor' class='name expandable'>GeoExt.data.AttributeStore</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/GeoExt.data.AttributeStore\" rel=\"GeoExt.data.AttributeStore\" class=\"docClass\">GeoExt.data.AttributeStore</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.data.AttributeStore\" rel=\"GeoExt.data.AttributeStore\" class=\"docClass\">GeoExt.data.AttributeStore</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/GeoExt.data.OwsStore-method-constructor\" rel=\"GeoExt.data.OwsStore-method-constructor\" class=\"docClass\">GeoExt.data.OwsStore.constructor</a></p></div></div></div><div id='method-applyFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.AttributeStore'>GeoExt.data.AttributeStore</span><br/><a href='source/AttributeStore.html#GeoExt-data-AttributeStore-method-applyFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.AttributeStore-method-applyFeature' class='name expandable'>applyFeature</a>( <span class='pre'>feature</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>We're setting the sample feature for the reader ...</div><div class='long'><p>We're setting the sample feature for the reader</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>feature</span> : OpenLayers.Feature<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyFormat' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-method-applyFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-applyFormat' class='name expandable'>applyFormat</a>( <span class='pre'>newFormat</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newFormat</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-applyIgnore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.AttributeStore'>GeoExt.data.AttributeStore</span><br/><a href='source/AttributeStore.html#GeoExt-data-AttributeStore-method-applyIgnore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.AttributeStore-method-applyIgnore' class='name expandable'>applyIgnore</a>( <span class='pre'>ignore</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>We're setting the ignore property in the reader. ...</div><div class='long'><p>We're setting the ignore property in the reader.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ignore</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyUrl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-method-applyUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-applyUrl' class='name expandable'>applyUrl</a>( <span class='pre'>newValue</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newValue</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.AttributeStore'>GeoExt.data.AttributeStore</span><br/><a href='source/AttributeStore.html#GeoExt-data-AttributeStore-cfg-feature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.AttributeStore-method-getFeature' class='name expandable'>getFeature</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of feature. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.data.AttributeStore-cfg-feature\" rel=\"GeoExt.data.AttributeStore-cfg-feature\" class=\"docClass\">feature</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFormat' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-getFormat' class='name expandable'>getFormat</a>( <span class='pre'></span> ) : OpenLayers.Format<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of format. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.data.OwsStore-cfg-format\" rel=\"GeoExt.data.OwsStore-cfg-format\" class=\"docClass\">format</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>OpenLayers.Format</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getIgnore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.AttributeStore'>GeoExt.data.AttributeStore</span><br/><a href='source/AttributeStore.html#GeoExt-data-AttributeStore-cfg-ignore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.AttributeStore-method-getIgnore' class='name expandable'>getIgnore</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of ignore. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.data.AttributeStore-cfg-ignore\" rel=\"GeoExt.data.AttributeStore-cfg-ignore\" class=\"docClass\">ignore</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUrl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-getUrl' class='name expandable'>getUrl</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of url. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.data.OwsStore-cfg-url\" rel=\"GeoExt.data.OwsStore-cfg-url\" class=\"docClass\">url</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.AttributeStore'>GeoExt.data.AttributeStore</span><br/><a href='source/AttributeStore.html#GeoExt-data-AttributeStore-cfg-feature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.AttributeStore-method-setFeature' class='name expandable'>setFeature</a>( <span class='pre'>feature</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of feature. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.data.AttributeStore-cfg-feature\" rel=\"GeoExt.data.AttributeStore-cfg-feature\" class=\"docClass\">feature</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>feature</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setFormat' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-setFormat' class='name expandable'>setFormat</a>( <span class='pre'>format</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of format. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.data.OwsStore-cfg-format\" rel=\"GeoExt.data.OwsStore-cfg-format\" class=\"docClass\">format</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : OpenLayers.Format<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setIgnore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.AttributeStore'>GeoExt.data.AttributeStore</span><br/><a href='source/AttributeStore.html#GeoExt-data-AttributeStore-cfg-ignore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.AttributeStore-method-setIgnore' class='name expandable'>setIgnore</a>( <span class='pre'>ignore</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of ignore. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.data.AttributeStore-cfg-ignore\" rel=\"GeoExt.data.AttributeStore-cfg-ignore\" class=\"docClass\">ignore</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ignore</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setUrl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-setUrl' class='name expandable'>setUrl</a>( <span class='pre'>url</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of url. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.data.OwsStore-cfg-url\" rel=\"GeoExt.data.OwsStore-cfg-url\" class=\"docClass\">url</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});