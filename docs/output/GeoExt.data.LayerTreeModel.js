Ext.data.JsonP.GeoExt_data_LayerTreeModel({"tagname":"class","name":"GeoExt.data.LayerTreeModel","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"LayerTreeModel.js","href":"LayerTreeModel.html#GeoExt-data-LayerTreeModel"}],"aliases":{"model":["gx_layertree"]},"alternateClassNames":["GeoExt.data.LayerTreeRecord"],"extends":"Ext.data.Model","mixins":[],"requires":["Ext.data.proxy.Memory","Ext.data.reader.Json"],"uses":[],"members":[{"name":"fields","tagname":"property","owner":"GeoExt.data.LayerTreeModel","id":"property-fields","meta":{"private":true}},{"name":"proxy","tagname":"property","owner":"GeoExt.data.LayerTreeModel","id":"property-proxy","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"GeoExt.data.LayerTreeModel","id":"method-constructor","meta":{"private":true}},{"name":"afterEdit","tagname":"method","owner":"GeoExt.data.LayerTreeModel","id":"method-afterEdit","meta":{"private":true}},{"name":"afteredit","tagname":"event","owner":"GeoExt.data.LayerTreeModel","id":"event-afteredit","meta":{}}],"code_type":"ext_define","id":"class-GeoExt.data.LayerTreeModel","short_doc":"Model for trees that use GeoExt tree components. ...","component":false,"superclasses":["Ext.data.Model"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.data.LayerTreeRecord</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Model<div class='subclass '><strong>GeoExt.data.LayerTreeModel</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.data.proxy.Memory</div><div class='dependency'>Ext.data.reader.Json</div><h4>Files</h4><div class='dependency'><a href='source/LayerTreeModel.html#GeoExt-data-LayerTreeModel' target='_blank'>LayerTreeModel.js</a></div></pre><div class='doc-contents'><p>Model for trees that use GeoExt tree components. It can also hold plain\nExt JS layer nodes.</p>\n\n<p>This model adds several fields that are specific to tree extensions\nprovided by GeoExt:</p>\n\n<ul>\n<li><strong>plugins</strong> Object[]: The plugins for this node.</li>\n<li><strong>layer</strong> OpenLayers.Layer: The layer this node is connected to.</li>\n<li><strong>container</strong> Ext.AbstractPlugin: The instance of a container plugin.\nRead only.</li>\n<li><strong>checkedGroup</strong> String: An identifier for a group of mutually exclusive\nlayers. If set, the node will render with a radio button instead of a\ncheckbox.</li>\n<li><strong>fixedText</strong> Boolean: Used to determine if a node's name should change.\ndynamically if the name of the connected layer changes, if any. Read only.</li>\n<li><strong>component</strong> Ext.Component: The component to be rendered with this node,\nif any.</li>\n</ul>\n\n\n<p>A typical configuration that makes use of some of these extended sttings\ncould look like this:\n    {\n        plugins: [{ptype: 'gx_layer'}],\n        layer: myLayerRecord.getLayer(),\n        checkedGroup: 'natural',\n        component: {\n            xtype: \"gx_wmslegend\",\n            layerRecord: myLayerRecord,\n            showTitle: false\n        }\n    }</p>\n\n<p>The above creates a node with a <a href=\"#!/api/GeoExt.tree.LayerNode\" rel=\"GeoExt.tree.LayerNode\" class=\"docClass\">GeoExt.tree.LayerNode</a> plugin, and connects\nit to a layer record that was previously assigned to the myLayerRecord\nvariable. The node will be rendered with a <a href=\"#!/api/GeoExt.container.WmsLegend\" rel=\"GeoExt.container.WmsLegend\" class=\"docClass\">GeoExt.container.WmsLegend</a>,\nconfigured with the same layer.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fields' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerTreeModel'>GeoExt.data.LayerTreeModel</span><br/><a href='source/LayerTreeModel.html#GeoExt-data-LayerTreeModel-property-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerTreeModel-property-fields' class='name expandable'>fields</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{name: 'text', type: 'string'}, {name: 'plugins'}, {name: 'layer'}, {name: 'container'}, {name: 'checkedGroup', type: 'string'}, {name: 'fixedText', type: 'bool'}, {name: 'component'}]</code></p></div></div></div><div id='property-proxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerTreeModel'>GeoExt.data.LayerTreeModel</span><br/><a href='source/LayerTreeModel.html#GeoExt-data-LayerTreeModel-property-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerTreeModel-property-proxy' class='name expandable'>proxy</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{type: &quot;memory&quot;}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerTreeModel'>GeoExt.data.LayerTreeModel</span><br/><a href='source/LayerTreeModel.html#GeoExt-data-LayerTreeModel-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.data.LayerTreeModel-method-constructor' class='name expandable'>GeoExt.data.LayerTreeModel</a>( <span class='pre'>data, id, raw, convertedData</span> ) : <a href=\"#!/api/GeoExt.data.LayerTreeModel\" rel=\"GeoExt.data.LayerTreeModel\" class=\"docClass\">GeoExt.data.LayerTreeModel</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>raw</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>convertedData</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.data.LayerTreeModel\" rel=\"GeoExt.data.LayerTreeModel\" class=\"docClass\">GeoExt.data.LayerTreeModel</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterEdit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerTreeModel'>GeoExt.data.LayerTreeModel</span><br/><a href='source/LayerTreeModel.html#GeoExt-data-LayerTreeModel-method-afterEdit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerTreeModel-method-afterEdit' class='name expandable'>afterEdit</a>( <span class='pre'>modifiedFieldNames</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>modifiedFieldNames</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/GeoExt.data.LayerTreeModel-event-afteredit\" rel=\"GeoExt.data.LayerTreeModel-event-afteredit\" class=\"docClass\">afteredit</a></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-afteredit' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.LayerTreeModel'>GeoExt.data.LayerTreeModel</span><br/><a href='source/LayerTreeModel.html#GeoExt-data-LayerTreeModel-event-afteredit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.LayerTreeModel-event-afteredit' class='name expandable'>afteredit</a>( <span class='pre'>this, modifiedFieldNames, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires after the node's fields were modified. ...</div><div class='long'><p>Fires after the node's fields were modified.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/GeoExt.data.LayerTreeModel\" rel=\"GeoExt.data.LayerTreeModel\" class=\"docClass\">GeoExt.data.LayerTreeModel</a><div class='sub-desc'><p>This model instance.</p>\n</div></li><li><span class='pre'>modifiedFieldNames</span> : String[]<div class='sub-desc'><p>The names of the fields that were\nedited.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});