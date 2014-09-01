    var socket;
    var unit;
    var ItemType;
    var ItemColor;
    var ItemSupplier;

    var AddItemWindow;

    var OrderManagerWindow;
    var OrderItemView;


    Ext.onReady(function() {
        connect_for_item();
        item_manager();
        connect_for_order();
        // order_item_show();




    });