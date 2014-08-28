/*Ext.create('Ext.data.Store', {
        storeId: 'employeeStore',
        fields: ['firstname', 'lastname', 'senority', 'dep', 'hired'],
        data: [{
            firstname: "Michael",
            lastname: "Scott"
        }, {
            firstname: "Dwight",
            lastname: "Schrute"
        }, {
            firstname: "Jim",
            lastname: "Halpert"
        }, {
            firstname: "Kevin",
            lastname: "Malone"
        }, {
            firstname: "Angela",
            lastname: "Martin"
        }]
    });


    allItemWindow = Ext.create('Ext.grid.Panel', {
        title: 'All Item',
        x: 600,
        y: 200,
        collapsible: true,
        animCollapse: true,
        maximizable: true,
        minimizable: true,
        closeAction: 'show',

        store: Ext.data.StoreManager.lookup('employeeStore'),
        columns: [{
            text: 'First Name',
            dataIndex: 'firstname'
        }, {
            text: 'Last Name',
            dataIndex: 'lastname'
        }, {
            xtype: 'actioncolumn',
            width: 50,
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
        }],
        width: 250,
        renderTo: Ext.getBody()
    });
*/