function order_item_show() {




}

function Order_storePuck() {

    var json = {}

    var json = Ext.encode(Ext.pluck(Ext.getCmp('ORDER_GRID_ID').getStore().data.items, 'data'));
    console.log(Ext.encode(Ext.pluck(Ext.getCmp('ORDER_GRID_ID').getStore().data.items, 'data')));

    socket.emit('all_order_list', json);

}