//var OrderManagerWindow;

var Order_Form_Grid_window;
var str;
var res;

var OrderID = 1

var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';


function connect_for_order() {

    socket = io.connect("http://192.168.0.104:81");

    socket.on('buyer_list', function(buyer) {

        buyerList = Ext.create('Ext.data.Store', {
            fields: ['id', 'buyer_name'],
            data: buyer
        });
        console.log("buyer received")
        Set_Order_Form_Grid()
    });


    socket.on('style_list', function(style) {

        styleList = Ext.create('Ext.data.Store', {
            fields: ['id', 'style_name'],
            data: style
        });
        console.log("style name received")
        Set_Order_Form_Grid()
    });


    Set_Order_Form_Grid();

}


function ADD_NEW_ORDER() {

    Order_Form_Grid_window.show();
}


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
        type: 'int'
    }, {
        name: 'supplier',
        type: 'string'
    }, {
        name: 'Extra',
        type: 'int'
    }]
});

var OrderStore = Ext.create('Ext.data.Store', {

    //    autoDestroy: true,
    model: 'ORDERITEM',

    data: [{
        "id": (OrderID),
        "item_name": "",
        "item_description": "",
        "Qty_pcs": "",
        "color": "",
        "Qty": "",
        "supplier": "",
        "Extra": "5", // further it's need to make dynamic or other update will use 
    }],

    sorters: [{
        property: 'start',
        direction: 'ASC'
    }]
});

var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
    clicksToEdit: 1,
    autoCancel: true
});



/* === window for Order === */

