window.onload = function() {
    let m = 1;
    //获取元素
    var total = document.getElementById('total');
    // console.log(total);

    var add = document.getElementById('add');
    // console.log(add);

    var reduce = document.getElementById('reduce');
    console.log(reduce);

    // console.log(reduce);


    //单击点击事件
    add.onclick = function() {
        m++;
        total.value = m;
        // price = n * i;
        if (m > 1) {
            reduce.disabled = false;

        }
        // fTotal();
    }
    reduce.onclick = function() {
        m--;
        total.value = m;
        if (m === 1) {
            reduce.disabled = true;
        }
    }





    //获取元素
    var cart_all = document.getElementById('cart_all');
    // console.log(cart_all);

    var cart_tbs = document.getElementById('settle_single').getElementsByTagName('input');
    // console.log(cart_tbs);

    //注册事件
    cart_all.onclick = function() {
        // console.log(this.checked);
        for (var i = 0; i < cart_tbs.length; i++) {
            cart_tbs[i].checked = this.checked;
        }
        fTotal();
    }

    for (var i = 0; i < cart_tbs.length; i++) {
        cart_tbs[i].onclick = function() {
            //flag控制全选按钮是否选中
            var flag = true;
            for (var i = 0; i < cart_tbs.length; i++) {
                if (!cart_tbs[i].checked) {
                    flag = false;
                }
            }
            cart_all.checked = flag;
            fTotal();
        }

    }

    function fTotal() {
        //获取到总价节点
        var totalPrice = document.getElementById('price');
        // console.log(totalPrice);

        //数量总和
        var totalNum = 0;
        //总价
        var prices = 0;
        var num1;
        // console.log(prices);

        //每一件商品
        var itemBox = document.querySelectorAll('.settle_ct');
        var num = document.getElementById('total');
        // console.log(num.value);

        // alert(itemBox.length);
        var itemBoxLen = itemBox.length;
        for (var i = 0; i < itemBoxLen; i++) {
            //如果选中了，才看到数量和价格
            if (itemBox[i].getElementsByTagName('input')[0].checked) {
                num1 = parseInt(itemBox[i].getElementsByTagName('input')[3].value)
                    // console.log(num1);

                // console.log(totalPrice);

                // totalNum += parseInt(itemBox[i].getElementsByTagName('input')[3].value);
                // console.log(itemBox[i].querySelector('.total').innerHTML);

                num1 *= parseInt(itemBox[i].querySelector('.total').innerHTML);
                // console.log(num1);


            }



        }

        totalPrice.innerHTML = num1 + '元';
        // if (totalPrice.innerHTML === '') {
        //     totalPrice.innerHTML = totalPrice;
        // }
    }
}