function connect_for_item() {

    socket = io.connect("http://192.168.0.104:81");


    socket.on('item_type_input', function(it) {

        ItemType = Ext.create('Ext.data.Store', {
            fields: ['id', 'item_type_name'],
            data: it
        });
        console.log("Item type received")
        ITEM_SUBMIT_FORM()
    });


    socket.on('unit-input', function(unitL) {

        unit = Ext.create('Ext.data.Store', {
            fields: ['id', 'unit_type_name', 'comment'],
            data: unitL
        });
        console.log("unit-input type received")

        ITEM_SUBMIT_FORM()
    });


    socket.on('color_type_input', function(color_type) {

        ItemColor = Ext.create('Ext.data.Store', {
            fields: ['id', 'color_type_name'],
            data: color_type
        });

        ITEM_SUBMIT_FORM();

        console.log("color_type_input type received")
    });

    socket.on('supplier_input', function(item_supplier) {

        ItemSupplier = Ext.create('Ext.data.Store', {
            fields: ['id', 'supplier_name'],
            data: item_supplier
        });

        ITEM_SUBMIT_FORM();

        console.log("supplier_input type received")
    });


    ITEM_SUBMIT_FORM();

} /* == item_submit_form()  end == */

function ADD_NEW_ITEM() {

    AddItemWindow.show();
}


/* === window for item === */

