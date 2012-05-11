Ext.define('GeoExt.tree.LayerNode', {
    extend: 'Ext.AbstractPlugin',
    mixins: ['Ext.util.Observable'],
    alias: 'plugin.gx_layer',

    /**
     * The layer that the layer node will be bound to.
     * @cfg {OpenLayers.Layer} layer
     */

    /**
     * If provided, nodes will be rendered with a radio button instead of a
     * checkbox. All layers represented by nodes with the same checkedGroup are
     * considered mutually exclusive - only one can be visible at a time.
     * @cfg {String} checkedGroup
     */
    
    /**
     * If the node was configured with a text, we consider the text fixed and
     * won't update it when the layer's name changes.
     * @cfg {Boolean} fixedText
     */
    
    /** 
     *  @private
     */
    init: function(target) {
        target.set('checked', this.layer.getVisibility());
        target.set('layer', this.layer);
        target.set('checkedGroup', this.checkedGroup === undefined ?
            this.layer.isBaseLayer ? "gx_baselayer" : "" :
            "");
        target.set('fixedText', !!target.text);
        
        target.set('leaf', true);
        
        if(!target.get('iconCls')) {
            target.set('iconCls', "gx-tree-layer-icon");
        }
    }

});