var OrderGrid;
var str;
var res;

function order_item_show() {


    Ext.define('ORDERITEM', {
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
            name: 'Qty_pcs',
            type: 'string'
        }, {
            name: 'color',
            type: 'string'
        }, {
            name: 'Qty',
            type: 'string'
        }, {
            name: 'supplier',
            type: 'string'
        }, {
            name: 'Extra',
            type: 'string'
        }]
    });

    Ext.define('ORDERITEMS', {
        extend: 'Ext.data.Store',

        //best to require the model if you  put it in separate files
        requires: ['ORDERITEM'],
        model: 'ORDERITEM',
        storeId: 'OrderStore',
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });

    var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1,
        autoCancel: true
    });

    OrderGrid = Ext.create('Ext.grid.Panel', {
        itemId: 'OrderStoreGrid',
        store: {
            proxy: {
                type: 'ajax',
                url: 'http://192.168.0.104:81/item_list'
            },
            autoLoad: true,
            autoSync: true,
            // requires: ['ORDERITEM'],
            model: 'ORDERITEM',
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

            }, {
                header: 'Item Name',
                dataIndex: 'item_name',
                width: 30,
                flex: 1,
                field: {
                    xtype: 'combobox',
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnTab: true,

                    displayField: 'item_name',
                    valueField: 'item_name',


                    typeAhead: true,
                    selectOnTab: true,

                    store: {
                        fields: ['item_name', 'id'],
                        proxy: {
                            type: 'ajax',
                            url: 'http://192.168.0.104:81/itemdes_list'
                        },
                    },


                    lazyRender: true,
                    listClass: 'x-combo-list-small',
                    listeners: {

                        render: function(w) {
                            Ext.Ajax.request({
                                url: 'http://192.168.0.104:81/itemdes_list',
                                type: "GET",
                                data: "item_name+item_description+item_color+item_supplier",
                                success: function(data) {
                                    if (data == "Success") {
                                        console.log("data");
                                    }
                                }
                            });
                        },
                        change: {
                            fn: function(combo, value) {


                                var v = combo.getValue();
                                var record = combo.findRecord(combo.valueField || combo.displayField, v);
                                var index = combo.store.indexOf(record);


                                var row = OrderGrid.getSelectionModel().getSelection()[0];
                                row.set('item_name', combo.getRawValue())
                                row.set('item_id', OrderGrid.getStore().getAt(index).data.id)

                                console.log(combo.getRawValue());
                                Ext.Msg.alert("select item");


                                /*  str = "http://192.168.0.104:81/itemdes_list";
                                str.value = str.split(",", 3);
                                console.log(str.value);*/


                            },

                            select: function(combo, record, index) {
                                alert(combo.getValue());

                            }

                        },


                    }
                },



            },

            /* {
                header: 'Item Description',
                dataIndex: 'item_description',
                width: 30,
                flex: 1,
                field: {
                    xtype: 'combobox',
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnTab: true,

                    displayField: 'item_description',
                    valueField: 'item_description',


                    store: {
                        fields: ['item_description', 'id'],
                        proxy: {
                            type: 'ajax',
                            url: 'http://192.168.0.104:81/item_description_list'
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


                                var row = OrderGrid.getSelectionModel().getSelection()[0];
                                row.set('item_description', combo.getRawValue())
                                row.set('item_type_id', OrderGrid.getStore().getAt(index).data.id)

                                console.log(combo.getRawValue())

                            }
                        }
                    }
                },*/

            {
                header: 'Item Description',
                dataIndex: 'item_description',
                width: 230,
                flex: 1,
                //hidden: true,

                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                },



            }, {
                header: 'QTY / PCS',
                dataIndex: 'Qty_pcs',
                width: 230,
                flex: 1,

                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                },



            },

            {
                header: 'Color',
                dataIndex: 'color',
                width: 230,
                flex: 1,

                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                },



            },

            {
                header: 'Qty',
                dataIndex: 'qty',
                width: 230,
                flex: 1,

                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                },



            }, {
                header: 'Supplier',
                dataIndex: 'supplier',
                width: 230,
                flex: 1,

                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                },



            }, {
                header: 'Extra',
                dataIndex: 'extra',
                width: 230,
                flex: 1,

                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                },



            }

        ],

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
                OrderGrid.getStore().load();



                Ext.MessageBox.alert('Message', 'Updated Store');
            }
        }]

    });




    OrderItemView = Ext.create('Ext.window.Window', {
        title: 'Order Item List',
        height: 400,
        width: 800,
        x: 500,
        region: 'west',
        layout: 'fit',
        // closable: true,
        collapsible: true,
        animCollapse: true,
        maximizable: true,
        minimizable: true,
        closeAction: 'show',


        resizable: true,

        items: [
            OrderGrid
        ],

    }).show();

}

function storePuck() {

    var json = {}

    var json = Ext.encode(Ext.pluck(OrderGrid.getStore().data.items, 'data'));
    console.log(Ext.encode(Ext.pluck(OrderGrid.getStore().data.items, 'data')));

    socket.emit('all_order_list', json);

}