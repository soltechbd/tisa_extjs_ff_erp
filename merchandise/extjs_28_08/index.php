<!DOCTYPE html>
<html>

<head>
    <title>ERP- Marchendise</title>
    <link rel="stylesheet" type="text/css" href="http://192.168.0.106/merchandise/ext_js/build/packages/ext-theme-access\build\resources/ext-theme-access-all.css">
    <script src="http://192.168.0.104:81/socket.io/socket.io.js"></script>
    <script type="text/javascript" src="http://192.168.0.106/merchandise/ext_js/build//ext-all.js"></script>
    <script type="text/javascript" src="http://192.168.0.106/merchandise/ext_js/build/packages/ext-theme-access/build/ext-theme-access.js"></script>


    <script type="text/javascript" src="item_manager.js"></script>
    <script type="text/javascript" src="item_show.js"></script>
    <!--script type="text/javascript" src="order_manager.js"></script-->
    <!--script type="text/javascript" src="unit_show.js"></script>
    <script type="text/javascript" src="color_show.js"></script-->
    <script type="text/javascript" src="app.js"></script>





    <link rel="stylesheet" href="http://192.168.0.106/merchandise/custom.css" />

    <!--        <link rel="stylesheet" href="http://cdn.sencha.io/try/extjs/4.0.7/resources/css/ext-all-gray.css"/>-->




</head>

<body>

    <!--        <div id='div1'>itemBox</div>-->

    <?php include( 'welcome.php'); ?>

    <div class="button_div">
        <ul>
            <li>
                <input type="button" onclick="SHOW()" value="Item Manager" class="button" />
            </li>
            <li>
                <input type="button" onclick="SHOW_item_type()" value="All Item" class="button" />
            </li>
            <li>
                <input type="button" onclick="SHOW_unit_type()" value="All Unit" class="button" />
            </li>
            <li>
                <input type="button" onclick="SHOW_color_type()" value="All Color" class="button" />
            </li>
            <li>
                <input type="button" onclick="SHOW_supplier()" value="All Supplier" class="button" />
            </li>

            <li>
                <!--                <input type="button" onclick="SHOW_order" value="Order Manager" class="button" />-->
            </li>


            <!--li>
                <input type="button" onclick="row_edit()" value="Row Edit" class="button" />
            </li-->
        </ul>

    </div>

</body>

</html>