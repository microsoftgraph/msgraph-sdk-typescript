import {Entity} from './entity';

export interface TeamworkHostedContent extends Entity{
    /** Write only. Bytes for the hosted content (such as images). */
    contentBytes?:string | undefined;
    /** Write only. Content type, such as image/png, image/jpg. */
    contentType?:string | undefined;
}
