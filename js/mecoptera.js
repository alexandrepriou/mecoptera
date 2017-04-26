/**
 * Created by apriou on 21/05/2015.
 */

var mecoptera = {
    data : "",
    oTranslate: "",
    init : function() {

    },
    ajaxGet : function(url,typeData) {
        var answer = "";
        $.ajax({
            url : url,
            dataType : typeData,
            method : "GET",
            cache : false,
            async : false,
            success : function(data) {
                answer = data;
            }

        });
        return answer;
    },
    ajaxPost : function(url,typeData) {
        var answer = "";
        $.ajax({
            url : url,
            dataType : typeData,
            method : "POST",
            cache : false,
            async : false,
            success : function(data) {
                answer = data;
            }

        });
        return answer;
    },
    // permet d'ajouter les tools aux elements de la page
    addTools : function(idElement) {
        var data = this.ajaxGet('','html');
        $('#'+idElement).html(data);
    }
};
