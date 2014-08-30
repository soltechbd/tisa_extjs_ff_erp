//var OrderManagerWindow;

var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';


function order_manager() {

    socket = io.connect("http://192.168.0.104:81");

    /* Item Type part */

    // socket.emit('initialization', ""); // Asking server for order

    socket.on('buyer_list', function(buyer) {

        buyerList = Ext.create('Ext.data.Store', {
            fields: ['id', 'buyer_name'],
            data: buyer
        });
        console.log("buyer received")
        SetOrderManager()
    });

    /* buyer part end */


    /* style part */



    socket.on('style_list', function(style) {

        styleList = Ext.create('Ext.data.Store', {
            fields: ['id', 'style_name'],
            data: style
        });
        console.log("style name received")
        SetOrderManager()
    });



    /* style part end */





    SetOrderManager();

} /* == order_manager()  end == */


function SHOW_order() {

    OrderManagerWindow.show();
}


/* === window for Order === */

function SetOrderManager() {

    OrderManagerWindow = Ext.create('Ext.window.Window', {

        cls: 'app-header',
        title: 'Order Manager Window',
        id: 'order',
        height: 500,
        width: 1300,
        layout: 'fit',
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



        items: {

            xtype: 'form',
            autoHeight: true,
            padding: 20,
            height: 800,
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
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Select buyer name...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


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
                            url: 'http://192.168.0.104:81/buyer_list'
                        },
                        autoLoad: true,
                        autoSync: true,
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
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Give brand...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


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
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Select or give style...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


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
                            url: 'http://192.168.0.104:81/style_list'
                        },
                        autoLoad: true,
                        autoSync: true,
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
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Give Po No...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


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
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Quantity must be value/numeric data...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


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
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',

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
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Give item...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


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
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Give fabric...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


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
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Give color...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


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
                    padding: '0 0 55 0',
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Give wash...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


                    autoScroll: true,


                    listeners: {

                        specialkey: function(f, e) {

                            if (e.getKey() == e.ENTER) {
                                // e.stopEvent();

                                submit_order();
                                this.up('form').getForm().reset();

                                Ext.getCmp('buyer').focus(true, 100);
                                //f.lastElementChild().focus(false, 100);

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
                    width: '8%',
                    margin: '0 50 0 150',
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
                    width: '8%',
                    align: 'right',
                    text: 'Submit',

                    formBind: true,

                    /* listeners: {
                        render: function(w) {
                            Ext.Ajax.request({
                                //url: '192.168.0.106.order_item_show.js',
                                // w.order_item_show();
                            });
                        }
                    },*/



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

            //Ext.Panel.prototype.buttonAlign = 'left'


            getInvalidFields: function() {
                var invalidFields = [];
                Ext.suspendLayouts();
                this.form.getFields().filterBy(function(field) {
                    if (field.validate()) return;
                    invalidFields.push(field);
                });
                Ext.resumeLayouts(true);
                return invalidFields;

            },



            /*  Reset and Submit buttons*/







        } // item
    })



} // ordermanager window end 




function submit_order() {

    var ORDER = {} /* ORDER is an object */

    ORDER.buyers = {} /* for new buyer */

    ORDER.styles = {} /* for new styles */




    ORDER.brand = Ext.getCmp('brand').getValue();

    ORDER.poNo = Ext.getCmp('PoNo').getValue();
    ORDER.qtyPcs = Ext.getCmp('QtyPcs').getValue();
    ORDER.shiftDate = Ext.getCmp('shiftDate').getValue();
    ORDER.item = Ext.getCmp('item').getValue();
    ORDER.fabric = Ext.getCmp('fabric').getValue();
    ORDER.color = Ext.getCmp('color').getValue();
    ORDER.wash = Ext.getCmp('wash').getValue();

    //  ORDER.comm = Ext.getCmp('comment').getValue();




    /* condition for existing and new item type matching */
    if (Ext.getCmp('buyer').getRawValue().match(Ext.getCmp('buyer').getValue())) {

        ORDER.buyers.new_buyer_found = true; /* if found new data then it's true  */

    } else {

        ORDER.buyers.new_buyer_found = false; /* if not found new data then it's false  */
    }

    ORDER.buyers.value = Ext.getCmp('buyer').getValue();


    /* condition for existing and new unit type matching */
    if (Ext.getCmp('style').getRawValue().match(Ext.getCmp('style').getValue())) {

        ORDER.styles.new_style_found = true;

    } else {

        ORDER.styles.new_style_found = false;
    }

    ORDER.styles.value = Ext.getCmp('style').getValue();


    console.log(ORDER);


    socket.emit('all_order_items', ORDER);

    // ItemManagerWindow.destroy();
    //socket.emit('initialization', "");
    //ItemManagerWindow.show();




    OrderItemView.show();

}