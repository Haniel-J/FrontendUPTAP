export interface Noticia {

  id: number;

  documentId: string;

  titulo: string;

  resumen: string;

  contenido: string | null;

  slug: string;

  fecha_publicacion: string;

  imagen_destacada?: {

    url: string;

  };

}