function Set_Order_Form_Grid() {

    Order_Form_Grid_window = Ext.create('Ext.window.Window', {

        cls: 'app-header',
        title: 'Order Manager Window',
        id: 'order',
        height: 500,
        width: 1300,
        layout: {
            type: 'border',
            padding: 5
        },
        // closable: true,
        collapsible: true,
        animCollapse: true,
        maximizable: true,
        // minimizable: true,

        defaults: {
            autoScroll: true
        },



        minimizable: true,
        listeners: {
            "minimize": function(window, opts) {
                window.collapse();
                window.setWidth(200);
                window.alignTo(Ext.getBody(), 'bl-bl')
            },


            beforeclose: function() {
                var me = this;
                if (!me.askForConfirm) {
                    me.askForConfirm = true;
                    Ext.Msg.alert('Confirm', 'Do you really want to close window?', function(btn, text) {
                        if (btn == 'ok') {
                            me.close();
                        } else {
                            //me.show();
                        }
                        delete me.askForConfirm;
                    });
                    return false;
                }
                return true;
            }



        },
        tools: [{
            type: 'restore',
            handler: function(evt, toolEl, owner, tool) {
                var window = owner.up('window');
                window.setWidth(500);
                window.expand('', false);
                window.center();
            }
        }],

        closeAction: 'hide',

        resizable: true,



        items: [{
            region: 'west',
            collapsible: true,
            title: 'ORDER FORM',
            split: true,
            width: '33%',
            minHeight: 140,


            items: {

                xtype: 'form',
                autoHeight: true,
                anchor: '100%',


                //  this.SizeToContent = SizeToContent.Manual


                items: [{
                        xtype: 'combo',
                        name: 'buyer',
                        id: 'buyer',

                        fieldLabel: 'Buyer',
                        afterLabelTextTpl: required,
                        allowBlank: false,

                        width: 400,
                        padding: '5 0 5 0',
                        labelWidth: 80,
                        labelAlign: 'left',
                        labelSeparator: '',
                        emptyText: 'Select buyer name...',
                        labelClsExtra: 'some-class',
                        fieldStyle: 'font-size: 12px;',


                        autoScroll: true,


                        queryMode: 'local',

                        displayField: 'buyer_name',
                        valueField: 'id',

                        selectOnFocus: true,
                        triggerAction: 'all',

                        store: {
                            fields: ['id', 'buyer_name'],
                            proxy: {
                                type: 'ajax',
                                url: 'http://' + NodeJsHost + '/buyer_list'
                            },
                            autoLoad: true,
                            autoSync: true
                        },
                        listeners: {
                            change: {
                                fn: function(combo, value) {
                                    console.log(value)
                                }
                            },
                            specialkey: function(f, e) {
                                if (e.getKey() == e.ENTER) {
                                    setTimeout(function() {
                                        f.nextSibling().focus()
                                    }, 100);
                                }
                            },
                            blur: function() {
                                this.store.removeAll();
                                this.store.reload();
                            }

                        }
                    }, {
                        xtype: 'textfield',
                        name: 'brand',
                        id: 'brand',

                        fieldLabel: 'Brand',
                        afterLabelTextTpl: required,
                        allowBlank: false,

                        width: 400,
                        labelWidth: 80,
                        labelAlign: 'left',
                        labelSeparator: '',
                        emptyText: 'Give brand...',
                        labelClsExtra: 'some-class',
                        fieldStyle: 'font-size: 12px;',


                        autoScroll: true,


                        listeners: {
                            specialkey: function(f, e) {
                                if (e.getKey() == e.ENTER) {
                                    // e.stopEvent();

                                    var nextfld = f.nextSibling();
                                    nextfld.focus();

                                }
                            }
                        }

                    },

                    {
                        xtype: 'combo',
                        name: 'style',
                        id: 'style',

                        fieldLabel: 'Style',
                        afterLabelTextTpl: required,
                        allowBlank: false,

                        width: 400,
                        padding: '5 0 5 0',
                        labelWidth: 80,
                        labelAlign: 'left',
                        labelSeparator: '',
                        emptyText: 'Select or give style...',
                        labelClsExtra: 'some-class',
                        fieldStyle: 'font-size: 12px;',


                        autoScroll: true,


                        queryMode: 'local',

                        displayField: 'style_name',
                        valueField: 'id',

                        selectOnFocus: true,
                        triggerAction: 'all',

                        store: {
                            fields: ['id', 'style_name'],
                            proxy: {
                                type: 'ajax',
                                url: 'http://' + NodeJsHost + '/style_list'
                            },
                            autoLoad: true,
                            autoSync: true
                        },
                        listeners: {
                            change: {
                                fn: function(combo, value) {
                                    console.log(value)
                                }
                            },
                            specialkey: function(f, e) {
                                if (e.getKey() == e.ENTER) {
                                    setTimeout(function() {
                                        f.nextSibling().focus()
                                    }, 100);
                                }
                            },
                            blur: function() {
                                this.store.removeAll();
                                this.store.reload();
                            }

                        }
                    }, {
                        xtype: 'textfield',
                        name: 'PoNo',
                        id: 'PoNo',

                        fieldLabel: 'Po No',
                        afterLabelTextTpl: required,
                        allowBlank: false,

                        width: 400,
                        labelWidth: 80,
                        labelAlign: 'left',
                        labelSeparator: '',
                        emptyText: 'Give Po No...',
                        labelClsExtra: 'some-class',
                        fieldStyle: 'font-size: 12px;',


                        autoScroll: true,


                        listeners: {
                            specialkey: function(f, e) {
                                if (e.getKey() == e.ENTER) {
                                    // e.stopEvent();

                                    var nextfld = f.nextSibling();
                                    nextfld.focus();

                                }
                            }
                        }

                    }, {
                        xtype: 'textfield',
                        name: 'QtyPcs',
                        id: 'QtyPcs',

                        fieldLabel: 'Qty (Pcs)',
                        afterLabelTextTpl: required,
                        allowBlank: false,

                        width: 400,
                        labelWidth: 80,
                        labelAlign: 'left',
                        labelSeparator: '',
                        emptyText: 'Quantity must be value/numeric data...',
                        labelClsExtra: 'some-class',
                        fieldStyle: 'font-size: 12px;',


                        autoScroll: true,


                        listeners: {
                            specialkey: function(f, e) {
                                if (e.getKey() == e.ENTER) {
                                    // e.stopEvent();

                                    var nextfld = f.nextSibling();
                                    nextfld.focus();

                                }
                            }
                        }

                    }, {
                        xtype: 'datefield',
                        name: 'shiftDate',
                        id: 'shiftDate',

                        allowBlank: false,
                        afterLabelTextTpl: required,

                        width: 400,
                        labelWidth: 80,
                        labelAlign: 'left',
                        labelClsExtra: 'some-class',
                        fieldStyle: 'font-size: 12px;',

                        fieldLabel: 'Ist Shift Date',
                        value: new Date(),

                        format: 'm-d-Y H:i:s',
                        altFormats: 'm-d-Y H:i:s',
                        submitFormat: 'm-d-Y H:i:s',

                        listeners: {
                            blur: function(field) {
                                if (!field.isValid()) {
                                    alert('Date is invalid!');
                                }
                                //  Ext.Msg.alert(field.getSubmitValue());
                            },

                            specialkey: function(f, e) {
                                if (e.getKey() == e.ENTER) {
                                    // e.stopEvent();

                                    var nextfld = f.nextSibling();
                                    nextfld.focus();

                                }
                            }
                        }

                    }, {
                        xtype: 'textfield',
                        name: 'item',
                        id: 'item',

                        fieldLabel: 'Item',
                        afterLabelTextTpl: required,
                        allowBlank: false,

                        width: 400,
                        labelWidth: 80,
                        labelAlign: 'left',
                        labelSeparator: '',
                        emptyText: 'Give item...',
                        labelClsExtra: 'some-class',
                        fieldStyle: 'font-size: 12px;',


                        autoScroll: true,


                        listeners: {
                            specialkey: function(f, e) {
                                if (e.getKey() == e.ENTER) {
                                    // e.stopEvent();

                                    var nextfld = f.nextSibling();
                                    nextfld.focus();

                                }
                            }
                        }

                    }, {
                        xtype: 'textfield',
                        name: 'fabric',
                        id: 'fabric',

                        fieldLabel: 'Fabric',
                        afterLabelTextTpl: required,
                        allowBlank: false,

                        width: 400,
                        labelWidth: 80,
                        labelAlign: 'left',
                        labelSeparator: '',
                        emptyText: 'Give fabric...',
                        labelClsExtra: 'some-class',
                        fieldStyle: 'font-size: 12px;',


                        autoScroll: true,


                        listeners: {
                            specialkey: function(f, e) {
                                if (e.getKey() == e.ENTER) {
                                    // e.stopEvent();

                                    var nextfld = f.nextSibling();
                                    nextfld.focus();

                                }
                            }
                        }

                    }, {
                        xtype: 'textfield',
                        name: 'color',
                        id: 'color',

                        fieldLabel: 'Color',
                        afterLabelTextTpl: required,
                        allowBlank: false,

                        width: 400,
                        labelWidth: 80,
                        labelAlign: 'left',
                        labelSeparator: '',
                        emptyText: 'Give color...',
                        labelClsExtra: 'some-class',
                        fieldStyle: 'font-size: 12px;',


                        autoScroll: true,


                        listeners: {
                            specialkey: function(f, e) {
                                if (e.getKey() == e.ENTER) {
                                    // e.stopEvent();

                                    var nextfld = f.nextSibling();
                                    nextfld.focus();

                                }
                            }
                        }

                    }, {
                        xtype: 'textfield',
                        name: 'wash',
                        id: 'wash',

                        fieldLabel: 'Wash',
                        afterLabelTextTpl: required,
                        allowBlank: false,

                        width: 400,
                        padding: '0 0 50 0',
                        labelWidth: 80,
                        labelAlign: 'left',
                        labelSeparator: '',
                        emptyText: 'Give wash...',
                        labelClsExtra: 'some-class',
                        fieldStyle: 'font-size: 12px;',


                        autoScroll: true,


                        listeners: {

                            specialkey: function(f, e) {

                                if (e.getKey() == e.ENTER) {
                                    // e.stopEvent();

                                    submit_order();
                                    /// this.up('form').getForm().reset();

                                    Ext.getCmp('buyer').focus(true, 100);
                                    //Ext.getCmp('wash').lastElementChild().focus(false, 100);
                                    Ext.getCmp('wash').focus(false, 100);

                                }
                            },




                            blur: function() {
                                //this.store.removeAll();
                                // this.store.reload();
                                // this.up('form').getForm().reset();
                            }
                        }

                    },


                    {
                        xtype: 'button',

                        iconCls: 'action',
                        height: '60',
                        width: '20%',
                        margin: '-20% 50 0 120',

                        align: 'left',
                        text: 'Reset',

                        handler: function() {

                            console.log('Most likely the button you clicked: ',
                                Ext.FocusManager.focusedCmp, 'The Component that was focused before:  ',
                                Ext.FocusManager.previousFocusedCmp);

                            this.up('form').getForm().reset();

                        }
                    }, {
                        xtype: 'button',

                        height: '60',
                        width: '20%',
                        margin: '-20% 0 0 0',
                        align: 'right',
                        text: 'Submit',

                        formBind: true,

                        handler: function() {

                            var panel = this.up('form');
                            var form = panel.getForm();

                            // Ext.MessageBox.height = 200;
                            var msg;
                            var msg1;

                            if (form.isValid()) {

                                submit_order();

                                this.up('form').getForm().reset();
                                //order_item_show();

                                Ext.MessageBox.alert('success', 'Successfully data inserted');

                            } else {


                                fieldNames = [];
                                fields = panel.getInvalidFields();



                                for (var i = 0; i < fields.length; i++) {
                                    field = fields[i];
                                    fieldNames.push(field.getName());
                                }
                                console.debug(fieldNames);

                                Ext.MessageBox.alert('Invalid Fields', 'The following fields are invalid: ' + fieldNames.join(', '));


                            }
                        }
                    }






                ],




                getInvalidFields: function() {
                    var invalidFields = [];
                    Ext.suspendLayouts();
                    this.form.getFields().filterBy(function(field) {
                        if (field.validate()) return;
                        invalidFields.push(field);
                    });
                    Ext.resumeLayouts(true);
                    return invalidFields;

                }


            } // item
        }, {
            region: 'center',
            title: 'ORDER GRID',
            split: true,
            minHeight: 140,
            xtype: 'grid',
            id: 'ORDER_GRID_ID',
            css: 'gridCss',
            align: 'center',
            // css: 'text-align:center',

            store: OrderStore,

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
                    // id: 'itemName',
                    width: 30,
                    align: 'center',
                    flex: 1,
                    field: {
                        xtype: 'combobox',
                        typeAhead: false,
                        triggerAction: 'all',
                        selectOnTab: true,

                        displayField: 'item_name',
                        valueField: 'item_name',

                        align: 'right',

                        typeAhead: true,
                        selectOnTab: true,

                        store: {
                            fields: ['item_name', 'id'],
                            proxy: {
                                type: 'ajax',
                                url: 'http://' + NodeJsHost + '/itemdes_list'
                            }
                        },


                        lazyRender: true,
                        //listClass: 'x-combo-list-small',
                        listeners: {


                            change: {
                                fn: function(combo, value) {


                                },

                                select: function(combo, record, index) {
                                    // alert(combo.getValue());

                                }

                            }


                        }
                    }



                },



                {
                    header: 'Item Description',
                    dataIndex: 'item_description',
                    width: 230,
                    // id: 'itemDescription',
                    flex: 1,
                    align: 'center',
                    //hidden: true,

                    editor: {

                        allowBlank: false
                    }


                }, {
                    header: 'QTY / PCS',
                    dataIndex: 'Qty_pcs',
                    width: 230,
                    // id: 'QtyPcs',
                    align: 'center',
                    flex: 1,

                    editor: {

                        allowBlank: false
                    }



                },

                {
                    header: 'Color',
                    dataIndex: 'color',
                    width: 230,
                    // id: 'orderItemColor',
                    align: 'center',
                    flex: 1,

                    editor: {

                        allowBlank: false
                    }



                },

                {
                    header: 'Qty',
                    dataIndex: 'Qty',
                    width: 230,
                    //id: 'totalQty',
                    align: 'center',
                    flex: 1,

                    editor: {

                        allowBlank: false
                    }



                }, {
                    header: 'Supplier',
                    dataIndex: 'supplier',
                    width: 230,
                    // id: 'orderSupplier',
                    align: 'center',
                    flex: 1,

                    editor: {

                        allowBlank: false
                    }



                }, {
                    header: 'Extra (%)',
                    dataIndex: 'Extra',
                    //  id: 'extra',
                    width: 230,
                    align: 'center',
                    flex: 1,

                    editor: {
                        // defaults to textfield if no xtype is supplied
                        allowBlank: false,
                        maxValue: 100000,
                        defaultValue: 5
                    }



                }

            ],

            plugins: [cellEditing],


            buttons: [{
                text: 'Add Row',
                handler: function() {

                    //myStore.add({some: 'data'}, {some: 'other data'});
                    //grid.getStore().data.items



                    OrderID = OrderID + 1;
                    Ext.getCmp('ORDER_GRID_ID').getStore().add({
                        "id": (OrderID),
                        "item_name": "",
                        "item_description": "",
                        "Qty_pcs": "",
                        "color": "",
                        "Qty": "",
                        "supplier": "",
                        "Extra": ""
                    });

                    console.log(OrderID)

                }
            }, {
                text: 'Save',
                handler: function() {

                    //  save_order_items()


                    // OrderStore.insert(0, new ORDERITEM());
                    // rowEditing.startEdit(0, 0);


                    Order_storePuck();

                    Ext.MessageBox.alert('Save', 'Save Data');
                    //console.log(Order_storePuck);

                }
            }]



        }]



    })



}

