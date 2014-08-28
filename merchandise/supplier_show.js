var rowEditing;
var grid
var fm = Ext.form;



function supplier_show() {


    SHOWALLSupplier();

}




function SHOW_supplier() {

    allSupplierShow.show();
}


/* === window for unit === */

function SHOWALLSupplier() {


    Ext.define('MyApp.model.Mark', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'id',
            type: 'int'
        },  {
            name: 'supplier_name',
            type: 'string'
        }, {
            name: 'comment',
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
                root: 'unit'
            }
        }
    });


    var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1,
        autoCancel: true
    });


    grid = Ext.create('Ext.grid.Panel', {
        itemId: 'markGrid',
        store: {
            proxy: {
                type: 'ajax',
                url: 'http://192.168.0.104:81/supplier_list'
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
                // defaults to textfield if no xtype is supplied
                allowBlank: false
            }

        }, 
        {
            header: 'Supplier Type',
            dataIndex: 'supplier_name',


            selectOnFocus: true,
            triggerAction: 'all',

            width: 10,
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
                        url: 'http://192.168.0.104:81/supplier_list'
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
                            row.set('supplier_id', grid.getStore().getAt(index).data.id)

                            console.log(combo.getRawValue())

                        }
                    }
                }
            },

        }, {
            header: 'Comment',
            dataIndex: 'supplier_comment',
            width: 10,
            flex: 1
        }],

        selModel: {
            selType: 'cellmodel'
        },


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


    allSupplierShow = Ext.create('Ext.window.Window', {
        title: 'All Units',
        //align: 'center',
        height: 400,
        width: 650,
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

}


function storePuck() {

    var json = {}

    var json = Ext.encode(Ext.pluck(grid.getStore().data.items, 'data'));
    console.log(Ext.encode(Ext.pluck(grid.getStore().data.items, 'data')));

    socket.emit('all_store_unit', json);

}