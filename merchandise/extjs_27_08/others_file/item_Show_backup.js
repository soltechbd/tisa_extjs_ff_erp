var rowEditing;
var grid
var fm = Ext.form;



function item_show() {


    SHOWALL();

}




function SHOW_item_type() {

    allItemShow.show();
}

/*
var grid;
var getStore();

grid.getStore().reload({
    callback: function() {
        grid.getView().refresh();
    }
});

*/


function doMin() {
    this.collapse(false);
    this.alignTo(document.body, 'bl-bl');
}


/* === window for item === */

function SHOWALL() {


    Ext.define('MyApp.model.Mark', {
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
            type: 'string'
        }, {
            name: 'unit_type_name',
            type: 'string'
        }, {
            name: 'color_type_name',
            type: 'string'
        }, {
            name: 'supplier_name',
            type: 'string'
        }, {
            name: 'item_comment',
            type: 'string'
        }]
    });


    Ext.define('MyApp.store.Marks', {
        extend: 'Ext.data.Store',

        //best to require the model if you  put it in separate files
        requires: ['MyApp.model.Mark'],
        model: 'MyApp.model.Mark',
        storeId: 'markStore',
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });


    /* 
    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToMoveEditor: 1,
        autoCancel: false
    });
    */

    var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1,
        autoCancel: true
    });


    grid = Ext.create('Ext.grid.Panel', {
        itemId: 'markGrid',
        store: {
            proxy: {
                type: 'ajax',
                url: 'http://' + NodeJsHost + '/item_list'
            },
            autoLoad: true,
            autoSync: true,
            // requires: ['MyApp.model.Mark'],
            model: 'MyApp.model.Mark',
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
            },



        }, {
            header: 'Item Description',
            dataIndex: 'item_description',
            width: 30,
            flex: 1,

            editor: {

                allowBlank: false
            },


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

                displayField: 'item_type_name',
                valueField: 'item_type_name',


                store: {
                    fields: ['id', 'item_type_name', 'comment'],
                    proxy: {
                        type: 'ajax',
                        url: 'http://' + NodeJsHost + '/item_type_input'
                    },
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
                            row.set('item_type_name', combo.getRawValue())
                            row.set('id', grid.getStore().getAt(index).data.id)

                            console.log(combo.getRawValue())

                        }
                    }
                }
            },



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

                displayField: 'unit_type_name',
                valueField: 'unit_type_name',


                store: {
                    fields: ['id', 'unit_type_name', 'comment'],
                    proxy: {
                        type: 'ajax',
                        url: 'http://' + NodeJsHost + '/unit-input'
                    },
                    autoLoad: true,
                    autoSync: true,
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
                            row.set('unit_type_name', combo.getRawValue())
                            row.set('id', grid.getStore().getAt(index).data.id)

                            console.log(combo.getRawValue())

                        }
                    }
                }
            },

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

                displayField: 'color_type_name',
                valueField: 'color_type_name',


                store: {
                    fields: ['id', 'color_type_name', 'comment'],
                    proxy: {
                        type: 'ajax',
                        url: 'http://' + NodeJsHost + '/color_type_input'
                    },
                    autoLoad: true,
                    autoSync: true,
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
                            row.set('color_type_name', combo.getRawValue())
                            row.set('id', grid.getStore().getAt(index).data.id)

                            console.log(combo.getRawValue())

                        }
                    }
                }
            },

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

                displayField: 'supplier_name',
                valueField: 'supplier_name',


                store: {
                    fields: ['id', 'supplier_name', 'comment'],
                    proxy: {
                        type: 'ajax',
                        url: 'http://' + NodeJsHost + '/supplier_input'
                    },
                    autoLoad: true,
                    autoSync: true,
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
                            row.set('supplier_name', combo.getRawValue())
                            row.set('id', grid.getStore().getAt(index).data.id)

                            console.log(combo.getRawValue())

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




        //selType: 'rowmodel',

        /*
        plugins: [
            Ext.create('Ext.grid.plugin.RowEditing', {
                clicksToEdit: 1
            })
        ],*/



        buttons: [{
            text: 'Save',
            handler: function() {

                storePuck();

                //Ext.MessageBox.alert('Save', 'Save editing');
                //    console.log(storePuck);

            }
        }, {
            text: 'Reload Store',
            handler: function() {
                grid.getStore().load();



                Ext.MessageBox.alert('Message', 'Updated Store');
            }
        }]

    });

    //handler: {

    var task = {
        run: function() {
            markStore.load();
        },
        interval: 100
    }
    //  }


    // This will reload your store every 5 mseconds
    Ext.TaskManager.start(task);


    allItemShow = Ext.create('Ext.window.Window', {
        title: 'All Items',
        //align: 'center',
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
        ],

        handler: function() {
            //refresh source grid
            //gridStore.loadData(markStore);



        }

    });

    allItemShow.on('minimize', doMin, allItemShow);



}


function storePuck() {

    var json = {}

    var json = Ext.encode(Ext.pluck(grid.getStore().data.items, 'data'));
    console.log(Ext.encode(Ext.pluck(grid.getStore().data.items, 'data')));

    socket.emit('all_store_item', json);

}