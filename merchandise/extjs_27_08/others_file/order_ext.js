function order_info() {
    
    SetOrderFORM();

}

function ShowOrder() 
{

    OrderWindow.show();
}


/* === window for item === */

function SetOrderFORM() {

    OrderWindow = Ext.create('Ext.window.Window', {
        title: 'TRIMS LIST',
        height: 400,
        width: 400,
        layout: 'fit',
        collapsible: true,
        animCollapse: true,
        maximizable: true,
        minimizable: true,
        closeAction: 'hide',
        resizable: true,



        items: {

            xtype: 'form',
            padding: 10,
            items: [{
                    xtype: 'combo',
                    name: 'buyerTypeName',
                    id: 'buyerTypeName',
                    fieldLabel: 'Buyer Type',
                    allowBlank: false,
                    queryMode: 'local',
                    displayField: 'buyer_name',
                    valueField: 'id',
                    emptyText: 'Buyer Name',
                    selectOnFocus: true,
                    triggerAction: 'all',
                    /*store: {
                        fields: ['id', 'buyer_name', 'comment'],
                        proxy: {
                            type: 'ajax',
                            url: 'http://192.168.0.104:81/buyer_list'
                        },
                        autoLoad: true,
                        autoSync: true,
                    },*/
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
                    name: 'brandTypeName',
                    id: 'brandTypeName',
                    fieldLabel: 'Brand Type',
                    allowBlank: false,
                    queryMode: 'local',
                    displayField: 'brand_type_name',
                    valueField: 'id',
                    selectOnFocus: true,
                    triggerAction: 'all',
                    /*store: {
                        fields: ['id', 'brand_type_name', 'comment'],
                        proxy: {
                            type: 'ajax',
                            url: 'http://192.168.0.104:81/unit-input'
                        },
                        autoLoad: true,
                        autoSync: true,
                    },*/

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
                    name: 'stylename',
                    id: 'stylename',
                    fieldLabel: 'Style Name',
                    allowBlank: false,
                    queryMode:'local',
                    emptyText: 'Style Name',
                    
                    store: {
                        fields: ['id', 'style_name', 'comment'],
                        proxy: {
                            type: 'ajax',
                            url: 'http://192.168.0.104:81/style_list'
                        },
                        autoLoad: true,
                        autoSync: true,
                    },
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
                },
                 {
                    xtype: 'textfield',
                    name: 'PO_No',
                    id: 'PO_No',
                    fieldLabel: 'Po_No',
                    allowBlank: false,
                    queryMode:'local',
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
                },
                    
                {
                    xtype: 'textfield',
                    name: 'Qty',
                    id: 'Qty',
                    fieldLabel: 'Qty(Pcs)',
                    allowBlank: false,
                    queryMode:'local',
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
                }, 
                    {
                    xtype: 'textfield',
                    name: 'Item',
                    id: 'Item',
                    fieldLabel: 'Item',
                    allowBlank: false,
                    queryMode:'local',
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

                },               
                       {
                    xtype: 'textfield',
                    name: 'Fabric',
                    id: 'Fabric',
                    fieldLabel: 'Fabric',
                    allowBlank: false,
                    queryMode:'local',
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

                },          
                 {
                    xtype: 'textfield',
                    name: 'Color',
                    id: 'Color',
                    fieldLabel: 'Color',
                    allowBlank: false,
                    queryMode:'local',
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

                },               
                       
                                    
                {
                    xtype: 'textfield',
                    name: 'Wash',
                    id: 'Wash',
                    fieldLabel: 'Wash',
                    allowBlank: false,

                    listeners: {

                        specialkey: function(f, e) {

                            if (e.getKey() == e.ENTER) {
                                // e.stopEvent();

                                SubmitOrderInfo();
                                this.up('form').getForm().reset();

                                Ext.getCmp('buyername').focus(true, 100);
                                //f.lastElementChild().focus(false, 100);

                            }
                        },

                        blur: function() {
                            //  this.store.removeAll();
                            //  this.store.reload();
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
                formBind: true,
                handler: function() {

                    var panel = this.up('form');
                    var form = panel.getForm();
                    var msg;
                    var msg1;

                    if (form.isValid()) {

                        SubmitOrderInfo();

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

function SubmitOrderInfo() {

    var  OR= {} /* OR is an object */

    OR.buyers = {} /* for new buyer */
    OR.styles={}    /*for new style*/
    
    OR.brand = Ext.getCmp('brandTypeName').getValue();
    OR.pono = Ext.getCmp('PO_No').getValue();
    OR.qty = Ext.getCmp('Qty').getValue();
    OR.item = Ext.getCmp('Item').getValue();
    OR.fabric = Ext.getCmp('Fabric').getValue();
    OR.color = Ext.getCmp('Color').getValue();
    OR.wash = Ext.getCmp('Wash').getValue();

    OR.name = Ext.getCmp('buyerTypeName').getValue();
     //check for new buyer name
    if (Ext.getCmp('buyerTypeName').getRawValue().match(Ext.getCmp('buyerTypeName').getValue())) {

       OR.buyers.new_buyer_found = true; /* if found new data then it's true  */

    } else {

        OR.buyers.new_buyer_found = false; /* if not found new data then it's false  */
    }
    
    
    OR.buyers.value = Ext.getCmp('buyerTypeName').getValue();
    
    //check for new style name
    if (Ext.getCmp('stylename').getRawValue().match(Ext.getCmp('stylename').getValue())) {

       OR.styles.new_style_found = true; /* if found new data then it's true  */

    } else {

        OR.styles.new_style_found = false; /* if not found new data then it's false  */
    }


    socket.emit('all_order_input', OR);
    console.log(OR);

}