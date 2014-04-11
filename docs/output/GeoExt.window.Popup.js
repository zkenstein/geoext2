Ext.data.JsonP.GeoExt_window_Popup({"tagname":"class","name":"GeoExt.window.Popup","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Popup.js","href":"Popup.html#GeoExt-window-Popup"}],"aliases":{"widget":["gx_popup"]},"alternateClassNames":["GeoExt.Popup"],"extends":"Ext.window.Window","mixins":[],"requires":["GeoExt.Version"],"uses":[],"members":[{"name":"ancCls","tagname":"cfg","owner":"GeoExt.window.Popup","id":"cfg-ancCls","meta":{}},{"name":"anchorPosition","tagname":"cfg","owner":"GeoExt.window.Popup","id":"cfg-anchorPosition","meta":{}},{"name":"anchored","tagname":"cfg","owner":"GeoExt.window.Popup","id":"cfg-anchored","meta":{}},{"name":"location","tagname":"cfg","owner":"GeoExt.window.Popup","id":"cfg-location","meta":{}},{"name":"map","tagname":"cfg","owner":"GeoExt.window.Popup","id":"cfg-map","meta":{}},{"name":"panIn","tagname":"cfg","owner":"GeoExt.window.Popup","id":"cfg-panIn","meta":{}},{"name":"unpinnable","tagname":"cfg","owner":"GeoExt.window.Popup","id":"cfg-unpinnable","meta":{}},{"name":"animCollapse","tagname":"property","owner":"GeoExt.window.Popup","id":"property-animCollapse","meta":{"private":true}},{"name":"draggable","tagname":"property","owner":"GeoExt.window.Popup","id":"property-draggable","meta":{"private":true}},{"name":"insideViewport","tagname":"property","owner":"GeoExt.window.Popup","id":"property-insideViewport","meta":{"private":true}},{"name":"popupCls","tagname":"property","owner":"GeoExt.window.Popup","id":"property-popupCls","meta":{"private":true}},{"name":"shadow","tagname":"property","owner":"GeoExt.window.Popup","id":"property-shadow","meta":{"private":true}},{"name":"addAnchorEvents","tagname":"method","owner":"GeoExt.window.Popup","id":"method-addAnchorEvents","meta":{"private":true}},{"name":"beforeDestroy","tagname":"method","owner":"GeoExt.window.Popup","id":"method-beforeDestroy","meta":{"private":true}},{"name":"initComponent","tagname":"method","owner":"GeoExt.window.Popup","id":"method-initComponent","meta":{"private":true}},{"name":"initTools","tagname":"method","owner":"GeoExt.window.Popup","id":"method-initTools","meta":{"private":true}},{"name":"maximize","tagname":"method","owner":"GeoExt.window.Popup","id":"method-maximize","meta":{"private":true}},{"name":"onMapMove","tagname":"method","owner":"GeoExt.window.Popup","id":"method-onMapMove","meta":{"private":true}},{"name":"onRender","tagname":"method","owner":"GeoExt.window.Popup","id":"method-onRender","meta":{"private":true}},{"name":"panIntoView","tagname":"method","owner":"GeoExt.window.Popup","id":"method-panIntoView","meta":{"private":true}},{"name":"position","tagname":"method","owner":"GeoExt.window.Popup","id":"method-position","meta":{"private":true}},{"name":"removeAnchorEvents","tagname":"method","owner":"GeoExt.window.Popup","id":"method-removeAnchorEvents","meta":{"private":true}},{"name":"setSize","tagname":"method","owner":"GeoExt.window.Popup","id":"method-setSize","meta":{}},{"name":"show","tagname":"method","owner":"GeoExt.window.Popup","id":"method-show","meta":{"private":true}},{"name":"unanchorPopup","tagname":"method","owner":"GeoExt.window.Popup","id":"method-unanchorPopup","meta":{"private":true}}],"code_type":"ext_define","id":"class-GeoExt.window.Popup","short_doc":"A popup is a specialized window that supports anchoring to a particular\nlocation in a MapPanel. ...","component":false,"superclasses":["Ext.window.Window"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.Popup</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.window.Window<div class='subclass '><strong>GeoExt.window.Popup</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.Version' rel='GeoExt.Version' class='docClass'>GeoExt.Version</a></div><h4>Files</h4><div class='dependency'><a href='source/Popup.html#GeoExt-window-Popup' target='_blank'>Popup.js</a></div></pre><div class='doc-contents'><p>A popup is a specialized window that supports anchoring to a particular\nlocation in a <a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">MapPanel</a>.</p>\n\n<p>When a popup is anchored to a <a href=\"#!/api/GeoExt.window.Popup-cfg-location\" rel=\"GeoExt.window.Popup-cfg-location\" class=\"docClass\">location</a>, that means that\nthe popup will visibly point to the location on the map,\nand move accordingly when the map is panned or zoomed.</p>\n\n<p>When you use the popup in an application, make sure to include the proper\nstylesheet depending on the Ext theme that you use: <code>popup-classic.css</code>,\n<code>popup-access.css</code>, 'popup-gray.css<code>or</code>popup-neptune.css`.</p>\n\n<p>Example:</p>\n\n<pre><code>var popup = Ext.create('<a href=\"#!/api/GeoExt.window.Popup\" rel=\"GeoExt.window.Popup\" class=\"docClass\">GeoExt.window.Popup</a>', {\n    title: \"My Popup\",\n    location: feature,\n    width: 200,\n    html: \"&lt;div&gt;Popup content&lt;/div&gt;\",\n    collapsible: true\n});\n</code></pre>\n\n<p>Or create it via <code>xtype</code> declaration:</p>\n\n<p>Example:</p>\n\n<pre><code>var popup = {\n    xtype: 'gx_popup',\n    title: \"My Popup\",\n    location: feature,\n    width: 200,\n    html: \"&lt;div&gt;Popup content&lt;/div&gt;\",\n    collapsible: true\n};\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-ancCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-cfg-ancCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-cfg-ancCls' class='name expandable'>ancCls</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>CSS class name for the popup's anchor.</p>\n</div><div class='long'><p>CSS class name for the popup's anchor.</p>\n</div></div></div><div id='cfg-anchorPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-cfg-anchorPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-cfg-anchorPosition' class='name expandable'>anchorPosition</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Controls the anchor position for the popup. ...</div><div class='long'><p>Controls the anchor position for the popup. If set to <code>auto</code>, the anchor\nwill be positioned on the top or the bottom of the window, minimizing map\nmovement. Supported values are <code>bottom-left</code>, <code>bottom-right</code>, <code>top-left</code>,\n<code>top-right</code> or <code>auto</code>.</p>\n<p>Defaults to: <code>&quot;auto&quot;</code></p></div></div></div><div id='cfg-anchored' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-cfg-anchored' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-cfg-anchored' class='name expandable'>anchored</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>The popup begins anchored to its location. ...</div><div class='long'><p>The popup begins anchored to its location.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-location' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-cfg-location' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-cfg-location' class='name expandable'>location</a> : OpenLayers.Feature.Vector/OpenLayers.LonLat/OpenLayers.Pixel<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A location for this popup's anchor.</p>\n</div><div class='long'><p>A location for this popup's anchor.</p>\n</div></div></div><div id='cfg-map' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-cfg-map' class='name expandable'>map</a> : <a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a>/OpenLayers.Map<span class=\"signature\"></span></div><div class='description'><div class='short'>The map this popup will be anchored to (only required if anchored\nis set to true and the map cannot be derived from t...</div><div class='long'><p>The map this popup will be anchored to (only required if <code>anchored</code>\nis set to <code>true</code> and the map cannot be derived from the <code>location</code>'s\nlayer).</p>\n</div></div></div><div id='cfg-panIn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-cfg-panIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-cfg-panIn' class='name expandable'>panIn</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>The popup should pan the map so that the popup is fully in view when it\nis rendered. ...</div><div class='long'><p>The popup should pan the map so that the popup is fully in view when it\nis rendered.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-unpinnable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-cfg-unpinnable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-cfg-unpinnable' class='name expandable'>unpinnable</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>The popup should have a \"unpin\" tool that unanchors it from\nits location. ...</div><div class='long'><p>The popup should have a \"unpin\" tool that unanchors it from\nits location.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-animCollapse' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-property-animCollapse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-property-animCollapse' class='name expandable'>animCollapse</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Animate the transition when the panel is collapsed. ...</div><div class='long'><p>Animate the transition when the panel is collapsed. Collapsing animation\nis not supported yet for popups.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-draggable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-property-draggable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-property-draggable' class='name expandable'>draggable</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Enable dragging of this Panel. ...</div><div class='long'><p>Enable dragging of this Panel. Because the popup defaults to being\nanchored, and anchored popups should not be draggable.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-insideViewport' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-property-insideViewport' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-property-insideViewport' class='name expandable'>insideViewport</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Whether the popup is currently inside the map viewport.</p>\n</div><div class='long'><p>Whether the popup is currently inside the map viewport.</p>\n</div></div></div><div id='property-popupCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-property-popupCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-property-popupCls' class='name expandable'>popupCls</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>CSS class name for the popup DOM elements. ...</div><div class='long'><p>CSS class name for the popup DOM elements.</p>\n<p>Defaults to: <code>&quot;gx-popup&quot;</code></p></div></div></div><div id='property-shadow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-property-shadow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-property-shadow' class='name expandable'>shadow</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Give the popup window a shadow. ...</div><div class='long'><p>Give the popup window a shadow. Because shadows are not supported yet for\npopups (the shadow does not look good with the anchor).</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addAnchorEvents' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-method-addAnchorEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-method-addAnchorEvents' class='name expandable'>addAnchorEvents</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Adds appropriate anchor events. ...</div><div class='long'><p>Adds appropriate anchor events.</p>\n</div></div></div><div id='method-beforeDestroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-method-beforeDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-method-beforeDestroy' class='name expandable'>beforeDestroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Cleanup events before destroying the popup. ...</div><div class='long'><p>Cleanup events before destroying the popup.</p>\n</div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initTools' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-method-initTools' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-method-initTools' class='name expandable'>initTools</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Initializes the tools on the popup. ...</div><div class='long'><p>Initializes the tools on the popup.  In particular it adds the 'unpin'\ntool if the popup is unpinnable.</p>\n</div></div></div><div id='method-maximize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-method-maximize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-method-maximize' class='name expandable'>maximize</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Override. ...</div><div class='long'><p>Override.</p>\n</div></div></div><div id='method-onMapMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-method-onMapMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-method-onMapMove' class='name expandable'>onMapMove</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called during map movements; does reposition the popup. ...</div><div class='long'><p>Called during map movements; does reposition the popup.</p>\n</div></div></div><div id='method-onRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-method-onRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-method-onRender' class='name expandable'>onRender</a>( <span class='pre'>ct, position</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The \"onRender\" listener of this component. ...</div><div class='long'><p>The \"onRender\" listener of this component.\nExecutes when the popup is rendered and creates the anchor div</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>position</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-panIntoView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-method-panIntoView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-method-panIntoView' class='name expandable'>panIntoView</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Pans the MapPanel's map so that an anchored popup can come entirely\ninto view, with padding specified as per normal O...</div><div class='long'><p>Pans the MapPanel's map so that an anchored popup can come entirely\ninto view, with padding specified as per normal OpenLayers. Map popup\npadding.</p>\n</div></div></div><div id='method-position' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-method-position' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-method-position' class='name expandable'>position</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Positions the popup relative to its current location. ...</div><div class='long'><p>Positions the popup relative to its current location.</p>\n</div></div></div><div id='method-removeAnchorEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-method-removeAnchorEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-method-removeAnchorEvents' class='name expandable'>removeAnchorEvents</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Removes previously bound anchor events. ...</div><div class='long'><p>Removes previously bound anchor events.</p>\n</div></div></div><div id='method-setSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-method-setSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-method-setSize' class='name expandable'>setSize</a>( <span class='pre'>w, h</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the size of the popup, taking into account the size of the anchor. ...</div><div class='long'><p>Sets the size of the popup, taking into account the size of the anchor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>w</span> : Integer<div class='sub-desc'><p>the width to apply.</p>\n</div></li><li><span class='pre'>h</span> : Integer<div class='sub-desc'><p>the height to apply.</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-method-show' class='name expandable'>show</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Override. ...</div><div class='long'><p>Override.</p>\n</div></div></div><div id='method-unanchorPopup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.window.Popup'>GeoExt.window.Popup</span><br/><a href='source/Popup.html#GeoExt-window-Popup-method-unanchorPopup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.window.Popup-method-unanchorPopup' class='name expandable'>unanchorPopup</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Unanchors a popup from its location. ...</div><div class='long'><p>Unanchors a popup from its location. This removes the popup from its\nMapPanel and adds it to the page body.</p>\n</div></div></div></div></div></div></div>","meta":{}});