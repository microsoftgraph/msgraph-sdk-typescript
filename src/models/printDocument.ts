import {Entity} from './entity';

export interface PrintDocument extends Entity{
    /** The document's content (MIME) type. Read-only. */
    contentType?:string | undefined;
    /** The document's name. Read-only. */
    displayName?:string | undefined;
    /** The document's size in bytes. Read-only. */
    size?:number | undefined;
}
