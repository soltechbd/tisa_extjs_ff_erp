/*
Ext.Loader.setConfig({
    enabled: true
});

Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.selection.CheckboxModel'
]);

*/




var socket;
var unit;
var ItemManagerWindow;
var ItemType;
var ItemColor;
var ItemSupplier;
 


Ext.onReady(function() {

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

    //socket.emit('unit-input',"send_data"); // Asking server for unit type

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



    /*=== Jscript to Json 
    [
        {"abbr":"AL","name":"Meter"},
        {"abbr":"AL","name":"Meter"}
    ] 

    var ARR={}
    ARR.abbr="AL"
    ARR.name="Meter"
    var RIPJS=[ARR,ARR]

    console.log(JSON.stringify(RIPJS))*/






    /* == item Manager window == */


    //.show(); /* show item window */

    /* == item Manager window end == */






});

function SHOW() {
    
    ItemManagerWindow.show();
}


/* === window for item === */

function SetFORM() {

    ItemManagerWindow = Ext.create('Ext.window.Window', {
        title: 'Item Manger Window',
        height: 400,
        width: 400,
        layout: 'fit',
       // closable: true,
        collapsible: true,
        animCollapse: true,
        maximizable: true,
        minimizable: true,
        closeAction: 'hide',
        
        resizable: true,
        
        
        

       /* listeners: {
            "minimize": function(window, opts) {
                window.collapse();
                window.setWidth(300);
                window.alignTo(Ext.getBody(), 'bl-bl')
            }
        },
        tools: [{
            type: 'restore',
            handler: function(evt, toolEl, owner, tool) {
                var window = owner.up('window');
                window.setWidth(1300);
                window.expand('', true);
                window.center();
            }
        }],*/



        items: {

            xtype: 'form',
            padding: 10,
            items: [{
                    xtype: 'textfield',
                    name: 'itemname',
                    id: 'itemname',
                    fieldLabel: 'Item Name',
                    allowBlank: false,
                
                   listeners: {
                        specialkey: function(f,e){
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
                
                    listeners: {
                        specialkey: function(f,e){  
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
                    queryMode: 'local',
                    displayField: 'item_type_name',
                    // displayField: 'item_type_status',
                    valueField: 'item_type_id',
                    store: ItemType,
                    listeners: {
                        change: {
                            fn: function(combo, value) {
                                console.log(value)
                            }
                        },
                        specialkey: function(f,e){
                            if (e.getKey() == e.ENTER) {
                               // e.stopEvent();
                                
                                var nextfld = f.nextSibling(); 
                                nextfld.focus();
                               
                            }
                        }
                    }
                }, {
                    xtype: 'combo',
                    name: 'unitTypeName',
                    id: 'unitTypeName',
                    fieldLabel: 'Unit Type',
                    allowBlank: false,
                    queryMode: 'local',
                    displayField: 'unit_type_name',
                    valueField: 'unit_type_id',
                    store: unit,
                    
                    listeners: {
                        change: {
                            fn: function(combo, value) {
                                //console.log(value)
                            }
                        },
                        specialkey: function(f,e){
                            if (e.getKey() == e.ENTER) {
                               // e.stopEvent();
                                
                                var nextfld = f.nextSibling(); 
                                nextfld.focus();
                                
                            }
                        }
                    }
                    
                    
                }, {
                    xtype: 'combo',
                    name: 'colorName',
                    id: 'colorName',
                    fieldLabel: 'Item Color',
                    allowBlank: false,
                    queryMode: 'local',
                    displayField: 'color_type_name',
                    valueField: 'color_type_id',
                    store: ItemColor,
                    
                    listeners: {
                        change: {
                            fn: function(combo, value) {
                                //console.log(value)
                            }
                         },
                        specialkey: function(f,e){
                            if (e.getKey() == e.ENTER) {
                               // e.stopEvent();
                                
                                var nextfld = f.nextSibling(); 
                                nextfld.focus();
                                
                            }
                        }
                    }
                    
                    
                    
                    
                }, {
                    xtype: 'combo',
                    name: 'supplierName',
                    id: 'supplierName',
                    fieldLabel: 'Item Supplier',
                    allowBlank: false,
                    queryMode: 'local',
                    displayField: 'supplier_name',
                    valueField: 'supplier_id',
                    store: ItemSupplier,
                    
                    
                    listeners: {
                        change: {
                            fn: function(combo, value) {
                                // console.log(value)
                            }
                        },
                        specialkey: function(f,e){
                            if (e.getKey() == e.ENTER) {
                               // e.stopEvent();
                                
                                submitToNode()
                                
                            }
                        }
                    }
                    
                    
                    
                }


            ],

            /* 
            buttons: [{
                text: 'Clear',
                listeners: {
                    click: function() {

                    }
                }

            }, {
                text: 'Save',
                id: 'filterSubmitBtn',
                listeners: {
                    click: function() {
                        submitToNode()
                    }
                }
            }]
            
           */ 
                    
              // Reset and Submit buttons
                    
                buttons: [{
                    text: 'Reset',
                    handler: function() {
                        this.up('form').getForm().reset();
                        //submitToNode().reset();
                    }
                }, {
                    text: 'Submit',
                    formBind: false, //only enabled once the form is valid
                    disabled: false,
                    
                    handler: function() {
                    
                        var panel = this.up('form');
                        var form = panel.getForm();
                    
                       // Ext.MessageBox.height = 200;
                    Ext.MessageBox.alert({ Height: 300 });

                        if (form.isValid()) {
                            form.submit({
                                success: function(form, action) {
                                   Ext.Msg.alert('Success', action.result.msg);
                                },
                                failure: function(form, action) {
                                    Ext.Msg.alert('Failed', action.result.msg);
                                }
                            });
                        } else {
                            fieldNames = [];
                            fields = panel.getInvalidFields();



                            for(var i=0; i <  fields.length; i++){
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
        
                }     // getInvalidFields function end  


                    }
                })

}

function submitToNode() {
    
    var SUB = {} /* SUB is an object */

    SUB.colors = {} /* for new color */

    SUB.itemTypes = {} /* for new item type */

    SUB.unitTypes = {} /* for new unit type */

    SUB.suppliers = {} /* for new unit type */



    SUB.name = Ext.getCmp('itemname').getValue();
    SUB.descrip = Ext.getCmp('ItemDescription').getValue();


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

    //console.log("RAW: "+Ext.getCmp('colorName').getRawValue()+"  VALUE: "+Ext.getCmp('colorName').getValue())


    SUB.colors.value = Ext.getCmp('colorName').getValue();


    /* condition for existing and new supplier matching */
    if (Ext.getCmp('supplierName').getRawValue().match(Ext.getCmp('supplierName').getValue())) {
        SUB.suppliers.new_supplier_found = true;
    } else {
        SUB.suppliers.new_supplier_found = false;
    }

    SUB.suppliers.value = Ext.getCmp('supplierName').getValue();


    // SUB.supplier = Ext.getCmp('supplierName').getValue();

    socket.emit('all_input', SUB);
   // console.log('found');
    
    ItemManagerWindow.destroy();
    socket.emit('initialization', "");
    //ItemManagerWindow.show();

    // console.log(Ext.getCmp('colorName').getRawValue() + "----" + Ext.getCmp('colorName').getValue());
    console.log(SUB);

}