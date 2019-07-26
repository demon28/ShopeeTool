


$(document).ready(function () {

    $("#txt_chengben").change(function () { Jsuan(); });
    $("#txt_lirun").change(function () { Jsuan(); });
    $("#txt_guoneiwuliu").change(function () { Jsuan(); });
    $("#txt_pingtaiyongjin").change(function () { Jsuan(); });
    $("#txt_tixian").change(function () { Jsuan(); });
    $("#txt_jiesuan").change(function () { Jsuan(); });
    $("#txt_huili").change(function () { Jsuan(); });
    $("#txt_zhekou").change(function () { Jsuan(); });
    $("#txt_zhongliang").change(function () { Jsuan(); });

    $("#txt_fprice").change(function () { Fsuan(); });
    $("#txt_flirun").change(function () { Fsuan(); });
    $("#txt_fguoneiwuliu").change(function () { Fsuan(); });
    $("#txt_fpingtaiyongjin").change(function () { Fsuan(); });
    $("#txt_ftixian").change(function () { Fsuan(); });
    $("#txt_fjiesuan").change(function () { Fsuan(); });
    $("#txt_fhuili").change(function () { Fsuan(); });
    $("#txt_fzhekou").change(function () { Fsuan(); });
});
function Jsuan() {
            var txt_chengben = parseFloat($("#txt_chengben").val());
            var txt_lirun = parseFloat($("#txt_lirun").val());
            var txt_guoneiwuliu = parseFloat($("#txt_guoneiwuliu").val());
            var txt_pingtaiyongjin = parseFloat($("#txt_pingtaiyongjin").val());
            var txt_tixian = parseFloat($("#txt_tixian").val());
            var txt_jiesuan = parseFloat($("#txt_jiesuan").val());
            var txt_huili = parseFloat($("#txt_huili").val());

            var txt_zhekou = parseFloat($("#txt_zhekou").val());
            var txt_price = $("#txt_price").val();
            var txt_zhongliang = parseFloat($("#txt_zhongliang").val());


            //   （（成本+例如+国内物流成本）*4.5）/（1-平台佣金/100）/（1-提现手续费/100）/（1-结算佣金/100）


            var A1 = (txt_chengben + txt_lirun + txt_guoneiwuliu);
            var A = A1 * txt_huili;
            var B = 1 - txt_pingtaiyongjin / 100;
            var C = 1 - txt_tixian / 100;
    var D = 1 - txt_jiesuan / 100;
    var E = 1;
    if (txt_zhongliang - 0.5 < 0) {
        E = 0;
    } else {
        E = parseInt(txt_zhongliang / 0.5 -1);
    }

    E = E * 30;

    var val = (A + E) / B / C / C;




            val = val * txt_zhekou;
            val = get(val);
            $("#txt_price").val(val);

            var z9 = val / 0.9;
            var z8 = val / 0.8;
            var z7 = val / 0.7;
            var z6 = val / 0.6;

            z9 = get(z9);
            z8 = get(z8);
            z7 = get(z7);
            z6 = get(z6);

            $("#txt_price9").val(z9);
            $("#txt_price8").val(z8);
            $("#txt_price7").val(z7);
            $("#txt_price6").val(z6);

          
}
function Fsuan() {
    //        <font style="">计算公式：（（成本+利润+国内物流成本）* 汇率4.5）/(1-平台佣金5%)/(1-提现手续费1%)/(1-结算手续费2%)</font>

    var txt_chengben = parseFloat($("#txt_fchengben").val());
    var txt_lirun = parseFloat($("#txt_flirun").val());
    var txt_guoneiwuliu = parseFloat($("#txt_fguoneiwuliu").val());
    var txt_pingtaiyongjin = parseFloat($("#txt_fpingtaiyongjin").val());
    var txt_tixian = parseFloat($("#txt_ftixian").val());
    var txt_jiesuan = parseFloat($("#txt_fjiesuan").val());
    var txt_huili = parseFloat($("#txt_fhuili").val());

    var txt_zhekou = parseFloat($("#txt_fzhekou").val());
    var txt_price =  parseFloat($("#txt_fprice").val());

    var A = txt_price;
    var B = 1 - txt_pingtaiyongjin / 100;
    var C = 1 - txt_tixian / 100;
    var D = 1 - txt_jiesuan / 100;

    var res = A * B * C * D / txt_zhekou / txt_huili - txt_guoneiwuliu - txt_lirun;
    var shiji = txt_price / txt_huili - res;
    res = get(res);
    shiji = get(shiji);
    
    $("#txt_fchengben").val(res);
    //$("#txt_shiji").val(shiji);
}
function get(s) {
            s = s + "";
            return s.substring(0, s.indexOf(".") + 3);
          
        }

