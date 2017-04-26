var translate = {
		getTranslation:function(motclef)
		{
			if(wording[motclef] !="")
			{
				return wording[motclef];
			}
			else 
			{
				return "Erreur lors de la recherche du motclef : "+motclef;
			}
		},
		/**
		 * Permet de créer le fichier de translation pour javascript a la volé en cas d'inexistance de fichier qui est généré par le BO a la base
		 */
		callMakeFileTranslate:function(idsite)
		{
			$.ajax({
				type: "GET",
				url: "/sites/common/modules/translate/index.php",
				cache : false,
				data :'action=regenereTranslation&idsite='+idsite+'&type=js',
				success : function (msg){
					
				},
				error :function (msg){
					
				}
			});
			
		},
}
/**
 * Permet de faire des tests sur les champs pour savoir si les champs sont vides
 * @param variable
 * @returns {Boolean}
 */
function is_empty(variable)
{
        // si définit 
        if( typeof variable != 'undefined')
        {
                if(typeof variable =='array')
                {
                        if(variable.lenght() <=0)
                        {
                                return true;
                        }
                        else
                        {
                                return false;
                        }
                }
                else if( typeof variable == 'number')
                {
                        if(variable <=0)
                        {
                                return true;
                        }else
                        {
                                return false;
                        }
                }
                else if( typeof variable == 'string')
                {

                        if(variable.length <1)
                        {
                                return true;
                        }else
                        {
                                return false;
                        }

                }
                else if( typeof variable == 'object')
                {
                        // alert('Pas implanté');
                	if(variable != null)
                	{
                		return false;
                	}else
                	{
                		return true;
                	}
                }

        }else
        {
                return true;
        }
}