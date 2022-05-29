# mundoSubmarino
TPO 01-Codo a Codo (Sitio de divulgación)

El sitio fue pensado como un paǵina de divulgación. Al no poseer un espacio físico para comunicarse con los supuestos responsables, solo posee un mail de contacto y links a redes sociales. Para poder incluir un formulario inventé un concurso al que se ingresa por el aside sticky, clickeando en el snorquel (como lo indica la página), y de allí un botón que conduce a un formulario que abre en una paǵina aparte.
Como un concurso es algo ocasional y no está necesariamente relacionado con la navegación habitual del sitio, requiere de un paso previo (ir a las bases del concurso) para acceder. De esta forma el aside cumple su función de "noticias de segundo orden" y no interrumpe la circulación esperarable del sitio.

Sobre cuestiones técnicas el sitio posee:

7 HTML: cinco componen el cuerpo central del sitio y las otras dos responden: la primera a las bases del concurso, la segunda al formulario.
Cada una de ellas tiene de 3 a 8 secciones, dependiendo del tema a exponer.

Fue estructurado con etiquetas HTML y dado estilo con CSS. Respecto del uso de JavaScript, este lenguaje controla el uso del carrousel alojado en el index (Medusas) y las validaciones del formulario.

La estructura general del sitio es Flexbox, exceptuado el formulario que se basa en FlexGrid.

Respecto del uso de ciertos recursos: 
  ● se optó una fuente GoogleFont para el cuerpo del texto y otra para el nombre del sitio. En ambos casos se buscó otras dos opciones de estilo similar, por si el sistema operativo/navegador no tuviera la primera;
  ● se usó 1 Iframe (video) por página HTML (excepto la del concurso y la del formulario);
  ● se utilizó un ícono animado FontAwesome al final de la página del sorteo para descargar un formulario papel, que sirve de modelo para la persona interesada en bucear. (Hay un descargable similar, con una receta de cocina en el index, pero en ese caso se usó un icono png.);
  ● todas las páginas fueron pensadas para ser responsivas, aunque me costó elegir tres puntos de corte que fueran útiles para la navegabilidad del sitio. Terminé optando por puntos intermedios entre los que firefox me ofrecía como "modos de diseño adaptable". Estos son 960px - 820px - 670px. (Reconozco que de haber tenido tiempo habría agregado un punto más para los celulares que rondan los 360px de width.);
  ● sobre animaciones y otro recursos de dinamismo visual, se utilizó, a través de CSS animación para el nombre del sitio con el uso de "clip-path" y el recorte poligonal del background de la tipografía; transformación y transición para: 1) los logos del sitio (snorquel), que a su vez conducen al index (header y footer) o a las bases del concurso (aside), y 2) transición para los botones de "ir a formulario" (HTML con las bases del sorteo), y "limpiar" y "enviar", específicos del formulario. También hice uso de la herramienta "translateX" a través de JavaScrip, para el funcionamiento del carrousel;
  ● respecto de su navegabilidad, el sitio tiene: links locales en el navegador; // links internos, links locales y links externos en el footer. (Sobre estos últimos, al no tener perfiles en redes sociales, los dirigí a la paǵina principal de cada red); // y links externos en el pie de página, en el espacio habital para las notas al pie. Estos conducen a las fuentes bibliográficas de los textos expuestos en el sitio.
        
Por último, la página fue subida a Netlify (https://mundosubmarino.netlify.app/index.html)
