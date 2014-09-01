function item_show() {


    SHOWALL();

}




function SHOW_item_type() {

    allItemShow.show();
}


/* === window for item === */

function SHOWALL() {


    Ext.define('MyApp.model.Mark', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'annotation',
            type: 'string'
        }, {
            name: 'mark_date',
            type: 'date'
        }, {
            name: 'status',
            type: 'string'
        }]
    });


    Ext.define('MyApp.store.Marks', {
        extend: 'Ext.data.Store',

        //best to require the model if you  put it in separate files
        requires: ['MyApp.model.Mark'],
        model: 'MyApp.model.Mark',
        storeId: 'markStore',
        data: {
            items: [{
                id: 1,
                annotation: "Test",
                mark_date: "2013-04-24 9:28:00",
                status: "Done"
            }]
        },
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });


    var grid = Ext.create('Ext.grid.Panel', {
        itemId: 'markGrid',
        store: Ext.create('MyApp.store.Marks'),
        loadMask: true,
        width: 400,
        columns: [{
            header: 'SL',
            dataIndex: 'annotation',
            width: 230,
            flex: 1
        }, {
            header: 'Item Name',
            dataIndex: 'annotation',
            width: 230,
            flex: 1
        }, {
            header: 'Item Description',
            dataIndex: 'mark_date',
            width: 30,
            flex: 1
        }, {
            header: 'Item Type',
            dataIndex: 'status',
            width: 30,
            flex: 1
        }, {
            header: 'Unit Type',
            dataIndex: 'status',
            width: 30,
            flex: 1
        }, {
            header: 'Item Color',
            dataIndex: 'status',
            width: 30,
            flex: 1
        }, {
            header: 'Item Supplier',
            dataIndex: 'status',
            width: 30,
            flex: 1
        }, {
            header: 'Comment',
            dataIndex: 'status',
            width: 30,
            flex: 1
        }, {
            xtype: 'actioncolumn',
            header: 'actioncolumn',
            dataIndex: 'status',
            width: 30,
            flex: 1,

            items: [{
                icon: 'resources/images/notepadLarge.png', // Use a URL in the icon config
                tooltip: 'Edit',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    alert("Edit " + rec.get('firstname'));
                }
            }, {
                icon: 'resources/images/drop-no.gif',
                tooltip: 'Delete',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    alert("Terminate " + rec.get('firstname'));
                }
            }]



        }]
    });



    allItemShow = Ext.create('Ext.window.Window', {
        title: 'All Items',
        height: 400,
        width: 900,
        layout: 'fit',
        // closable: true,
        collapsible: true,
        animCollapse: true,
        maximizable: true,
        minimizable: true,
        closeAction: 'destroys',

        resizable: true,

        items: [

            grid
        ]




    });

}