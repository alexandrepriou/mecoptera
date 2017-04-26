/**
 * Created by apriou on 21/05/2015.
 */
var manipElements = {
    element : "",
    property :"",
    // permet d'aller chercher un element html
    getElement : function (name)
    {
        this.element = mecoptera.ajaxGet('/element.php?element='+name,'html');
        return this.element;
    },
    getProperty :function ($nameElement)
    {
    	propety = mecopertera.ajaxGet('/property.php?element='+nameElement);
    	return this.property;
    }
    
};