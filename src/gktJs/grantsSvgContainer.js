
(function( $ ){

   var methods = 
   {
      init : function( options )
      {
         // Setup the SVG container for websvg as a contained object
         this.append('<!--[if !IE]>-->');
         this.append('<object data="sampleFiles/sampleGraph.svg" type="image/svg+xml" width="100%" height="100%" id="gktSvgElement"> <!--<![endif]-->');
         this.append('<!--[if lt IE 9]>');
         this.append('<object src="sampleFiles/sampleGraph.svg" classid="image/svg+xml" width="100%" height="100%" id="gktSvgElement"> <![endif]-->');
         this.append('<!--[if gte IE 9]>');
         this.append('<object data="sampleFiles/sampleGraph.svg" type="image/svg+xml" width="100%" height="100%" id="gktSvgElement"> <![endif]-->');
         this.append('</object>');

      },

      loadSvg : function( svgUrl ) 
      {
         // Get size of containing DIV
         var xDim = this.innerWidth();
         var yDim = this.innerHeight();

         // Get size of containing DIV
         var xDim = this.innerWidth();
         var yDim = this.innerHeight();
         
         // Get size of SVG element
         var fcElt = document.getElementById('gktSvgElement').contentDocument;
         var fcRoot = fcElt.childNodes[0];
         //var svgX_Dim = 
         //var svgY_Dim = 
         // suspend refresh drawing
         // load graphic into div
         // get size of graphic
         // calculate scaling
         // apply scaling
         // center image
         // resume refresh drawing
      }
   };

   $.fn.gktSvgContainer = function( method ) 
   { 
      // Method calling logic
      if ( methods[method] ) {
         return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof method === 'object' || ! method ) {
         return methods.init.apply( this, arguments );
      } else {
         $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
      }    
   };

}) (jQuery);