function submit_order() {

    var ORDER = {}

    ORDER.buyers = {}

    ORDER.styles = {}

    ORDER.brand = Ext.getCmp('brand').getValue();

    ORDER.poNo = Ext.getCmp('PoNo').getValue();
    ORDER.qtyPcs = Ext.getCmp('QtyPcs').getValue();
    ORDER.shiftDate = Ext.getCmp('shiftDate').getValue();
    ORDER.item = Ext.getCmp('item').getValue();
    ORDER.fabric = Ext.getCmp('fabric').getValue();
    ORDER.color = Ext.getCmp('color').getValue();
    ORDER.wash = Ext.getCmp('wash').getValue();

    if (Ext.getCmp('buyer').getRawValue().match(Ext.getCmp('buyer').getValue())) {

        ORDER.buyers.new_buyer_found = true;

    } else {

        ORDER.buyers.new_buyer_found = false;
    }

    ORDER.buyers.value = Ext.getCmp('buyer').getValue();



    if (Ext.getCmp('style').getRawValue().match(Ext.getCmp('style').getValue())) {

        ORDER.styles.new_style_found = true;

    } else {

        ORDER.styles.new_style_found = false;
    }

    ORDER.styles.value = Ext.getCmp('style').getValue();


    console.log(ORDER);


    socket.emit('all_order_items', ORDER);

    //grid.show();
    //OrderItemView.show();

}

function save_order_items() {

    var ORDER_ITEMS = {}

    ORDER_ITEMS.itemName = Ext.getCmp('itemName').getValue();
    ORDER_ITEMS.itemDescription = Ext.getCmp('itemDescription').getValue();
    ORDER_ITEMS.QtyPcs = Ext.getCmp('QtyPcs').getValue();
    ORDER_ITEMS.orderItemColor = Ext.getCmp('orderItemColor').getValue();
    ORDER_ITEMS.totalQty = Ext.getCmp('totalQty').getValue();
    ORDER_ITEMS.orderSupplier = Ext.getCmp('orderSupplier').getValue();
    ORDER_ITEMS.extra = Ext.getCmp('extra').getValue();


    console.log(ORDER_ITEMS);

    socket.emit('all_order_list', ORDER_ITEMS);


}