function ITEM_SUBMIT_FORM() {

    AddItemWindow = Ext.create('Ext.window.Window', {
        title: 'Add New Item',
        id: 'window',
        height: 400,
        width: 500,
        layout: 'fit',
        collapsible: true,
        animCollapse: true,
        maximizable: true,
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
            padding: 20,
            items: [{
                    xtype: 'textfield',
                    name: 'itemname',
                    id: 'itemname',

                    fieldLabel: 'Item Name',
                    filedAlign: 'top',
                    allowBlank: false,

                    width: 400,
                    padding: '5 0 5 0',
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelStyle: 'text-align:left;border solid 1px white;',
                    labelSeparator: '',
                    emptyText: 'Give item name...',
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
                    name: 'ItemDescription',
                    id: 'ItemDescription',
                    fieldLabel: 'Item Description',
                    allowBlank: false,

                    width: 400,
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Give item description...',
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
                    xtype: 'combo',
                    name: 'itemTypeName',
                    id: 'itemTypeName',
                    fieldLabel: 'Item Type',
                    allowBlank: false,

                    width: 400,
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Select item type...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


                    autoScroll: true,


                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    selectOnFocus: true,
                    triggerAction: 'all',
                    store: {
                        fields: ['id', 'name', 'comment'],
                        proxy: {
                            type: 'ajax',
                            url: 'http://' + NodeJsHost + '/item_type_input'
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
                    xtype: 'combo',
                    name: 'unitTypeName',
                    id: 'unitTypeName',
                    fieldLabel: 'Unit Type',
                    allowBlank: false,

                    width: 400,
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Select unit type...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


                    autoScroll: true,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    selectOnFocus: true,
                    triggerAction: 'all',
                    store: {
                        fields: ['id', 'name', 'comment'],
                        proxy: {
                            type: 'ajax',
                            url: 'http://' + NodeJsHost + '/unit-input'
                        },
                        autoLoad: true,
                        autoSync: true
                    },

                    listeners: {
                        change: {
                            fn: function(combo, value) {
                                //console.log(value)
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
                    xtype: 'combo',
                    name: 'colorName',
                    id: 'colorName',
                    fieldLabel: 'Item Color',
                    allowBlank: false,

                    width: 400,
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Select item color...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


                    autoScroll: true,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    selectOnFocus: true,
                    triggerAction: 'all',
                    store: {
                        fields: ['id', 'name', 'comment'],
                        proxy: {
                            type: 'ajax',
                            url: 'http://' + NodeJsHost + '/color_type_input'
                        },
                        autoLoad: true,
                        autoSync: true
                    },

                    listeners: {
                        change: {
                            fn: function(combo, value) {
                                //console.log(value)
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
                    xtype: 'combo',
                    name: 'supplierName',
                    id: 'supplierName',
                    fieldLabel: 'Item Supplier',
                    allowBlank: false,

                    width: 400,
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Select supplier...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


                    autoScroll: true,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    store: {
                        fields: ['id', 'name', 'comment'],
                        proxy: {
                            type: 'ajax',
                            url: 'http://' + NodeJsHost + '/supplier_input'
                        },
                        autoLoad: true,
                        autoSync: true
                    },


                    listeners: {
                        change: {
                            fn: function(combo, value) {
                                //console.log(value)
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
                    name: 'Comment',
                    id: 'item_comment',
                    fieldLabel: 'Comment',
                    allowBlank: false,

                    width: 400,
                    labelWidth: 140,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Put comment...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',


                    autoScroll: true,

                    listeners: {

                        specialkey: function(f, e) {

                            if (e.getKey() == e.ENTER) {
                                // e.stopEvent();

                                Submit_Item();
                                // this.up('form').getForm().reset();

                                Ext.getCmp('itemname').focus(true, 100);
                                //f.lastElementChild().focus(false, 100);

                            }
                        },




                        blur: function() {
                            //this.store.removeAll();
                            // this.store.reload();
                            // this.up('form').getForm().reset();
                        }
                    }

                }


            ],

            /*  Reset and Submit buttons*/

            buttons: [{
                text: 'Reset',
                handler: function() {

                    console.log('Most likely the button you clicked: ',
                        Ext.FocusManager.focusedCmp, 'The Component that was focused before:  ',
                        Ext.FocusManager.previousFocusedCmp);

                    this.up('form').getForm().reset();
                    //Submit_Item().reset();
                }
            }, {
                text: 'Submit',
                formBind: true,


                handler: function() {

                    var panel = this.up('form');
                    var form = panel.getForm();

                    var msg;
                    var msg1;

                    if (form.isValid()) {

                        Submit_Item();
                        this.up('form').getForm().reset();

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
            }],



            getInvalidFields: function() {
                var invalidFields = [];
                Ext.suspendLayouts();
                this.form.getFields().filterBy(function(field) {
                    if (field.validate()) return;
                    invalidFields.push(field);
                });
                Ext.resumeLayouts(true);
                return invalidFields;

            } // getInvalidFields function end  



        }
    })



}


function Submit_Item() {

    var SUB_ITEM = {}

    SUB_ITEM.colors = {}

    SUB_ITEM.itemTypes = {}

    SUB_ITEM.unitTypes = {}

    SUB_ITEM.suppliers = {}



    SUB_ITEM.name = Ext.getCmp('itemname').getValue();
    SUB_ITEM.descrip = Ext.getCmp('ItemDescription').getValue();

    SUB_ITEM.comm = Ext.getCmp('item_comment').getValue();

    /* condition for existing and new item type matching */
    if (Ext.getCmp('itemTypeName').getRawValue().match(Ext.getCmp('itemTypeName').getValue())) {

        SUB_ITEM.itemTypes.new_itemType_found = true;

    } else {

        SUB_ITEM.itemTypes.new_itemType_found = false;
    }

    SUB_ITEM.itemTypes.value = Ext.getCmp('itemTypeName').getValue();



    if (Ext.getCmp('unitTypeName').getRawValue().match(Ext.getCmp('unitTypeName').getValue())) {

        SUB_ITEM.unitTypes.new_unitType_found = true;

    } else {

        SUB_ITEM.unitTypes.new_unitType_found = false;
    }

    SUB_ITEM.unitTypes.value = Ext.getCmp('unitTypeName').getValue();



    if (Ext.getCmp('colorName').getRawValue().match(Ext.getCmp('colorName').getValue())) {

        SUB_ITEM.colors.new_color_found = true;

    } else {

        SUB_ITEM.colors.new_color_found = false;
    }

    SUB_ITEM.colors.value = Ext.getCmp('colorName').getValue();


    if (Ext.getCmp('supplierName').getRawValue().match(Ext.getCmp('supplierName').getValue())) {

        SUB_ITEM.suppliers.new_supplier_found = true;

    } else {

        SUB_ITEM.suppliers.new_supplier_found = false;
    }

    SUB_ITEM.suppliers.value = Ext.getCmp('supplierName').getValue();


    socket.emit('all_input', SUB_ITEM);

    // AddItemWindow.destroy();
    //socket.emit('initialization', "");
    //AddItemWindow.show();


    console.log(SUB_ITEM);

}