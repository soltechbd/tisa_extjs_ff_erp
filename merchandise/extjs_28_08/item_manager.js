function item_manager() {

    socket = io.connect("http://192.168.0.104:81");

    /* Item Type part */

    socket.emit('initialization', ""); // Asking server for unit type

    socket.on('item_type_input', function(it) {

        ItemType = Ext.create('Ext.data.Store', {
            fields: ['id', 'item_type_name'],
            data: it
        });
        console.log("Item type received")
        SetFORM()
    });

    /* Item Type part end */


    /* unit part */



    socket.on('unit-input', function(unitL) {

        unit = Ext.create('Ext.data.Store', {
            fields: ['id', 'unit_type_name', 'comment'],
            data: unitL
        });
        console.log("unit-input type received")
        SetFORM()
    });



    /* unit part end */

    /* ItemColor part */


    socket.on('color_type_input', function(color_type) {
        //alert("hello");
        ItemColor = Ext.create('Ext.data.Store', {
            fields: ['id', 'color_type_name'],
            data: color_type
        });
        SetFORM();
        console.log("color_type_input type received")
    });


    /* ItemColor part end */

    /* ItemSupplier part */


    socket.on('supplier_input', function(item_supplier) {

        ItemSupplier = Ext.create('Ext.data.Store', {
            fields: ['id', 'supplier_name'],
            data: item_supplier
        });
        SetFORM();
        console.log("supplier_input type received")
    });


    /* ItemSupplier part end */





    SetFORM();

} /* == item_manager()  end == */




function SHOW() {

    ItemManagerWindow.show();
}





/* === window for item === */

function SetFORM() {

    ItemManagerWindow = Ext.create('Ext.window.Window', {
        title: 'Item Manger Window',
        id: 'window',
        height: 400,
        width: 500,
        layout: 'fit',
        // closable: true,
        collapsible: true,
        animCollapse: true,
        maximizable: true,
        // minimizable: true,



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

                                //console.log('Spacial Key = Enter');
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
                    displayField: 'item_type_name',
                    // displayField: 'item_type_status',
                    valueField: 'id',
                    selectOnFocus: true,
                    triggerAction: 'all',
                    store: {
                        fields: ['id', 'item_type_name', 'comment'],
                        proxy: {
                            type: 'ajax',
                            url: 'http://192.168.0.104:81/item_type_input'
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
                    displayField: 'unit_type_name',
                    valueField: 'id',
                    selectOnFocus: true,
                    triggerAction: 'all',
                    store: {
                        fields: ['id', 'unit_type_name', 'comment'],
                        proxy: {
                            type: 'ajax',
                            url: 'http://192.168.0.104:81/unit-input'
                        },
                        autoLoad: true,
                        autoSync: true,
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
                    displayField: 'color_type_name',
                    valueField: 'id',
                    selectOnFocus: true,
                    triggerAction: 'all',
                    store: {
                        fields: ['id', 'color_type_name', 'comment'],
                        proxy: {
                            type: 'ajax',
                            url: 'http://192.168.0.104:81/color_type_input'
                        },
                        autoLoad: true,
                        autoSync: true,
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
                    displayField: 'supplier_name',
                    valueField: 'id',
                    store: {
                        fields: ['id', 'supplier_name', 'comment'],
                        proxy: {
                            type: 'ajax',
                            url: 'http://192.168.0.104:81/supplier_input'
                        },
                        autoLoad: true,
                        autoSync: true,
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

                                submitToNode();
                                this.up('form').getForm().reset();

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
                    //submitToNode().reset();
                }
            }, {
                text: 'Submit',
                formBind: true, //only enabled once the form is valid
                //disabled: false,



                handler: function() {

                    var panel = this.up('form');
                    var form = panel.getForm();

                    // Ext.MessageBox.height = 200;
                    var msg;
                    var msg1;

                    if (form.isValid()) {

                        submitToNode();
                        form.getForm().reset();

                        Ext.MessageBox.alert('success', 'Successfully data inserted');

                    } else {


                        fieldNames = [];
                        fields = panel.getInvalidFields();



                        for (var i = 0; i < fields.length; i++) {
                            field = fields[i];
                            fieldNames.push(field.getName());
                        }
                        console.debug(fieldNames);
                        /*Ext.MessageBox.alert({
                            height: 500
                        });*/
                        Ext.MessageBox.alert('Invalid Fields', 'The following fields are invalid: ' + fieldNames.join(', '));
                        //alert('The following fields are invalid: ' + fieldNames.join(', '))

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



/*var reloadStoreFunction;
Ext.TaskManager.start({
    run: reloadStoreFunction,
    interval: 100
});*/

function submitToNode() {

    var SUB = {} /* SUB is an object */

    SUB.colors = {} /* for new color */

    SUB.itemTypes = {} /* for new item type */

    SUB.unitTypes = {} /* for new unit type */

    SUB.suppliers = {} /* for new unit type */



    SUB.name = Ext.getCmp('itemname').getValue();
    SUB.descrip = Ext.getCmp('ItemDescription').getValue();

    SUB.comm = Ext.getCmp('item_comment').getValue();


    // SUB.type = Ext.getCmp('itemTypeName').getValue(); 

    /* condition for existing and new item type matching */
    if (Ext.getCmp('itemTypeName').getRawValue().match(Ext.getCmp('itemTypeName').getValue())) {

        SUB.itemTypes.new_itemType_found = true; /* if found new data then it's true  */

    } else {

        SUB.itemTypes.new_itemType_found = false; /* if not found new data then it's false  */
    }

    SUB.itemTypes.value = Ext.getCmp('itemTypeName').getValue();


    /* condition for existing and new unit type matching */
    if (Ext.getCmp('unitTypeName').getRawValue().match(Ext.getCmp('unitTypeName').getValue())) {

        SUB.unitTypes.new_unitType_found = true;

    } else {

        SUB.unitTypes.new_unitType_found = false;
    }

    SUB.unitTypes.value = Ext.getCmp('unitTypeName').getValue();


    /* condition for existing and new color matching */
    if (Ext.getCmp('colorName').getRawValue().match(Ext.getCmp('colorName').getValue())) {

        SUB.colors.new_color_found = true;

    } else {

        SUB.colors.new_color_found = false;
    }

    SUB.colors.value = Ext.getCmp('colorName').getValue();


    /* condition for existing and new supplier matching */
    if (Ext.getCmp('supplierName').getRawValue().match(Ext.getCmp('supplierName').getValue())) {

        SUB.suppliers.new_supplier_found = true;

    } else {

        SUB.suppliers.new_supplier_found = false;
    }

    SUB.suppliers.value = Ext.getCmp('supplierName').getValue();




    socket.emit('all_input', SUB);

    // ItemManagerWindow.destroy();
    //socket.emit('initialization', "");
    //ItemManagerWindow.show();


    console.log(SUB);

}