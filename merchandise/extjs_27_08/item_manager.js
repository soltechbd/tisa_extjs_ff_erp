var rowEditing;
var grid
var fm = Ext.form;

function item_manager() {


    ITEM_MANAGER_WINDOW();

}

function ITEM_MANAGER_SHOW() {

    allItemShow.show();
}



function doMin() {
    this.collapse(false);
    this.alignTo(document.body, 'bl-bl');
}


/* === window for item === */

function ITEM_MANAGER_WINDOW() {


    Ext.define('ItemManager', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'item_name',
            type: 'string'
        }, {
            name: 'item_description',
            type: 'string'
        }, {
            name: 'item_type_name',
            type: 'string',
            mapping: 'typeItem.name'
        }, {
            name: 'unit_type_name',
            type: 'string',
            mapping: 'typeUnit.name'
        }, {
            name: 'color_type_name',
            type: 'string',
            mapping: 'typeColor.name'
        }, {
            name: 'supplier_name',
            type: 'string',
            mapping: 'supplier.name'
        }, {
            name: 'item_comment',
            type: 'string'
        }]
    });



    var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1,
        autoCancel: true
    });


    grid = Ext.create('Ext.grid.Panel', {
        itemId: 'AllItemGrid',
        store: {
            proxy: {
                type: 'ajax',
                url: 'http://' + NodeJsHost + '/item_list'
            },
            autoLoad: true,
            autoSync: true,
            // requires: ['ItemManager'],
            model: 'ItemManager',
            id: 'ItemStore'
        },



        loadMask: true,
        width: 400,
        viewConfig: {
            emptyText: 'No records'
        },
        plugins: [cellEditing],

        columns: [{
            xtype: 'rownumberer',
            header: 'SL',
            dataIndex: 'id',
            width: 32,
            sortable: false,
            locked: true,
            flex: 1,
            editor: {

                allowBlank: false
            }

        }, {
            header: 'Item Name',
            dataIndex: 'item_name',
            width: 230,
            flex: 1,

            editor: {

                allowBlank: false
            }



        }, {
            header: 'Item Description',
            dataIndex: 'item_description',
            width: 30,
            flex: 1,

            editor: {

                allowBlank: false
            }


        }, {
            header: 'Item Type',
            dataIndex: 'item_type_name',
            width: 30,
            flex: 1,
            field: {
                xtype: 'combobox',
                typeAhead: true,
                triggerAction: 'all',
                selectOnTab: true,

                displayField: 'name',
                valueField: 'name',


                store: {
                    fields: ['id', 'name', 'comment'],
                    proxy: {
                        type: 'ajax',
                        url: 'http://' + NodeJsHost + '/item_type_input'
                    }
                },


                lazyRender: true,
                listClass: 'x-combo-list-small',
                listeners: {
                    change: {
                        fn: function(combo, value) {

                            var v = combo.getValue();
                            var record = combo.findRecord(combo.valueField || combo.displayField, v);
                            var index = combo.store.indexOf(record);

                            var row = grid.getSelectionModel().getSelection()[0];

                            grid.getSelectionModel().getSelection()[0].data.typeItem.id = combo.store.getAt(index).data.id
                            grid.getSelectionModel().getSelection()[0].data.typeItem.name = combo.getRawValue()

                        }
                    }
                }
            }



        }, {
            header: 'Unit Type',
            dataIndex: 'unit_type_name',


            selectOnFocus: true,
            triggerAction: 'all',

            width: 30,
            flex: 1,

            field: {
                xtype: 'combobox',
                typeAhead: true,
                triggerAction: 'all',
                selectOnTab: true,

                displayField: 'name',
                valueField: 'name',


                store: {
                    fields: ['id', 'name', 'comment'],
                    proxy: {
                        type: 'ajax',
                        url: 'http://' + NodeJsHost + '/unit-input'
                    },
                    autoLoad: true,
                    autoSync: true
                },


                lazyRender: true,
                listClass: 'x-combo-list-small',

                listeners: {
                    change: {
                        fn: function(combo, value) {

                            var v = combo.getValue();
                            var record = combo.findRecord(combo.valueField || combo.displayField, v);
                            var index = combo.store.indexOf(record);

                            var row = grid.getSelectionModel().getSelection()[0];

                            grid.getSelectionModel().getSelection()[0].data.typeUnit.id = combo.store.getAt(index).data.id
                            grid.getSelectionModel().getSelection()[0].data.typeUnit.name = combo.getRawValue()

                        }
                    }
                }
            }

        }, {
            header: 'Item Color',
            dataIndex: 'color_type_name',
            selectOnFocus: true,
            triggerAction: 'all',

            width: 30,
            flex: 1,

            field: {
                xtype: 'combobox',
                typeAhead: true,
                triggerAction: 'all',
                selectOnTab: true,

                displayField: 'name',
                valueField: 'name',


                store: {
                    fields: ['id', 'name', 'comment'],
                    proxy: {
                        type: 'ajax',
                        url: 'http://' + NodeJsHost + '/color_type_input'
                    },
                    autoLoad: true,
                    autoSync: true
                },


                lazyRender: true,
                listClass: 'x-combo-list-small',

                listeners: {
                    change: {
                        fn: function(combo, value) {

                            var v = combo.getValue();
                            var record = combo.findRecord(combo.valueField || combo.displayField, v);
                            var index = combo.store.indexOf(record);

                            var row = grid.getSelectionModel().getSelection()[0];

                            grid.getSelectionModel().getSelection()[0].data.typeColor.id = combo.store.getAt(index).data.id
                            grid.getSelectionModel().getSelection()[0].data.typeColor.name = combo.getRawValue()

                        }
                    }
                }
            }

        }, {
            header: 'Item Supplier',
            dataIndex: 'supplier_name',


            selectOnFocus: true,
            triggerAction: 'all',

            width: 30,
            flex: 1,

            field: {
                xtype: 'combobox',
                typeAhead: true,
                triggerAction: 'all',
                selectOnTab: true,

                displayField: 'name',
                valueField: 'name',


                store: {
                    fields: ['id', 'name', 'comment'],
                    proxy: {
                        type: 'ajax',
                        url: 'http://' + NodeJsHost + '/supplier_input'
                    },
                    autoLoad: true,
                    autoSync: true
                },


                lazyRender: true,
                listClass: 'x-combo-list-small',

                listeners: {
                    change: {
                        fn: function(combo, value) {

                            var v = combo.getValue();
                            var record = combo.findRecord(combo.valueField || combo.displayField, v);
                            var index = combo.store.indexOf(record);

                            var row = grid.getSelectionModel().getSelection()[0];

                            grid.getSelectionModel().getSelection()[0].data.supplier.id = combo.store.getAt(index).data.id
                            grid.getSelectionModel().getSelection()[0].data.supplier.name = combo.getRawValue()

                        }
                    }
                }
            }




        }, {
            header: 'Comment',
            dataIndex: 'item_comment',
            width: 30,
            flex: 1
        }],

        selModel: {
            selType: 'cellmodel'
        },


        buttons: [{
            text: 'Save',
            handler: function() {

                ItemStorePuck();

                Ext.MessageBox.alert('Save', 'Save Data');

            }
        }, {
            text: 'Reload Store',
            handler: function() {
                grid.getStore().load();



                Ext.MessageBox.alert('Message', 'Updated Store');
            }
        }]

    });


    allItemShow = Ext.create('Ext.window.Window', {
        title: 'Item Manager',
        height: 400,
        width: 900,
        layout: 'fit',
        // closable: true,
        collapsible: true,
        animCollapse: true,
        maximizable: true,
        minimizable: true,
        closeAction: 'hide',
        autoDestroy: true,

        resizable: true,

        items: [
            grid
        ]


    });

    allItemShow.on('minimize', doMin, allItemShow);

}


function ItemStorePuck() {

    var json = {}

    var json = Ext.encode(Ext.pluck(grid.getStore().data.items, 'data'));
    console.log(JSON.parse(Ext.encode(Ext.pluck(grid.getStore().data.items, 'data'))));

    socket.emit('all_store_item', json);

}